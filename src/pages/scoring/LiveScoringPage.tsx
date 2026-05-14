import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Undo2,
  RotateCcw,
  AlertTriangle,
  Lock,
  Plus,
  Minus,
  ChevronUp,
  ChevronDown,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScoreBoard } from "@/components/shared/ScoreBoard";
import {
  useMatch,
  useScoreBall,
  useUndoBall,
  useEndInnings,
  useEndMatch,
} from "@/hooks";
import { useMatchStore } from "@/store";
import { cn, formatOvers } from "@/lib/utils";
import type { Ball } from "@/types";

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
  const { data: match } = useMatch(matchId || "");
  const scoreBall = useScoreBall();
  const undoBall = useUndoBall();
  const endInnings = useEndInnings();
  const endMatch = useEndMatch();
  const { liveState } = useMatchStore();

  const [showWicketDialog, setShowWicketDialog] = useState(false);
  const [showExtraDialog, setShowExtraDialog] = useState(false);
  const [selectedExtra, setSelectedExtra] = useState("");
  const [activeTab, setActiveTab] = useState("score");

  // Optimistic UI States to update scoreboard instantly on button press
  const [optimisticRuns, setOptimisticRuns] = useState(0);
  const [optimisticBalls, setOptimisticBalls] = useState(0);
  const [optimisticWickets, setOptimisticWickets] = useState(0);

  const currentInnings = match?.innings[match.currentInnings - 1];

  // Reset optimistic UI states whenever real backend data arrives
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

    // 1. Instantly update UI optimistically
    setOptimisticRuns((prev) => prev + totalRunsThisBall);
    if (isLegal) {
      setOptimisticBalls((prev) => prev + 1);
    }

    // 2. Fire mutation to backend
    scoreBall.mutate(
      {
        matchId,
        runs,
        isWide,
        isNoBall,
        isBye: selectedExtra === "bye",
        isLegBye: selectedExtra === "legBye",
      },
      {
        onSuccess: () => {
          // 3. Route to Highlights page if overs are complete
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

    // Instantly update UI optimistically
    setOptimisticBalls((prev) => prev + 1);
    setOptimisticWickets((prev) => prev + 1);

    scoreBall.mutate(
      {
        matchId,
        runs: 0,
        isWicket: true,
        dismissalType: type.toLowerCase().replace(" ", "-"),
      },
      {
        onSuccess: () => {
          // Route to Highlights page if overs are complete OR team is all out (10 wickets)
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
          }
        },
      },
    );
    setShowWicketDialog(false);
  };

  if (!match || !currentInnings) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin h-8 w-8 border-2 border-blue-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  // Combine real data with optimistic changes for instant UI render
  const displayInnings = {
    ...currentInnings,
    runs: currentInnings.runs + optimisticRuns,
    balls: currentInnings.balls + optimisticBalls,
    wickets: currentInnings.wickets + optimisticWickets,
  };

  return (
    <div className="space-y-4 pb-24 md:pb-0">
      {/* Score Board with Instant Optimistic Updates */}
      <ScoreBoard match={match} currentInnings={displayInnings} />

      {/* Current Players */}
      <div className="grid grid-cols-2 gap-3">
        <div className="glass-card p-3">
          <p className="text-xs text-white/40 mb-1">Striker</p>
          <p className="text-sm font-semibold text-white">Rohit Sharma</p>
          <p className="text-xs text-electric">45 (32)</p>
        </div>
        <div className="glass-card p-3">
          <p className="text-xs text-white/40 mb-1">Non-Striker</p>
          <p className="text-sm font-semibold text-white">Suryakumar Y</p>
          <p className="text-xs text-white/60">38 (24)</p>
        </div>
        <div className="glass-card p-3 col-span-2">
          <p className="text-xs text-white/40 mb-1">Bowler</p>
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-white">Deepak Chahar</p>
            <p className="text-xs text-white/60">3.4-0-28-1</p>
          </div>
        </div>
      </div>

      {/* Free Hit / Warning Indicators */}
      <AnimatePresence>
        {liveState.isFreeHit && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 flex items-center gap-2"
          >
            <AlertTriangle className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-medium text-amber-400">FREE HIT</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Recent Balls */}
      <div className="glass-card p-3">
        <p className="text-xs text-white/40 mb-2">Recent Deliveries</p>
        <div className="flex gap-2 flex-wrap">
          {liveState.lastBalls.map((ball, i) => (
            <motion.div
              key={ball.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold",
                ball.isWicket
                  ? "bg-red-500/20 text-red-400"
                  : ball.isSix
                    ? "bg-purple-500/20 text-purple-400"
                    : ball.isFour
                      ? "bg-blue-500/20 text-blue-400"
                      : ball.isWide || ball.isNoBall
                        ? "bg-amber-500/20 text-amber-400"
                        : "bg-white/5 text-white",
              )}
            >
              {ball.isWicket
                ? "W"
                : ball.isWide
                  ? "Wd"
                  : ball.isNoBall
                    ? "NB"
                    : ball.runs === 0
                      ? "•"
                      : ball.runs}
            </motion.div>
          ))}
          {liveState.lastBalls.length === 0 && (
            <span className="text-xs text-white/30">No balls bowled yet</span>
          )}
        </div>
      </div>

      {/* Scoring Interface */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full grid grid-cols-3">
          <TabsTrigger value="score">Score</TabsTrigger>
          <TabsTrigger value="extras">Extras</TabsTrigger>
          <TabsTrigger value="wickets">Wickets</TabsTrigger>
        </TabsList>

        <TabsContent value="score" className="mt-4">
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
              onClick={() => setShowExtraDialog(true)}
              className="h-14 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20 font-semibold"
            >
              + Extra
            </motion.button>
          </div>
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
