import { useState } from "react";
import { Scorecard } from "@/types";
import { Card } from "@/components/ui/card";
import { PlayerStatsDialog } from "./PlayerStatsDialog";

interface BattingScorecardProps {
  scorecard?: Scorecard;
  matchId: string;
}

export function BattingScorecard({ scorecard, matchId }: BattingScorecardProps) {
  const [selectedPlayerId, setSelectedPlayerId] = useState<string | null>(null);

  const batsmen = scorecard?.batting || [];

  return (
    <>
      <Card className="glass-card overflow-hidden">
        <div className="px-4 py-3 border-b border-white/5 bg-white/5">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Batting Scorecard</h3>
        </div>
        <div className="w-full overflow-x-auto scrollbar-hide max-w-[calc(100vw-24px)] sm:max-w-full">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead>
              <tr className="text-[10px] font-bold text-white/40 uppercase tracking-widest border-b border-white/5">
                <th className="px-4 py-3">Batter</th>
                <th className="px-4 py-3 text-right">R</th>
                <th className="px-4 py-3 text-right">B</th>
                <th className="px-4 py-3 text-right">4s</th>
                <th className="px-4 py-3 text-right">6s</th>
                <th className="px-4 py-3 text-right">SR</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {batsmen.map((batsman) => {
                const sr = batsman.balls_faced > 0 ? ((batsman.runs / batsman.balls_faced) * 100).toFixed(1) : "0.0";
                
                return (
                  <tr 
                    key={batsman.player_id} 
                    className="text-sm transition-colors cursor-pointer group hover:bg-white/5"
                    onClick={() => setSelectedPlayerId(batsman.player_id)}
                  >
                    <td className="px-4 py-3">
                      <div className="flex flex-col min-w-[150px]">
                        <span className="font-medium truncate group-hover:text-electric transition-colors text-white">
                          {batsman.player_name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right font-bold text-white">{batsman.runs}</td>
                    <td className="px-4 py-3 text-right text-white/60">{batsman.balls_faced}</td>
                    <td className="px-4 py-3 text-right text-white/60">{batsman.fours || 0}</td>
                    <td className="px-4 py-3 text-right text-white/60">{batsman.sixes || 0}</td>
                    <td className="px-4 py-3 text-right text-white/40">{sr}</td>
                  </tr>
                );
              })}
              {batsmen.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-white/40 italic">
                    No batting data available yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>

      {selectedPlayerId && (
        <PlayerStatsDialog
          playerId={selectedPlayerId}
          matchId={matchId}
          isOpen={!!selectedPlayerId}
          onClose={() => setSelectedPlayerId(null)}
        />
      )}
    </>
  );
}
