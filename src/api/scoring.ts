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

  // These routes are not implemented in the backend
  /*
  undoLastBall: async (matchId: string): Promise<void> => {
    await client.post(`/users/matches/${matchId}/undo`);
  },

  endInnings: async (matchId: string): Promise<void> => {
    await client.post(`/users/matches/${matchId}/end-innings`);
  },

  endMatch: async (matchId: string): Promise<void> => {
    await client.post(`/users/matches/${matchId}/end`);
  },
  */
};

