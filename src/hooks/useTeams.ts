import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { teamService } from '@/services'
import { useUIStore } from '@/store'

export function useTeams(params?: { search?: string; page?: number; limit?: number }) {
  return useQuery({
    queryKey: ['teams', params],
    queryFn: () => teamService.getTeams(params),
  })
}

export function useTeam(id: string) {
  return useQuery({
    queryKey: ['team', id],
    queryFn: () => teamService.getTeam(id),
    enabled: !!id,
  })
}

export function useCreateTeam() {
  const queryClient = useQueryClient()
  const { addToast } = useUIStore()

  return useMutation({
    mutationFn: teamService.createTeam,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['teams'] })
      addToast({ title: 'Team created!', variant: 'success' })
    },
    onError: (error: any) => {
      addToast({ title: 'Failed to create team', description: error.response?.data?.message, variant: 'error' })
    },
  })
}

export function usePlayers(params?: { search?: string; teamId?: string; page?: number; limit?: number }) {
  return useQuery({
    queryKey: ['players', params],
    queryFn: () => teamService.getPlayers(params),
  })
}

export function usePlayer(id: string) {
  return useQuery({
    queryKey: ['player', id],
    queryFn: () => teamService.getPlayer(id),
    enabled: !!id,
  })
}

export function useCreatePlayer() {
  const queryClient = useQueryClient()
  const { addToast } = useUIStore()

  return useMutation({
    mutationFn: teamService.createPlayer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['players'] })
      addToast({ title: 'Player added!', variant: 'success' })
    },
    onError: (error: any) => {
      addToast({ title: 'Failed to add player', description: error.response?.data?.message, variant: 'error' })
    },
  })
}
