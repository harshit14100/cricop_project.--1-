import { useQuery } from '@tanstack/react-query'
import { statisticsService } from '@/services'

export function useStatistics(params?: { timeRange?: string }) {
  return useQuery({
    queryKey: ['statistics', params],
    queryFn: () => statisticsService.getStatistics(params),
  })
}

export function usePlayerStatistics(playerId: string) {
  return useQuery({
    queryKey: ['player-statistics', playerId],
    queryFn: () => Promise.resolve(null), // statisticsService.getPlayerStatistics(playerId),
    enabled: !!playerId,
  })
}

export function useDashboardStats() {
  return useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: statisticsService.getDashboardStats,
    refetchInterval: 10000,
  })
}

export function useMatchHighlights(matchId: string) {
  return useQuery({
    queryKey: ['match-highlights', matchId],
    queryFn: () => Promise.resolve([]), // statisticsService.getMatchHighlights(matchId),
    enabled: !!matchId,
  })
}
