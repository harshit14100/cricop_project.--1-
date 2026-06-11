import client from "./client";
import type { DeliveryPayload } from "@/types";

export const scoringApi = {
  scoreBall: async (
    inningId: string,
    ballData: DeliveryPayload,
  ): Promise<{ message: string }> => {
    const { data } = await client.post(
      `/users/innings/${inningId}/deliveries`,
      ballData,
    );
    return data;
  },

  undoLastBall: async (matchId: string): Promise<void> => {
    const { data } = await client.post(`/users/matches/${matchId}/undo`);
    return data;
  },

  endInnings: async (matchId: string): Promise<void> => {
    const { data } = await client.post(`/users/matches/${matchId}/end-innings`);
    return data;
  },

  endMatch: async (matchId: string): Promise<void> => {
    const { data } = await client.post(`/users/matches/${matchId}/end`);
    return data;
  },
};

