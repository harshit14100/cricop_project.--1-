import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface AuthLayoutProps {
  children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#0a1628] relative overflow-hidden flex items-center justify-center">
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-6 left-6 z-20 text-white/50 hover:text-white gap-1"
        onClick={() => navigate('/dashboard')}
      >
        <ChevronLeft className="h-4 w-4" />
        Back to Home
      </Button>
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-electric/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.08, 0.05] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-800/5 rounded-full blur-3xl"
        />

        {/* Cricket pitch pattern */}
        <svg className="absolute bottom-0 left-0 w-full h-64 opacity-5" viewBox="0 0 1440 320">
          <path fill="currentColor" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md px-4"
      >
        {children}
      </motion.div>
    </div>
  )
}
