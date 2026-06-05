import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Match } from "@/types";
import { formatOvers, calculateRunRate } from "@/lib/utils";
import { useAuthStore } from "@/store";
import { canEditMatch } from "@/utils/permissions";

interface MatchCardProps {
  match: Match;
  index?: number;
}

export function MatchCard({ match, index = 0 }: MatchCardProps) {
  const { user } = useAuthStore();
  const isLive = match.status === "live";
  const isCompleted = match.status === "completed";
  const isScheduled = match.status === "scheduled";

  const isHost = canEditMatch(match, user?.id);
  const matchLink = isCompleted 
    ? `/match/${match.id}` 
    : (isHost ? `/live-scoring/${match.id}` : (isLive ? `/match/${match.id}/live` : `/match/${match.id}`));

  const liveRuns = match.total_runs ?? 0;
  const liveWickets = match.wickets ?? 0;
  const liveBalls = (match.completed_overs || 0) * 6 + (match.balls_in_current_over || 0);
  
  const team1Name = match.team_1_name || "Team 1";
  const team2Name = match.team_2_name || "Team 2";

  const isTeam1Batting = match.batting_team_id === match.team1_id;
  const isTeam2Batting = match.batting_team_id === match.team2_id;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link to={matchLink}>
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
                T20
              </span>
            </div>
          </div>

          {/* Teams & Score */}
          <div className="p-3 sm:p-4">
            <div className="flex items-center justify-between gap-1 sm:gap-4">
              {/* Team 1 */}
              <div className="flex-1 text-center min-w-0">
                <div
                  className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl mx-auto mb-1 flex items-center justify-center text-sm sm:text-lg font-bold text-white shadow-lg bg-blue-600"
                >
                  {team1Name?.[0]?.toUpperCase() || "T"}
                </div>
                <p className="text-[10px] sm:text-sm font-semibold text-white truncate px-1">
                  {team1Name}
                </p>
                {isLive && isTeam1Batting && (
                  <div className="mt-1">
                    <p className="text-lg sm:text-2xl font-bold text-white score-display leading-none">
                      {liveRuns}/{liveWickets}
                    </p>
                    <p className="text-[9px] sm:text-xs text-white/50 mt-0.5">
                      {formatOvers(liveBalls)} ov
                    </p>
                  </div>
                )}
              </div>

              {/* VS */}
              <div className="flex-shrink-0 self-start mt-2 sm:mt-0 sm:self-center">
                <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <span className="text-[8px] sm:text-xs font-bold text-white/20 uppercase tracking-tighter sm:tracking-normal">
                    VS
                  </span>
                </div>
              </div>

              {/* Team 2 */}
              <div className="flex-1 text-center min-w-0">
                <div
                  className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl mx-auto mb-1 flex items-center justify-center text-sm sm:text-lg font-bold text-white shadow-lg bg-indigo-600"
                >
                  {team2Name?.[0]?.toUpperCase() || "T"}
                </div>
                <p className="text-[10px] sm:text-sm font-semibold text-white truncate px-1">
                  {team2Name}
                </p>
                {isLive && isTeam2Batting && (
                  <div className="mt-1">
                    <p className="text-lg sm:text-2xl font-bold text-white score-display leading-none">
                      {liveRuns}/{liveWickets}
                    </p>
                    <p className="text-[9px] sm:text-xs text-white/50 mt-0.5">
                      {formatOvers(liveBalls)} ov
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Match Info */}
            {isLive && (
              <div className="mt-4 pt-3 border-t border-white/5">
                <div className="flex flex-wrap items-center justify-between gap-y-2 text-[10px] sm:text-xs text-white/50">
                  <div className="flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded-full">
                    <Zap className="h-2.5 w-2.5 text-electric" />
                    <span>RR: {calculateRunRate(liveRuns, liveBalls)}</span>
                  </div>
                </div>
                
                <div className="mt-3 space-y-1.5">
                  {(match.striker_name) && (
                    <div className="flex items-center justify-between text-[10px] sm:text-xs">
                      <span className="text-electric font-medium truncate max-w-[150px]">
                        {match.striker_name} *
                      </span>
                      <span className="text-white/40 shrink-0 ml-2">Batting</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {isCompleted && (
              <div className="mt-4 pt-3 border-t border-white/5 text-center">
                <p className="text-sm font-medium text-emerald-400">
                  Match Completed
                </p>
              </div>
            )}

            {!isLive && !isCompleted && (
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-center gap-4 text-xs text-white/50">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {match.venue || "TBD"}
                </span>
              </div>
            )}

            {isHost && !isCompleted && (
              <div className="mt-4 pt-3 border-t border-white/10">
                <Button className="w-full h-8 text-xs gap-1.5 bg-electric hover:bg-electric/90 text-white border-0">
                  <Zap className="h-3.5 w-3.5 fill-current" />
                  {isLive ? "Continue Scoring" : "Start Scoring"}
                </Button>
              </div>
            )}
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
