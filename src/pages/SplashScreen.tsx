import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Zap, Activity } from 'lucide-react'
import { useAuthStore } from '@/store'

export default function SplashScreen() {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuthStore()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(isAuthenticated ? '/dashboard' : '/login')
    }, 3000)
    return () => clearTimeout(timer)
  }, [isAuthenticated, navigate])

  return (
    <div className="min-h-screen bg-[#0a1628] flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric/10 rounded-full blur-3xl"
        />
      </div>

      {/* Cricket pitch lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1440 900">
        <line x1="0" y1="450" x2="1440" y2="450" stroke="white" strokeWidth="2" />
        <line x1="720" y1="0" x2="720" y2="900" stroke="white" strokeWidth="2" />
        <circle cx="720" cy="450" r="100" stroke="white" strokeWidth="2" fill="none" />
      </svg>

      {/* Logo Animation */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 w-32 h-32 -m-4"
        >
          <div className="w-full h-full rounded-full border border-dashed border-white/10" />
        </motion.div>

        <div className="relative">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500 via-blue-600 to-electric flex items-center justify-center shadow-2xl shadow-blue-500/30"
          >
            <Zap className="h-12 w-12 text-white" />
          </motion.div>

          {/* Live pulse */}
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full"
          />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <Activity className="h-3 w-3 text-white" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Cric<span className="text-electric">OP</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-sm text-white/50 mt-2 font-medium tracking-wide"
          >
            Score Every Ball Like a Pro
          </motion.p>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
          className="mt-8 h-0.5 bg-gradient-to-r from-blue-500 to-electric rounded-full w-32"
        />
      </motion.div>
    </div>
  )
}
