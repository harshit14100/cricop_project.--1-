import { Match } from "@/types";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface BattingScorecardProps {
  match: Match;
}

export function BattingScorecard({ match }: BattingScorecardProps) {
  const currentInnings = match.innings && match.innings.length > 0
    ? match.innings[match.currentInnings - 1]
    : null;

  const batsmen = currentInnings?.batsmen || [];

  return (
    <Card className="glass-card overflow-hidden">
      <div className="px-4 py-3 border-b border-white/5 bg-white/5">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider">Batting Scorecard</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
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
              const isStriker = batsman.playerId === match.striker_id;
              const isNonStriker = batsman.playerId === match.non_striker_id;
              const sr = batsman.balls > 0 ? ((batsman.runs / batsman.balls) * 100).toFixed(1) : "0.0";
              
              return (
                <tr key={batsman.playerId} className={cn(
                  "text-sm transition-colors",
                  (isStriker || isNonStriker) ? "bg-electric/5" : "hover:bg-white/5"
                )}>
                  <td className="px-4 py-3">
                    <div className="flex flex-col">
                      <span className={cn(
                        "font-medium",
                        isStriker ? "text-electric" : "text-white"
                      )}>
                        {batsman.playerName || batsman.playerId} {isStriker && "*"}
                      </span>
                      <span className="text-[10px] text-white/40">
                        {batsman.isOut ? (batsman.outType || "Out") : "Batting"}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right font-bold text-white">{batsman.runs}</td>
                  <td className="px-4 py-3 text-right text-white/60">{batsman.balls}</td>
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
  );
}
