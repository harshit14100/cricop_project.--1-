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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Link to={`/player/${playerId}`} className="block w-full">
        <Card className="glass-card-hover p-4 cursor-pointer group">
          <div className="flex items-center gap-4">
            {rank && (
              <div
                className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0",
                  rank === 1
                    ? "bg-amber-500/20 text-amber-400"
                    : rank === 2
                      ? "bg-gray-400/20 text-gray-300"
                      : rank === 3
                        ? "bg-orange-600/20 text-orange-400"
                        : "bg-white/5 text-white/40",
                )}
              >
                {rank}
              </div>
            )}

            <Avatar className="h-12 w-12 flex-shrink-0">
              <AvatarImage src={player?.avatar} />
              <AvatarFallback>{player?.name?.charAt(0) || "?"}</AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-semibold text-white truncate">
                  {player?.name || "Unknown Player"}
                </h4>
                {player?.isCaptain && (
                  <Award className="h-3.5 w-3.5 text-amber-400" />
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
              <div className="text-right flex-shrink-0">
                <p className="text-lg font-bold text-white score-display">
                  {statValue}
                </p>
                <div className="flex items-center justify-end gap-1">
                  {trend === "up" && (
                    <TrendingUp className="h-3 w-3 text-emerald-400" />
                  )}
                  {trend === "down" && (
                    <TrendingDown className="h-3 w-3 text-red-400" />
                  )}
                  <span className="text-xs text-white/40">{statLabel}</span>
                </div>
              </div>
            )}
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
