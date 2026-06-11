import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLiveMatch, useMatchScorecard } from "@/hooks";
import { LoadingScreen } from "@/components/shared/LoadingScreen";
import { ErrorState } from "@/components/shared/ErrorState";
import { MatchHeader } from "@/components/match/MatchHeader";
import { LiveScoreBanner } from "@/components/match/LiveScoreBanner";
import { BattingScorecard } from "@/components/match/BattingScorecard";
import { BowlingScorecard } from "@/components/match/BowlingScorecard";
import { RecentOvers } from "@/components/match/RecentOvers";
import { MatchInfoCard } from "@/components/match/MatchInfoCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CelebrationOverlay, type CelebrationType } from "@/components/shared/CelebrationOverlay";

export default function LiveMatchPage() {
  const { matchId } = useParams<{ matchId: string }>();
  const { data: match, isLoading, error } = useLiveMatch(matchId || "");
  const { data: scorecard } = useMatchScorecard(matchId || "");

  const [celebration, setCelebration] = useState<CelebrationType | null>(null);
  const prevMatchRef = useRef<{ runs: number; wickets: number } | null>(null);

  useEffect(() => {
    if (match) {
      if (prevMatchRef.current) {
        const deltaRuns = (match.total_runs || 0) - prevMatchRef.current.runs;
        const deltaWickets = (match.wickets || 0) - prevMatchRef.current.wickets;

        if (deltaWickets > 0) {
          setCelebration("wicket");
          setTimeout(() => setCelebration(null), 2500);
        } else if (deltaRuns === 4) {
          setCelebration("four");
          setTimeout(() => setCelebration(null), 2500);
        } else if (deltaRuns === 6) {
          setCelebration("six");
          setTimeout(() => setCelebration(null), 2500);
        }
      }
      
      prevMatchRef.current = {
        runs: match.total_runs || 0,
        wickets: match.wickets || 0,
      };
    }
  }, [match]);

  if (isLoading) return <LoadingScreen />;
  if (error || !match) return <ErrorState title="Error" description="Could not load live match details." />;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 pb-20 overflow-x-hidden">
      <AnimatePresence>
        {celebration && <CelebrationOverlay type={celebration} />}
      </AnimatePresence>

      <MatchHeader match={match} />
      
      <LiveScoreBanner match={match} />
      
      <RecentOvers match={match} />

      <Tabs defaultValue="scorecard" className="w-full">
        <TabsList className="w-full grid grid-cols-2 mb-4 sm:mb-6">
          <TabsTrigger value="scorecard">Scorecard</TabsTrigger>
          <TabsTrigger value="info">Match Info</TabsTrigger>
        </TabsList>

        <TabsContent value="scorecard" className="space-y-4 sm:space-y-6 outline-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <BattingScorecard scorecard={scorecard} matchId={match.id} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <BowlingScorecard scorecard={scorecard} />
          </motion.div>
        </TabsContent>

        <TabsContent value="info" className="outline-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <MatchInfoCard match={match} />
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
