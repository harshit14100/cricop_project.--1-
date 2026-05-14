import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

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

export function StatCard({ title, value, icon: Icon, trend, trendLabel, color = 'blue', index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        'glass-card p-5 border bg-gradient-to-br',
        colorMap[color]
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-white/50 uppercase tracking-wider">{title}</p>
          <p className="text-2xl font-bold text-white mt-1 score-display">{value}</p>
          {trend !== undefined && (
            <div className="flex items-center gap-1 mt-2">
              <span className={cn(
                'text-xs font-medium',
                trend >= 0 ? 'text-emerald-400' : 'text-red-400'
              )}>
                {trend >= 0 ? '+' : ''}{trend}%
              </span>
              <span className="text-xs text-white/40">{trendLabel}</span>
            </div>
          )}
        </div>
        <div className={cn(
          'p-2.5 rounded-xl bg-gradient-to-br',
          colorMap[color].split(' ').slice(0, 2).join(' ')
        )}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </motion.div>
  )
}
