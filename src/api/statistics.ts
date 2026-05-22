import client from './client'
import type { Statistics, PlayerStats, ApiResponse, DashboardStats } from '@/types'

export const statisticsApi = {
  getStatistics: async (params?: { timeRange?: string }): Promise<Statistics> => {
    const { data } = await client.get<ApiResponse<Statistics>>('/statistics', { params })
    return data.data
  },

  getPlayerStatistics: async (playerId: string): Promise<PlayerStats> => {
    const { data } = await client.get<ApiResponse<PlayerStats>>(`/statistics/player/${playerId}`)
    return data.data
  },

  getDashboardStats: async (): Promise<DashboardStats> => {
    const { data } = await client.get<ApiResponse<DashboardStats>>('/statistics/dashboard')
    return data.data
  },

  getMatchHighlights: async (matchId: string): Promise<{ type: string; description: string; over: number; ball: number }[]> => {
    const { data } = await client.get<ApiResponse<{ type: string; description: string; over: number; ball: number }[]>>(`/matches/${matchId}/highlights`)
    return data.data
  },
}
