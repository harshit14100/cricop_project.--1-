import client from './client'
import type { Team, Player, ApiResponse } from '@/types'

export const teamApi = {
  getTeams: async (params?: { search?: string; page?: number; limit?: number }): Promise<{ teams: Team[]; total: number }> => {
    const { data } = await client.get<ApiResponse<{ teams: Team[]; total: number }>>('/users/teams', { params })
    return data.data
  },

  getTeam: async (id: string): Promise<Team> => {
    const { data } = await client.get<ApiResponse<Team>>(`/users/teams/${id}`)
    return data.data
  },

  createTeam: async (teamData: Omit<Team, 'id'>): Promise<Team> => {
    const { data } = await client.post<ApiResponse<Team>>('/users/teams', teamData)
    return data.data
  },

  updateTeam: async (id: string, teamData: Partial<Team>): Promise<Team> => {
    const { data } = await client.put<ApiResponse<Team>>(`/users/teams/${id}`, teamData)
    return data.data
  },

  deleteTeam: async (id: string): Promise<void> => {
    await client.delete(`/users/teams/${id}`)
  },

  getPlayers: async (params?: { search?: string; teamId?: string; page?: number; limit?: number }): Promise<{ players: Player[]; total: number }> => {
    const url = params?.teamId ? `/users/teams/${params.teamId}/players` : '/users/players'
    const { data } = await client.get<ApiResponse<{ players: Player[]; total: number }>>(url, { params })
    return data.data
  },

  getPlayer: async (id: string): Promise<Player> => {
    const { data } = await client.get<ApiResponse<Player>>(`/users/players/${id}`)
    return data.data
  },

  addPlayerToTeam: async (teamId: string, playerId: string): Promise<void> => {
    await client.post(`/users/teams/${teamId}/player`, { playerId })
  },

  createPlayer: async (playerData: Omit<Player, 'id'>): Promise<Player> => {
    const { data } = await client.post<ApiResponse<Player>>('/users/players', playerData)
    return data.data
  },

  updatePlayer: async (id: string, playerData: Partial<Player>): Promise<Player> => {
    const { data } = await client.put<ApiResponse<Player>>(`/users/players/${id}`, playerData)
    return data.data
  },

  deletePlayer: async (id: string): Promise<void> => {
    await client.delete(`/users/players/${id}`)
  },
}
