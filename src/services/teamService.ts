import api from './api'
import type { Team, Player, ApiResponse } from '@/types'

export const teamService = {
  getTeams: async (params?: { search?: string; page?: number; limit?: number }): Promise<{ teams: Team[]; total: number }> => {
    const { data } = await api.get<ApiResponse<{ teams: Team[]; total: number }>>('/teams', { params })
    return data.data
  },

  getTeam: async (id: string): Promise<Team> => {
    const { data } = await api.get<ApiResponse<Team>>(`/teams/${id}`)
    return data.data
  },

  createTeam: async (teamData: Omit<Team, 'id'>): Promise<Team> => {
    const { data } = await api.post<ApiResponse<Team>>('/teams', teamData)
    return data.data
  },

  updateTeam: async (id: string, teamData: Partial<Team>): Promise<Team> => {
    const { data } = await api.put<ApiResponse<Team>>(`/teams/${id}`, teamData)
    return data.data
  },

  deleteTeam: async (id: string): Promise<void> => {
    await api.delete(`/teams/${id}`)
  },

  getPlayers: async (params?: { search?: string; teamId?: string; page?: number; limit?: number }): Promise<{ players: Player[]; total: number }> => {
    const { data } = await api.get<ApiResponse<{ players: Player[]; total: number }>>('/players', { params })
    return data.data
  },

  getPlayer: async (id: string): Promise<Player> => {
    const { data } = await api.get<ApiResponse<Player>>(`/players/${id}`)
    return data.data
  },

  createPlayer: async (playerData: Omit<Player, 'id'>): Promise<Player> => {
    const { data } = await api.post<ApiResponse<Player>>('/players', playerData)
    return data.data
  },

  updatePlayer: async (id: string, playerData: Partial<Player>): Promise<Player> => {
    const { data } = await api.put<ApiResponse<Player>>(`/players/${id}`, playerData)
    return data.data
  },

  deletePlayer: async (id: string): Promise<void> => {
    await api.delete(`/players/${id}`)
  },
}
