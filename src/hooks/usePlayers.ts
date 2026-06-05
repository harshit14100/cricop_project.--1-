import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { playerService } from "@/services";
import { useUIStore } from "@/store";
import type { Player } from "@/types";

import { playerApi } from "../api/player";

export const usePlayers = () => {
  return useQuery({
    queryKey: ["players"],
    queryFn: () => playerApi.getPlayers(),
  });
};

export const usePlayer = (playerId: string) => {
  return useQuery({
    queryKey: ["player", playerId],
    queryFn: () => playerApi.getPlayer(playerId),
    enabled: !!playerId,
  });
};

export const usePlayerStats = (playerId: string) => {
  return useQuery({
    queryKey: ["player-stats", playerId],
    queryFn: () => playerApi.getStats(playerId),
    enabled: !!playerId,
  });
};

export const usePlayerCareerStats = (playerId: string) => {
  return useQuery({
    queryKey: ["player-career-stats", playerId],
    queryFn: () => playerApi.getPlayerCareerStats(playerId),
    enabled: !!playerId,
  });
};

export const usePlayerMatchStats = (playerId: string, matchId: string) => {
  return useQuery({
    queryKey: ["player-match-stats", playerId, matchId],
    queryFn: () => playerApi.getPlayerMatchStats(playerId, matchId),
    enabled: !!playerId && !!matchId,
  });
};

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
        description:
          error.response?.data?.message || "Check your backend connection",
        variant: "error",
      });
    },
  });
}
