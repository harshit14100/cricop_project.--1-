import client from "./client";
import type {
  ApiResponse,
  Player,
  PlayerStats,
} from "@/types";

export const playerApi = {
  getPlayers: async (): Promise<any> => {
    const { data } = await client.get<ApiResponse<any>>("/users/players");
    return data.data;
  },

  getPlayer: async (id: string): Promise<Player> => {
    const { data } = await client.get<ApiResponse<Player>>(`/users/players/${id}`);
    return data.data;
  },

  createPlayer: async (playerData: Partial<Player>): Promise<Player> => {
    const { data } = await client.post<ApiResponse<Player>>("/users/players", playerData);
    return data.data;
  },

  updatePlayer: async (
    id: string,
    playerData: Partial<Player>,
  ): Promise<Player> => {
    const { data } = await client.patch<ApiResponse<Player>>(`/users/players/${id}`, playerData);
    return data.data;
  },

  deletePlayer: async (id: string): Promise<void> => {
    await client.delete(`/users/players/${id}`);
  },

  getStats: async (id: string): Promise<PlayerStats> => {
    const { data } = await client.get<ApiResponse<PlayerStats>>(`/users/players/${id}/stats`);
    return data.data;
  },

  uploadAvatar: async (
    id: string,
    file: File,
  ): Promise<{ avatar: string }> => {
    const formData = new FormData();
    formData.append("avatar", file);
    const { data } = await client.post<ApiResponse<{ avatar: string }>>(`/users/players/${id}/avatar`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return data.data;
  },
};
