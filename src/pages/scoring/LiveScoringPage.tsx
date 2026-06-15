import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Zap, Coins, Undo2, Crosshair } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScoreBoard } from "@/components/shared/ScoreBoard";
import { BattingScorecard } from "@/components/match/BattingScorecard";
import { BowlingScorecard } from "@/components/match/BowlingScorecard";
import { CelebrationOverlay, type CelebrationType } from "@/components/shared/CelebrationOverlay";
import {
  useLiveMatch,
  useMatchScorecard,
  useMatchPlayers,
  useScoreBall,
  useUndoBall,
  useStartInning,
  useUpdateMatchState,
  useSetToss,
} from "@/hooks";
import { teamService } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { LoadingScreen } from "@/components/shared/LoadingScreen";
import { ErrorState } from "@/components/shared/ErrorState";
import { useUIStore, useAuthStore } from "@/store";
import { cn } from "@/lib/utils";
import { canEditMatch } from "@/utils/permissions";
import { Label } from "@/components/ui/label";

const runsButtons = [0, 1, 2, 3, 4, 6];
const wicketTypes = [
  "Bowled",
  "Caught",
  "Run Out",
  "LBW",
  "Stumped",
  "Hit Wicket",
  "Retired Out",
];
const extraTypes = [
  { label: "Wide", value: "wide", runs: 1 },
  { label: "No Ball", value: "no_ball", runs: 1 },
  { label: "Bye", value: "bye", runs: 0 },
  { label: "Leg Bye", value: "leg_bye", runs: 0 },
];

export default function LiveScoringPage() {
  const { matchId } = useParams<{ matchId: string }>();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { data: match, isLoading: isMatchLoading } = useLiveMatch(
    matchId || "",
  );
  const { data: matchPlayers } = useMatchPlayers(matchId || "");
  const { addToast } = useUIStore();

  const setToss = useSetToss();
  const scoreBall = useScoreBall();
  const undoBall = useUndoBall();
  const startInning = useStartInning();
  const updateMatchState = useUpdateMatchState();

  const [showWicketDialog, setShowWicketDialog] = useState(false);
  const [showOpenerDialog, setShowOpenerDialog] = useState(false);
  const [showTossDialog, setShowTossDialog] = useState(false);
  const [showRunOutExtraDialog, setShowRunOutExtraDialog] = useState(false);
  const [pendingExtraRuns, setPendingExtraRuns] = useState(0);
  const [selectedExtra, setSelectedExtra] = useState("");
  const [activeTab, setActiveTab] = useState("score");
  const [celebration, setCelebration] = useState<CelebrationType | null>(null);

  const [strikerId, setStrikerId] = useState("");
  const [nonStrikerId, setNonStrikerId] = useState("");
  const [bowlerId, setBowlerId] = useState("");
  const [lastProcessedOver, setLastProcessedOver] = useState(0);

  const isInningsOver = !!(match && (
    (match.wickets || 0) >= (match.players_per_team || 11) - 1 || 
    (match.completed_overs || 0) >= (match.overs || 20) ||
    (match.inning_number === 2 && match.target && (match.total_runs || 0) >= (match.target || 0))
  ));

  const isScorable = !!(match?.inning_id && !isInningsOver);

  const handleStartNextInnings = () => {
    if (!matchId || !match) return;
    
    // Swap teams
    const nextBattingTeamId = match.bowling_team_id;
    const nextBowlingTeamId = match.batting_team_id;

    startInning.mutate({
      matchId,
      payload: {
        inning_number: 2,
        batting_team_id: nextBattingTeamId,
        bowling_team_id: nextBowlingTeamId,
      },
    }, {
      onSuccess: () => {
        setStrikerId("");
        setNonStrikerId("");
        setBowlerId("");
        setShowOpenerDialog(true);
      }
    });
  };

  // Check permissions and status
  useEffect(() => {
    if (!isMatchLoading && match) {
      const isHost = canEditMatch(match, user?.id);
      
      // If match is completed, anyone on this page should be redirected to the summary
      if (match.status === "completed") {
        navigate(`/match/${match.id}`);
        return;
      }

      if (!isHost && match.status !== "live") {
        navigate(`/match/${match.id}`);
        return;
      }

      if (!isHost) {
        navigate(`/match/${match.id}/live`);
        addToast({ 
          title: "Access Denied", 
          description: "Only the match host can access the scoring page.", 
          variant: "error" 
        });
        return;
      }

      if (match.status !== "live" && match.status !== "scheduled") {
        addToast({
          title: "Match not active",
          description: "This match is not in a scorable state.",
          variant: "warning",
        });
        navigate(`/match/${match.id}`);
      }
    }
  }, [match?.status, match?.id, user?.id, navigate, addToast, isMatchLoading]);

  // Player state management: initialization and innings reset
  useEffect(() => {
    if (!match) return;

    // Always sync with backend state as source of truth
    setStrikerId(match.striker_id || "");
    setNonStrikerId(match.non_striker_id || "");
    setBowlerId(match.current_bowler_id || "");

    // If innings is over, close the dialog if it was open
    if (isInningsOver || allPlayersDismissed) {
      setShowOpenerDialog(false);
      setShowWicketDialog(false);
      return;
    }

    // If we don't have players selected and there are players available, show the dialog
    if (!match.striker_id || (!match.non_striker_id && availablePlayers.length > 1) || !match.current_bowler_id) {
      if (match.status === "live" && match.inning_id) {
        setShowOpenerDialog(true);
      }
    }
    
    setLastProcessedOver(0);
  }, [
    match?.id,
    match?.inning_number,
    match?.status,
    match?.striker_id,
    match?.non_striker_id,
    match?.current_bowler_id,
    match?.wickets,
    match?.completed_overs,
    match?.total_runs,
    match?.players_per_team,
    match?.target,
    isInningsOver,
  ]);

  const { data: scorecard } = useMatchScorecard(matchId || "");

  const { data: teamAPlayers } = useQuery({
    queryKey: ["team-players", match?.team1_id],
    queryFn: () => match?.team1_id ? teamService.getTeamPlayers(match.team1_id) : Promise.resolve([]),
    enabled: !!match?.team1_id,
  });

  const { data: teamBPlayers } = useQuery({
    queryKey: ["team-players", match?.team2_id],
    queryFn: () => match?.team2_id ? teamService.getTeamPlayers(match.team2_id) : Promise.resolve([]),
    enabled: !!match?.team2_id,
  });

  const allInMatchPlayers = matchPlayers || [];
  
  const getBattingPlayers = () => {
    const fromMatch = allInMatchPlayers.filter(p => p.team_id === match?.batting_team_id);
    
    // Log for debugging (per STEP 5 of instructions)
    if (match) {
      console.log(`Match: ${match.id}`);
      console.log(`Batting Team ID: ${match.batting_team_id}`);
      console.log(`Players in Match Squad: ${allInMatchPlayers.length}`);
      console.log(`Filtered Batting Players: ${fromMatch.length}`);
    }

    // Only return match-specific players if that list was actually populated
    if (fromMatch.length > 0) return fromMatch;
    
    // Fallback to the full team roster ONLY if the match-specific list is empty 
    // (handles basic matches and matches started before the backend fix)
    const teamPlayers = match?.batting_team_id === match?.team1_id ? (teamAPlayers || []) : (teamBPlayers || []);
    return teamPlayers;
  };

  const getBowlingPlayers = () => {
    const fromMatch = allInMatchPlayers.filter(p => p.team_id === match?.bowling_team_id);
    
    if (match) {
      console.log(`Bowling Team ID: ${match.bowling_team_id}`);
      console.log(`Filtered Bowling Players: ${fromMatch.length}`);
    }

    if (fromMatch.length > 0) return fromMatch;
    
    const teamPlayers = match?.bowling_team_id === match?.team1_id ? (teamAPlayers || []) : (teamBPlayers || []);
    return teamPlayers;
  };

  const battingTeamPlayers = getBattingPlayers();
  const bowlingTeamPlayers = getBowlingPlayers();

  const battingTeamName = match?.batting_team_name || "Batting Team";
  const bowlingTeamName = match?.bowling_team_name || "Bowling Team";

  const currentInningsStats = scorecard?.innings?.find(
    (i) => i.team_id === match?.batting_team_id
  );

  const dismissedPlayerIds =
    currentInningsStats?.batting?.filter((b) => b.is_out).map((b) => b.player_id) ||
    [];
  const availablePlayers =
    battingTeamPlayers?.filter((p) => !dismissedPlayerIds.includes(p.id)) ||
    [];
  const allPlayersDismissed = availablePlayers.length === 0 && battingTeamPlayers.length > 0 && (match?.wickets || 0) >= battingTeamPlayers.length - 1;

  const isSelectionValid =
    bowlerId && strikerId && (nonStrikerId || availablePlayers.length === 1) &&
    bowlerId !== strikerId && bowlerId !== nonStrikerId;

  const striker = strikerId
    ? battingTeamPlayers?.find((p) => p.id === strikerId)
    : null;
  const nonStriker = nonStrikerId
    ? battingTeamPlayers?.find((p) => p.id === nonStrikerId)
    : null;
  const currentBowler = bowlerId
    ? bowlingTeamPlayers?.find((p) => p.id === bowlerId)
    : null;

  const strikerStats = currentInningsStats?.batting?.find(
    (b: any) => b.player_id === strikerId,
  );
  const nonStrikerStats = currentInningsStats?.batting?.find(
    (b: any) => b.player_id === nonStrikerId,
  );
  const bowlerStats = currentInningsStats?.bowling?.find(
    (b: any) => b.player_id === bowlerId,
  );

  const currentBalls = (match?.completed_overs || 0) * 6 + (match?.balls_in_current_over || 0);

  // Over completion detection
  useEffect(() => {
    if (!match || currentBalls === 0) return;

    const overNum = Math.floor(currentBalls / 6);

    if (currentBalls % 6 === 0 && overNum > lastProcessedOver) {
      setLastProcessedOver(overNum);

      addToast({
        title: "Over Complete",
        description: `Over ${overNum} finished. Select next bowler.`,
        variant: "success",
      });
    }
  }, [
    currentBalls,
    lastProcessedOver,
    addToast,
  ]);

  const handleScore = (runs: number, wicketType: string | null = null, playerOutId: string | null = null) => {
    if (!matchId || !match) return;

    const isWide = selectedExtra === "wide";
    const isNoBall = selectedExtra === "no_ball";

    if (runs === 4 && !wicketType) {
      setCelebration("four");
      setTimeout(() => setCelebration(null), 2500);
    } else if (runs === 6 && !wicketType) {
      setCelebration("six");
      setTimeout(() => setCelebration(null), 2500);
    } else if (wicketType) {
      setCelebration("wicket");
      setTimeout(() => setCelebration(null), 2500);
    }

    scoreBall.mutate(
      {
        inningId: match.inning_id || "",
        ballData: {
          striker_id: match.striker_id || strikerId,
          non_striker_id: match.non_striker_id || nonStrikerId,
          bowler_id: match.current_bowler_id || bowlerId,
          runs_bat: runs,
          extras: (isWide || isNoBall) ? 1 : 0,
          extra_type: selectedExtra as any,
          wicket: !!wicketType,
          wicket_type: wicketType as any,
          fielder_id: null,
          player_out_id: playerOutId || (wicketType ? (match.striker_id || strikerId) : null),
          is_free_hit: false,
        },
      },
      {
        onSuccess: () => {
          if (wicketType) {
            const nextWickets = (match?.wickets || 0) + 1;
            const playersLeft = battingTeamPlayers.length - (dismissedPlayerIds.length + 1);
            const isFinished = nextWickets >= (match?.players_per_team || 11) - 1 || playersLeft <= 0;

            if (!isFinished) {
              setStrikerId("");
              setShowOpenerDialog(true);
            }
          }
        },
      },
    );
    setSelectedExtra("");
  };

  const handleWicket = (type: string) => {
    if (!matchId || !match) return;

    setCelebration("wicket");
    setTimeout(() => setCelebration(null), 2500);

    scoreBall.mutate(
      {
        inningId: match.inning_id || "",
        ballData: {
          striker_id: match.striker_id || strikerId,
          non_striker_id: match.non_striker_id || nonStrikerId,
          bowler_id: match.current_bowler_id || bowlerId,
          runs_bat: 0,
          extras: 0,
          extra_type: null,
          wicket: true,
          wicket_type: type.toLowerCase().replace(" ", "_") as any,
          fielder_id: null,
          player_out_id: strikerId,
          is_free_hit: false,
        },
      },
      {
        onSuccess: () => {
          const nextWickets = (match?.wickets || 0) + 1;
          const playersLeft = battingTeamPlayers.length - (dismissedPlayerIds.length + 1);
          const isFinished = nextWickets >= (match?.players_per_team || 11) - 1 || playersLeft <= 0;

          if (!isFinished) {
            setStrikerId("");
            setShowOpenerDialog(true);
          }
        },
      },
    );
    setShowWicketDialog(false);
  };

  const handleTossSubmit = (winnerId: string, decision: string) => {
    if (!matchId) return;
    setToss.mutate({
      matchId,
      toss_winner_id: winnerId,
      toss_decision: decision as "bat" | "bowl",
    }, {
      onSuccess: () => {
        setShowTossDialog(false);
      }
    });
  };

  if (isMatchLoading) return <LoadingScreen />;
  if (!match) return <ErrorState title="Error" description="Match not found." />;

  if (match.status === "scheduled") {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center space-y-8">
        <div className="w-24 h-24 rounded-3xl bg-blue-500/10 flex items-center justify-center mx-auto">
          <Zap className="h-12 w-12 text-electric animate-pulse" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Ready to Start?</h1>
          <p className="text-white/40">Confirm the toss and team details before you begin scoring.</p>
        </div>
        <Card className="glass-card p-6 border-white/10 text-left">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white/40 text-xs uppercase font-bold">Venue</span>
            <span className="text-white font-medium">{match.venue || "TBD"}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/40 text-xs uppercase font-bold">Teams</span>
            <span className="text-white font-medium">{match.team_1_name} vs {match.team_2_name}</span>
          </div>
        </Card>
        <Button 
          size="lg" 
          className="w-full h-16 text-xl gap-3 bg-electric hover:bg-electric/90 shadow-lg shadow-blue-500/20"
          onClick={() => setShowTossDialog(true)}
        >
          <Coins className="h-6 w-6 fill-current" />
          Set Toss & Start
        </Button>

        <TossDialog 
          isOpen={showTossDialog}
          onClose={() => setShowTossDialog(false)}
          team1={{ id: match.team1_id, name: match.team_1_name }}
          team2={{ id: match.team2_id, name: match.team_2_name }}
          onSubmit={handleTossSubmit}
          isPending={setToss.isPending}
        />
      </div>
    );
  }

  return (
    <div className="space-y-4 pb-24 md:pb-0">
      <AnimatePresence>
        {celebration && (
          <CelebrationOverlay type={celebration} key={celebration} />
        )}
      </AnimatePresence>

      <ScoreBoard match={match} />

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full grid grid-cols-4">
          <TabsTrigger value="score">Score</TabsTrigger>
          <TabsTrigger value="extras">Extras</TabsTrigger>
          <TabsTrigger value="wickets">Wickets</TabsTrigger>
          <TabsTrigger value="card">Card</TabsTrigger>
        </TabsList>

        <TabsContent value="score" className="mt-4 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => !isInningsOver && !allPlayersDismissed && setShowOpenerDialog(true)}
              className="glass-card p-3 text-left hover:bg-white/5 transition-colors"
            >
              <p className="text-xs text-white/40 mb-1 flex items-center gap-1">
                Striker <Users className="h-2 w-2" />
              </p>
              <p className="text-sm font-semibold text-white truncate">
                {striker?.name || "Select Striker"}
              </p>
              <p className="text-xs text-electric">
                {strikerStats
                  ? `${strikerStats.runs} (${strikerStats.balls_faced})`
                  : "0 (0)"}
              </p>
            </button>
            <button
              onClick={() => !isInningsOver && !allPlayersDismissed && setShowOpenerDialog(true)}
              className="glass-card p-3 text-left hover:bg-white/5 transition-colors"
            >
              <p className="text-xs text-white/40 mb-1 flex items-center gap-1">
                Non-Striker <Users className="h-2 w-2" />
              </p>
              <p className="text-sm font-semibold text-white truncate">
                {nonStriker?.name || "Select Non-Striker"}
              </p>
              <p className="text-xs text-white/60">
                {nonStrikerStats
                  ? `${nonStrikerStats.runs} (${nonStrikerStats.balls_faced})`
                  : "0 (0)"}
              </p>
            </button>
            <button
              onClick={() => !isInningsOver && !allPlayersDismissed && setShowOpenerDialog(true)}
              className="glass-card p-3 col-span-2 text-left hover:bg-white/5 transition-colors"
            >
              <p className="text-xs text-white/40 mb-1 flex items-center gap-1">
                Bowler <Users className="h-2 w-2" />
              </p>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">
                  {currentBowler?.name || "Select Bowler"}
                </p>
                <p className="text-xs text-white/60">
                  {bowlerStats
                    ? `${bowlerStats.overs_bowled}-${bowlerStats.runs_conceded}-${bowlerStats.wickets}`
                    : "0-0-0"}
                </p>
              </div>
            </button>
          </div>

          {!isScorable || !strikerId || (!nonStrikerId && availablePlayers.length > 1) || !bowlerId ? (
            <div className="glass-card p-8 text-center bg-blue-500/5 border-dashed border-blue-500/20">
              {(isInningsOver || allPlayersDismissed) && match.inning_number === 1 ? (
                <div className="space-y-4">
                  <p className="text-lg font-bold text-white">1st Innings Completed!</p>
                  <p className="text-sm text-white/60 mb-4">
                    Target: {(match.total_runs || 0) + 1} runs
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-electric hover:bg-electric/90"
                    onClick={handleStartNextInnings}
                    isLoading={startInning.isPending}
                  >
                    Start 2nd Innings
                  </Button>
                </div>
              ) : (isInningsOver || allPlayersDismissed) && match.inning_number === 2 ? (
                <div className="space-y-4">
                  <p className="text-lg font-bold text-white">Match Completed!</p>
                  <Button 
                    size="lg" 
                    className="w-full"
                    onClick={() => navigate(`/match/${matchId}`)}
                  >
                    View Result
                  </Button>
                </div>
              ) : !match?.inning_id ? (
                <div className="space-y-4">
                  <p className="text-lg font-bold text-white text-amber-500">Innings Not Found</p>
                  <p className="text-sm text-white/60 mb-4">
                    Wait for the match state to sync or restart the match.
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-sm text-white/60 mb-4">
                    Select active players to start scoring
                  </p>
                  <Button onClick={() => setShowOpenerDialog(true)}>
                    Select Players
                  </Button>
                </>
              )}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-3 gap-3">
                {runsButtons.map((runs) => (
                  <motion.button
                    key={runs}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleScore(runs)}
                    className={cn(
                      "h-20 rounded-2xl font-bold text-2xl transition-all duration-200",
                      runs === 4
                        ? "bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500/30"
                        : runs === 6
                          ? "bg-purple-500/20 text-purple-400 border border-purple-500/30 hover:bg-purple-500/30"
                          : "bg-white/5 text-white border border-white/10 hover:bg-white/10",
                    )}
                  >
                    {runs === 0 ? "•" : runs}
                  </motion.button>
                ))}
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowWicketDialog(true)}
                className="w-full h-20 rounded-2xl bg-gradient-to-br from-red-600/20 to-red-800/20 text-red-400 border-2 border-red-500/30 hover:border-red-500/60 hover:bg-red-500/25 font-bold text-xl tracking-wide uppercase transition-all duration-200 shadow-lg shadow-red-900/20 flex items-center justify-center gap-3"
              >
                <Crosshair className="h-5 w-5" />
                Wicket
              </motion.button>

              <Button
                variant="outline"
                className="w-full mt-3 h-12 gap-2 border-white/10 text-white/60 hover:text-white hover:bg-white/5"
                onClick={() => matchId && undoBall.mutate(matchId)}
                disabled={undoBall.isPending || isInningsOver || allPlayersDismissed}
              >
                <Undo2 className="h-4 w-4" />
                Undo Last Ball
              </Button>
            </>
          )}
        </TabsContent>

        <TabsContent value="extras" className="mt-4">
          <div className="grid grid-cols-2 gap-3">
            {extraTypes.map((extra) => (
              <Button
                key={extra.value}
                variant={selectedExtra === extra.value ? "default" : "outline"}
                className={cn(
                  "h-20 flex flex-col items-center justify-center gap-1 rounded-2xl",
                  selectedExtra === extra.value && "bg-electric border-electric",
                )}
                onClick={() => setSelectedExtra(extra.value)}
              >
                <span className="text-lg font-bold">{extra.label}</span>
                <span className="text-[10px] opacity-60">
                  +{extra.runs} run
                </span>
              </Button>
            ))}
          </div>
          {selectedExtra && (
            <div className="mt-6 p-4 rounded-2xl bg-blue-500/5 border border-blue-500/20 animate-in fade-in slide-in-from-bottom-2">
              <p className="text-center text-sm text-white/60 mb-4">
                How many runs did the batter score on this {selectedExtra}?
              </p>
              <div className="grid grid-cols-4 gap-2">
                {[0, 1, 2, 3, 4, 6].map((runs) => (
                  <Button
                    key={runs}
                    variant="outline"
                    className="h-12 font-bold"
                    onClick={() => handleScore(runs)}
                  >
                    {runs}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  className="h-12 font-bold col-span-2 bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20"
                  onClick={() => setShowRunOutExtraDialog(true)}
                >
                  Run Out
                </Button>
                {selectedExtra === "wide" && (
                  <Button
                    variant="outline"
                    className="h-12 font-bold col-span-2 bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20"
                    onClick={() => handleScore(0, "stumped", strikerId)}
                  >
                    Stumped
                  </Button>
                )}
              </div>

              {/* Run Out during Extra Dialog */}
              <Dialog open={showRunOutExtraDialog} onOpenChange={setShowRunOutExtraDialog}>
                <DialogContent className="max-w-md bg-[#0a1628] border-white/10">
                  <DialogHeader>
                    <DialogTitle className="text-white">Run Out during {selectedExtra}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 py-4">
                    <div className="space-y-3">
                      <Label className="text-white/60">How many runs were completed?</Label>
                      <div className="grid grid-cols-4 gap-2">
                        {[0, 1, 2, 3].map((r) => (
                          <Button 
                            key={r} 
                            variant={pendingExtraRuns === r ? "default" : "outline"}
                            onClick={() => setPendingExtraRuns(r)}
                          >
                            {r}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Label className="text-white/60">Who is out?</Label>
                      <div className="grid grid-cols-2 gap-3">
                        <Button 
                          variant="outline"
                          className="h-16 flex flex-col gap-1"
                          onClick={() => {
                            handleScore(pendingExtraRuns, "run_out", strikerId);
                            setShowRunOutExtraDialog(false);
                            setPendingExtraRuns(0);
                          }}
                        >
                          <span className="text-xs text-white/40">Striker</span>
                          <span className="truncate w-full">{striker?.name}</span>
                        </Button>
                        <Button 
                          variant="outline"
                          className="h-16 flex flex-col gap-1"
                          onClick={() => {
                            handleScore(pendingExtraRuns, "run_out", nonStrikerId);
                            setShowRunOutExtraDialog(false);
                            setPendingExtraRuns(0);
                          }}
                        >
                          <span className="text-xs text-white/40">Non-Striker</span>
                          <span className="truncate w-full">{nonStriker?.name}</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Button
                variant="ghost"
                className="w-full mt-4 text-white/40"
                onClick={() => setSelectedExtra("")}
              >
                Cancel Extra
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="wickets" className="mt-4">
          <div className="grid grid-cols-2 gap-3">
            {wicketTypes.map((type) => (
              <Button
                key={type}
                variant="outline"
                className="h-20 rounded-2xl text-lg font-bold hover:bg-red-500/10 hover:text-red-400 transition-colors"
                onClick={() => handleWicket(type)}
              >
                {type}
              </Button>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="card" className="mt-4 space-y-4">
          {scorecard?.innings?.map((inning, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-2 px-1">
                <div className="h-4 w-1 bg-electric rounded-full" />
                <h3 className="text-sm font-bold text-white">{inning.team_name}'s Innings</h3>
              </div>
              <BattingScorecard 
                batting={inning.batting} 
                matchId={matchId || ""} 
                title={`${inning.team_name} Batting`}
              />
              <BowlingScorecard 
                bowling={inning.bowling} 
                title={`${idx === 0 ? (scorecard.innings[1]?.team_name || 'Opponent') : scorecard.innings[0].team_name} Bowling`}
              />
            </div>
          ))}
        </TabsContent>
      </Tabs>

      {/* Opener Dialog */}
      <Dialog open={showOpenerDialog} onOpenChange={setShowOpenerDialog}>
        <DialogContent className="max-w-md bg-[#0a1628] border-white/10">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white">
              Select Active Players
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="space-y-3">
              <label className="text-xs font-bold text-white/40 uppercase">
                Striker
              </label>
              <div className="grid grid-cols-2 gap-2">
                {battingTeamPlayers ? (
                  battingTeamPlayers.map((p) => {
                    const isOut = dismissedPlayerIds.includes(p.id);
                    return (
                      <Button
                        key={p.id}
                        variant={strikerId === p.id ? "default" : "outline"}
                        className={cn(
                          "justify-start truncate",
                          isOut && "opacity-50 line-through",
                        )}
                        onClick={() => {
                          if (nonStrikerId === p.id) setNonStrikerId("");
                          setStrikerId(p.id);
                        }}
                        disabled={bowlerId === p.id || isOut}
                      >
                        {p.name}
                        {isOut && " (Out)"}
                      </Button>
                    );
                  })
                ) : (
                  <p className="text-xs text-white/40 col-span-2">
                    No players found for {battingTeamName}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-white/40 uppercase">
                Non-Striker
              </label>
              <div className="grid grid-cols-2 gap-2">
                {battingTeamPlayers ? (
                  battingTeamPlayers.map((p) => {
                    const isOut = dismissedPlayerIds.includes(p.id);
                    return (
                      <Button
                        key={p.id}
                        variant={nonStrikerId === p.id ? "default" : "outline"}
                        className={cn(
                          "justify-start truncate",
                          isOut && "opacity-50 line-through",
                        )}
                        onClick={() => {
                          if (strikerId === p.id) setStrikerId("");
                          setNonStrikerId(p.id);
                        }}
                        disabled={bowlerId === p.id || isOut}
                      >
                        {p.name}
                        {isOut && " (Out)"}
                      </Button>
                    );
                  })
                ) : (
                  <p className="text-xs text-white/40 col-span-2">
                    No players found for {battingTeamName}
                  </p>
                )}
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-bold text-white/40 uppercase">
                Bowler
              </label>
              <div className="grid grid-cols-2 gap-2">
                {bowlingTeamPlayers ? (
                  bowlingTeamPlayers.map((p) => (
                    <Button
                      key={p.id}
                      variant={bowlerId === p.id ? "default" : "outline"}
                      className="justify-start truncate"
                      onClick={() => setBowlerId(p.id)}
                      disabled={strikerId === p.id || nonStrikerId === p.id}
                    >
                      {p.name}
                    </Button>
                  ))
                ) : (
                  <p className="text-xs text-white/40 col-span-2">
                    No players found for {bowlingTeamName}
                  </p>
                )}
              </div>
            </div>

            <Button
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
              onClick={() => {
                if (matchId) {
                  updateMatchState.mutate({
                    matchId,
                    payload: {
                      striker_id: strikerId,
                      non_striker_id: nonStrikerId,
                      current_bowler_id: bowlerId,
                    },
                  });
                }
                setShowOpenerDialog(false);
              }}
              disabled={!isSelectionValid || updateMatchState.isPending}
            >
              {updateMatchState.isPending ? "Updating..." : "Confirm Selection"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showWicketDialog} onOpenChange={setShowWicketDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Wicket Details</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            {wicketTypes.map((type) => (
              <Button
                key={type}
                variant="outline"
                className="w-full justify-start"
                onClick={() => handleWicket(type)}
              >
                {type}
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <TossDialog 
        isOpen={showTossDialog}
        onClose={() => setShowTossDialog(false)}
        team1={{ id: match?.team1_id || "", name: match?.team_1_name || "Team 1" }}
        team2={{ id: match?.team2_id || "", name: match?.team_2_name || "Team 2" }}
        onSubmit={handleTossSubmit}
        isPending={setToss.isPending}
      />
    </div>
  );
}

function TossDialog({ 
  isOpen, 
  onClose, 
  team1, 
  team2, 
  onSubmit,
  isPending 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  team1: { id: string, name: string };
  team2: { id: string, name: string };
  onSubmit: (winnerId: string, decision: string) => void;
  isPending: boolean;
}) {
  const [winnerId, setWinnerId] = useState(team1.id);
  const [decision, setDecision] = useState("bat");

  // Sync winnerId when teams load
  useEffect(() => {
    if (team1.id) setWinnerId(team1.id);
  }, [team1.id]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-[#0a1628] border-white/10">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">Match Toss</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-3">
            <Label className="text-sm text-white/60">Who won the toss?</Label>
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant={winnerId === team1.id ? "default" : "outline"}
                onClick={() => setWinnerId(team1.id)}
                className="h-12"
              >
                {team1.name}
              </Button>
              <Button 
                variant={winnerId === team2.id ? "default" : "outline"}
                onClick={() => setWinnerId(team2.id)}
                className="h-12"
              >
                {team2.name}
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-sm text-white/60">Decision</Label>
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant={decision === "bat" ? "default" : "outline"}
                onClick={() => setDecision("bat")}
                className="h-12"
              >
                Batting
              </Button>
              <Button 
                variant={decision === "bowl" ? "default" : "outline"}
                onClick={() => setDecision("bowl")}
                className="h-12"
              >
                Bowling
              </Button>
            </div>
          </div>

          <Button 
            className="w-full h-12 bg-electric hover:bg-electric/90 text-white font-bold"
            onClick={() => onSubmit(winnerId, decision)}
            disabled={isPending}
          >
            {isPending ? "Starting Match..." : "Confirm & Start Match"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
