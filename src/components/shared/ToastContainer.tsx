import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react'
import { useUIStore } from '@/store'
import { cn } from '@/lib/utils'

const icons = {
  default: Info,
  success: CheckCircle,
  error: XCircle,
  warning: AlertTriangle,
}

const colors = {
  default: 'border-white/10 bg-[#0f1d32]',
  success: 'border-emerald-500/30 bg-emerald-950/50',
  error: 'border-red-500/30 bg-red-950/50',
  warning: 'border-amber-500/30 bg-amber-950/50',
}

export function ToastContainer() {
  const { toasts, removeToast } = useUIStore()

  return (
    <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 max-w-sm w-full">
      <AnimatePresence>
        {toasts.map((toast) => {
          const Icon = icons[toast.variant]
          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={cn(
                'relative flex items-start gap-3 p-4 rounded-xl border shadow-2xl backdrop-blur-xl',
                colors[toast.variant]
              )}
            >
              <Icon className={cn(
                'h-5 w-5 flex-shrink-0 mt-0.5',
                toast.variant === 'success' && 'text-emerald-400',
                toast.variant === 'error' && 'text-red-400',
                toast.variant === 'warning' && 'text-amber-400',
                toast.variant === 'default' && 'text-blue-400',
              )} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white">{toast.title}</p>
                {toast.description && (
                  <p className="text-xs text-white/60 mt-1">{toast.description}</p>
                )}
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-white/40 hover:text-white transition-colors"
              >
                <XCircle className="h-4 w-4" />
              </button>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
