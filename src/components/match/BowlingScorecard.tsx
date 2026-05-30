import { Match } from "@/types";
import { Card } from "@/components/ui/card";
import { formatOvers, calculateEconomy, cn } from "@/lib/utils";

interface BowlingScorecardProps {
  match: Match;
}

export function BowlingScorecard({ match }: BowlingScorecardProps) {
  const currentInnings = match.innings && match.innings.length > 0
    ? match.innings[match.currentInnings - 1]
    : null;

  const bowlers = currentInnings?.bowlers || [];

  return (
    <Card className="glass-card overflow-hidden">
      <div className="px-4 py-3 border-b border-white/5 bg-white/5">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider">Bowling Scorecard</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[10px] font-bold text-white/40 uppercase tracking-widest border-b border-white/5">
              <th className="px-4 py-3">Bowler</th>
              <th className="px-4 py-3 text-right">O</th>
              <th className="px-4 py-3 text-right">M</th>
              <th className="px-4 py-3 text-right">R</th>
              <th className="px-4 py-3 text-right">W</th>
              <th className="px-4 py-3 text-right">ECON</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {bowlers.map((bowler) => {
              const isCurrent = bowler.playerId === match.current_bowler_id;
              
              return (
                <tr key={bowler.playerId} className={cn(
                  "text-sm transition-colors",
                  isCurrent ? "bg-electric/5" : "hover:bg-white/5"
                )}>
                  <td className="px-4 py-3">
                    <span className={cn(
                      "font-medium",
                      isCurrent ? "text-electric" : "text-white"
                    )}>
                      {bowler.playerName || bowler.playerId} {isCurrent && "●"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right text-white font-medium">{formatOvers(bowler.balls)}</td>
                  <td className="px-4 py-3 text-right text-white/60">{bowler.maidens || 0}</td>
                  <td className="px-4 py-3 text-right text-white/60">{bowler.runs}</td>
                  <td className="px-4 py-3 text-right font-bold text-white">{bowler.wickets}</td>
                  <td className="px-4 py-3 text-right text-white/40">{calculateEconomy(bowler.runs, bowler.balls)}</td>
                </tr>
              );
            })}
            {bowlers.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-white/40 italic">
                  No bowling data available yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
