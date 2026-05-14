import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

export function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#0a1628] flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="w-16 h-16 rounded-full border-2 border-blue-500/20 border-t-blue-500"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Zap className="h-6 w-6 text-electric" />
          </div>
        </div>
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/60 text-sm font-medium"
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  )
}
