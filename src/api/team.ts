import client from "./client";
import type { Team, Player } from "@/types";

export const teamApi = {
  getTeams: async (): Promise<Team[]> => {
    const { data } = await client.get<Team[]>("/users/teams");
    return data;
  },

  getTeam: async (id: string): Promise<Team | null> => {
    const { data } = await client.get<Team>(`/users/teams/${id}`);
    return data;
  },

  createTeam: async (teamData: Omit<Team, "id">): Promise<{ message: string }> => {
    const { data } = await client.post<{ message: string }>("/users/teams", teamData);
    return data;
  },

  getTeamPlayers: async (teamId: string): Promise<Player[]> => {
    const { data } = await client.get<any>(`/users/teams/${teamId}/players`);
    if (Array.isArray(data)) return data;
    return data?.data || [];
  },
};
