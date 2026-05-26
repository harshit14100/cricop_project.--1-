export interface User {
  id: string
  name: string
  email: string
  phone: string
  avatar?: string
  role: 'user' | 'host' | 'admin'
  createdAt: string
  isActive: boolean
}

export interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
}

export interface Team {
  id: string
  name: string
  shortName: string
  logo?: string
  color: string
  players: Player[]
  captainId?: string
  wicketKeeperId?: string
}

export interface Player {
  id: string
  name: string
  phone?: string
  avatar?: string
  battingStyle: 'right-handed' | 'left-handed'
  bowlingStyle?: 'right-arm-fast' | 'right-arm-medium' | 'right-arm-spin' | 'left-arm-fast' | 'left-arm-spin' | 'right-arm-offbreak' | 'right-arm-legbreak' | 'left-arm-orthodox' | 'left-arm-chinaman'
  isCaptain?: boolean
  isWicketKeeper?: boolean
  stats?: PlayerStats
}

export interface Series {
  id: string
  name: string
  description?: string
  type?: string
  teams?: string[]
  matches?: string[]
  status?: string
  startDate?: string
  endDate?: string
}

export interface PlayerStats {
  matches?: number
  runs?: number
  ballsFaced?: number
  wickets?: number
  ballsBowled?: number
  runsConceded?: number
  catches?: number
  stumpings?: number
  highestScore?: number
  bestBowling?: string
  strikeRate?: number
  economy?: number
  average?: number
  fifties?: number
  hundreds?: number
  sixes?: number
  fours?: number
}

export interface Match {
  id: string
  seriesName?: string
  matchType: 't20' | 'odi' | 'test' | 'custom'
  totalOvers: number
  teamA: Team
  teamB: Team
  tossWinner?: string
  tossChoice?: 'bat' | 'bowl'
  venue?: string
  umpires?: string[]
  scorers?: string[]
  status: 'upcoming' | 'live' | 'completed' | 'abandoned'
  currentInnings: number
  innings: Innings[]
  startTime?: string
  endTime?: string
  manOfTheMatch?: string
  shareableLink?: string
}

export interface Innings {
  id: string
  battingTeam: string
  bowlingTeam: string
  runs: number
  wickets: number
  balls: number
  extras: Extras
  batsmen: BatsmanInnings[]
  bowlers: BowlerInnings[]
  partnerships: Partnership[]
  fallOfWickets: FallOfWicket[]
  isCompleted: boolean
  target?: number
}

export interface Extras {
  wides: number
  noBalls: number
  byes: number
  legByes: number
  penalty: number
}

export interface BatsmanInnings {
  playerId: string
  playerName: string
  runs: number
  balls: number
  fours: number
  sixes: number
  isOut: boolean
  dismissal?: Dismissal
  strikeRate: number
}

export interface BowlerInnings {
  playerId: string
  playerName: string
  overs: number
  balls: number
  maidens: number
  runs: number
  wickets: number
  wides: number
  noBalls: number
  economy: number
}

export interface Partnership {
  batsman1Id: string
  batsman1Name: string
  batsman2Id: string
  batsman2Name: string
  runs: number
  balls: number
}

export interface FallOfWicket {
  wicketNumber: number
  runs: number
  overs: number
  batsmanName: string
  partnership: number
}

export interface Dismissal {
  type: 'bowled' | 'caught' | 'run-out' | 'lbw' | 'stumped' | 'hit-wicket' | 'retired'
  bowlerId?: string
  bowlerName?: string
  fielderId?: string
  fielderName?: string
}

export interface Ball {
  id: string
  inningsId: string
  overNumber: number
  ballNumber: number
  batsmanId: string
  bowlerId: string
  runs: number
  isWicket: boolean
  isWide: boolean
  isNoBall: boolean
  isBye: boolean
  isLegBye: boolean
  isFour: boolean
  isSix: boolean
  dismissal?: Dismissal
  commentary: string
  timestamp: string
}

export interface LiveMatchState {
  match: Match | null
  currentBatsmen: [BatsmanInnings | null, BatsmanInnings | null]
  currentBowler: BowlerInnings | null
  onStrike: string | null
  lastBalls: Ball[]
  isFreeHit: boolean
  canUndo: boolean
  isLoading: boolean
}

export interface ScoringState {
  currentMatch: Match | null
  isScoring: boolean
  currentOver: number
  currentBall: number
  striker: BatsmanInnings | null
  nonStriker: BatsmanInnings | null
  currentBowler: BowlerInnings | null
  isFreeHit: boolean
  lastDelivery: Ball | null
  canUndo: boolean
  showTwoBounceWarning: boolean
}

export interface Statistics {
  topBatsmen: PlayerRanking[]
  topBowlers: PlayerRanking[]
  mostSixes: PlayerRanking[]
  highestStrikeRates: PlayerRanking[]
  economyLeaders: PlayerRanking[]
  mvpRankings: PlayerRanking[]
}

export interface PlayerRanking {
  playerId: string
  playerName: string
  teamName: string
  value: number
  matches: number
  avatar?: string
}

export interface DashboardStats {
  totalMatches: number
  liveMatches: number
  upcomingMatches: number
  completedMatches: number
  totalPlayers: number
  totalTeams: number
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
}

export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface ApiError {
  message: string
  status: number
  errors?: Record<string, string[]>
}

export interface Toast {
  id: string
  title: string
  description?: string
  variant: 'default' | 'success' | 'error' | 'warning'
}
