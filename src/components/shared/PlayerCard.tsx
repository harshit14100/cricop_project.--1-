import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp, TrendingDown, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import type { Player } from "@/types";

interface PlayerCardProps {
  player: Player;
  rank?: number;
  statValue?: string;
  statLabel?: string;
  trend?: "up" | "down";
  index?: number;
}

export function PlayerCard({
  player,
  rank,
  statValue,
  statLabel,
  trend,
  index = 0,
}: PlayerCardProps) {
  const playerId = player?.id || (player as any)?.playerId || (player as any)?._id;

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.06, type: "spring", stiffness: 200 }}
      whileHover={{ x: 4, scale: 1.01 }}
    >
      <Link to={`/player/${playerId}`} className="block w-full">
        <Card className="glass-card-hover p-4 cursor-pointer group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-electric/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="flex items-center gap-4 relative z-10">
            {rank && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.1 + index * 0.06,
                  type: "spring",
                  stiffness: 300,
                }}
                className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0",
                  rank === 1
                    ? "bg-amber-500/20 text-amber-400 ring-1 ring-amber-500/30"
                    : rank === 2
                      ? "bg-gray-400/20 text-gray-300 ring-1 ring-gray-400/20"
                      : rank === 3
                        ? "bg-orange-600/20 text-orange-400 ring-1 ring-orange-500/30"
                        : "bg-white/5 text-white/40",
                )}
              >
                {rank}
              </motion.div>
            )}

            <Avatar className="h-12 w-12 flex-shrink-0 ring-2 ring-white/10 group-hover:ring-electric/30 transition-all duration-300">
              <AvatarImage src={player?.avatar} />
              <AvatarFallback className="bg-gradient-to-br from-blue-600 to-electric">
                {player?.name?.charAt(0) || "?"}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-semibold text-white truncate group-hover:text-electric transition-colors duration-200">
                  {player?.name || "Unknown Player"}
                </h4>
                {player?.isCaptain && (
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Award className="h-3.5 w-3.5 text-amber-400" />
                  </motion.div>
                )}
              </div>
              <p className="text-xs text-white/50 capitalize">
                {player?.battingStyle || "Unknown Batting"}{" "}
                {player?.bowlingStyle
                  ? `• ${player.bowlingStyle.replace(/-/g, " ")}`
                  : ""}
              </p>
            </div>

            {statValue && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.06 }}
                className="text-right flex-shrink-0"
              >
                <p className="text-lg font-bold text-white score-display">
                  {statValue}
                </p>
                <div className="flex items-center justify-end gap-1">
                  {trend === "up" && (
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <TrendingUp className="h-3 w-3 text-emerald-400" />
                    </motion.div>
                  )}
                  {trend === "down" && (
                    <TrendingDown className="h-3 w-3 text-red-400" />
                  )}
                  <span className="text-xs text-white/40">{statLabel}</span>
                </div>
              </motion.div>
            )}
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
