import { motion } from 'framer-motion'
import { Target, Zap, Timer } from 'lucide-react'
import { cn, calculateRunRate, calculateRequiredRate } from '@/lib/utils'
import type { Match } from '@/types'

interface ScoreBoardProps {
  match: Match
  className?: string
}

export function ScoreBoard({ match, className }: ScoreBoardProps) {
  const battingTeamName = match.batting_team_name || "Batting Team";
  const bowlingTeamName = match.bowling_team_name || "Bowling Team";

  const matchOvers = match.overs || 20;
  const totalBallsCompleted = (match.completed_overs || 0) * 6 + (match.balls_in_current_over || 0);
  const ballsRemaining = Math.max(0, matchOvers * 6 - totalBallsCompleted);
  
  const rr = calculateRunRate(match.total_runs || 0, totalBallsCompleted)
  
  // Logic for target can be added if backend supports it
  const target = (match as any).target;
  const requiredRR = target 
    ? calculateRequiredRate(target, match.total_runs || 0, ballsRemaining)
    : null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        'glass-card p-4 md:p-6 border border-blue-500/20 bg-gradient-to-br from-blue-950/50 to-[#0a1628]',
        className
      )}
    >
      {/* Teams */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold text-white bg-blue-600"
          >
            {battingTeamName.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{battingTeamName}</p>
            <p className="text-xs text-white/50">Innings {match.inning_number || match.currentInnings || 1}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-white/50">vs</p>
          <p className="text-xs font-medium text-white/70">{bowlingTeamName}</p>
        </div>
      </div>

      {/* Main Score */}
      <div className="flex items-baseline justify-center gap-2 mb-4">
        <motion.span 
          key={match.total_runs}
          initial={{ scale: 1.2, color: '#00d4ff' }}
          animate={{ scale: 1, color: '#ffffff' }}
          className="text-5xl md:text-6xl font-bold text-white score-display"
        >
          {match.total_runs || 0}
        </motion.span>
        <span className="text-2xl md:text-3xl text-white/40">/</span>
        <motion.span 
          key={match.wickets}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          className="text-3xl md:text-4xl font-bold text-red-400 score-display"
        >
          {match.wickets || 0}
        </motion.span>
      </div>

      {/* Overs & Run Rate */}
      <div className="flex items-center justify-center gap-6 mb-4">
        <div className="flex items-center gap-1.5 text-white/60">
          <Timer className="h-4 w-4" />
          <span className="text-sm font-medium">
            {match.display_overs || `${match.completed_overs || 0}.${match.balls_in_current_over || 0}`} / {matchOvers} ov
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-electric">
          <Zap className="h-4 w-4" />
          <span className="text-sm font-medium">RR: {rr}</span>
        </div>
      </div>

      {/* Target / Required */}
      {target && (
        <div className="bg-white/5 rounded-xl p-3 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-amber-400" />
              <span className="text-xs text-white/60">Target: {target}</span>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-white">
                Need {target - (match.total_runs || 0)} runs
              </p>
              <p className="text-xs text-white/50">
                from {ballsRemaining} balls • RRR: {requiredRR}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Progress Bar */}
      <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-500 to-electric rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${(totalBallsCompleted / (matchOvers * 6)) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  )
}
