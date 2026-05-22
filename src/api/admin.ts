import client from "./client";
import type { ApiResponse, User, Match, PaginatedResponse } from "@/types";

export const adminApi = {
  getUsers: async (
    page = 1,
    limit = 50,
  ): Promise<ApiResponse<PaginatedResponse<User>>> => {
    const response = await client.get("/admin/users", { params: { page, limit } });
    return response.data;
  },

  updateUserRole: async (
    userId: string,
    role: string,
  ): Promise<ApiResponse<User>> => {
    const response = await client.patch(`/admin/users/${userId}/role`, { role });
    return response.data;
  },

  getReportedMatches: async (): Promise<ApiResponse<Match[]>> => {
    const response = await client.get("/admin/matches/reported");
    return response.data;
  },

  getSystemStats: async (): Promise<
    ApiResponse<{
      totalUsers: number;
      totalMatches: number;
      liveMatches: number;
      totalPlayers: number;
      activeToday: number;
    }>
  > => {
    const response = await client.get("/admin/stats");
    return response.data;
  },

  featureMatch: async (matchId: string): Promise<ApiResponse<Match>> => {
    const response = await client.post(`/admin/matches/${matchId}/feature`);
    return response.data;
  },

  deleteMatch: async (matchId: string): Promise<ApiResponse<void>> => {
    const response = await client.delete(`/admin/matches/${matchId}`);
    return response.data;
  },
};
