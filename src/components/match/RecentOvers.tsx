import { motion } from "framer-motion";
import { Match } from "@/types";
import { cn } from "@/lib/utils";

interface RecentOversProps {
  match: Match;
}

export function RecentOvers({ match }: RecentOversProps) {
  // In a real application, this would come from the match data or a separate deliveries endpoint
  // For now, we'll show the current over's balls if available, or mock some recent balls
  // to demonstrate the UI requirement.
  const currentInnings = match.innings && match.innings.length > 0
    ? match.innings[match.currentInnings - 1]
    : null;

  const ballsInCurrentOver = match.balls_in_current_over || 0;
  
  // Mock recent balls for visual representation
  const mockRecentBalls = ["0", "1", "4", "W", "1wd", "6"];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Recent Balls</h3>
        <span className="text-[10px] text-white/40 font-medium">Over {Math.floor((currentInnings?.balls || 0) / 6)}</span>
      </div>
      
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {mockRecentBalls.map((ball, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0",
              ball === "4" ? "bg-blue-500 text-white" :
              ball === "6" ? "bg-purple-600 text-white" :
              ball === "W" ? "bg-red-600 text-white" :
              ball.includes("wd") || ball.includes("nb") ? "bg-amber-500/20 text-amber-500 border border-amber-500/30" :
              "bg-white/10 text-white/60"
            )}
          >
            {ball}
          </motion.div>
        ))}
        
        {/* Current over indicator */}
        <div className="h-8 w-[1px] bg-white/10 mx-1"></div>
        
        {Array.from({ length: 6 }).map((_, i) => (
          <div 
            key={`current-${i}`}
            className={cn(
              "w-8 h-8 rounded-full border border-dashed flex items-center justify-center text-[10px]",
              i < ballsInCurrentOver ? "border-electric text-electric" : "border-white/10 text-white/20"
            )}
          >
            {i < ballsInCurrentOver ? "•" : ""}
          </div>
        ))}
      </div>
    </div>
  );
}
