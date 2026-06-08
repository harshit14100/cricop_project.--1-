import client from "./client";
import type {
  Player,
  PlayerStats,
} from "@/types";

export const playerApi = {
  getPlayers: async (): Promise<Player[]> => {
    const response = await client.get<{ data: Player[] }>("/users/players");
    return response.data?.data || [];
  },

  getPlayer: async (playerId: string): Promise<Player | null> => {
    // Temporary workaround: fetch all players and find the match
    // Ideal fix: Backend should add a `GET /users/players/:id` endpoint
    const response = await client.get<{ data: Player[] }>("/users/players");
    const players = response.data?.data || [];
    return players.find((p) => p.id === playerId) || null;
  },



  getPlayerCareerStats: async (playerId: string): Promise<PlayerStats> => {
    const { data } = await client.get<PlayerStats>(`/users/players/${playerId}/stats`);
    return data;
  },

  getPlayerMatchStats: async (playerId: string, matchId: string): Promise<any> => {
    const { data } = await client.get(`/users/players/${playerId}/matches/${matchId}/stats`);
    return data;
  },

  getStats: async (id: string): Promise<PlayerStats> => {
    const { data } = await client.get<PlayerStats>(`/users/players/${id}/stats`);
    return data;
  },
};
