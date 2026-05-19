import api from './api'
import type { Match, Series, ApiResponse } from '@/types'

interface CreateMatchData {
  seriesId?: string
  seriesName?: string
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

export const matchService = {
  getMatches: async (params?: { status?: string; series?: string; page?: number; limit?: number }): Promise<{ matches: Match[]; total: number }> => {
    const { data } = await api.get<ApiResponse<{ matches: Match[]; total: number }>>('/matches', { params })
    return data.data
  },

  getMatch: async (id: string): Promise<Match> => {
    const { data } = await api.get<ApiResponse<Match>>(`/matches/${id}`)
    return data.data
  },

  createMatch: async (matchData: CreateMatchData): Promise<Match> => {
    const { data } = await api.post<ApiResponse<Match>>('/matches', matchData)
    return data.data
  },

  updateMatch: async (id: string, matchData: Partial<Match>): Promise<Match> => {
    const { data } = await api.put<ApiResponse<Match>>(`/matches/${id}`, matchData)
    return data.data
  },

  deleteMatch: async (id: string): Promise<void> => {
    await api.delete(`/matches/${id}`)
  },

  setToss: async (tossData: TossData): Promise<Match> => {
    const { data } = await api.post<ApiResponse<Match>>('/matches/toss', tossData)
    return data.data
  },

  startMatch: async (matchId: string): Promise<Match> => {
    const { data } = await api.post<ApiResponse<Match>>(`/matches/${matchId}/start`)
    return data.data
  },

  getLiveMatch: async (matchId: string): Promise<Match> => {
    const { data } = await api.get<ApiResponse<Match>>(`/matches/${matchId}/live`)
    return data.data
  },

  getSeries: async (): Promise<Series[]> => {
    const { data } = await api.get<ApiResponse<Series[]>>('/series')
    return data.data
  },

  createSeries: async (seriesData: Omit<Series, 'id' | 'matches'>): Promise<Series> => {
    const { data } = await api.post<ApiResponse<Series>>('/series', seriesData)
    return data.data
  },

  getShareableLink: async (matchId: string): Promise<string> => {
    const { data } = await api.get<ApiResponse<{ link: string }>>(`/matches/${matchId}/share`)
    return data.data.link
  },
}
