import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, MapPin, Trophy, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Match } from "@/types";
import { formatDate, formatOvers, calculateRunRate, cn } from "@/lib/utils";
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
  const matchLink = isLive 
    ? (isHost ? `/live-scoring/${match.id}` : `/match/${match.id}/live`)
    : `/match/${match.id}`;

  // Use nested innings data if available, otherwise fallback to top-level live fields from backend
  const currentInnings =
    match.innings && match.innings.length > 0
      ? match.innings[match.currentInnings - 1]
      : null;

  const liveRuns = currentInnings?.runs ?? match.total_runs ?? 0;
  const liveWickets = currentInnings?.wickets ?? match.wickets ?? 0;
  const liveBalls =
    currentInnings?.balls ??
    (match.completed_overs || 0) * 6 + (match.balls_in_current_over || 0);
  const battingTeamName = match.batting_team_name;

  const teamA = match.teamA;
  const teamB = match.teamB;

  const team1Name = teamA?.name || match.team_1_name || "Team 1";
  const team2Name = teamB?.name || match.team_2_name || "Team 2";

  // Determine which team is batting to show score under the correct team
  const isTeam1Batting =
    match.innings && match.innings.length > 0
      ? currentInnings?.battingTeam === match.team1_id
      : battingTeamName === team1Name;

  const isTeam2Batting =
    match.innings && match.innings.length > 0
      ? currentInnings?.battingTeam === match.team2_id
      : battingTeamName === team2Name;

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
            <div className="flex items-center justify-between gap-1 sm:gap-4">
              {/* Team A */}
              <div className="flex-1 text-center min-w-0">
                <div
                  className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl mx-auto mb-1 flex items-center justify-center text-sm sm:text-lg font-bold text-white shadow-lg"
                  style={{ backgroundColor: teamA?.color || "#3b5bdb" }}
                >
                  {(teamA?.short_name || teamA?.shortName || team1Name)?.[0]?.toUpperCase() || "T"}
                </div>
                <p className="text-[10px] sm:text-sm font-semibold text-white truncate px-1">
                  {teamA?.short_name || teamA?.shortName || team1Name}
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

              {/* Team B */}
              <div className="flex-1 text-center min-w-0">
                <div
                  className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl mx-auto mb-1 flex items-center justify-center text-sm sm:text-lg font-bold text-white shadow-lg"
                  style={{ backgroundColor: teamB?.color || "#4263eb" }}
                >
                  {(teamB?.short_name || teamB?.shortName || team2Name)?.[0]?.toUpperCase() || "T"}
                </div>
                <p className="text-[10px] sm:text-sm font-semibold text-white truncate px-1">
                  {teamB?.short_name || teamB?.shortName || team2Name}
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
                  {(currentInnings?.target || match.total_runs) && (
                    <div className="flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded-full">
                      <Trophy className="h-2.5 w-2.5 text-amber-400" />
                      <span>
                        {currentInnings?.target
                          ? `${currentInnings.target - liveRuns} off ${(match.overs || 20) * 6 - liveBalls}`
                          : `Total: ${match.total_runs}`}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="mt-3 space-y-1.5">
                  {currentInnings?.batsmen
                    ? currentInnings.batsmen
                        .filter((b) => !b.isOut || b.balls > 0)
                        .slice(0, 2)
                        .map((batsman) => (
                          <div
                            key={batsman.playerId}
                            className="flex items-center justify-between text-[10px] sm:text-xs"
                          >
                            <span
                              className={cn(
                                "text-white/70 truncate max-w-[120px]",
                                batsman.playerId === match.striker_id &&
                                  "text-electric font-medium",
                              )}
                            >
                              {batsman.playerName || batsman.playerId}{" "}
                              {batsman.playerId === match.striker_id && "*"}
                            </span>
                            <span className="text-white font-medium shrink-0 ml-2">
                              {batsman.runs} ({batsman.balls})
                            </span>
                          </div>
                        ))
                    : (match.striker_name || match.striker_id) && (
                        <div className="flex items-center justify-between text-[10px] sm:text-xs">
                          <span className="text-electric font-medium truncate max-w-[150px]">
                            {match.striker_name || match.striker_id} *
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
                  {match.winner_team_id === match.team1_id
                    ? team1Name
                    : team2Name}{" "}
                  won
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
