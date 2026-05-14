import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, Bell, Search, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { useAuthStore, useUIStore } from '@/store'
import { useIsMobile } from '@/hooks'
import { cn } from '@/lib/utils'

export function Navbar() {
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  const { user } = useAuthStore()
  const { sidebarOpen, setSidebarOpen } = useUIStore()

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#0a1628]/80 backdrop-blur-xl border-b border-white/5"
    >
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        <div className="flex items-center gap-4">
          {!isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-white/70 hover:text-white hover:bg-white/10"
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}

          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-electric flex items-center justify-center">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#0a1628] animate-pulse" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight hidden sm:block">
              Cric<span className="text-electric">OP</span>
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="text-white/70 hover:text-white hover:bg-white/10 relative"
            onClick={() => navigate('/history')}
          >
            <Search className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-white/70 hover:text-white hover:bg-white/10 relative"
          >
            <Bell className="h-5 w-5" />
            <Badge variant="live" className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px]">
              3
            </Badge>
          </Button>

          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8 cursor-pointer" onClick={() => navigate('/settings')}>
              <AvatarImage src={user?.avatar} />
              <AvatarFallback>{user?.name?.charAt(0) || 'U'}</AvatarFallback>
            </Avatar>
            {!isMobile && (
              <div className="hidden lg:block">
                <p className="text-sm font-medium text-white">{user?.name}</p>
                <p className="text-xs text-white/50 capitalize">{user?.role}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  )
}
