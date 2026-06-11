import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'

interface StatCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  trend?: number
  trendLabel?: string
  color?: 'blue' | 'green' | 'amber' | 'red' | 'purple'
  index?: number
}

const colorMap = {
  blue: 'from-blue-600/20 to-blue-500/10 text-blue-400 border-blue-500/20',
  green: 'from-emerald-600/20 to-emerald-500/10 text-emerald-400 border-emerald-500/20',
  amber: 'from-amber-600/20 to-amber-500/10 text-amber-400 border-amber-500/20',
  red: 'from-red-600/20 to-red-500/10 text-red-400 border-red-500/20',
  purple: 'from-purple-600/20 to-purple-500/10 text-purple-400 border-purple-500/20',
}

function useCountUp(end: number, duration = 800, startOnMount = true) {
  const [count, setCount] = useState(0)
  const hasStarted = useRef(false)

  useEffect(() => {
    if (!startOnMount || hasStarted.current) return
    hasStarted.current = true

    const startTime = performance.now()
    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [end, duration, startOnMount])

  return count
}

export function StatCard({ title, value, icon: Icon, trend, trendLabel, color = 'blue', index = 0 }: StatCardProps) {
  const numericValue = typeof value === 'string' ? parseInt(value, 10) || 0 : value
  const animatedValue = useCountUp(numericValue)
  const itemVariants = {
    hidden: { y: 24, opacity: 0, scale: 0.95 },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] },
    },
  }

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn(
        'glass-card p-5 border bg-gradient-to-br cursor-default',
        colorMap[color]
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-white/50 uppercase tracking-wider">{title}</p>
          <motion.p
            key={animatedValue}
            className="text-2xl font-bold text-white mt-1 score-display"
          >
            {animatedValue}
          </motion.p>
          {trend !== undefined && (
            <div className="flex items-center gap-1 mt-2">
              <motion.span
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={cn(
                  'text-xs font-medium',
                  trend >= 0 ? 'text-emerald-400' : 'text-red-400'
                )}
              >
                {trend >= 0 ? '+' : ''}{trend}%
              </motion.span>
              <span className="text-xs text-white/40">{trendLabel}</span>
            </div>
          )}
        </div>
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
          className={cn(
            'p-2.5 rounded-xl bg-gradient-to-br',
            colorMap[color].split(' ').slice(0, 2).join(' ')
          )}
        >
          <Icon className="h-5 w-5" />
        </motion.div>
      </div>
    </motion.div>
  )
}
