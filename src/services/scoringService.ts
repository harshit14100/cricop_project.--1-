import api from './api'
import type { Ball, ApiResponse } from '@/types'

interface ScoreBallData {
  matchId: string
  runs: number
  isWicket?: boolean
  isWide?: boolean
  isNoBall?: boolean
  isBye?: boolean
  isLegBye?: boolean
  dismissalType?: string
  fielderId?: string
  newBatsmanId?: string
  newBowlerId?: string
}

export const scoringService = {
  scoreBall: async (ballData: ScoreBallData): Promise<Ball> => {
    const { data } = await api.post<ApiResponse<Ball>>('/scoring/ball', ballData)
    return data.data
  },

  undoLastBall: async (matchId: string): Promise<void> => {
    await api.post(`/scoring/${matchId}/undo`)
  },

  retirePlayer: async (matchId: string, playerId: string, newPlayerId: string): Promise<void> => {
    await api.post(`/scoring/${matchId}/retire`, { playerId, newPlayerId })
  },

  changeBowler: async (matchId: string, bowlerId: string): Promise<void> => {
    await api.post(`/scoring/${matchId}/change-bowler`, { bowlerId })
  },

  changeBatsman: async (matchId: string, batsmanId: string, position: 'striker' | 'non-striker'): Promise<void> => {
    await api.post(`/scoring/${matchId}/change-batsman`, { batsmanId, position })
  },

  endInnings: async (matchId: string): Promise<void> => {
    await api.post(`/scoring/${matchId}/end-innings`)
  },

  endMatch: async (matchId: string): Promise<void> => {
    await api.post(`/scoring/${matchId}/end`)
  },

  getCommentary: async (matchId: string, page?: number): Promise<{ commentary: Ball[]; total: number }> => {
    const { data } = await api.get<ApiResponse<{ commentary: Ball[]; total: number }>>(`/scoring/${matchId}/commentary`, {
      params: { page },
    })
    return data.data
  },
}
