import client from "./client";
import type { Team, Player } from "@/types";

export const teamApi = {
  getTeams: async (params?: { search?: string; page?: number; limit?: number }): Promise<{ teams: Team[]; total: number }> => {
    try {
      const { data } = await client.get<Team[]>("/users/teams", { params });
      // The backend returns a direct array, so we wrap it to match the expected frontend structure
      return { teams: data || [], total: (data || []).length };
    } catch (error) {
      console.error("Failed to fetch teams:", error);
      return { teams: [], total: 0 };
    }
  },

  getTeam: async (id: string): Promise<Team> => {
    const { data } = await client.get<Team>(`/users/teams/${id}`);
    return data;
  },

  createTeam: async (teamData: Omit<Team, "id">): Promise<any> => {
    const { data } = await client.post<{ message: string }>("/users/teams", teamData);
    return data;
  },

  updateTeam: async (id: string, teamData: Partial<Team>): Promise<Team> => {
    const { data } = await client.put<Team>(`/users/teams/${id}`, teamData);
    return data;
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
    if (params?.teamId) {
      const { data } = await client.get<Player[]>(`/users/teams/${params.teamId}/players`, { params });
      return { players: data || [], total: (data || []).length };
    } else {
      const { data } = await client.get<{ data: Player[] }>("/users/players", { params });
      return { players: data.data || [], total: (data.data || []).length };
    }
  },

  getPlayer: async (id: string): Promise<Player> => {
    const { data } = await client.get<Player>(`/users/players/${id}`);
    return data;
  },

  addPlayerToTeam: async (teamId: string, playerId: string): Promise<any> => {
    const { data } = await client.post<{ message: string }>(`/users/teams/${teamId}/player`, { playerId });
    return data;
  },

  createPlayer: async (playerData: Omit<Player, "id">): Promise<Player> => {
    const { data } = await client.post<Player>("/users/players", playerData);
    return data;
  },

  updatePlayer: async (
    id: string,
    playerData: Partial<Player>,
  ): Promise<Player> => {
    const { data } = await client.put<Player>(`/users/players/${id}`, playerData);
    return data;
  },

  deletePlayer: async (id: string): Promise<void> => {
    await client.delete(`/users/players/${id}`);
  },
};
