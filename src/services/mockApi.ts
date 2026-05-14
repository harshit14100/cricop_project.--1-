import { api } from './api'
import type { User, Match, Player, Series, Statistics, DashboardStats, Ball } from '@/types'

// Mock data store
const mockUsers: User[] = [
  {
    id: 'u1',
    name: 'Virat Kohli',
    email: 'virat@cricket.com',
    phone: '+919876543210',
    role: 'admin',
    createdAt: '2024-01-01',
    isActive: true,
  },
]

const mockMatches: Match[] = [
  {
    id: 'm1',
    seriesName: 'IPL 2026',
    matchType: 't20',
    totalOvers: 20,
    status: 'live',
    currentInnings: 1,
    teamA: {
      id: 't1',
      name: 'Mumbai Indians',
      shortName: 'MI',
      color: '#004ba0',
      players: [],
    },
    teamB: {
      id: 't2',
      name: 'Chennai Super Kings',
      shortName: 'CSK',
      color: '#f85c00',
      players: [],
    },
    innings: [
      {
        battingTeam: 't1',
        bowlingTeam: 't2',
        runs: 156,
        wickets: 3,
        balls: 98,
        extras: { wides: 4, noBalls: 1, byes: 0, legByes: 2, penalty: 0 },
        batsmen: [
          { playerId: 'p1', playerName: 'Rohit Sharma', runs: 45, balls: 32, fours: 4, sixes: 2, isOut: false, strikeRate: 140.6 },
          { playerId: 'p2', playerName: 'Suryakumar Yadav', runs: 38, balls: 24, fours: 3, sixes: 2, isOut: false, strikeRate: 158.3 },
        ],
        bowlers: [
          { playerId: 'p3', playerName: 'Deepak Chahar', overs: 3, balls: 4, maidens: 0, runs: 28, wickets: 1, wides: 2, noBalls: 0, economy: 7.0 },
        ],
        partnerships: [],
        fallOfWickets: [],
        isCompleted: false,
      },
    ],
    startTime: new Date().toISOString(),
  },
  {
    id: 'm2',
    matchType: 't20',
    totalOvers: 20,
    status: 'upcoming',
    currentInnings: 1,
    teamA: { id: 't3', name: 'Royal Challengers', shortName: 'RCB', color: '#ec1c24', players: [] },
    teamB: { id: 't4', name: 'Kolkata Knight Riders', shortName: 'KKR', color: '#3a225d', players: [] },
    innings: [],
    startTime: new Date(Date.now() + 86400000).toISOString(),
    venue: 'Eden Gardens',
  },
  {
    id: 'm3',
    matchType: 't20',
    totalOvers: 20,
    status: 'completed',
    currentInnings: 2,
    teamA: { id: 't1', name: 'Mumbai Indians', shortName: 'MI', color: '#004ba0', players: [] },
    teamB: { id: 't3', name: 'Royal Challengers', shortName: 'RCB', color: '#ec1c24', players: [] },
    innings: [
      {
        battingTeam: 't1',
        bowlingTeam: 't3',
        runs: 186,
        wickets: 6,
        balls: 120,
        extras: { wides: 3, noBalls: 0, byes: 1, legByes: 2, penalty: 0 },
        batsmen: [
          { playerId: 'p1', playerName: 'Rohit Sharma', runs: 68, balls: 45, fours: 8, sixes: 2, isOut: true, strikeRate: 151.1 },
          { playerId: 'p2', playerName: 'Ishan Kishan', runs: 42, balls: 28, fours: 5, sixes: 1, isOut: true, strikeRate: 150.0 },
        ],
        bowlers: [
          { playerId: 'p5', playerName: 'Mohammed Siraj', overs: 4, balls: 0, maidens: 0, runs: 38, wickets: 2, wides: 1, noBalls: 0, economy: 9.5 },
        ],
        partnerships: [],
        fallOfWickets: [],
        isCompleted: true,
      },
      {
        battingTeam: 't3',
        bowlingTeam: 't1',
        runs: 175,
        wickets: 8,
        balls: 120,
        extras: { wides: 5, noBalls: 1, byes: 0, legByes: 3, penalty: 0 },
        batsmen: [
          { playerId: 'p6', playerName: 'Virat Kohli', runs: 72, balls: 52, fours: 6, sixes: 2, isOut: true, strikeRate: 138.5 },
        ],
        bowlers: [
          { playerId: 'p7', playerName: 'Jasprit Bumrah', overs: 4, balls: 0, maidens: 0, runs: 24, wickets: 3, wides: 0, noBalls: 0, economy: 6.0 },
        ],
        partnerships: [],
        fallOfWickets: [],
        isCompleted: true,
        target: 187,
      },
    ],
    startTime: new Date(Date.now() - 172800000).toISOString(),
    endTime: new Date(Date.now() - 172800000 + 10800000).toISOString(),
    manOfTheMatch: 'Rohit Sharma',
  },
]

const mockPlayers: Player[] = [
  { id: 'p1', name: 'Virat Kohli', battingStyle: 'right-handed', bowlingStyle: 'right-arm-medium', isCaptain: true, stats: { matches: 120, runs: 4500, ballsFaced: 3200, wickets: 0, ballsBowled: 0, runsConceded: 0, catches: 45, stumpings: 0, highestScore: 113, bestBowling: '-', strikeRate: 140.6, economy: 0, average: 45.0, fifties: 35, hundreds: 5, sixes: 120, fours: 380 } },
  { id: 'p2', name: 'Rohit Sharma', battingStyle: 'right-handed', bowlingStyle: 'right-arm-offbreak', isCaptain: true, stats: { matches: 115, runs: 3800, ballsFaced: 2600, wickets: 0, ballsBowled: 0, runsConceded: 0, catches: 38, stumpings: 0, highestScore: 118, bestBowling: '-', strikeRate: 145.2, economy: 0, average: 38.0, fifties: 28, hundreds: 4, sixes: 180, fours: 320 } },
  { id: 'p3', name: 'Jasprit Bumrah', battingStyle: 'right-handed', bowlingStyle: 'right-arm-fast', stats: { matches: 98, runs: 120, ballsFaced: 80, wickets: 145, ballsBowled: 2200, runsConceded: 2800, catches: 20, stumpings: 0, highestScore: 16, bestBowling: '5/10', strikeRate: 150.0, economy: 7.6, average: 19.3, fifties: 0, hundreds: 0, sixes: 5, fours: 8 } },
  { id: 'p4', name: 'Ravindra Jadeja', battingStyle: 'left-handed', bowlingStyle: 'left-arm-spin', stats: { matches: 105, runs: 2100, ballsFaced: 1680, wickets: 89, ballsBowled: 1800, runsConceded: 2100, catches: 65, stumpings: 0, highestScore: 62, bestBowling: '4/12', strikeRate: 125.4, economy: 7.2, average: 23.6, fifties: 8, hundreds: 0, sixes: 45, fours: 150 } },
  { id: 'p5', name: 'MS Dhoni', battingStyle: 'right-handed', bowlingStyle: 'right-arm-medium', isWicketKeeper: true, stats: { matches: 130, runs: 3200, ballsFaced: 2200, wickets: 0, ballsBowled: 0, runsConceded: 0, catches: 120, stumpings: 45, highestScore: 84, bestBowling: '-', strikeRate: 138.9, economy: 0, average: 35.5, fifties: 15, hundreds: 0, sixes: 150, fours: 210 } },
]

const mockSeries: Series[] = [
  { id: 's1', name: 'IPL 2026', type: 't20', startDate: '2026-03-01', teams: ['t1', 't2', 't3', 't4'], matches: ['m1', 'm2', 'm3'], status: 'ongoing' },
]

const mockStats: Statistics = {
  topBatsmen: [
    { playerId: 'p1', playerName: 'Virat Kohli', teamName: 'RCB', value: 4500, matches: 120 },
    { playerId: 'p2', playerName: 'Rohit Sharma', teamName: 'MI', value: 3800, matches: 115 },
    { playerId: 'p5', playerName: 'MS Dhoni', teamName: 'CSK', value: 3200, matches: 130 },
    { playerId: 'p4', playerName: 'Ravindra Jadeja', teamName: 'CSK', value: 2100, matches: 105 },
    { playerId: 'p3', playerName: 'Jasprit Bumrah', teamName: 'MI', value: 120, matches: 98 },
  ],
  topBowlers: [
    { playerId: 'p3', playerName: 'Jasprit Bumrah', teamName: 'MI', value: 145, matches: 98 },
    { playerId: 'p4', playerName: 'Ravindra Jadeja', teamName: 'CSK', value: 89, matches: 105 },
  ],
  mostSixes: [
    { playerId: 'p2', playerName: 'Rohit Sharma', teamName: 'MI', value: 180, matches: 115 },
    { playerId: 'p1', playerName: 'Virat Kohli', teamName: 'RCB', value: 120, matches: 120 },
    { playerId: 'p5', playerName: 'MS Dhoni', teamName: 'CSK', value: 150, matches: 130 },
  ],
  highestStrikeRates: [
    { playerId: 'p2', playerName: 'Rohit Sharma', teamName: 'MI', value: 145.2, matches: 115 },
    { playerId: 'p1', playerName: 'Virat Kohli', teamName: 'RCB', value: 140.6, matches: 120 },
    { playerId: 'p5', playerName: 'MS Dhoni', teamName: 'CSK', value: 138.9, matches: 130 },
  ],
  economyLeaders: [
    { playerId: 'p3', playerName: 'Jasprit Bumrah', teamName: 'MI', value: 7.6, matches: 98 },
    { playerId: 'p4', playerName: 'Ravindra Jadeja', teamName: 'CSK', value: 7.2, matches: 105 },
  ],
  mvpRankings: [
    { playerId: 'p1', playerName: 'Virat Kohli', teamName: 'RCB', value: 920, matches: 120 },
    { playerId: 'p2', playerName: 'Rohit Sharma', teamName: 'MI', value: 885, matches: 115 },
    { playerId: 'p5', playerName: 'MS Dhoni', teamName: 'CSK', value: 870, matches: 130 },
  ],
}

const mockDashboardStats: DashboardStats = {
  totalMatches: 156,
  liveMatches: 1,
  upcomingMatches: 2,
  completedMatches: 153,
  totalPlayers: 48,
  totalTeams: 12,
}

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Setup mock interceptors
export function setupMockAPI() {
  api.interceptors.request.use(async (config) => {
    await delay(300)
    return config
  })

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const { config } = error
      if (!config) return Promise.reject(error)

      const url = config.url || ''
      const method = config.method?.toLowerCase()

      // AUTH ENDPOINTS
      if (url.includes('/auth/login') && method === 'post') {
        const { phone, password } = config.data
        const user = mockUsers.find(u => u.phone === phone)
        if (user && password.length >= 6) {
          return Promise.resolve({
            data: {
              success: true,
              data: {
                user,
                token: 'mock-jwt-token-' + Date.now(),
                refreshToken: 'mock-refresh-token',
              },
            },
          })
        }
        const newUser: User = {
          id: 'u' + Date.now(),
          name: 'User ' + phone.slice(-4),
          email: phone + '@cricop.com',
          phone,
          role: 'host',
          createdAt: new Date().toISOString(),
          isActive: true,
        }
        mockUsers.push(newUser)
        return Promise.resolve({
          data: {
            success: true,
            data: {
              user: newUser,
              token: 'mock-jwt-token-' + Date.now(),
              refreshToken: 'mock-refresh-token',
            },
          },
        })
      }

      if (url.includes('/auth/register') && method === 'post') {
        const { name, phone, email } = config.data
        const newUser: User = {
          id: 'u' + Date.now(),
          name,
          email,
          phone,
          role: 'host',
          createdAt: new Date().toISOString(),
          isActive: true,
        }
        mockUsers.push(newUser)
        return Promise.resolve({
          data: {
            success: true,
            data: {
              user: newUser,
              token: 'mock-jwt-token-' + Date.now(),
              refreshToken: 'mock-refresh-token',
            },
          },
        })
      }

      if (url.includes('/auth/profile') && method === 'get') {
        return Promise.resolve({
          data: { success: true, data: mockUsers[0] },
        })
      }

      if (url.includes('/auth/logout') && method === 'post') {
        return Promise.resolve({ data: { success: true } })
      }

      // MATCH ENDPOINTS
      if (url === '/matches' && method === 'get') {
        return Promise.resolve({
          data: { success: true, data: { matches: mockMatches, total: mockMatches.length } },
        })
      }

      if (url.match(/\/matches\/[^/]+$/) && method === 'get') {
        const matchId = url.split('/').pop()
        const match = mockMatches.find(m => m.id === matchId)
        if (match) {
          return Promise.resolve({ data: { success: true, data: match } })
        }
      }

      if (url.includes('/matches') && method === 'post') {
        const newMatch: Match = {
          id: 'm' + Date.now(),
          ...config.data,
          status: 'upcoming',
          currentInnings: 1,
          innings: [],
          teamA: { id: config.data.teamAId, name: 'Team A', shortName: 'TA', color: '#3b5bdb', players: [] },
          teamB: { id: config.data.teamBId, name: 'Team B', shortName: 'TB', color: '#f85c00', players: [] },
        }
        mockMatches.push(newMatch)
        return Promise.resolve({ data: { success: true, data: newMatch } })
      }

      if (url.includes('/matches/toss') && method === 'post') {
        return Promise.resolve({ data: { success: true, data: mockMatches[0] } })
      }

      if (url.match(/\/matches\/[^/]+\/start/) && method === 'post') {
        return Promise.resolve({ data: { success: true, data: mockMatches[0] } })
      }

      if (url.match(/\/matches\/[^/]+\/live/) && method === 'get') {
        return Promise.resolve({ data: { success: true, data: mockMatches[0] } })
      }

      // SCORING ENDPOINTS
      if (url.includes('/scoring/ball') && method === 'post') {
        const ball: Ball = {
          id: 'b' + Date.now(),
          inningsId: 'i1',
          overNumber: Math.floor((mockMatches[0].innings[0]?.balls || 0) / 6),
          ballNumber: ((mockMatches[0].innings[0]?.balls || 0) % 6) + 1,
          batsmanId: 'p1',
          bowlerId: 'p3',
          runs: config.data.runs || 0,
          isWicket: config.data.isWicket || false,
          isWide: config.data.isWide || false,
          isNoBall: config.data.isNoBall || false,
          isBye: config.data.isBye || false,
          isLegBye: config.data.isLegBye || false,
          isFour: config.data.runs === 4,
          isSix: config.data.runs === 6,
          commentary: `${config.data.runs || 0} runs`,
          timestamp: new Date().toISOString(),
        }
        if (mockMatches[0].innings[0]) {
          mockMatches[0].innings[0].balls += 1
          mockMatches[0].innings[0].runs += config.data.runs || 0
        }
        return Promise.resolve({ data: { success: true, data: ball } })
      }

      if (url.includes('/scoring/') && url.includes('/undo') && method === 'post') {
        return Promise.resolve({ data: { success: true } })
      }

      if (url.includes('/scoring/') && url.includes('/end-innings') && method === 'post') {
        return Promise.resolve({ data: { success: true } })
      }

      // TEAM/PLAYER ENDPOINTS
      if (url === '/teams' && method === 'get') {
        return Promise.resolve({
          data: { success: true, data: { teams: mockMatches.map(m => m.teamA).concat(mockMatches.map(m => m.teamB)), total: 4 } },
        })
      }

      if (url === '/players' && method === 'get') {
        return Promise.resolve({
          data: { success: true, data: { players: mockPlayers, total: mockPlayers.length } },
        })
      }

      if (url.match(/\/players\/[^/]+$/) && method === 'get') {
        const playerId = url.split('/').pop()
        const player = mockPlayers.find(p => p.id === playerId)
        if (player) {
          return Promise.resolve({ data: { success: true, data: player } })
        }
      }

      // STATISTICS ENDPOINTS
      if (url === '/statistics' && method === 'get') {
        return Promise.resolve({ data: { success: true, data: mockStats } })
      }

      if (url.match(/\/statistics\/player\/[^/]+$/) && method === 'get') {
        return Promise.resolve({
          data: { success: true, data: mockPlayers[0].stats },
        })
      }

      if (url === '/statistics/dashboard' && method === 'get') {
        return Promise.resolve({
          data: { success: true, data: mockDashboardStats },
        })
      }

      if (url.match(/\/matches\/[^/]+\/highlights/) && method === 'get') {
        return Promise.resolve({
          data: {
            success: true,
            data: [
              { type: 'six', description: 'Massive six over deep mid-wicket', over: 12, ball: 3 },
              { type: 'four', description: 'Cracking cover drive', over: 8, ball: 5 },
              { type: 'wicket', description: 'Clean bowled', over: 15, ball: 2 },
            ],
          },
        })
      }

      // SERIES ENDPOINTS
      if (url === '/series' && method === 'get') {
        return Promise.resolve({ data: { success: true, data: mockSeries } })
      }

      return Promise.reject(error)
    }
  )
}
