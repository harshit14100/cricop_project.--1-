import { motion, AnimatePresence } from 'framer-motion'
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

  const target = (match as any).target;
  const requiredRR = target
    ? calculateRequiredRate(target, match.total_runs || 0, ballsRemaining)
    : null

  const oversText = match.display_overs || `${match.completed_overs || 0}.${match.balls_in_current_over || 0}`

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={cn(
        'relative overflow-hidden rounded-3xl p-4 sm:p-5 md:p-6 shadow-2xl',
        'bg-gradient-to-br from-[#0a1628] via-[#0f2342] to-[#0a1628]',
        'border border-blue-500/20',
        className
      )}
    >
      {/* Animated background gradients */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-48 h-48 bg-electric rounded-full blur-3xl -ml-24 -mb-24 pointer-events-none"
      />

      <div className="relative z-10">
        {/* Teams */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold text-white bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg shadow-blue-500/30 border border-white/10"
            >
              {battingTeamName.charAt(0)}
            </motion.div>
            <div>
              <p className="text-base font-bold text-white tracking-wide">{battingTeamName}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] font-medium text-white/70 uppercase tracking-wider"
                >
                  Innings {match.inning_number || match.currentInnings || 1}
                </motion.span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Bowling</p>
            <p className="text-sm font-semibold text-white/80">{bowlingTeamName}</p>
          </div>
        </div>

        {/* Main Score */}
        <div className="flex flex-col items-center justify-center py-4 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm mb-6 relative overflow-hidden">
          {/* Subtle animated gradient overlay */}
          <motion.div
            animate={{ opacity: [0, 0.03, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          />
          <div className="flex items-baseline justify-center gap-2 relative">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={`runs-${match.total_runs}`}
                initial={{ y: -24, opacity: 0, scale: 1.3, color: '#3b5bdb' }}
                animate={{ y: 0, opacity: 1, scale: 1, color: '#ffffff' }}
                exit={{ y: 24, opacity: 0, position: 'absolute' }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="text-5xl xs:text-6xl md:text-7xl font-black text-white score-display tracking-tighter"
              >
                {match.total_runs || 0}
              </motion.span>
            </AnimatePresence>
            <span className="text-2xl xs:text-3xl md:text-4xl font-light text-white/20 -mt-2">/</span>
            <AnimatePresence mode="popLayout">
              <motion.span
                key={`wickets-${match.wickets}`}
                initial={{ scale: 1.5, color: '#ef4444' }}
                animate={{ scale: 1, color: '#f87171' }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                className="text-3xl xs:text-4xl md:text-5xl font-bold text-red-400 score-display"
              >
                {match.wickets || 0}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Overs & Run Rate */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5"
          >
            <div className="flex items-center gap-1.5 text-white/50 mb-1">
              <Timer className="h-3.5 w-3.5" />
              <span className="text-[10px] uppercase font-bold tracking-wider">Overs</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.span
                key={oversText}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-lg font-bold text-white"
              >
                {oversText}
                <span className="text-sm text-white/40 font-normal ml-1">/ {matchOvers}</span>
              </motion.span>
            </AnimatePresence>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-electric/10 border border-electric/20"
          >
            <div className="flex items-center gap-1.5 text-electric/70 mb-1">
              <Zap className="h-3.5 w-3.5" />
              <span className="text-[10px] uppercase font-bold tracking-wider">Run Rate</span>
            </div>
            <motion.span
              key={rr}
              initial={{ scale: 1.3 }}
              animate={{ scale: 1 }}
              className="text-lg font-bold text-electric"
            >
              {rr}
            </motion.span>
          </motion.div>
        </div>

        {/* Target / Required */}
        {target && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-amber-500/10 rounded-xl p-4 mb-6 border border-amber-500/20"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="p-1.5 bg-amber-500/20 rounded-lg"
                >
                  <Target className="h-4 w-4 text-amber-400" />
                </motion.div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-amber-500/70 tracking-wider">Target</p>
                  <p className="text-sm font-bold text-amber-400">{target}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-white">
                  Need{" "}
                  <motion.span
                    key={`need-${target - (match.total_runs || 0)}`}
                    initial={{ scale: 1.3, color: "#fbbf24" }}
                    animate={{ scale: 1, color: "#fbbf24" }}
                    className="text-amber-400"
                  >
                    {target - (match.total_runs || 0)}
                  </motion.span>{" "}
                  runs
                </p>
                <p className="text-[10px] font-medium text-white/50 mt-0.5">
                  from {ballsRemaining} balls • RRR:{" "}
                  <span className="text-white">{requiredRR}</span>
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Progress Bar */}
        <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-electric to-blue-400 rounded-full relative"
            initial={{ width: 0 }}
            animate={{ width: `${(totalBallsCompleted / (matchOvers * 6)) * 100}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
