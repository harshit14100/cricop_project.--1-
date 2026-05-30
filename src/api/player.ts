import client from "./client";
import type {
  Player,
  PlayerStats,
} from "@/types";

export const playerApi = {
  getPlayers: async (): Promise<{ players: Player[]; total: number }> => {
    const response = await client.get<any>("/users/players");
    const data = response.data;
    
    if (Array.isArray(data)) {
      return { players: data, total: data.length };
    }
    
    const mainData = data.data || data;
    const players = mainData.players || (Array.isArray(mainData) ? mainData : []);
    const total = mainData.total || players.length;
    
    return { players, total };
  },

  getPlayer: async (id: string): Promise<Player> => {
    const { data } = await client.get<Player>(`/users/players/${id}`);
    return data;
  },

  createPlayer: async (playerData: Partial<Player>): Promise<Player> => {
    const { data } = await client.post<Player>("/users/players", playerData);
    return data;
  },

  updatePlayer: async (
    id: string,
    playerData: Partial<Player>,
  ): Promise<Player> => {
    const { data } = await client.patch<Player>(`/users/players/${id}`, playerData);
    return data;
  },

  deletePlayer: async (id: string): Promise<void> => {
    await client.delete(`/users/players/${id}`);
  },

  getStats: async (id: string): Promise<PlayerStats> => {
    const { data } = await client.get<PlayerStats>(`/users/players/${id}/stats`);
    return data;
  },

  uploadAvatar: async (
    id: string,
    file: File,
  ): Promise<{ avatar: string }> => {
    const formData = new FormData();
    formData.append("avatar", file);
    const { data } = await client.post<{ avatar: string }>(`/users/players/${id}/avatar`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
  },
};
