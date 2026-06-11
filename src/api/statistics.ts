import client from './client'
import type { PlayerStats, DashboardStats } from '@/types'

export const statisticsApi = {
  getDashboardStats: async (): Promise<DashboardStats> => {
    const response = await client.get<DashboardStats>('/users/statistics/dashboard')
    return response.data;
  },

  getPlayerStatistics: async (playerId: string): Promise<PlayerStats> => {
    const { data } = await client.get<PlayerStats>(`/users/players/${playerId}/stats`)
    return data;
  },

  getStatistics: async (params?: { timeRange?: string }): Promise<any> => {
    const { data } = await client.get('/users/statistics', { params })
    return data;
  },
}
