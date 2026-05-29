import { client } from "@/api";

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  role: "user" | "host" | "admin";
  createdAt: string;
  isActive: boolean;
  battingStyle?: "right-handed" | "left-handed";
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
export interface Team {
  team_id: string;
  id?: string; // Alias for backward compatibility
  name: string;

  short_name?: string;
  shortName?: string; // Alias for backward compatibility
  logo?: string;
  color?: string;

  players?: Player[];

  captain_id?: string;
  wicket_keeper_id?: string;

  created_at?: string;
}

export interface Player {
  id: string;
  name: string;
  phone?: string;
  avatar?: string;
  battingStyle: "right-handed" | "left-handed";
  bowlingStyle?:
    | "right-arm-fast"
    | "right-arm-medium"
    | "right-arm-spin"
    | "left-arm-fast"
    | "left-arm-spin"
    | "right-arm-offbreak"
    | "right-arm-legbreak"
    | "left-arm-orthodox"
    | "left-arm-chinaman";
  isCaptain?: boolean;
  isWicketKeeper?: boolean;
  stats?: PlayerStats;
}

export interface Series {
  id: string;
  name: string;
  description?: string;
  type?: string;
  teams?: string[];
  matches?: string[];
  status?: string;
  startDate?: string;
  endDate?: string;
}

export interface PlayerStats {
  matches?: number;
  runs?: number;
  ballsFaced?: number;
  wickets?: number;
  ballsBowled?: number;
  runsConceded?: number;
  catches?: number;
  stumpings?: number;
  highestScore?: number;
  bestBowling?: string;
  strikeRate?: number;
  economy?: number;
  average?: number;
  fifties?: number;
  hundreds?: number;
  sixes?: number;
  fours?: number;
}

export type MatchStatus =
  | "scheduled"
  | "live"
  | "completed"
  | "cancelled"
  | "upcoming";
export type TossDecision = "bat" | "bowl";

export interface Match {
  id: string;
  host_user_id: string | null;
  team1_id: string;
  team_1_name: string;
  team2_id: string;
  team_2_name: string;
  venue: string | null;
  overs: number;
  players_per_team: number;
  status: MatchStatus;
  toss_winner_id: string | null;
  toss_decision: TossDecision | null;
  winner_team_id: string | null;
  man_of_match_id: string | null;
  worst_player_id: string | null;
  started_at: string | null; // ISO Date String
  ended_at: string | null; // ISO Date String
  created_at: string; // ISO Date String
  updated_at: string; // ISO Date String

  // Frontend-specific extensions (often joined by backend)
  teamA?: Team;
  teamB?: Team;
  innings: Innings[];
  currentInnings: number;
  seriesName?: string;
  matchType?: "t20" | "odi" | "test" | "custom";
  shareableLink?: string;

  // Live scoring fields
  batting_team_name?: string;
  bowling_team_name?: string;
  total_runs?: number;
  wickets?: number;
  completed_overs?: number;
  balls_in_current_over?: number;
  striker_name?: string;
  non_striker_name?: string;

  striker_id?: string;
  non_striker_id?: string;
  current_bowler_id?: string;
}

export interface SuperStartMatchPayload {
  team1_id: string;
  team2_id: string;

  venue: string;
  overs: number;

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

export const matchesApi = {
  async setupMatch(payload: SuperStartMatchPayload) {
    const response = await client.post("/users/matches/setup", payload);

    return response.data;
  },
};

export interface StartMatchPayload {
  team1_id: string;
  team2_id: string;

  venue: string;
  overs: number;

  toss_winner_id: string;
  toss_decision: "bat" | "bowl";

  batting_team_id: string;
  bowling_team_id: string;

  striker_id: string;
  non_striker_id: string;

  current_bowler_id: string;
}

export interface CreateMatchPayload {
  team1_id: string;
  team2_id: string;

  venue: string;
  overs: number;
  players_per_team: number;

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

export interface Innings {
  id: string;
  battingTeam: string;
  bowlingTeam: string;
  runs: number;
  wickets: number;
  balls: number;
  extras: Extras;
  batsmen: BatsmanInnings[];
  bowlers: BowlerInnings[];
  partnerships: Partnership[];
  fallOfWickets: FallOfWicket[];
  isCompleted: boolean;
  target?: number;
}

export interface Extras {
  wides: number;
  noBalls: number;
  byes: number;
  legByes: number;
  penalty: number;
}

export interface BatsmanInnings {
  playerId: string;
  playerName: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  isOut: boolean;
  dismissal?: Dismissal;
  strikeRate: number;
}

export interface BowlerInnings {
  playerId: string;
  playerName: string;
  overs: number;
  balls: number;
  maidens: number;
  runs: number;
  wickets: number;
  wides: number;
  noBalls: number;
  economy: number;
}

export interface Partnership {
  batsman1Id: string;
  batsman1Name: string;
  batsman2Id: string;
  batsman2Name: string;
  runs: number;
  balls: number;
}

export interface FallOfWicket {
  wicketNumber: number;
  runs: number;
  overs: number;
  batsmanName: string;
  partnership: number;
}

export interface Dismissal {
  type:
    | "bowled"
    | "caught"
    | "run-out"
    | "lbw"
    | "stumped"
    | "hit-wicket"
    | "retired";
  bowlerId?: string;
  bowlerName?: string;
  fielderId?: string;
  fielderName?: string;
}

export interface Ball {
  id: string;
  matchId: string;
  inningsId: string;
  batsmanId: string;
  bowlerId: string;
  batsmanRuns: number;
  extraRuns: number;
  totalRuns: number;
  isWicket: boolean;
  isWide: boolean;
  isNoBall: boolean;
  isBye: boolean;
  isLegBye: boolean;
  isFour: boolean;
  isSix: boolean;
  dismissal?: Dismissal;
  commentary: string;
  timestamp: string;
}

export interface LiveMatchState {
  match: Match | null;
  currentBatsmen: [BatsmanInnings | null, BatsmanInnings | null];
  currentBowler: BowlerInnings | null;
  onStrike: string | null;
  lastBalls: Ball[];
  isFreeHit: boolean;
  canUndo: boolean;
  isLoading: boolean;
}

export interface ScoringState {
  currentMatch: Match | null;
  isScoring: boolean;
  currentOver: number;
  currentBall: number;
  striker: BatsmanInnings | null;
  nonStriker: BatsmanInnings | null;
  currentBowler: BowlerInnings | null;
  isFreeHit: boolean;
  lastDelivery: Ball | null;
  canUndo: boolean;
  showTwoBounceWarning: boolean;
}

export interface Statistics {
  topBatsmen: PlayerRanking[];
  topBowlers: PlayerRanking[];
  mostSixes: PlayerRanking[];
  highestStrikeRates: PlayerRanking[];
  economyLeaders: PlayerRanking[];
  mvpRankings: PlayerRanking[];
}

export interface PlayerRanking {
  playerId: string;
  playerName: string;
  teamName: string;
  value: number;
  matches: number;
  avatar?: string;
  battingStyle?: string;
  bowlingStyle?: string;
}

export interface DashboardStats {
  totalMatches: number;
  liveMatches: number;
  upcomingMatches: number;
  completedMatches: number;
  totalPlayers: number;
  totalTeams: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}

export interface Toast {
  id: string;
  title: string;
  description?: string;
  variant: "default" | "success" | "error" | "warning";
}
