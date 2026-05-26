import { useMutation, useQueryClient } from '@tanstack/react-query'
import { scoringService } from '@/services'
import { useUIStore, useMatchStore } from '@/store'

export function useScoreBall() {
  const queryClient = useQueryClient()
  const { addToast } = useUIStore()
  const { addBall } = useMatchStore()

  return useMutation({
    mutationFn: ({ inningId, ballData }: { inningId: string; ballData: any }) => 
      scoringService.scoreBall(inningId, ballData),
    onSuccess: (data) => {
      addBall(data)
      queryClient.invalidateQueries({ queryKey: ['live-match'] })
      queryClient.invalidateQueries({ queryKey: ['match'] })
    },
    onError: (error: any) => {
      addToast({ title: 'Scoring error', description: error.response?.data?.message, variant: 'error' })
    },
  })
}

export function useUndoBall() {
  const queryClient = useQueryClient()
  const { addToast } = useUIStore()
  const { undoLastBall } = useMatchStore()

  return useMutation({
    mutationFn: scoringService.undoLastBall,
    onSuccess: () => {
      undoLastBall()
      queryClient.invalidateQueries({ queryKey: ['live-match'] })
      addToast({ title: 'Last ball undone', variant: 'default' })
    },
    onError: (error: any) => {
      addToast({ title: 'Undo failed', description: error.response?.data?.message, variant: 'error' })
    },
  })
}

export function useEndInnings() {
  const queryClient = useQueryClient()
  const { addToast } = useUIStore()

  return useMutation({
    mutationFn: scoringService.endInnings,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['live-match'] })
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
    mutationFn: scoringService.endMatch,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['matches'] })
      addToast({ title: 'Match completed!', variant: 'success' })
    },
    onError: (error: any) => {
      addToast({ title: 'Error', description: error.response?.data?.message, variant: 'error' })
    },
  })
}
