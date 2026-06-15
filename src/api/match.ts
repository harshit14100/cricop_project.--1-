import client from "./client";
import type { Match, Scorecard } from "@/types";

export interface CreateMatchPayload {
  team1_id: string;
  team2_id: string;
  venue: string;
  overs: number;
  players_per_team: number;
}

export interface SuperSetupPayload extends CreateMatchPayload {
  team1_players: string[];
  team2_players: string[];
  toss_winner_id: string;
  toss_decision: "bat" | "bowl";
  batting_team_id: string;
  bowling_team_id: string;
  striker_id: string;
  non_striker_id: string;
  current_bowler_id: string;
}

interface TossData {
  matchId: string;
  toss_winner_id: string;
  toss_decision: "bat" | "bowl";
}

export const matchApi = {
  getMatches: async (): Promise<Match[]> => {
    const response = await client.get<any>("/users/matches");
    const data = response.data;
    if (Array.isArray(data)) return data;
    return data?.data || [];
  },

  getMatch: async (id: string): Promise<Match> => {
    const { data } = await client.get(`/users/matches/${id}`);
    const match = data.data ?? data;
    // Handle inconsistent naming from backend MatchDetailsResponse
    if (match.match_id && !match.id) match.id = match.match_id;
    if (match.team1_name && !match.team_1_name) match.team_1_name = match.team1_name;
    if (match.team2_name && !match.team_2_name) match.team_2_name = match.team2_name;
    return match;
  },

  createMatch: async (payload: CreateMatchPayload): Promise<{ message: string; id: string }> => {
    const response = await client.post("/users/matches", payload);
    return response.data;
  },

  superSetupMatch: async (payload: SuperSetupPayload): Promise<{ message: string; match_id: string }> => {
    const response = await client.post("/users/matches/setup", payload);
    return response.data;
  },

  setToss: async (tossData: TossData): Promise<{ message: string }> => {
    // Backend route uses :matchid but handler uses c.Param("id") which is a mismatch.
    // We'll use matchid to match the route, but this might still fail in the backend.
    const { data } = await client.post(
      `/users/matches/${tossData.matchId}/toss`,
      {
        toss_winner_id: tossData.toss_winner_id,
        toss_decision: tossData.toss_decision,
      },
    );
    return data;
  },

  getLiveMatch: async (matchId: string): Promise<Match> => {
    const response = await client.get<any>(`/users/matches/${matchId}/live`);
    const match = response.data?.data || response.data;
    
    // Handle inconsistent naming from backend LiveMatchStateResponse
    if (match.match_id && !match.id) match.id = match.match_id;
    if (match.team_1_name && !match.team_1_name) match.team_1_name = match.team_1_name;
    if (match.team_2_name && !match.team_2_name) match.team_2_name = match.team_2_name;

    // Ensure inning_id is populated
    if (!match.inning_id && match.innings && match.innings.length > 0) {
      // Find the most recent innings
      const currentInning = match.innings.reduce((prev: any, current: any) => 
        (prev.inning_number > current.inning_number) ? prev : current
      );
      match.inning_id = currentInning.id;
    }

    return match;
  },

  getMatchScorecard: async (matchId: string): Promise<Scorecard> => {
    const response = await client.get<any>(`/users/matches/${matchId}/scorecard`);
    return response.data?.data || response.data;
  },

  getMatchPlayers: async (matchId: string): Promise<any[]> => {
    const response = await client.get<any>(`/users/matches/${matchId}/players`);
    return response.data?.data || response.data || [];
  },

  updateMatchState: async (matchId: string, payload: { striker_id?: string; non_striker_id?: string; current_bowler_id?: string }): Promise<{ message: string }> => {
    const response = await client.patch(`/users/matches/${matchId}/state`, payload);
    return response.data;
  },

  startInning: async (matchId: string, payload: { inning_number: number; batting_team_id: string; bowling_team_id: string }): Promise<{ message: string; inning_id: string }> => {
    const response = await client.post(`/users/matches/${matchId}/innings`, payload);
    return response.data;
  },
};
