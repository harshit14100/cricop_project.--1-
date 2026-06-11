import { motion } from "framer-motion";
import { Zap, Trophy } from "lucide-react";
import { Match } from "@/types";
import { formatOvers, calculateRunRate } from "@/lib/utils";

interface LiveScoreBannerProps {
  match: Match;
}

export function LiveScoreBanner({ match }: LiveScoreBannerProps) {
  const currentInningIndex = (match.inning_number || match.currentInnings || 1) - 1;
  const currentInnings = match.innings && match.innings.length > currentInningIndex
    ? match.innings[currentInningIndex]
    : null;

  const runs = match.total_runs ?? currentInnings?.runs ?? 0;
  const wickets = match.wickets ?? currentInnings?.wickets ?? 0;
  const balls = (match.completed_overs || 0) * 6 + (match.balls_in_current_over || 0);
  
  const battingTeamName = match.batting_team_name || 
    (currentInnings?.battingTeam === match.team1_id ? match.team_1_name : match.team_2_name) || 
    "Batting Team";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card bg-gradient-to-br from-blue-600/20 to-indigo-600/20 p-4 xs:p-5 sm:p-6 rounded-3xl border border-white/10"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
        <div className="text-center md:text-left">
          <p className="text-[10px] xs:text-xs sm:text-sm font-semibold text-electric uppercase tracking-wider mb-1">
            {battingTeamName} is batting
          </p>
          <div className="flex items-baseline justify-center md:justify-start gap-2">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-white score-display">
              {runs}/{wickets}
            </h2>
            <span className="text-base xs:text-lg sm:text-xl text-white/40 font-medium">
              ({formatOvers(balls)} ov)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full md:w-auto">
          <div className="bg-white/5 rounded-2xl p-2 xs:p-3 sm:p-4 border border-white/5 flex flex-col items-center md:items-start min-w-0">
            <div className="flex items-center gap-1 sm:gap-2 text-white/40 text-[8px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1">
              <Zap className="h-2.5 w-2.5 xs:h-3 xs:w-3 text-electric" />
              Run Rate
            </div>
            <div className="text-lg xs:text-xl sm:text-2xl font-bold text-white">
              {calculateRunRate(runs, balls)}
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-2 xs:p-3 sm:p-4 border border-white/5 flex flex-col items-center md:items-start min-w-0">
            <div className="flex items-center gap-1 sm:gap-2 text-white/40 text-[8px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1">
              <Trophy className="h-2.5 w-2.5 xs:h-3 xs:w-3 text-amber-400" />
              Target
            </div>
            <div className="text-lg xs:text-xl sm:text-2xl font-bold text-white">
              {currentInnings?.target || "-"}
            </div>
          </div>
        </div>
      </div>
      
      {currentInnings?.target && (
        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/5 text-center">
          <p className="text-sm sm:text-lg font-medium text-white/80 leading-relaxed">
            {battingTeamName} needs <span className="text-electric font-bold">{currentInnings.target - runs}</span> runs in <span className="text-white font-bold">{(match.overs * 6) - balls}</span> balls
          </p>
        </div>
      )}
    </motion.div>
  );
}
