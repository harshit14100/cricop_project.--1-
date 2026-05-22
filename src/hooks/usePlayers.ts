import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { playerService } from "@/services";
import type { Player } from "@/types";


export function usePlayers(
  search?: string,
  teamId?: string,
  page = 1,
  limit = 20,
) {
  return useQuery({
    queryKey: ["players", search, teamId, page, limit],
    queryFn: () => playerService.getPlayers(search, teamId, page, limit),
    staleTime: 60000,
  });
}

export function usePlayer(id: string) {
  return useQuery({
    queryKey: ["player", id],
    queryFn: () => playerService.getPlayer(id),
    enabled: !!id,
  });
}

export function usePlayerStats(id: string) {
  return useQuery({
    queryKey: ["player-stats", id],
    queryFn: () => playerService.getStats(id),
    enabled: !!id,
  });
}

export function useCreatePlayer() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Partial<Player>) => playerService.createPlayer(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["players"] });
    },
  });
}
