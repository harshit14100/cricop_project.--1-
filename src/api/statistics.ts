import client from './client'
import type { Statistics, PlayerStats, DashboardStats } from '@/types'

export const statisticsApi = {
  getStatistics: async (params?: { timeRange?: string }): Promise<Statistics> => {
    const { data } = await client.get<Statistics>('/users/statistics', { params })
    return data
  },

  getPlayerStatistics: async (playerId: string): Promise<PlayerStats> => {
    const { data } = await client.get<PlayerStats>(`/users/players/${playerId}/stats`)
    return data
  },

  getDashboardStats: async (): Promise<DashboardStats> => {
    const { data } = await client.get<DashboardStats>('/users/statistics/dashboard')
    return data
  },

  getMatchHighlights: async (matchId: string): Promise<{ type: string; description: string; over: number; ball: number }[]> => {
    const { data } = await client.get<{ type: string; description: string; over: number; ball: number }[]>(`/users/matches/${matchId}/highlights`)
    return data
  },
}
