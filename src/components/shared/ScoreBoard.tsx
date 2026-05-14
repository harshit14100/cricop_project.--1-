import { motion } from 'framer-motion'
import { Target, Zap, Timer } from 'lucide-react'
import { cn, formatOvers, calculateRunRate, calculateRequiredRate } from '@/lib/utils'
import type { Innings, Match } from '@/types'

interface ScoreBoardProps {
  match: Match
  currentInnings: Innings
  className?: string
}

export function ScoreBoard({ match, currentInnings, className }: ScoreBoardProps) {
  const battingTeam = match.teamA.id === currentInnings.battingTeam ? match.teamA : match.teamB
  const bowlingTeam = match.teamA.id === currentInnings.battingTeam ? match.teamB : match.teamA
  const ballsRemaining = match.totalOvers * 6 - currentInnings.balls
  const rr = calculateRunRate(currentInnings.runs, currentInnings.balls)
  const requiredRR = currentInnings.target 
    ? calculateRequiredRate(currentInnings.target, currentInnings.runs, ballsRemaining)
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
            className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold text-white"
            style={{ backgroundColor: battingTeam.color || '#3b5bdb' }}
          >
            {battingTeam.shortName?.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{battingTeam.name}</p>
            <p className="text-xs text-white/50">Innings {match.currentInnings}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-white/50">vs</p>
          <p className="text-xs font-medium text-white/70">{bowlingTeam.shortName || bowlingTeam.name}</p>
        </div>
      </div>

      {/* Main Score */}
      <div className="flex items-baseline justify-center gap-2 mb-4">
        <motion.span 
          key={currentInnings.runs}
          initial={{ scale: 1.2, color: '#00d4ff' }}
          animate={{ scale: 1, color: '#ffffff' }}
          className="text-5xl md:text-6xl font-bold text-white score-display"
        >
          {currentInnings.runs}
        </motion.span>
        <span className="text-2xl md:text-3xl text-white/40">/</span>
        <motion.span 
          key={currentInnings.wickets}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          className="text-3xl md:text-4xl font-bold text-red-400 score-display"
        >
          {currentInnings.wickets}
        </motion.span>
      </div>

      {/* Overs & Run Rate */}
      <div className="flex items-center justify-center gap-6 mb-4">
        <div className="flex items-center gap-1.5 text-white/60">
          <Timer className="h-4 w-4" />
          <span className="text-sm font-medium">
            {formatOvers(currentInnings.balls)} / {match.totalOvers} ov
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-electric">
          <Zap className="h-4 w-4" />
          <span className="text-sm font-medium">RR: {rr}</span>
        </div>
      </div>

      {/* Target / Required */}
      {currentInnings.target && (
        <div className="bg-white/5 rounded-xl p-3 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-amber-400" />
              <span className="text-xs text-white/60">Target: {currentInnings.target}</span>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-white">
                Need {currentInnings.target - currentInnings.runs} runs
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
          animate={{ width: `${(currentInnings.balls / (match.totalOvers * 6)) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  )
}
