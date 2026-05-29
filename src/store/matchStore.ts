import { create } from "zustand";
import type { Match, LiveMatchState, Ball } from "@/types";

interface MatchStore {
  matches: Match[];
  currentMatch: Match | null;
  liveState: LiveMatchState;
  setMatches: (matches: Match[]) => void;
  setCurrentMatch: (match: Match | null) => void;
  updateLiveState: (state: Partial<LiveMatchState>) => void;
  addBall: (ball: Ball) => void;
  undoLastBall: () => void;
  resetLiveState: () => void;
}

const initialLiveState: LiveMatchState = {
  match: null,
  currentBatsmen: [null, null],
  currentBowler: null,
  onStrike: null,
  lastBalls: [],
  isFreeHit: false,
  canUndo: false,
  isLoading: false,
};

export const useMatchStore = create<MatchStore>((set) => ({
  matches: [],
  currentMatch: null,
  liveState: initialLiveState,
  setMatches: (matches) => set({ matches }),
  setCurrentMatch: (currentMatch) => set({ currentMatch }),
  updateLiveState: (state) =>
    set((prev) => ({ liveState: { ...prev.liveState, ...state } })),
  addBall: (ball) =>
    set((prev) => {
      const currentInnings =
        prev.liveState.match?.innings[prev.liveState.match.currentInnings - 1];
      if (currentInnings) {
        if (!ball.isWide && !ball.isNoBall) currentInnings.balls += 1;
        currentInnings.runs += (ball as any).runs;
      }
      return {
        liveState: {
          ...prev.liveState,
          lastBalls: [ball, ...prev.liveState.lastBalls].slice(0, 6),
          canUndo: true,
        },
      };
    }),
  undoLastBall: () =>
    set((prev) => ({
      liveState: {
        ...prev.liveState,
        lastBalls: prev.liveState.lastBalls.slice(1),
        canUndo: prev.liveState.lastBalls.length > 1,
      },
    })),
  resetLiveState: () => set({ liveState: initialLiveState }),
}));
