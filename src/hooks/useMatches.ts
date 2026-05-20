import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { matchService } from '@/services'
import { useUIStore } from '@/store'

export function useMatches(params?: { status?: string; page?: number; limit?: number }) {
  return useQuery({
    queryKey: ['matches', params],
    queryFn: () => matchService.getMatches(params),
    refetchInterval: params?.status === 'live' ? 2000 : 10000,
  })
}

export function useMatch(id: string) {
  return useQuery({
    queryKey: ['match', id],
    queryFn: () => matchService.getMatch(id),
    enabled: !!id,
    refetchInterval: 2000,
  })
}

export function useLiveMatch(id: string) {
  return useQuery({
    queryKey: ['live-match', id],
    queryFn: () => matchService.getLiveMatch(id),
    enabled: !!id,
    refetchInterval: 2000,
  })
}

export function useCreateMatch() {
  const queryClient = useQueryClient()
  const { addToast } = useUIStore()

  return useMutation({
    mutationFn: matchService.createMatch,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['matches'] })
      addToast({ title: 'Match created!', description: `${data.teamA.name} vs ${data.teamB.name}`, variant: 'success' })
      return data
    },
    onError: (error: any) => {
      addToast({ title: 'Failed to create match', description: error.response?.data?.message, variant: 'error' })
    },
  })
}

export function useSetToss() {
  const queryClient = useQueryClient()
  const { addToast } = useUIStore()

  return useMutation({
    mutationFn: matchService.setToss,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['match', data.id] })
      addToast({ title: 'Toss completed!', variant: 'success' })
    },
    onError: (error: any) => {
      addToast({ title: 'Toss failed', description: error.response?.data?.message, variant: 'error' })
    },
  })
}

export function useStartMatch() {
  const queryClient = useQueryClient()
  const { addToast } = useUIStore()

  return useMutation({
    mutationFn: matchService.startMatch,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['match', data.id] })
      addToast({ title: 'Match started!', description: 'Good luck!', variant: 'success' })
    },
    onError: (error: any) => {
      addToast({ title: 'Failed to start match', description: error.response?.data?.message, variant: 'error' })
    },
  })
}
