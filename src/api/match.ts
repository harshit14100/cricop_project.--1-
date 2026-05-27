import client from "./client";
import type {
  Match,
  ApiResponse,
  CreateMatchPayload,
} from "@/types";

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
    const { data } = await client.get<
      ApiResponse<{ matches: Match[]; total: number }>
    >("/users/matches", { params });
    return data.data;
  },

  getMatch: async (id: string): Promise<Match> => {
    const { data } = await client.get<ApiResponse<Match>>(
      `/users/matches/${id}`,
    );
    return data.data;
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
    const { data } = await client.put<ApiResponse<Match>>(
      `/users/matches/${id}`,
      matchData,
    );
    return data.data;
  },

  deleteMatch: async (id: string): Promise<void> => {
    await client.delete(`/users/matches/${id}`);
  },

  setToss: async (tossData: TossData): Promise<Match> => {
    const { data } = await client.post<ApiResponse<Match>>(
      `/users/matches/${tossData.matchId}/toss`,
      {
        toss_winner_id: tossData.winner_team_id,
        toss_decision: tossData.choice,
      },
    );
    return data.data;
  },

  startMatch: async (matchId: string) => {
    const { data } = await client.post(`/users/matches/${matchId}/start`);

    console.log("START MATCH RESPONSE:", data);

    return data;
  },

  getLiveMatch: async (matchId: string): Promise<Match> => {
    const response = await client.get(`/users/matches/${matchId}/live`);

    console.log("LIVE API RESPONSE:", response.data);

    return response.data.data;
  },

  getShareableLink: async (matchId: string): Promise<string> => {
    const { data } = await client.get<ApiResponse<{ link: string }>>(
      `/users/matches/${matchId}/share`,
    );
    return data.data.link;
  },
};
