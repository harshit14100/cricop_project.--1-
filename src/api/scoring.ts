import client from './client'
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
  batsmanId?: string
  bowlerId?: string
  newBatsmanId?: string
  newBowlerId?: string
}

export const scoringApi = {
  scoreBall: async (inningId: string, ballData: ScoreBallData): Promise<Ball> => {
    const { data } = await client.post<ApiResponse<Ball>>(`/users/innings/${inningId}/deliveries`, ballData)
    return data.data
  },

  undoLastBall: async (matchId: string): Promise<void> => {
    await client.post(`/users/scoring/${matchId}/undo`)
  },

  retirePlayer: async (matchId: string, playerId: string, newPlayerId: string): Promise<void> => {
    await client.post(`/users/scoring/${matchId}/retire`, { playerId, newPlayerId })
  },

  changeBowler: async (matchId: string, bowlerId: string): Promise<void> => {
    await client.post(`/users/scoring/${matchId}/change-bowler`, { bowlerId })
  },

  changeBatsman: async (matchId: string, batsmanId: string, position: 'striker' | 'non-striker'): Promise<void> => {
    await client.post(`/users/scoring/${matchId}/change-batsman`, { batsmanId, position })
  },

  endInnings: async (matchId: string): Promise<void> => {
    await client.post(`/users/scoring/${matchId}/end-innings`)
  },

  endMatch: async (matchId: string): Promise<void> => {
    await client.post(`/users/scoring/${matchId}/end`)
  },

  getCommentary: async (matchId: string, page?: number): Promise<{ commentary: Ball[]; total: number }> => {
    const { data } = await client.get<ApiResponse<{ commentary: Ball[]; total: number }>>(`/users/scoring/${matchId}/commentary`, {
      params: { page },
    })
    return data.data
  },
}
