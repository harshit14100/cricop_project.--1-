import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, MapPin, Trophy, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Match } from "@/types";
import { formatDate, formatOvers, calculateRunRate, cn } from "@/lib/utils";

interface MatchCardProps {
  match: Match;
  index?: number;
}

export function MatchCard({ match, index = 0 }: MatchCardProps) {
  const currentInnings = match.innings[match.currentInnings - 1];
  const isLive = match.status === "live";
  const isCompleted = match.status === "completed";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link to={isLive ? `/live-scoring/${match.id}` : `/match/${match.id}`}>
        <Card className="glass-card-hover overflow-hidden cursor-pointer group">
          {/* Header */}
          <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge
                variant={
                  isLive ? "live" : isCompleted ? "secondary" : "default"
                }
              >
                {isLive ? (
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                    LIVE
                  </span>
                ) : isCompleted ? (
                  "Completed"
                ) : (
                  "Upcoming"
                )}
              </Badge>
              <span className="text-xs text-white/40">
                {match.matchType.toUpperCase()}
              </span>
            </div>
            {match.seriesName && (
              <span className="text-xs text-white/40 truncate max-w-[150px]">
                {match.seriesName}
              </span>
            )}
          </div>

          {/* Teams & Score */}
          <div className="p-4">
            <div className="flex items-center justify-between gap-4">
              {/* Team A */}
              <div className="flex-1 text-center">
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-2 flex items-center justify-center text-lg font-bold text-white"
                  style={{ backgroundColor: match.teamA.color || "#3b5bdb" }}
                >
                  {match.teamA.shortName?.charAt(0) ||
                    match.teamA.name.charAt(0)}
                </div>
                <p className="text-sm font-semibold text-white truncate">
                  {match.teamA.shortName || match.teamA.name}
                </p>
                {currentInnings &&
                  match.innings.length > 0 &&
                  currentInnings.battingTeam === match.teamA.id && (
                    <div className="mt-1">
                      <p className="text-2xl font-bold text-white score-display">
                        {currentInnings.runs}/{currentInnings.wickets}
                      </p>
                      <p className="text-xs text-white/50">
                        {formatOvers(currentInnings.balls)} ov
                      </p>
                    </div>
                  )}
              </div>

              {/* VS */}
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <span className="text-xs font-bold text-white/40">VS</span>
                </div>
              </div>

              {/* Team B */}
              <div className="flex-1 text-center">
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-2 flex items-center justify-center text-lg font-bold text-white"
                  style={{ backgroundColor: match.teamB.color || "#4263eb" }}
                >
                  {match.teamB.shortName?.charAt(0) ||
                    match.teamB.name.charAt(0)}
                </div>
                <p className="text-sm font-semibold text-white truncate">
                  {match.teamB.shortName || match.teamB.name}
                </p>
                {currentInnings &&
                  match.innings.length > 0 &&
                  currentInnings.battingTeam === match.teamB.id && (
                    <div className="mt-1">
                      <p className="text-2xl font-bold text-white score-display">
                        {currentInnings.runs}/{currentInnings.wickets}
                      </p>
                      <p className="text-xs text-white/50">
                        {formatOvers(currentInnings.balls)} ov
                      </p>
                    </div>
                  )}
              </div>
            </div>

            {/* Match Info */}
            {isLive && currentInnings && (
              <div className="mt-4 pt-3 border-t border-white/5">
                <div className="flex items-center justify-between text-xs text-white/50">
                  <div className="flex items-center gap-1">
                    <Zap className="h-3 w-3 text-electric" />
                    <span>
                      RR:{" "}
                      {calculateRunRate(
                        currentInnings.runs,
                        currentInnings.balls,
                      )}
                    </span>
                  </div>
                  {currentInnings.target && (
                    <div className="flex items-center gap-1">
                      <Trophy className="h-3 w-3 text-amber-400" />
                      <span>
                        Need {currentInnings.target - currentInnings.runs} from{" "}
                        {match.totalOvers * 6 - currentInnings.balls} balls
                      </span>
                    </div>
                  )}
                </div>
                {currentInnings.batsmen
                  .filter((b) => !b.isOut || b.balls > 0)
                  .slice(0, 2)
                  .map((batsman) => (
                    <div
                      key={batsman.playerId}
                      className="flex items-center justify-between mt-2 text-xs"
                    >
                      <span
                        className={cn(
                          "text-white/70",
                          batsman.playerId === "p1" &&
                            "text-electric font-medium",
                        )}
                      >
                        {batsman.playerName} {batsman.playerId === "p1" && "*"}
                      </span>
                      <span className="text-white font-medium">
                        {batsman.runs} ({batsman.balls})
                      </span>
                    </div>
                  ))}
              </div>
            )}

            {isCompleted && (
              <div className="mt-4 pt-3 border-t border-white/5 text-center">
                <p className="text-sm font-medium text-emerald-400">
                  {match.teamA.name} won by 5 wickets
                </p>
                {match.manOfTheMatch && (
                  <p className="text-xs text-white/50 mt-1">
                    <Trophy className="h-3 w-3 inline mr-1 text-amber-400" />
                    MOTM: {match.manOfTheMatch}
                  </p>
                )}
              </div>
            )}

            {!isLive && !isCompleted && match.startTime && (
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-center gap-4 text-xs text-white/50">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {formatDate(match.startTime)}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {match.venue || "TBD"}
                </span>
              </div>
            )}
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
