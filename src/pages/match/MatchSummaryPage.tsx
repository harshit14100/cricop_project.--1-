import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Trophy, Medal, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMatch } from "@/hooks";

export default function MatchSummaryPage() {
  const { matchId } = useParams<{ matchId: string }>();
  const { data: match } = useMatch(matchId || "");

  if (!match) return null;

  const team1Name = match.teamA?.name || match.team_1_name || "Team 1";
  const team2Name = match.teamB?.name || match.team_2_name || "Team 2";

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl font-bold text-white truncate">
            Match Summary
          </h1>
          <p className="text-sm text-white/50">
            {team1Name} vs {team2Name}
          </p>
        </div>
      </motion.div>

      {/* Result Banner */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass-card p-6 text-center border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-transparent"
      >
        <Trophy className="h-12 w-12 text-amber-400 mx-auto mb-3" />
        <h2 className="text-xl font-bold text-white">
          {match.winner_team_id
            ? `${match.winner_team_id === match.team1_id ? team1Name : team2Name} Won`
            : "Match Completed"}
        </h2>
        {match.ended_at && (
          <p className="text-sm text-white/60 mt-1">
            Match completed at {new Date(match.ended_at).toLocaleString()}
          </p>
        )}
      </motion.div>

      {/* Score Summary */}
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
        <Card className="glass-card p-4">
          <p className="text-xs text-white/40 mb-1 truncate">{team1Name}</p>
          <p className="text-2xl font-bold text-white">186/6</p>
          <p className="text-xs text-white/50">20 overs</p>
        </Card>
        <Card className="glass-card p-4">
          <p className="text-xs text-white/40 mb-1 truncate">{team2Name}</p>
          <p className="text-2xl font-bold text-white">187/5</p>
          <p className="text-xs text-white/50">18.4 overs</p>
        </Card>
      </div>

      {/* Man of the Match */}
      <Card className="glass-card p-4">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shrink-0">
            <Medal className="h-8 w-8 text-white" />
          </div>
          <div className="min-w-0">
            <Badge variant="warning" className="mb-1">
              Man of the Match
            </Badge>
            <h3 className="text-lg font-bold text-white truncate">Rohit Sharma</h3>
            <p className="text-sm text-white/60">
              68 runs (45 balls) • 8 fours, 2 sixes
            </p>
          </div>
        </div>
      </Card>

      {/* Key Stats */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Highest Score", value: "68", sub: "Rohit Sharma" },
          { label: "Best Bowling", value: "3/24", sub: "Jasprit Bumrah" },
          { label: "Most Sixes", value: "3", sub: "Suryakumar Yadav" },
          { label: "Best Catch", value: "1", sub: "Ravindra Jadeja" },
        ].map((stat) => (
          <Card key={stat.label} className="glass-card p-3 text-center">
            <p className="text-lg font-bold text-white">{stat.value}</p>
            <p className="text-xs text-white/50">{stat.label}</p>
            <p className="text-xs text-electric truncate">{stat.sub}</p>
          </Card>
        ))}
      </div>

      <Button className="w-full gap-2" variant="outline">
        <Share2 className="h-4 w-4" />
        Share Match Summary
      </Button>
    </div>
  );
}
