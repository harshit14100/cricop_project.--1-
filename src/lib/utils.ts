import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export function formatTime(date: string | Date): string {
  return new Date(date).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function formatOvers(balls: number): string {
  const overs = Math.floor(balls / 6)
  const remainingBalls = balls % 6
  return remainingBalls > 0 ? `${overs}.${remainingBalls}` : `${overs}.0`
}

export function calculateRunRate(runs: number, balls: number): number {
  if (balls === 0) return 0
  return parseFloat(((runs / balls) * 6).toFixed(2))
}

export function calculateRequiredRate(target: number, runs: number, ballsRemaining: number): number {
  if (ballsRemaining === 0) return 0
  const runsNeeded = target - runs
  return parseFloat(((runsNeeded / ballsRemaining) * 6).toFixed(2))
}

export function calculateEconomy(runs: number, balls: number): string {
  if (balls === 0) return "0.00"
  return ((runs / balls) * 6).toFixed(2)
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}
