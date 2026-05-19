import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Undo2,
  RotateCcw,
  AlertTriangle,
  Lock,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScoreBoard } from "@/components/shared/ScoreBoard";
import { MatchScorecard } from "@/components/shared/MatchScorecard";
import {
  useMatch,
  useScoreBall,
  useUndoBall,
  useEndInnings,
  useEndMatch,
  useStartMatch,
} from "@/hooks";
import { useMatchStore } from "@/store";
import { cn } from "@/lib/utils";

const runsButtons = [0, 1, 2, 3, 4, 6];
const wicketTypes = [
  "Bowled",
  "Caught",
  "Run Out",
  "LBW",
  "Stumped",
  "Hit Wicket",
];
const extraTypes = [
  { label: "Wide", value: "wide", runs: 1 },
  { label: "No Ball", value: "noBall", runs: 1 },
  { label: "Bye", value: "bye", runs: 0 },
  { label: "Leg Bye", value: "legBye", runs: 0 },
];

export default function LiveScoringPage() {
  const { matchId } = useParams<{ matchId: string }>();
  const navigate = useNavigate();
  const { data: match, isLoading: isMatchLoading } = useMatch(matchId || "");
  const scoreBall = useScoreBall();
  const undoBall = useUndoBall();
  const endInnings = useEndInnings();
  const endMatch = useEndMatch();
  const startMatch = useStartMatch();
  const { liveState } = useMatchStore();

  const [showWicketDialog, setShowWicketDialog] = useState(false);
  const [showOpenerDialog, setShowOpenerDialog] = useState(false);
  const [selectedExtra, setSelectedExtra] = useState("");
  const [activeTab, setActiveTab] = useState("score");
  const [celebration, setCelebration] = useState<"four" | "six" | "wicket" | null>(null);

  const [strikerId, setStrikerId] = useState("");
  const [nonStrikerId, setNonStrikerId] = useState("");
  const [bowlerId, setBowlerId] = useState("");

  // Optimistic UI States
  const [optimisticRuns, setOptimisticRuns] = useState(0);
  const [optimisticBalls, setOptimisticBalls] = useState(0);
  const [optimisticWickets, setOptimisticWickets] = useState(0);

  const currentInnings = match?.innings[match.currentInnings - 1];

  useEffect(() => {
    setOptimisticRuns(0);
    setOptimisticBalls(0);
    setOptimisticWickets(0);
  }, [currentInnings?.runs, currentInnings?.balls, currentInnings?.wickets]);

  const handleScore = (runs: number) => {
    if (!matchId || !match || !currentInnings) return;

    const isWide = selectedExtra === "wide";
    const isNoBall = selectedExtra === "noBall";
    const isLegal = !isWide && !isNoBall;

    const extraRuns = isWide || isNoBall ? 1 : 0;
    const totalRunsThisBall = runs + extraRuns;

    setOptimisticRuns((prev) => prev + totalRunsThisBall);
    if (isLegal) setOptimisticBalls((prev) => prev + 1);

    // Trigger celebration
    if (runs === 4) {
      setCelebration("four");
      setTimeout(() => setCelebration(null), 2500);
    } else if (runs === 6) {
      setCelebration("six");
      setTimeout(() => setCelebration(null), 2500);
    }

    scoreBall.mutate(
      {
        matchId,
        runs,
        isWide,
        isNoBall,
        isBye: selectedExtra === "bye",
        isLegBye: selectedExtra === "legBye",
        batsmanId: strikerId,
        bowlerId: bowlerId,
      },
      {
        onSuccess: () => {
          if (isLegal) {
            const updatedBalls = currentInnings.balls + 1;
            const maxBalls = match.totalOvers * 6;

            if (updatedBalls >= maxBalls) {
              if (match.currentInnings >= 2) {
                endMatch.mutate(matchId);
              } else {
                endInnings.mutate(matchId);
              }
              navigate(`/match-summary/${matchId}`);
            }
          }
        },
      },
    );
    setSelectedExtra("");
  };

  const handleWicket = (type: string) => {
    if (!matchId || !match || !currentInnings) return;

    setOptimisticBalls((prev) => prev + 1);
    setOptimisticWickets((prev) => prev + 1);

    // Trigger celebration
    setCelebration("wicket");
    setTimeout(() => setCelebration(null), 2500);

    scoreBall.mutate(
      {
        matchId,
        runs: 0,
        isWicket: true,
        dismissalType: type.toLowerCase().replace(" ", "-"),
        batsmanId: strikerId,
        bowlerId: bowlerId,
      },
      {
        onSuccess: () => {
          const updatedBalls = currentInnings.balls + 1;
          const updatedWickets = currentInnings.wickets + 1;
          const maxBalls = match.totalOvers * 6;

          if (updatedBalls >= maxBalls || updatedWickets >= 10) {
            if (match.currentInnings >= 2) {
              endMatch.mutate(matchId);
            } else {
              endInnings.mutate(matchId);
            }
            navigate(`/match-summary/${matchId}`);
          } else {
            // Logic to select next batsman would go here
          }
        },
      },
    );
    setShowWicketDialog(false);
  };

  const handleStartMatch = () => {
    if (matchId) {
      startMatch.mutate(matchId);
    }
  };

  if (isMatchLoading || !match) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin h-8 w-8 border-2 border-blue-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!currentInnings) {
    return (
      <div className="flex flex-col items-center justify-center h-96 space-y-6 text-center px-4">
        <div className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center">
          <AlertTriangle className="h-10 w-10 text-blue-400" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Ready to Start?</h2>
          <p className="text-sm text-white/50 mt-1 max-w-xs">
            The match has been set up. Click below to start the first innings.
          </p>
        </div>
        <Button 
          size="lg" 
          onClick={handleStartMatch}
          isLoading={startMatch.isPending}
          className="w-full max-w-xs bg-blue-600 hover:bg-blue-700"
        >
          Start Match
        </Button>
      </div>
    );
  }

  const battingTeam = match.teamA.id === currentInnings.battingTeam ? match.teamA : match.teamB;
  const bowlingTeam = match.teamA.id === currentInnings.bowlingTeam ? match.teamA : match.teamB;

  const striker = strikerId ? battingTeam.players.find(p => p.id === strikerId) : null;
  const nonStriker = nonStrikerId ? battingTeam.players.find(p => p.id === nonStrikerId) : null;
  const currentBowler = bowlerId ? bowlingTeam.players.find(p => p.id === bowlerId) : null;

  const displayInnings = {
    ...currentInnings,
    runs: currentInnings.runs + optimisticRuns,
    balls: currentInnings.balls + optimisticBalls,
    wickets: currentInnings.wickets + optimisticWickets,
  };

  return (
    <div className="space-y-4 pb-24 md:pb-0">
      <AnimatePresence>
        {celebration && (
          <CelebrationOverlay type={celebration} key={celebration} />
        )}
      </AnimatePresence>

      <ScoreBoard match={match} currentInnings={displayInnings} />

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full grid grid-cols-4">
          <TabsTrigger value="score">Score</TabsTrigger>
          <TabsTrigger value="extras">Extras</TabsTrigger>
          <TabsTrigger value="wickets">Wickets</TabsTrigger>
          <TabsTrigger value="card">Card</TabsTrigger>
        </TabsList>

        <TabsContent value="score" className="mt-4 space-y-4">
          {/* Active Player Selection / Display */}
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => setShowOpenerDialog(true)}
              className="glass-card p-3 text-left hover:bg-white/5 transition-colors"
            >
              <p className="text-xs text-white/40 mb-1 flex items-center gap-1">
                Striker <Users className="h-2 w-2" />
              </p>
              <p className="text-sm font-semibold text-white truncate">
                {striker?.name || "Select Striker"}
              </p>
              <p className="text-xs text-electric">0 (0)</p>
            </button>
            <button 
              onClick={() => setShowOpenerDialog(true)}
              className="glass-card p-3 text-left hover:bg-white/5 transition-colors"
            >
              <p className="text-xs text-white/40 mb-1 flex items-center gap-1">
                Non-Striker <Users className="h-2 w-2" />
              </p>
              <p className="text-sm font-semibold text-white truncate">
                {nonStriker?.name || "Select Non-Striker"}
              </p>
              <p className="text-xs text-white/60">0 (0)</p>
            </button>
            <button 
              onClick={() => setShowOpenerDialog(true)}
              className="glass-card p-3 col-span-2 text-left hover:bg-white/5 transition-colors"
            >
              <p className="text-xs text-white/40 mb-1 flex items-center gap-1">
                Bowler <Users className="h-2 w-2" />
              </p>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">
                  {currentBowler?.name || "Select Bowler"}
                </p>
                <p className="text-xs text-white/60">0.0-0-0-0</p>
              </div>
            </button>
          </div>

          {!strikerId || !nonStrikerId || !bowlerId ? (
            <div className="glass-card p-8 text-center bg-blue-500/5 border-dashed border-blue-500/20">
              <p className="text-sm text-white/60 mb-4">Select active players to start scoring</p>
              <Button onClick={() => setShowOpenerDialog(true)}>Select Players</Button>
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

              <div className="grid grid-cols-2 gap-3 mt-3">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleScore(5)}
                  className="h-14 rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10 font-semibold"
                >
                  5 Runs
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveTab("extras")}
                  className="h-14 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20 font-semibold"
                >
                  + Extra
                </motion.button>
              </div>
            </>
          )}
        </TabsContent>

        <TabsContent value="extras" className="mt-4">
          <div className="grid grid-cols-2 gap-3">
            {extraTypes.map((extra) => (
              <motion.button
                key={extra.value}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setSelectedExtra(extra.value);
                  setActiveTab("score");
                }}
                className={cn(
                  "h-16 rounded-xl font-semibold transition-all",
                  selectedExtra === extra.value
                    ? "bg-amber-500/30 text-amber-400 border-2 border-amber-500"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10",
                )}
              >
                {extra.label}
                <span className="block text-xs text-white/50">
                  +{extra.runs} run{extra.runs !== 1 ? "s" : ""}
                </span>
              </motion.button>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="wickets" className="mt-4">
          <div className="grid grid-cols-2 gap-3">
            {wicketTypes.map((type) => (
              <motion.button
                key={type}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleWicket(type)}
                className="h-16 rounded-xl bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20 font-semibold"
              >
                {type}
              </motion.button>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="card" className="mt-4">
          <MatchScorecard match={match} />
        </TabsContent>
      </Tabs>

      {/* Action Bar */}
      <div className="fixed bottom-16 md:bottom-4 left-0 right-0 md:relative md:bottom-auto px-4 md:px-0">
        <div className="glass-card p-3 flex items-center justify-between gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => undoBall.mutate(matchId || "")}
            disabled={!liveState.canUndo}
            className="gap-1 text-white/60"
          >
            <Undo2 className="h-4 w-4" />
            Undo
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => endInnings.mutate(matchId || "")}
            className="gap-1 text-amber-400"
          >
            <Lock className="h-4 w-4" />
            End Innings
          </Button>

          <Button variant="ghost" size="sm" className="gap-1 text-red-400">
            <RotateCcw className="h-4 w-4" />
            Retire
          </Button>
        </div>
      </div>

      {/* Opener Selection Dialog */}
      <Dialog open={showOpenerDialog} onOpenChange={setShowOpenerDialog}>
        <DialogContent className="max-w-md bg-[#0a1628] border-white/10">
          <DialogHeader>
            <DialogTitle className="text-white">Select Active Players</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="space-y-3">
              <label className="text-xs font-bold text-white/40 uppercase">Striker</label>
              <div className="grid grid-cols-2 gap-2">
                {battingTeam.players.map(p => (
                  <Button
                    key={p.id}
                    variant={strikerId === p.id ? "default" : "outline"}
                    className="justify-start truncate"
                    onClick={() => setStrikerId(p.id)}
                    disabled={nonStrikerId === p.id}
                  >
                    {p.name}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-white/40 uppercase">Non-Striker</label>
              <div className="grid grid-cols-2 gap-2">
                {battingTeam.players.map(p => (
                  <Button
                    key={p.id}
                    variant={nonStrikerId === p.id ? "default" : "outline"}
                    className="justify-start truncate"
                    onClick={() => setNonStrikerId(p.id)}
                    disabled={strikerId === p.id}
                  >
                    {p.name}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-white/40 uppercase">Bowler</label>
              <div className="grid grid-cols-2 gap-2">
                {bowlingTeam.players.map(p => (
                  <Button
                    key={p.id}
                    variant={bowlerId === p.id ? "default" : "outline"}
                    className="justify-start truncate"
                    onClick={() => setBowlerId(p.id)}
                  >
                    {p.name}
                  </Button>
                ))}
              </div>
            </div>

            <Button 
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700" 
              onClick={() => setShowOpenerDialog(false)}
              disabled={!strikerId || !nonStrikerId || !bowlerId}
            >
              Confirm Selection
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Wicket Dialog */}
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
    </div>
  );
}

function CelebrationOverlay({ type }: { type: "four" | "six" | "wicket" }) {
  const configs = {
    four: {
      text: "FOUR!",
      color: "from-blue-600 to-cyan-500",
      shadow: "shadow-blue-500/50",
    },
    six: {
      text: "SIXER!",
      color: "from-purple-600 to-pink-500",
      shadow: "shadow-purple-500/50",
    },
    wicket: {
      text: "OUT!",
      color: "from-red-600 to-orange-500",
      shadow: "shadow-red-500/50",
    },
  };

  const config = configs[type];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none px-4"
    >
      <motion.div
        initial={{ scale: 0.5, rotate: -10, y: 50 }}
        animate={{ scale: 1.1, rotate: 0, y: 0 }}
        exit={{ scale: 2, opacity: 0, rotate: 10 }}
        transition={{
          type: "spring",
          damping: 12,
          stiffness: 200,
          duration: 0.5,
        }}
        className={cn(
          "relative p-8 rounded-3xl bg-gradient-to-br shadow-2xl border-2 border-white/20",
          config.color,
          config.shadow,
        )}
      >
        {/* Animated Background Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-20"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full border-4 border-dashed border-white rounded-full scale-150" />
        </motion.div>

        <div className="relative z-10 text-center">
          <motion.h2
            initial={{ letterSpacing: "0.2em" }}
            animate={{ letterSpacing: "0.05em" }}
            className="text-6xl md:text-8xl font-black text-white italic tracking-tighter drop-shadow-lg"
          >
            {config.text}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            className="h-1 bg-white/40 mt-2 rounded-full"
          />
        </div>

        {/* Particle Effects (Simplified) */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, x: 0, y: 0 }}
            animate={{
              scale: [0, 1, 0],
              x: Math.cos(i * 30) * 150,
              y: Math.sin(i * 30) * 150,
            }}
            transition={{ duration: 1, delay: i * 0.05 }}
            className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
