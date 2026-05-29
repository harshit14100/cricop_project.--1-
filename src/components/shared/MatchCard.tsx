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
  const currentInnings = match.innings && match.innings.length > 0 
    ? match.innings[match.currentInnings - 1] 
    : null;
  const isLive = match.status === "live";
  const isCompleted = match.status === "completed";
  const isScheduled = match.status === "scheduled";

  const teamA = match.teamA;
  const teamB = match.teamB;

  const team1Name = teamA?.name || match.team_1_name || "Team 1";
  const team2Name = teamB?.name || match.team_2_name || "Team 2";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link to={isLive ? `/live-scoring/${match.id}` : `/match/${match.id}`}>
        <Card className="glass-card-hover overflow-hidden cursor-pointer group">
          {/* Header */}
          <div className="px-3 py-2 sm:px-4 sm:py-3 border-b border-white/5 flex items-center justify-between">
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
                ) : isScheduled ? (
                  "Scheduled"
                ) : (
                  "Upcoming"
                )}
              </Badge>
              <span className="text-[10px] sm:text-xs text-white/40">
                {match.matchType?.toUpperCase() || "T20"}
              </span>
            </div>
            {match.seriesName && (
              <span className="text-[10px] sm:text-xs text-white/40 truncate max-w-[100px] sm:max-w-[150px]">
                {match.seriesName}
              </span>
            )}
          </div>

          {/* Teams & Score */}
          <div className="p-3 sm:p-4">
            <div className="flex items-center justify-between gap-2 sm:gap-4">
              {/* Team A */}
              <div className="flex-1 text-center">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl mx-auto mb-1.5 sm:mb-2 flex items-center justify-center text-base sm:text-lg font-bold text-white"
                  style={{ backgroundColor: teamA?.color || "#3b5bdb" }}
                >
                  {teamA?.shortName?.charAt(0) || team1Name.charAt(0)}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-white truncate max-w-[80px] sm:max-w-[120px] mx-auto">
                  {teamA?.shortName || team1Name}
                </p>
                {currentInnings &&
                  match.innings.length > 0 &&
                  currentInnings.battingTeam === match.team1_id && (
                    <div className="mt-1">
                      <p className="text-xl sm:text-2xl font-bold text-white score-display">
                        {currentInnings.runs}/{currentInnings.wickets}
                      </p>
                      <p className="text-[10px] sm:text-xs text-white/50">
                        {formatOvers(currentInnings.balls)} ov
                      </p>
                    </div>
                  )}
              </div>

              {/* VS */}
              <div className="flex-shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <span className="text-[10px] sm:text-xs font-bold text-white/40">VS</span>
                </div>
              </div>

              {/* Team B */}
              <div className="flex-1 text-center">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl mx-auto mb-1.5 sm:mb-2 flex items-center justify-center text-base sm:text-lg font-bold text-white"
                  style={{ backgroundColor: teamB?.color || "#4263eb" }}
                >
                  {teamB?.shortName?.charAt(0) || team2Name.charAt(0)}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-white truncate max-w-[80px] sm:max-w-[120px] mx-auto">
                  {teamB?.shortName || team2Name}
                </p>
                {currentInnings &&
                  match.innings.length > 0 &&
                  currentInnings.battingTeam === match.team2_id && (
                    <div className="mt-1">
                      <p className="text-xl sm:text-2xl font-bold text-white score-display">
                        {currentInnings.runs}/{currentInnings.wickets}
                      </p>
                      <p className="text-[10px] sm:text-xs text-white/50">
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
                        {(match.overs || 20) * 6 - currentInnings.balls} balls
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
                  {match.winner_team_id === match.team1_id ? team1Name : team2Name} won
                </p>
                {match.man_of_match_id && (
                  <p className="text-xs text-white/50 mt-1">
                    <Trophy className="h-3 w-3 inline mr-1 text-amber-400" />
                    MOTM: {match.man_of_match_id}
                  </p>
                )}
              </div>
            )}

            {!isLive && !isCompleted && match.started_at && (
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-center gap-4 text-xs text-white/50">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {formatDate(match.started_at)}
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
