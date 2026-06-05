import { useMutation, useQueryClient } from '@tanstack/react-query'
import { scoringService } from '@/services'
import { useUIStore } from '@/store'

export function useScoreBall() {
  const queryClient = useQueryClient()
  const { addToast } = useUIStore()

  return useMutation({
    mutationFn: ({ inningId, ballData }: { inningId: string; ballData: any }) =>
      scoringService.scoreBall(inningId, ballData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['live-match'] })
      queryClient.invalidateQueries({ queryKey: ['match-scorecard'] })
    },
    onError: (error: any) => {
      addToast({ title: 'Error', description: error.response?.data?.message, variant: 'error' })
    },
  })
}

export function useUndoBall() {
  const queryClient = useQueryClient()
  const { addToast } = useUIStore()

  return useMutation({
    mutationFn: (matchId: string) => scoringService.undoLastBall(matchId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['live-match'] })
      queryClient.invalidateQueries({ queryKey: ['match-scorecard'] })
      addToast({ title: 'Ball undone', variant: 'success' })
    },
    onError: (error: any) => {
      addToast({ title: 'Error', description: error.response?.data?.message, variant: 'error' })
    },
  })
}

export function useEndInnings() {
  const queryClient = useQueryClient()
  const { addToast } = useUIStore()

  return useMutation({
    mutationFn: (matchId: string) => scoringService.endInnings(matchId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['live-match'] })
      queryClient.invalidateQueries({ queryKey: ['match-scorecard'] })
      addToast({ title: 'Innings ended', variant: 'success' })
    },
    onError: (error: any) => {
      addToast({ title: 'Error', description: error.response?.data?.message, variant: 'error' })
    },
  })
}

export function useEndMatch() {
  const queryClient = useQueryClient()
  const { addToast } = useUIStore()

  return useMutation({
    mutationFn: (matchId: string) => scoringService.endMatch(matchId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['live-match'] })
      queryClient.invalidateQueries({ queryKey: ['matches'] })
      addToast({ title: 'Match completed!', variant: 'success' })
    },
    onError: (error: any) => {
      addToast({ title: 'Error', description: error.response?.data?.message, variant: 'error' })
    },
  })
}
