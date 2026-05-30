import client from "./client";
import type { Match, CreateMatchPayload } from "@/types";

interface TossData {
  matchId: string;
  winner_team_id: string;
  choice: "bat" | "bowl";
}

export const matchApi = {
  getMatches: async (params?: {
    status?: string;
    page?: number;
    limit?: number;
  }): Promise<{ matches: Match[]; total: number }> => {
    const response = await client.get<any>("/users/matches", { params });
    const data = response.data;
    
    if (Array.isArray(data)) {
      return { matches: data, total: data.length };
    }

    // Handle nested success/data wrapper from mock/some backends
    const mainData = data.data || data;
    const matches = mainData.matches || (Array.isArray(mainData) ? mainData : []);
    const total = mainData.total || matches.length;
    
    return { matches, total };
  },

  getMatch: async (id: string): Promise<Match> => {
    const { data } = await client.get<Match>(
      `/users/matches/${id}`,
    );
    return data;
  },

  createMatch: async (payload: CreateMatchPayload) => {
    const response = await client.post("/users/matches/setup", payload);

    console.log("CREATE MATCH RESPONSE:", response.data);

    return response.data;
  },

  updateMatch: async (
    id: string,
    matchData: Partial<Match>,
  ): Promise<Match> => {
    const { data } = await client.put<Match>(
      `/users/matches/${id}`,
      matchData,
    );
    return data;
  },

  deleteMatch: async (id: string): Promise<void> => {
    await client.delete(`/users/matches/${id}`);
  },

  setToss: async (tossData: TossData): Promise<any> => {
    const { data } = await client.post(
      `/users/matches/${tossData.matchId}/toss`,
      {
        toss_winner_id: tossData.winner_team_id,
        toss_decision: tossData.choice,
      },
    );
    return data;
  },

  startMatch: async (matchId: string) => {
    // The spec says /users/matches/start but usually it needs an ID. 
    // If it's in the body or URL depends on the actual backend implementation.
    // Keeping it as a POST but removing .data.data
    const { data } = await client.post(`/users/matches/start`, { match_id: matchId });

    console.log("START MATCH RESPONSE:", data);

    return data;
  },

  getLiveMatch: async (matchId: string): Promise<Match> => {
    const response = await client.get(`/users/matches/${matchId}/live`);

    console.log("LIVE API RESPONSE:", response.data);

    return response.data.data;
  },

  getShareableLink: async (matchId: string): Promise<string> => {
    const { data } = await client.get<{ link: string }>(
      `/users/matches/${matchId}/share`,
    );
    return data.link;
  },
};
