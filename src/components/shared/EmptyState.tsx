import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  description: string
  actionLabel?: string
  onAction?: () => void
}

export function EmptyState({ icon: Icon, title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="flex flex-col items-center justify-center py-16 px-4 text-center"
    >
      <motion.div
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-6"
      >
        <Icon className="h-10 w-10 text-white/30" />
      </motion.div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/50 max-w-sm mb-6">{description}</p>
      {actionLabel && onAction && (
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Button onClick={onAction} variant="outline">
            {actionLabel}
          </Button>
        </motion.div>
      )}
    </motion.div>
  )
}
