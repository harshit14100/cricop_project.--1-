import { Card } from "@/components/ui/card";

interface BowlingScorecardProps {
  bowling?: {
    player_id: string;
    player_name: string;
    overs_bowled: number;
    runs_conceded: number;
    wickets: number;
  }[];
  title?: string;
}

export function BowlingScorecard({ bowling, title = "Bowling Scorecard" }: BowlingScorecardProps) {
  const bowlers = bowling || [];

  return (
    <Card className="glass-card overflow-hidden">
      <div className="px-4 py-3 border-b border-white/5 bg-white/5">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider">{title}</h3>
      </div>
      <div className="w-full overflow-x-auto scrollbar-hide max-w-[calc(100vw-24px)] sm:max-w-full">
        <table className="w-full text-left border-collapse min-w-[500px]">
          <thead>
            <tr className="text-[10px] font-bold text-white/40 uppercase tracking-widest border-b border-white/5">
              <th className="px-4 py-3">Bowler</th>
              <th className="px-4 py-3 text-right">O</th>
              <th className="px-4 py-3 text-right">R</th>
              <th className="px-4 py-3 text-right">W</th>
              <th className="px-4 py-3 text-right">Econ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {bowlers.map((bowler) => {
              // Convert cricket overs (e.g. 1.1) to actual decimal overs (e.g. 1.166) for economy calculation
              const fullOvers = Math.floor(bowler.overs_bowled);
              const extraBalls = Math.round((bowler.overs_bowled - fullOvers) * 10);
              const actualOvers = fullOvers + (extraBalls / 6);
              const econ = actualOvers > 0 ? (bowler.runs_conceded / actualOvers).toFixed(2) : "0.00";
              
              return (
                <tr key={bowler.player_id} className="text-sm transition-colors hover:bg-white/5">
                  <td className="px-4 py-3">
                    <span className="font-medium text-white truncate max-w-[150px] block">{bowler.player_name}</span>
                  </td>
                  <td className="px-4 py-3 text-right text-white/60">{bowler.overs_bowled.toFixed(1)}</td>
                  <td className="px-4 py-3 text-right text-white/60">{bowler.runs_conceded}</td>
                  <td className="px-4 py-3 text-right font-bold text-white">{bowler.wickets}</td>
                  <td className="px-4 py-3 text-right text-white/40">{econ}</td>
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
