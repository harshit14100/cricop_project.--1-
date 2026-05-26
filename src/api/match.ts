import client from './client'
import type { Match, ApiResponse } from '@/types'

interface CreateMatchData {
  matchType: 't20' | 'odi' | 'test' | 'custom'
  totalOvers: number
  teamAId: string
  teamBId: string
  teamAPlayerIds: string[]
  teamBPlayerIds: string[]
  venue?: string
  umpires?: string[]
  scorers?: string[]
}

interface TossData {
  matchId: string
  winnerId: string
  choice: 'bat' | 'bowl'
}

export const matchApi = {
  getMatches: async (params?: { status?: string; page?: number; limit?: number }): Promise<{ matches: Match[]; total: number }> => {
    const { data } = await client.get<ApiResponse<{ matches: Match[]; total: number }>>('/users/matches', { params })
    return data.data
  },

  getMatch: async (id: string): Promise<Match> => {
    const { data } = await client.get<ApiResponse<Match>>(`/users/matches/${id}`)
    return data.data
  },

  createMatch: async (matchData: CreateMatchData): Promise<Match> => {
    const { data } = await client.post<ApiResponse<Match>>('/users/matches', matchData)
    return data.data
  },

  updateMatch: async (id: string, matchData: Partial<Match>): Promise<Match> => {
    const { data } = await client.put<ApiResponse<Match>>(`/users/matches/${id}`, matchData)
    return data.data
  },

  deleteMatch: async (id: string): Promise<void> => {
    await client.delete(`/users/matches/${id}`)
  },

  setToss: async (tossData: TossData): Promise<Match> => {
    const { data } = await client.post<ApiResponse<Match>>(`/users/matches/${tossData.matchId}/toss`, tossData)
    return data.data
  },

  startMatch: async (matchId: string): Promise<Match> => {
    // In backend this seems to correspond to starting an inning
    const { data } = await client.post<ApiResponse<Match>>(`/users/matches/${matchId}/innings`)
    return data.data
  },

  getLiveMatch: async (matchId: string): Promise<Match> => {
    const { data } = await client.get<ApiResponse<Match>>(`/users/matches/${matchId}/live`)
    return data.data
  },

  getShareableLink: async (matchId: string): Promise<string> => {
    const { data } = await client.get<ApiResponse<{ link: string }>>(`/users/matches/${matchId}/share`)
    return data.data.link
  },
}
