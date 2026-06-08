import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { matchService } from '@/services'
import client from '@/api/client'
import { useUIStore } from '@/store'

export function useMatches() {
  return useQuery({
    queryKey: ['matches'],
    queryFn: () => matchService.getMatches(),
    refetchInterval: 10000,
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
      addToast({ title: 'Match created!', variant: 'success' })
      return data
    },
    onError: (error: any) => {
      addToast({ title: 'Failed to create match', description: error.response?.data?.message, variant: 'error' })
    },
  })
}

export function useSuperSetupMatch() {
  const queryClient = useQueryClient()
  const { addToast } = useUIStore()

  return useMutation({
    mutationFn: matchService.superSetupMatch,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['matches'] })
      queryClient.invalidateQueries({ queryKey: ['match', data.match_id] })
      addToast({ title: 'Match set up successfully!', variant: 'success' })
      return data
    },
    onError: (error: any) => {
      addToast({ title: 'Failed to set up match', description: error.response?.data?.message, variant: 'error' })
    },
  })
}

export function useStartMatch() {
  const queryClient = useQueryClient()
  const { addToast } = useUIStore()

  return useMutation({
    mutationFn: async (payload: any) => {
       const response = await client.post(`/users/matches/start`, payload);
       return response.data;
    },
    onSuccess: (data: any) => {
      const matchId = data.match_id || data.id;
      queryClient.invalidateQueries({ queryKey: ['matches'] })
      queryClient.invalidateQueries({ queryKey: ['match', matchId] })
      queryClient.invalidateQueries({ queryKey: ['live-match', matchId] })
      addToast({ title: 'Match started!', description: 'Good luck!', variant: 'success' })
      return data
    },
    onError: (error: any) => {
      addToast({ title: 'Failed to start match', description: error.response?.data?.message, variant: 'error' })
    },
  })
}

export function useSetToss() {
  const queryClient = useQueryClient()
  const { addToast } = useUIStore()

  return useMutation({
    mutationFn: matchService.setToss,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['match', variables.matchId] })
      addToast({ title: 'Toss completed!', variant: 'success' })
    },
    onError: (error: any) => {
      addToast({ title: 'Toss failed', description: error.response?.data?.message, variant: 'error' })
    },
  })
}

export function useMatchScorecard(id: string) {
  return useQuery({
    queryKey: ['match-scorecard', id],
    queryFn: () => matchService.getMatchScorecard(id),
    enabled: !!id,
    refetchInterval: 5000,
  })
}

export function useMatchPlayers(id: string) {
  return useQuery({
    queryKey: ['match-players', id],
    queryFn: () => matchService.getMatchPlayers(id),
    enabled: !!id,
    staleTime: 60000,
  })
}

export function useUpdateMatchState() {
  const queryClient = useQueryClient()
  const { addToast } = useUIStore()

  return useMutation({
    mutationFn: ({ matchId, payload }: { matchId: string; payload: any }) => 
      matchService.updateMatchState(matchId, payload),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['match', variables.matchId] })
      queryClient.invalidateQueries({ queryKey: ['live-match', variables.matchId] })
    },
    onError: (error: any) => {
      addToast({ title: 'Error', description: error.response?.data?.message, variant: 'error' })
    },
  })
}

export function useStartInning() {
  const queryClient = useQueryClient()
  const { addToast } = useUIStore()

  return useMutation({
    mutationFn: ({ matchId, payload }: { matchId: string; payload: any }) => 
      matchService.startInning(matchId, payload),
    onSuccess: (data: any, variables) => {
      const matchId = variables.matchId;
      queryClient.invalidateQueries({ queryKey: ['match', matchId] })
      queryClient.invalidateQueries({ queryKey: ['live-match', matchId] })
      addToast({ title: 'Inning started!', variant: 'success' })
      return data
    },
    onError: (error: any) => {
      addToast({ title: 'Failed to start inning', description: error.response?.data?.message, variant: 'error' })
    },
  })
}
