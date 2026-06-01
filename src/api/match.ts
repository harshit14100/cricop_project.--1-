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

    const mainData = data.data || data;
    const matches =
      mainData.matches || (Array.isArray(mainData) ? mainData : []);
    const total = mainData.total || matches.length;

    return { matches, total };
  },

  getMatch: async (id: string): Promise<Match> => {
    const { data } = await client.get(`/users/matches/${id}`);
    return data.data ?? data;
  },

  createMatch: async (payload: CreateMatchPayload) => {
    const response = await client.post("/users/matches/setup", payload);
    return response.data;
  },

  updateMatch: async (
    id: string,
    matchData: Partial<Match>,
  ): Promise<Match> => {
    const { data } = await client.put(`/users/matches/${id}`, matchData);
    return data.data ?? data;
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
    const { data } = await client.post(`/users/matches/start`, {
      match_id: matchId,
    });
    return data;
  },

  getLiveMatch: async (matchId: string): Promise<Match> => {
    const response = await client.get(`/users/matches/${matchId}/live`);
    return response.data.data ?? response.data;
  },

  getShareableLink: async (matchId: string): Promise<string> => {
    const { data } = await client.get<{ link: string }>(
      `/users/matches/${matchId}/share`,
    );
    return data.link;
  },
};
