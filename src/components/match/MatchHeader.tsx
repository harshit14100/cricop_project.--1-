import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Match } from "@/types";
import { formatDate } from "@/lib/utils";

interface MatchHeaderProps {
  match: Match;
}

export function MatchHeader({ match }: MatchHeaderProps) {
  const isLive = match.status === "live";
  const isCompleted = match.status === "completed";

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Badge variant={isLive ? "live" : isCompleted ? "secondary" : "default"}>
            {isLive ? (
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                LIVE
              </span>
            ) : (match.status || "Upcoming").charAt(0).toUpperCase() + (match.status || "Upcoming").slice(1)}
          </Badge>
          <span className="text-sm text-white/60">
            {match.seriesName || "Standard Match"} • {match.matchType?.toUpperCase() || "T20"}
          </span>
        </div>
        <span className="text-xs text-white/40">
          {match.started_at ? formatDate(match.started_at) : "Scheduled"}
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-6 border-y border-white/5">
        <div className="flex items-center gap-4">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold text-white shadow-lg"
            style={{ backgroundColor: match.teamA?.color || "#3b5bdb" }}
          >
            {(match.teamA?.short_name || match.team_1_name || "T1")?.[0]?.toUpperCase() || "T"}
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">
              {match.teamA?.name || match.team_1_name || "Team 1"}
            </h1>
            <p className="text-sm text-white/40">Team A</p>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-center">
          <div className="text-xs font-bold text-white/20 uppercase tracking-widest">VS</div>
          <div className="h-8 w-[1px] bg-white/10 my-2"></div>
        </div>

        <div className="flex items-center md:flex-row-reverse gap-4">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold text-white shadow-lg"
            style={{ backgroundColor: match.teamB?.color || "#4263eb" }}
          >
            {(match.teamB?.short_name || match.team_2_name || "T2")?.[0]?.toUpperCase() || "T"}
          </div>
          <div className="md:text-right">
            <h1 className="text-xl font-bold text-white">
              {match.teamB?.name || match.team_2_name || "Team 2"}
            </h1>
            <p className="text-sm text-white/40">Team B</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
