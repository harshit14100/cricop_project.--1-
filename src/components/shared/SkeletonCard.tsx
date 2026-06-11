import { cn } from '@/lib/utils'

interface SkeletonCardProps {
  className?: string
  rows?: number
}

export function SkeletonCard({ className, rows = 3 }: SkeletonCardProps) {
  return (
    <div className={cn('glass-card p-6 space-y-4 relative overflow-hidden', className)}>
      <div className="absolute inset-0 shimmer-enhanced" style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer-enhanced 2.5s linear infinite',
      }} />
      <div className="flex items-center gap-4 relative">
        <div className="skeleton h-12 w-12 rounded-full" />
        <div className="space-y-2 flex-1">
          <div className="skeleton h-4 w-3/4 rounded" />
          <div className="skeleton h-3 w-1/2 rounded" />
        </div>
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="skeleton h-3 w-full rounded relative" />
      ))}
    </div>
  )
}
