import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Trophy, Medal, ArrowLeft, Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { useMatch } from "@/hooks";

export default function MatchSummaryPage() {
  const navigate = useNavigate();

  const { matchId } = useParams<{
    matchId: string;
  }>();

  const { data: match, isLoading } = useMatch(matchId || "");

  const bestPlayer = useMemo(() => {
    if (!match?.innings?.length) return null;

    const allBatsmen = match.innings.flatMap(
      (inning: any) => inning.batsmen || [],
    );

    if (!allBatsmen.length) return null;

    return allBatsmen.reduce((best: any, current: any) =>
      current.runs > best.runs ? current : best,
    );
  }, [match]);

  const worstPlayer = useMemo(() => {
    if (!match?.innings?.length) return null;

    const allBatsmen = match.innings.flatMap(
      (inning: any) => inning.batsmen || [],
    );

    if (!allBatsmen.length) return null;

    return allBatsmen.reduce((worst: any, current: any) =>
      current.runs < worst.runs ? current : worst,
    );
  }, [match]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <p className="text-white/60">Loading match summary...</p>
      </div>
    );
  }

  if (!match) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
        <h2 className="text-xl font-semibold text-white">Match not found</h2>

        <p className="text-white/50 mt-2">
          The requested match does not exist.
        </p>

        <Button className="mt-4" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-4"
      >
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>

        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Match Summary
          </h1>

          <p className="text-sm text-white/50 mt-1">
            {match.teamA?.name} vs {match.teamB?.name}
          </p>
        </div>
      </motion.div>

      {/* Result Banner */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="glass-card p-6 text-center border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-transparent"
      >
        <Trophy className="h-12 w-12 text-amber-400 mx-auto mb-3" />

        <h2 className="text-xl md:text-2xl font-bold text-white">
          {match.teamB?.name} won by 5 wickets
        </h2>

        <p className="text-sm text-white/60 mt-1">
          Match completed in 18.4 overs
        </p>
      </motion.div>

      {/* Score Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="glass-card p-4">
          <p className="text-xs text-white/40 mb-1">{match.teamA?.name}</p>

          <p className="text-3xl font-bold text-white">186/6</p>

          <p className="text-xs text-white/50">20 overs</p>
        </Card>

        <Card className="glass-card p-4">
          <p className="text-xs text-white/40 mb-1">{match.teamB?.name}</p>

          <p className="text-3xl font-bold text-white">187/5</p>

          <p className="text-xs text-white/50">18.4 overs</p>
        </Card>
      </div>

      {/* Player of the Match */}
      {bestPlayer && (
        <Card className="glass-card p-5">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <Medal className="h-8 w-8 text-white" />
            </div>

            <div>
              <Badge className="mb-2 bg-amber-500 hover:bg-amber-500 text-black">
                Player of the Match
              </Badge>

              <h3 className="text-lg font-bold text-white">
                {bestPlayer.name}
              </h3>

              <p className="text-sm text-white/60">{bestPlayer.runs} runs</p>
            </div>
          </div>
        </Card>
      )}

      {/* Match Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            label: "Highest Score",
            value: bestPlayer?.runs || 0,
            sub: bestPlayer?.name || "-",
          },
          {
            label: "Lowest Score",
            value: worstPlayer?.runs || 0,
            sub: worstPlayer?.name || "-",
          },
          {
            label: "Total Overs",
            value: "38.4",
            sub: "Played",
          },
          {
            label: "Result",
            value: "Won",
            sub: match.teamB?.name || "-",
          },
        ].map((stat) => (
          <Card key={stat.label} className="glass-card p-4 text-center">
            <p className="text-xl font-bold text-white">{stat.value}</p>

            <p className="text-xs text-white/50 mt-1">{stat.label}</p>

            <p className="text-xs text-cyan-400 mt-1">{stat.sub}</p>
          </Card>
        ))}
      </div>

      {/* Share Button */}
      <Button variant="outline" className="w-full gap-2">
        <Share2 className="h-4 w-4" />
        Share Match Summary
      </Button>
    </div>
  );
}
