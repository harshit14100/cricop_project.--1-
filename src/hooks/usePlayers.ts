import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { playerService } from "@/services";
import { useUIStore } from "@/store";
import type { Player } from "@/types";

export function usePlayers(_params?: any) {
  return useQuery({
    queryKey: ["players"],
    queryFn: async () => {
      const response = await playerService.getPlayers();
      return response || { players: [], total: 0 };
    },
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
  const { addToast } = useUIStore();

  return useMutation({
    mutationFn: (data: Partial<Player>) => playerService.createPlayer(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["players"] });
      addToast({ title: "Player added!", variant: "success" });
    },
    onError: (error: any) => {
      addToast({
        title: "Failed to add player",
        description: error.response?.data?.message || "Check your backend connection",
        variant: "error",
      });
    },
  });
}
