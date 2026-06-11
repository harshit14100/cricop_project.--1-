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
      <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant={isLive ? "live" : isCompleted ? "secondary" : "default"} className="whitespace-nowrap text-[9px] xs:text-xs">
            {isLive ? (
              <span className="flex items-center gap-1">
                <span className="w-1 h-1 bg-red-500 rounded-full animate-pulse" />
                LIVE
              </span>
            ) : (match.status || "Upcoming").charAt(0).toUpperCase() + (match.status || "Upcoming").slice(1)}
          </Badge>
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="text-[10px] sm:text-sm text-white/60 font-medium truncate">
              {match.seriesName || "Standard Match"}
            </span>
            <span className="text-white/20 text-xs shrink-0">•</span>
            <span className="text-[10px] sm:text-sm text-white/40 uppercase tracking-wider shrink-0">
              {match.matchType || "T20"}
            </span>
          </div>
        </div>
        <span className="text-[10px] sm:text-xs text-white/40 font-mono xs:text-right">
          {match.started_at ? formatDate(match.started_at) : "Scheduled"}
        </span>
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 xs:gap-4 py-4 sm:py-6 border-y border-white/5 w-full">
        <div className="flex flex-col items-center sm:flex-row sm:text-left gap-2 sm:gap-4 min-w-0">
          <div 
            className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-sm sm:text-xl font-bold text-white shadow-lg shrink-0"
            style={{ backgroundColor: match.teamA?.color || "#3b5bdb" }}
          >
            {(match.team_1_name || "T1")?.[0]?.toUpperCase() || "T"}
          </div>
          <div className="text-center sm:text-left min-w-0">
            <h1 className="text-[11px] xs:text-sm sm:text-xl font-bold text-white truncate px-1">
              {match.team_1_name || "Team 1"}
            </h1>
            <p className="text-[9px] sm:text-sm text-white/40 uppercase tracking-tighter">Team 1</p>
          </div>
        </div>

        <div className="flex flex-col items-center shrink-0 px-1">
          <div className="text-[8px] sm:text-xs font-bold text-white/20 uppercase tracking-widest">VS</div>
          <div className="h-4 sm:h-8 w-[1px] bg-white/10 my-1 sm:my-2"></div>
        </div>

        <div className="flex flex-col-reverse items-center sm:flex-row sm:text-right gap-2 sm:gap-4 min-w-0">
          <div className="text-center sm:text-right min-w-0">
            <h1 className="text-[11px] xs:text-sm sm:text-xl font-bold text-white truncate px-1">
              {match.team_2_name || "Team 2"}
            </h1>
            <p className="text-[9px] sm:text-sm text-white/40 uppercase tracking-tighter">Team 2</p>
          </div>
          <div 
            className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-sm sm:text-xl font-bold text-white shadow-lg shrink-0"
            style={{ backgroundColor: match.teamB?.color || "#4263eb" }}
          >
            {(match.team_2_name || "T2")?.[0]?.toUpperCase() || "T"}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
