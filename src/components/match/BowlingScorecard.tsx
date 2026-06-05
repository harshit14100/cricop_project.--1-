import { Scorecard } from "@/types";
import { Card } from "@/components/ui/card";

interface BowlingScorecardProps {
  scorecard?: Scorecard;
}

export function BowlingScorecard({ scorecard }: BowlingScorecardProps) {
  const bowlers = scorecard?.bowling || [];

  return (
    <Card className="glass-card overflow-hidden">
      <div className="px-4 py-3 border-b border-white/5 bg-white/5">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider">Bowling Scorecard</h3>
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <table className="w-full text-left border-collapse min-w-[450px]">
          <thead>
            <tr className="text-[10px] font-bold text-white/40 uppercase tracking-widest border-b border-white/5">
              <th className="px-2 sm:px-4 py-3">Bowler</th>
              <th className="px-2 sm:px-4 py-3 text-right">O</th>
              <th className="px-2 sm:px-4 py-3 text-right">R</th>
              <th className="px-2 sm:px-4 py-3 text-right">W</th>
              <th className="px-2 sm:px-4 py-3 text-right">Econ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {bowlers.map((bowler) => {
              const econ = bowler.overs_bowled > 0 ? (bowler.runs_conceded / bowler.overs_bowled).toFixed(2) : "0.00";
              
              return (
                <tr key={bowler.player_id} className="text-sm transition-colors hover:bg-white/5">
                  <td className="px-2 sm:px-4 py-3">
                    <span className="font-medium text-white">{bowler.player_name}</span>
                  </td>
                  <td className="px-2 sm:px-4 py-3 text-right text-white/60">{bowler.overs_bowled}</td>
                  <td className="px-2 sm:px-4 py-3 text-right text-white/60">{bowler.runs_conceded}</td>
                  <td className="px-2 sm:px-4 py-3 text-right font-bold text-white">{bowler.wickets}</td>
                  <td className="px-2 sm:px-4 py-3 text-right text-white/40">{econ}</td>
                </tr>
              );
            })}
            {bowlers.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-white/40 italic">
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
