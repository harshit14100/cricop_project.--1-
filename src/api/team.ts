import client from "./client";
import type { Team, Player, ApiResponse } from "@/types";

export const teamApi = {
  getTeams: async (params?: { search?: string; page?: number; limit?: number }): Promise<{ teams: Team[]; total: number }> => {
    try {
      const { data } = await client.get<any>("/users/teams", { params });
      
      if (data?.data) {
        return data.data;
      }
      
      if (Array.isArray(data)) {
        return { teams: data, total: data.length };
      }

      return { teams: [], total: 0 };
    } catch (error) {
      console.error("Failed to fetch teams:", error);
      return { teams: [], total: 0 };
    }
  },

  getTeam: async (id: string): Promise<Team> => {
    const { data } = await client.get<any>(`/users/teams/${id}`);
    return data?.data || data;
  },

  createTeam: async (teamData: Omit<Team, "id">): Promise<Team> => {
    const { data } = await client.post<any>("/users/teams", teamData);
    return data?.data || data;
  },

  updateTeam: async (id: string, teamData: Partial<Team>): Promise<Team> => {
    const { data } = await client.put<any>(`/users/teams/${id}`, teamData);
    return data?.data || data;
  },

  deleteTeam: async (id: string): Promise<void> => {
    await client.delete(`/users/teams/${id}`);
  },

  getPlayers: async (params?: {
    search?: string;
    teamId?: string;
    page?: number;
    limit?: number;
  }): Promise<{ players: Player[]; total: number }> => {
    const url = params?.teamId
      ? `/users/teams/${params.teamId}/players`
      : "/users/players";
    const { data } = await client.get<any>(url, { params });
    
    if (data?.data) return data.data;
    if (Array.isArray(data)) return { players: data, total: data.length };
    return { players: [], total: 0 };
  },

  getPlayer: async (id: string): Promise<Player> => {
    const { data } = await client.get<any>(`/users/players/${id}`);
    return data?.data || data;
  },

  addPlayerToTeam: async (teamId: string, playerId: string): Promise<void> => {
    await client.post(`/users/teams/${teamId}/player`, { playerId });
  },

  createPlayer: async (playerData: Omit<Player, "id">): Promise<Player> => {
    const { data } = await client.post<any>("/users/players", playerData);
    return data?.data || data;
  },

  updatePlayer: async (
    id: string,
    playerData: Partial<Player>,
  ): Promise<Player> => {
    const { data } = await client.put<any>(`/users/players/${id}`, playerData);
    return data?.data || data;
  },

  deletePlayer: async (id: string): Promise<void> => {
    await client.delete(`/users/players/${id}`);
  },
};
