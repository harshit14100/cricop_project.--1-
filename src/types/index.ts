export interface User {
  id: string;
  name: string;
  email?: string;
  phone_no: string;
  avatar?: string;
  role?: "user" | "host" | "admin";
  createdAt?: string;
  isActive?: boolean;
  battingStyle?: "right-handed" | "left-handed";
  stats?: PlayerStats;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
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

export interface Team {
  id: string;
  team_id?: string; // Compatibility
  name: string;
  short_name?: string;
  shortName?: string; // Compatibility
  logo?: string;
  color?: string;
  players?: Player[];
  captain_id?: string;
  wicket_keeper_id?: string;
  created_by?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Player {
  id: string;
  name: string;
  phone_no?: string;
  avatar?: string;
  battingStyle?: "right-handed" | "left-handed";
  bowlingStyle?: string;
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

export interface Match {
  id: string;
  status: "scheduled" | "live" | "completed" | "upcoming";
  team1_id: string;
  team2_id: string;
  team_1_name: string;
  team_2_name: string;
  venue: string;
  overs: number;
  currentInnings: number;
  total_runs?: number;
  wickets?: number;
  target?: number;
  batting_team_id?: string;
  batting_team_name?: string;
  players_per_team?: number;
  host_user_id?: string | null;
  
  // Fields for backward compatibility
  seriesName?: string;
  matchType?: string;
  started_at?: string;
  ended_at?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  toss_winner_id?: string | null;
  toss_decision?: string | null;
  winner_team_id?: string | null;
  man_of_match_id?: string | null;
  worst_player_id?: string | null;

  // Extended fields for live view
  bowling_team_name?: string;
  striker_name?: string;
  non_striker_name?: string;
  current_bowler_name?: string;
  inning_number?: number;
  inning_id?: string;
  completed_overs?: number;
  balls_in_current_over?: number;
  display_overs?: number;

  striker_id?: string;
  non_striker_id?: string;
  current_bowler_id?: string;

  teamA?: Team;
  teamB?: Team;
  innings?: Innings[];
}

export interface DeliveryPayload {
  striker_id: string;
  non_striker_id: string;
  bowler_id: string;
  runs_bat: number;
  extras: number;
  extra_type: "wide" | "no-ball" | "bye" | "leg-bye" | null;
  wicket: boolean;
  wicket_type: "bowled" | "caught" | "run-out" | "lbw" | "stumped" | "hit-wicket" | "retired" | null;
  fielder_id: string | null;
  player_out_id: string | null;
  is_free_hit: boolean;
}

export interface Scorecard {
  match_id: string;
  batting: {
    player_id: string;
    player_name: string;
    runs: number;
    balls_faced: number;
    fours: number;
    sixes: number;
    is_out: boolean;
  }[];
  bowling: {
    player_id: string;
    player_name: string;
    overs_bowled: number;
    runs_conceded: number;
    wickets: number;
  }[];
}

export interface Innings {
  id: string;
  inning_number?: number;
  battingTeam: string;
  bowlingTeam?: string;
  runs: number;
  wickets: number;
  balls: number;
  extras?: Extras;
  batsmen: BatsmanInnings[];
  bowlers: BowlerInnings[];
  partnerships?: Partnership[];
  fallOfWickets?: FallOfWicket[];
  isCompleted?: boolean;
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
  playerName?: string;
  runs: number;
  balls: number;
  fours?: number;
  sixes?: number;
  isOut: boolean;
  dismissal?: Dismissal;
  strikeRate?: number;
}

export interface BowlerInnings {
  playerId: string;
  playerName?: string;
  overs: number;
  balls: number;
  maidens: number;
  runs: number;
  wickets: number;
  wides?: number;
  noBalls?: number;
  economy?: number;
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
