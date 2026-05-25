import client from "./client";
import type {
  ApiResponse,
  Player,
  PaginatedResponse,
  PlayerStats,
} from "@/types";

export const playerApi = {
  getPlayers: async () => {
    const response = await client.get("/users/players");
    return response.data;
  },

  getPlayer: async (id: string): Promise<ApiResponse<Player>> => {
    const response = await client.get(`/users/players/${id}`);
    return response.data;
  },

  createPlayer: async (data: Partial<Player>): Promise<ApiResponse<Player>> => {
    const response = await client.post("/users/players", data);
    return response.data;
  },

  updatePlayer: async (
    id: string,
    data: Partial<Player>,
  ): Promise<ApiResponse<Player>> => {
    const response = await client.patch(`/users/players/${id}`, data);
    return response.data;
  },

  deletePlayer: async (id: string): Promise<ApiResponse<void>> => {
    const response = await client.delete(`/users/players/${id}`);
    return response.data;
  },

  getStats: async (id: string): Promise<ApiResponse<PlayerStats>> => {
    const response = await client.get(`/players/${id}/stats`);
    return response.data;
  },

  uploadAvatar: async (
    id: string,
    file: File,
  ): Promise<ApiResponse<{ avatar: string }>> => {
    const formData = new FormData();
    formData.append("avatar", file);
    const response = await client.post(`/players/${id}/avatar`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  },
};
