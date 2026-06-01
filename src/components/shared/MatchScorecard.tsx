import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { formatOvers } from '@/lib/utils'
import type { Match, Innings } from '@/types'

interface MatchScorecardProps {
  match: Match
}

export function MatchScorecard({ match }: MatchScorecardProps) {
  const [expandedInnings, setExpandedInnings] = useState<number>(match.currentInnings)

  return (
    <div className="space-y-4">
      {match.innings.map((innings, idx) => (
        <InningsCard 
          key={idx}
          innings={innings}
          inningsNumber={idx + 1}
          isExpanded={expandedInnings === idx + 1}
          onToggle={() => setExpandedInnings(expandedInnings === idx + 1 ? 0 : idx + 1)}
          match={match}
        />
      ))}
      
      {match.innings.length === 0 && (
        <div className="glass-card p-8 text-center">
          <p className="text-white/40">No innings data available yet.</p>
        </div>
      )}
    </div>
  )
}

interface InningsCardProps {
  innings: Innings
  inningsNumber: number
  isExpanded: boolean
  onToggle: () => void
  match: Match
}

function InningsCard({ innings, inningsNumber, isExpanded, onToggle, match }: InningsCardProps) {
  const isTeam1Batting = match.team1_id === innings.battingTeam;
  const battingTeam = isTeam1Batting ? match.teamA : match.teamB;
  const battingTeamName = isTeam1Batting 
    ? (match.teamA?.name || match.team_1_name || "Team 1")
    : (match.teamB?.name || match.team_2_name || "Team 2");
    
  const battingTeamShort = isTeam1Batting ? (match.teamA?.short_name || match.teamA?.shortName) : (match.teamB?.short_name || match.teamB?.shortName);
  
  return (
    <div className="glass-card overflow-hidden">
      <button 
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div 
            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white"
            style={{ backgroundColor: battingTeam?.color || '#3b5bdb' }}
          >
            {battingTeamShort?.charAt(0) || battingTeamName.charAt(0)}
          </div>
          <div className="text-left">
            <h3 className="text-sm font-bold text-white">
              {battingTeamName} <span className="text-white/40 font-normal">Innings {inningsNumber}</span>
            </h3>
            <p className="text-xs text-white/60">
              {innings.runs}/{innings.wickets} ({formatOvers(innings.balls)} ov)
            </p>
          </div>
        </div>
        {isExpanded ? <ChevronUp className="h-5 w-5 text-white/40" /> : <ChevronDown className="h-5 w-5 text-white/40" />}
      </button>

      {isExpanded && (
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          className="border-t border-white/10"
        >
          {/* Batting Table */}
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full text-left text-xs min-w-[450px]">
              <thead>
                <tr className="bg-white/5 text-white/40 border-b border-white/5">
                  <th className="px-2 sm:p-3 font-medium">Batter</th>
                  <th className="px-2 sm:p-3 font-medium text-right">R</th>
                  <th className="px-2 sm:p-3 font-medium text-right">B</th>
                  <th className="px-2 sm:p-3 font-medium text-right">4s</th>
                  <th className="px-2 sm:p-3 font-medium text-right">6s</th>
                  <th className="px-2 sm:p-3 font-medium text-right">SR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {innings.batsmen.map((batsman) => (
                  <tr key={batsman.playerId} className="text-white/80 transition-colors hover:bg-white/5">
                    <td className="px-2 sm:p-3">
                      <p className="font-semibold text-white truncate max-w-[120px]">{batsman.playerName}</p>
                      <p className="text-[10px] text-white/40 mt-0.5 truncate">
                        {batsman.isOut ? (batsman.dismissal?.type || 'Out') : 'not out'}
                      </p>
                    </td>
                    <td className="px-2 sm:p-3 text-right font-bold text-white">{batsman.runs}</td>
                    <td className="px-2 sm:p-3 text-right text-white/60">{batsman.balls}</td>
                    <td className="px-2 sm:p-3 text-right text-white/60">{batsman.fours}</td>
                    <td className="px-2 sm:p-3 text-right text-white/60">{batsman.sixes}</td>
                    <td className="px-2 sm:p-3 text-right text-white/60">{(batsman.strikeRate || 0).toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-white/5">
                  <td className="px-2 sm:p-3 font-bold text-white whitespace-nowrap">Extras</td>
                  <td colSpan={5} className="px-2 sm:p-3 text-right text-white/60">
                    {(innings.extras?.wides || 0) + (innings.extras?.noBalls || 0) + (innings.extras?.byes || 0) + (innings.extras?.legByes || 0)} 
                    <span className="ml-2 text-[10px]">
                      (w {innings.extras?.wides || 0}, nb {innings.extras?.noBalls || 0}, b {innings.extras?.byes || 0}, lb {innings.extras?.legByes || 0})
                    </span>
                  </td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-2 sm:p-3 font-bold text-white">Total</td>
                  <td colSpan={5} className="px-2 sm:p-3 text-right">
                    <span className="text-lg font-bold text-white">{innings.runs}/{innings.wickets}</span>
                    <span className="ml-2 text-xs text-white/40">({formatOvers(innings.balls)} ov)</span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Bowling Table */}
          <div className="mt-4 border-t border-white/10 overflow-x-auto scrollbar-hide">
            <table className="w-full text-left text-xs min-w-[450px]">
              <thead>
                <tr className="bg-white/5 text-white/40 border-b border-white/5">
                  <th className="px-2 sm:p-3 font-medium">Bowler</th>
                  <th className="px-2 sm:p-3 font-medium text-right">O</th>
                  <th className="px-2 sm:p-3 font-medium text-right">M</th>
                  <th className="px-2 sm:p-3 font-medium text-right">R</th>
                  <th className="px-2 sm:p-3 font-medium text-right">W</th>
                  <th className="px-2 sm:p-3 font-medium text-right">Econ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {innings.bowlers.map((bowler) => (
                  <tr key={bowler.playerId} className="text-white/80 transition-colors hover:bg-white/5">
                    <td className="px-2 sm:p-3 font-semibold text-white truncate max-w-[120px]">{bowler.playerName}</td>
                    <td className="px-2 sm:p-3 text-right text-white/60 font-medium">{formatOvers(bowler.balls)}</td>
                    <td className="px-2 sm:p-3 text-right text-white/60">{bowler.maidens}</td>
                    <td className="px-2 sm:p-3 text-right text-white/60">{bowler.runs}</td>
                    <td className="px-2 sm:p-3 text-right font-bold text-white">{bowler.wickets}</td>
                    <td className="px-2 sm:p-3 text-right text-white/60">{(bowler.economy || 0).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Fall of Wickets */}
          {innings.fallOfWickets && innings.fallOfWickets.length > 0 && (
            <div className="p-3 border-t border-white/10">
              <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2">Fall of Wickets</h4>
              <p className="text-[11px] text-white/60 leading-relaxed">
                {innings.fallOfWickets.map((fow, i) => (
                  <span key={i}>
                    {fow.runs}-{fow.wicketNumber} ({fow.batsmanName}, {fow.overs} ov)
                    {i < (innings.fallOfWickets?.length || 0) - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}
