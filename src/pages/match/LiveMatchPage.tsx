import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useLiveMatch } from "@/hooks";
import { LoadingScreen } from "@/components/shared/LoadingScreen";
import { ErrorState } from "@/components/shared/ErrorState";
import { MatchHeader } from "@/components/match/MatchHeader";
import { LiveScoreBanner } from "@/components/match/LiveScoreBanner";
import { BattingScorecard } from "@/components/match/BattingScorecard";
import { BowlingScorecard } from "@/components/match/BowlingScorecard";
import { RecentOvers } from "@/components/match/RecentOvers";
import { MatchInfoCard } from "@/components/match/MatchInfoCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LiveMatchPage() {
  const { matchId } = useParams<{ matchId: string }>();
  const { data: match, isLoading, error } = useLiveMatch(matchId || "");

  if (isLoading) return <LoadingScreen />;
  if (error || !match) return <ErrorState message="Could not load live match details." />;

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      <MatchHeader match={match} />
      
      <LiveScoreBanner match={match} />
      
      <RecentOvers match={match} />

      <Tabs defaultValue="scorecard" className="w-full">
        <TabsList className="w-full grid grid-cols-2 mb-6">
          <TabsTrigger value="scorecard">Scorecard</TabsTrigger>
          <TabsTrigger value="info">Match Info</TabsTrigger>
        </TabsList>

        <TabsContent value="scorecard" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <BattingScorecard match={match} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <BowlingScorecard match={match} />
          </motion.div>
        </TabsContent>

        <TabsContent value="info">
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
