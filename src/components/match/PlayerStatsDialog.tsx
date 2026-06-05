import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { usePlayerMatchStats, usePlayer } from "@/hooks";
import { LoadingScreen } from "@/components/shared/LoadingScreen";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Target, Award, Zap, TrendingUp } from "lucide-react";

interface PlayerStatsDialogProps {
  playerId: string;
  matchId: string;
  isOpen: boolean;
  onClose: () => void;
}

export function PlayerStatsDialog({ playerId, matchId, isOpen, onClose }: PlayerStatsDialogProps) {
  const { data: player, isLoading: playerLoading } = usePlayer(playerId);
  const { data: stats, isLoading: statsLoading } = usePlayerMatchStats(playerId, matchId);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="glass-card border-white/10 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-white">Player Match Performance</DialogTitle>
        </DialogHeader>

        {playerLoading || statsLoading ? (
          <div className="h-40 flex items-center justify-center">
            <LoadingScreen />
          </div>
        ) : !player ? (
          <div className="p-8 text-center text-white/40">Player not found</div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 ring-2 ring-electric/20">
                <AvatarImage src={player.avatar} />
                <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-bold text-white">{player.name}</h3>
                <div className="flex gap-2 mt-1">
                  <Badge variant="outline" className="text-[10px] uppercase">{player.battingStyle}</Badge>
                  {player.isCaptain && <Badge variant="warning" className="text-[10px]">CAPTAIN</Badge>}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase mb-1">
                  <Target className="h-3 w-3 text-electric" />
                  Runs
                </div>
                <div className="text-2xl font-bold text-white">{stats?.runs || 0}</div>
                <div className="text-[10px] text-white/40">from {stats?.balls || 0} balls</div>
              </div>

              <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase mb-1">
                  <Award className="h-3 w-3 text-red-400" />
                  Wickets
                </div>
                <div className="text-2xl font-bold text-white">{stats?.wickets || 0}</div>
                <div className="text-[10px] text-white/40">for {stats?.runsConceded || 0} runs</div>
              </div>

              <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase mb-1">
                  <Zap className="h-3 w-3 text-amber-400" />
                  Impact
                </div>
                <div className="text-lg font-bold text-white">
                  {stats?.fours || 0} Fours • {stats?.sixes || 0} Sixes
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase mb-1">
                  <TrendingUp className="h-3 w-3 text-emerald-400" />
                  S.R / Econ
                </div>
                <div className="text-lg font-bold text-white">
                  {stats?.strikeRate || stats?.economy || "0.0"}
                </div>
              </div>
            </div>
            
            {stats?.partnership && (
              <div className="p-3 rounded-xl bg-electric/5 border border-electric/10">
                <p className="text-[10px] font-bold text-electric uppercase mb-1">Current Partnership</p>
                <p className="text-sm text-white font-medium">
                  {stats.partnership.runs} runs from {stats.partnership.balls} balls
                </p>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
