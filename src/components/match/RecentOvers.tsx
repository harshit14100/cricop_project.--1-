import { motion } from "framer-motion";
import { Match } from "@/types";
import { cn } from "@/lib/utils";

interface RecentOversProps {
  match: Match;
}

export function RecentOvers({ match }: RecentOversProps) {
  const currentInnings = match.innings && match.innings.length > 0
    ? match.innings[match.currentInnings - 1]
    : null;

  const ballsInCurrentOver = match.balls_in_current_over || 0;
  
  // Mock recent balls
  const mockRecentBalls = ["0", "1", "4", "W", "1wd", "6"];

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-[9px] sm:text-[10px] font-bold text-white/30 uppercase tracking-widest">Recent Balls</h3>
        <span className="text-[9px] sm:text-[10px] font-bold text-electric uppercase tracking-widest bg-electric/5 px-2 py-0.5 rounded-full">
          Over {Math.floor((currentInnings?.balls || 0) / 6)}
        </span>
      </div>
      
      <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 no-scrollbar -mx-1 px-1">
        {mockRecentBalls.map((ball, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            className={cn(
              "w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold shrink-0 shadow-lg",
              ball === "4" ? "bg-blue-500 text-white" :
              ball === "6" ? "bg-purple-600 text-white" :
              ball === "W" ? "bg-red-600 text-white" :
              ball.includes("wd") || ball.includes("nb") ? "bg-amber-500 text-black border border-amber-500/30" :
              "bg-white/10 text-white/60"
            )}
          >
            {ball}
          </motion.div>
        ))}
        
        <div className="h-6 sm:h-8 w-[1px] bg-white/10 mx-0.5 sm:mx-1"></div>
        
        {Array.from({ length: 6 }).map((_, i) => (
          <div 
            key={`current-${i}`}
            className={cn(
              "w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-dashed flex items-center justify-center text-[10px] shrink-0",
              i < ballsInCurrentOver ? "border-electric/50 text-electric bg-electric/5" : "border-white/5 text-white/10"
            )}
          >
            {i < ballsInCurrentOver ? "•" : ""}
          </div>
        ))}
      </div>
    </div>
  );
}
