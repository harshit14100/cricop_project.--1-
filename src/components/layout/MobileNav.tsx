import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Play,
  History,
  Users,
  Trophy,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const mobileItems = [
  { icon: LayoutDashboard, label: 'Home', path: '/dashboard' },
  { icon: Play, label: 'Match', path: '/start-match' },
  { icon: Trophy, label: 'Team', path: '/create-team' },
  { icon: History, label: 'History', path: '/history' },
  { icon: Users, label: 'Players', path: '/players' },
]

export function MobileNav() {
  const location = useLocation()

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#0d1e36]/95 backdrop-blur-xl border-t border-white/5 md:hidden"
    >
      <div className="flex items-center justify-around h-16 safe-area-pb">
        {mobileItems.map((item) => {
          const isActive = location.pathname === item.path || location.pathname.startsWith(`${item.path}/`)
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all duration-200',
                isActive
                  ? 'text-electric'
                  : 'text-white/50'
              )}
            >
              <div className={cn(
                'p-1.5 rounded-lg transition-all',
                isActive && 'bg-blue-600/20'
              )}>
                <item.icon className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-medium">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="mobileActive"
                  className="absolute -top-0.5 w-8 h-0.5 bg-electric rounded-full"
                />
              )}
            </Link>
          )
        })}
      </div>
    </motion.nav>
  )
}
