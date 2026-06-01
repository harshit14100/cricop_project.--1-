import { Card } from "@/components/ui/card";
import { Match } from "@/types";
import { MapPin, Trophy, Users, Info } from "lucide-react";

interface MatchInfoCardProps {
  match: Match;
}

export function MatchInfoCard({ match }: MatchInfoCardProps) {
  const tossWinner = match.toss_winner_id === match.team1_id ? match.team_1_name : match.team_2_name;
  
  return (
    <Card className="glass-card p-4 sm:p-6 space-y-4 sm:space-y-6">
      <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
        <Info className="h-4 w-4 text-electric" />
        Match Information
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl sm:bg-transparent sm:p-0">
            <MapPin className="h-4 w-4 text-white/40 mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] font-bold text-white/20 uppercase">Venue</p>
              <p className="text-sm text-white font-medium truncate max-w-[200px] sm:max-w-none">{match.venue || "TBD"}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl sm:bg-transparent sm:p-0">
            <Trophy className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] font-bold text-white/20 uppercase">Toss</p>
              <p className="text-sm text-white font-medium leading-tight">
                {match.toss_winner_id ? (
                  `${tossWinner} won the toss & elected to ${match.toss_decision}`
                ) : (
                  "Toss pending"
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl sm:bg-transparent sm:p-0">
            <Users className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] font-bold text-white/20 uppercase">Format</p>
              <p className="text-sm text-white font-medium">{match.overs} Overs • {match.players_per_team} Players</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl sm:bg-transparent sm:p-0">
            <Info className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] font-bold text-white/20 uppercase">Match Status</p>
              <p className="text-sm text-white font-medium capitalize">{match.status}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
