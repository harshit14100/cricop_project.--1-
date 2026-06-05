import { create } from "zustand";
import type {
  Match,
  ScoringState,
  Ball,
  BatsmanInnings,
  BowlerInnings,
} from "@/types";

interface ScoringStore extends ScoringState {
  setMatch: (match: Match) => void;
  updateScore: (ball: Ball) => void;
  undoLastDelivery: () => void;
  switchStriker: () => void;
  setStriker: (batsman: BatsmanInnings) => void;
  setNonStriker: (batsman: BatsmanInnings) => void;
  setCurrentBowler: (bowler: BowlerInnings) => void;
  setFreeHit: (isFreeHit: boolean) => void;
  setTwoBounceWarning: (show: boolean) => void;
  completeOver: () => void;
  resetScoring: () => void;
}

const initialState: ScoringState = {
  currentMatch: null,
  isScoring: false,
  currentOver: 0,
  currentBall: 0,
  striker: null,
  nonStriker: null,
  currentBowler: null,
  isFreeHit: false,
  lastDelivery: null,
  canUndo: false,
  showTwoBounceWarning: false,
};

export const useScoringStore = create<ScoringStore>()((set) => ({
  ...initialState,

  setMatch: (match) => {
    const innings = match.innings?.[match.currentInnings - 1];
    set({
      currentMatch: match,
      isScoring: match.status === "live",
      currentOver: innings ? Math.floor(innings.balls / 6) : 0,
      currentBall: innings ? innings.balls % 6 : 0,
    });
  },

  updateScore: (ball) =>
    set((_state) => ({
      lastDelivery: ball,
      canUndo: true,
      currentBall: (ball as any).ballNumber,
      isFreeHit: ball.isNoBall,
    })),

  undoLastDelivery: () =>
    set((_state) => ({
      lastDelivery: null,
      canUndo: false,
    })),

  switchStriker: () =>
    set((state) => ({
      striker: state.nonStriker,
      nonStriker: state.striker,
    })),

  setStriker: (batsman) => set({ striker: batsman }),
  setNonStriker: (batsman) => set({ nonStriker: batsman }),
  setCurrentBowler: (bowler) => set({ currentBowler: bowler }),
  setFreeHit: (isFreeHit) => set({ isFreeHit }),
  setTwoBounceWarning: (show) => set({ showTwoBounceWarning: show }),

  completeOver: () =>
    set((state) => ({
      currentOver: state.currentOver + 1,
      currentBall: 0,
      isFreeHit: false,
    })),

  resetScoring: () => set(initialState),
}));
