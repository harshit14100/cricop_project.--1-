import { client } from "../api";
import type {
  User,
  Match,
  Team,
  Player,
  Series,
  Statistics,
  DashboardStats,
  Ball,
} from "@/types";

// ... (mock data remains same)

// Mock data store
const mockUsers: User[] = [
  {
    id: "u1",
    name: "Virat Kohli",
    email: "virat@cricket.com",
    phone: "+919876543210",
    role: "admin",
    createdAt: "2024-01-01",
    isActive: true,
  },
];

const mockTeams: Team[] = [
  {
    team_id: "t1",
    id: "t1",
    name: "Mumbai Indians",
    short_name: "MI",
    color: "#004ba0",
    players: [],
  },
  {
    team_id: "t2",
    id: "t2",
    name: "Chennai Super Kings",
    short_name: "CSK",
    color: "#f85c00",
    players: [],
  },
  {
    team_id: "t3",
    id: "t3",
    name: "Royal Challengers",
    short_name: "RCB",
    color: "#ec1c24",
    players: [],
  },
  {
    team_id: "t4",
    id: "t4",
    name: "Kolkata Knight Riders",
    short_name: "KKR",
    color: "#3a225d",
    players: [],
  },
];

const mockMatches: Match[] = [
  {
    id: "m2",
    matchType: "t20",
    team1_id: "t3",
    team_1_name: "Royal Challengers",
    team2_id: "t4",
    team_2_name: "Kolkata Knight Riders",
    venue: "Eden Gardens",
    overs: 20,
    players_per_team: 11,
    status: "upcoming",
    currentInnings: 1,
    teamA: {
      team_id: "t3",
      id: "t3",
      name: "Royal Challengers",
      short_name: "RCB",
      color: "#ec1c24",
      players: [],
    },
    teamB: {
      team_id: "t4",
      id: "t4",
      name: "Kolkata Knight Riders",
      short_name: "KKR",
      color: "#3a225d",
      players: [],
    },
    innings: [],
    started_at: new Date(Date.now() + 86400000).toISOString(),
    ended_at: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    host_user_id: "u1",
    toss_winner_id: null,
    toss_decision: null,
    winner_team_id: null,
    man_of_match_id: null,
    worst_player_id: null,
  },
  {
    id: "m3",
    matchType: "t20",
    team1_id: "t1",
    team_1_name: "Mumbai Indians",
    team2_id: "t3",
    team_2_name: "Royal Challengers",
    venue: "Chinnaswamy Stadium",
    overs: 20,
    players_per_team: 11,
    status: "completed",
    currentInnings: 2,
    teamA: {
      team_id: "t1",
      id: "t1",
      name: "Mumbai Indians",
      short_name: "MI",
      color: "#004ba0",
      players: [],
    },
    teamB: {
      team_id: "t3",
      id: "t3",
      name: "Royal Challengers",
      short_name: "RCB",
      color: "#ec1c24",
      players: [],
    },
    innings: [
      {
        id: "i2",
        battingTeam: "t1",
        bowlingTeam: "t3",
        runs: 186,
        wickets: 6,
        balls: 120,
        extras: { wides: 3, noBalls: 0, byes: 1, legByes: 2, penalty: 0 },
        batsmen: [
          {
            playerId: "p1",
            playerName: "Rohit Sharma",
            runs: 68,
            balls: 45,
            fours: 8,
            sixes: 2,
            isOut: true,
            strikeRate: 151.1,
          },
          {
            playerId: "p2",
            playerName: "Ishan Kishan",
            runs: 42,
            balls: 28,
            fours: 5,
            sixes: 1,
            isOut: true,
            strikeRate: 150.0,
          },
        ],
        bowlers: [
          {
            playerId: "p5",
            playerName: "Mohammed Siraj",
            overs: 4,
            balls: 0,
            maidens: 0,
            runs: 38,
            wickets: 2,
            wides: 1,
            noBalls: 0,
            economy: 9.5,
          },
        ],
        partnerships: [],
        fallOfWickets: [],
        isCompleted: true,
      },
      {
        id: "i3",
        battingTeam: "t3",
        bowlingTeam: "t1",
        runs: 175,
        wickets: 8,
        balls: 120,
        extras: { wides: 5, noBalls: 1, byes: 0, legByes: 3, penalty: 0 },
        batsmen: [
          {
            playerId: "p6",
            playerName: "Virat Kohli",
            runs: 72,
            balls: 52,
            fours: 6,
            sixes: 2,
            isOut: true,
            strikeRate: 138.5,
          },
        ],
        bowlers: [
          {
            playerId: "p7",
            playerName: "Jasprit Bumrah",
            overs: 4,
            balls: 0,
            maidens: 0,
            runs: 24,
            wickets: 3,
            wides: 0,
            noBalls: 0,
            economy: 6.0,
          },
        ],
        partnerships: [],
        fallOfWickets: [],
        isCompleted: true,
        target: 187,
      },
    ],
    started_at: new Date(Date.now() - 172800000).toISOString(),
    ended_at: new Date(Date.now() - 172800000 + 10800000).toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    host_user_id: "u1",
    toss_winner_id: "t1",
    toss_decision: "bat",
    winner_team_id: "t1",
    man_of_match_id: "p1",
    worst_player_id: null,
  },
];

const mockPlayers: Player[] = [
  {
    id: "p1",
    name: "Virat Kohli",
    battingStyle: "right-handed",
    bowlingStyle: "right-arm-medium",
    isCaptain: true,
    stats: {
      matches: 120,
      runs: 4500,
      ballsFaced: 3200,
      wickets: 0,
      ballsBowled: 0,
      runsConceded: 0,
      catches: 45,
      stumpings: 0,
      highestScore: 113,
      bestBowling: "-",
      strikeRate: 140.6,
      economy: 0,
      average: 45.0,
      fifties: 35,
      hundreds: 5,
      sixes: 120,
      fours: 380,
    },
  },
  {
    id: "p2",
    name: "Rohit Sharma",
    battingStyle: "right-handed",
    bowlingStyle: "right-arm-offbreak",
    isCaptain: true,
    stats: {
      matches: 115,
      runs: 3800,
      ballsFaced: 2600,
      wickets: 0,
      ballsBowled: 0,
      runsConceded: 0,
      catches: 38,
      stumpings: 0,
      highestScore: 118,
      bestBowling: "-",
      strikeRate: 145.2,
      economy: 0,
      average: 38.0,
      fifties: 28,
      hundreds: 4,
      sixes: 180,
      fours: 320,
    },
  },
  {
    id: "p3",
    name: "Jasprit Bumrah",
    battingStyle: "right-handed",
    bowlingStyle: "right-arm-fast",
    stats: {
      matches: 98,
      runs: 120,
      ballsFaced: 80,
      wickets: 145,
      ballsBowled: 2200,
      runsConceded: 2800,
      catches: 20,
      stumpings: 0,
      highestScore: 16,
      bestBowling: "5/10",
      strikeRate: 150.0,
      economy: 7.6,
      average: 19.3,
      fifties: 0,
      hundreds: 0,
      sixes: 5,
      fours: 8,
    },
  },
  {
    id: "p4",
    name: "Ravindra Jadeja",
    battingStyle: "left-handed",
    bowlingStyle: "left-arm-spin",
    stats: {
      matches: 105,
      runs: 2100,
      ballsFaced: 1680,
      wickets: 89,
      ballsBowled: 1800,
      runsConceded: 2100,
      catches: 65,
      stumpings: 0,
      highestScore: 62,
      bestBowling: "4/12",
      strikeRate: 125.4,
      economy: 7.2,
      average: 23.6,
      fifties: 8,
      hundreds: 0,
      sixes: 45,
      fours: 150,
    },
  },
  {
    id: "p5",
    name: "MS Dhoni",
    battingStyle: "right-handed",
    bowlingStyle: "right-arm-medium",
    isWicketKeeper: true,
    stats: {
      matches: 130,
      runs: 3200,
      ballsFaced: 2200,
      wickets: 0,
      ballsBowled: 0,
      runsConceded: 0,
      catches: 120,
      stumpings: 45,
      highestScore: 84,
      bestBowling: "-",
      strikeRate: 138.9,
      economy: 0,
      average: 35.5,
      fifties: 15,
      hundreds: 0,
      sixes: 150,
      fours: 210,
    },
  },
];

const mockSeries: Series[] = [
  {
    id: "s1",
    name: "IPL 2026",
    type: "t20",
    startDate: "2026-03-01",
    teams: ["t1", "t2", "t3", "t4"],
    matches: ["m1", "m2", "m3"],
    status: "ongoing",
  },
];

const mockStats: Statistics = {
  topBatsmen: [
    {
      playerId: "p1",
      playerName: "Virat Kohli",
      teamName: "RCB",
      value: 4500,
      matches: 120,
    },
    {
      playerId: "p2",
      playerName: "Rohit Sharma",
      teamName: "MI",
      value: 3800,
      matches: 115,
    },
    {
      playerId: "p5",
      playerName: "MS Dhoni",
      teamName: "CSK",
      value: 3200,
      matches: 130,
    },
    {
      playerId: "p4",
      playerName: "Ravindra Jadeja",
      teamName: "CSK",
      value: 2100,
      matches: 105,
    },
    {
      playerId: "p3",
      playerName: "Jasprit Bumrah",
      teamName: "MI",
      value: 120,
      matches: 98,
    },
  ],
  topBowlers: [
    {
      playerId: "p3",
      playerName: "Jasprit Bumrah",
      teamName: "MI",
      value: 145,
      matches: 98,
    },
    {
      playerId: "p4",
      playerName: "Ravindra Jadeja",
      teamName: "CSK",
      value: 89,
      matches: 105,
    },
  ],
  mostSixes: [
    {
      playerId: "p2",
      playerName: "Rohit Sharma",
      teamName: "MI",
      value: 180,
      matches: 115,
    },
    {
      playerId: "p1",
      playerName: "Virat Kohli",
      teamName: "RCB",
      value: 120,
      matches: 120,
    },
    {
      playerId: "p5",
      playerName: "MS Dhoni",
      teamName: "CSK",
      value: 150,
      matches: 130,
    },
  ],
  highestStrikeRates: [
    {
      playerId: "p2",
      playerName: "Rohit Sharma",
      teamName: "MI",
      value: 145.2,
      matches: 115,
    },
    {
      playerId: "p1",
      playerName: "Virat Kohli",
      teamName: "RCB",
      value: 140.6,
      matches: 120,
    },
    {
      playerId: "p5",
      playerName: "MS Dhoni",
      teamName: "CSK",
      value: 138.9,
      matches: 130,
    },
  ],
  economyLeaders: [
    {
      playerId: "p3",
      playerName: "Jasprit Bumrah",
      teamName: "MI",
      value: 7.6,
      matches: 98,
    },
    {
      playerId: "p4",
      playerName: "Ravindra Jadeja",
      teamName: "CSK",
      value: 7.2,
      matches: 105,
    },
  ],
  mvpRankings: [
    {
      playerId: "p1",
      playerName: "Virat Kohli",
      teamName: "RCB",
      value: 920,
      matches: 120,
    },
    {
      playerId: "p2",
      playerName: "Rohit Sharma",
      teamName: "MI",
      value: 885,
      matches: 115,
    },
    {
      playerId: "p5",
      playerName: "MS Dhoni",
      teamName: "CSK",
      value: 870,
      matches: 130,
    },
  ],
};

const mockDashboardStats: DashboardStats = {
  totalMatches: 156,
  liveMatches: 0,
  upcomingMatches: 2,
  completedMatches: 154,
  totalPlayers: 48,
  totalTeams: 12,
};

// Store ball history for each match to support Undo
const mockBallHistory: Record<string, Ball[]> = {};

// Simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Setup mock interceptors
export function setupMockAPI() {
  client.interceptors.request.use(async (config) => {
    await delay(300);
    return config;
  });

  client.interceptors.response.use(
    (response) => response,
    async (error) => {
      const { config } = error;
      if (!config) return Promise.reject(error);

      const url = config.url || "";
      const method = config.method?.toLowerCase();

      // AUTH ENDPOINTS
      if ((url.includes("/auth/login") || url.includes("/login")) && method === "post") {
        // ...
      }

      if ((url.includes("/auth/signup") || url.includes("/auth/register")) && method === "post") {
        // ...
      }

      if (url.includes("/users/me") && method === "get") {
        return Promise.resolve({
          data: { success: true, data: mockUsers[0] },
        });
      }

      if (url.includes("/auth/logout") && method === "post") {
        return Promise.resolve({ data: { success: true } });
      }

      // MATCH ENDPOINTS
      if (url === "/users/matches" && method === "get") {
        return Promise.resolve({
          data: {
            success: true,
            data: { matches: mockMatches, total: mockMatches.length },
          },
        });
      }

      if (url.match(/\/users\/matches\/[^/]+$/) && method === "get") {
        const matchId = url.split("/").pop();
        const match = mockMatches.find((m) => m.id === matchId);
        if (match) {
          return Promise.resolve({ data: { success: true, data: match } });
        }
      }

      if (url.endsWith("/users/matches") && method === "post") {
        const payload =
          typeof config.data === "string"
            ? JSON.parse(config.data)
            : config.data;
        
        const teamAObj = mockTeams.find(t => (t.team_id || t.id) === payload.team1_id);
        const teamBObj = mockTeams.find(t => (t.team_id || t.id) === payload.team2_id);

        const newMatch: Match = {
          id: "m" + Date.now(),
          ...payload,
          team_1_name: teamAObj?.name || payload.newTeamAName || "Team A",
          team_2_name: teamBObj?.name || payload.newTeamBName || "Team B",
          status: "upcoming",
          currentInnings: 1,
          innings: [],
          teamA: {
            team_id: payload.team1_id,
            id: payload.team1_id,
            name: teamAObj?.name || payload.newTeamAName || "Team A",
            short_name: teamAObj?.short_name || "TA",
            color: teamAObj?.color || "#3b5bdb",
            players: mockPlayers.filter((p) =>
              payload.team1_players?.includes(p.id),
            ),
          },
          teamB: {
            team_id: payload.team2_id,
            id: payload.team2_id,
            name: teamBObj?.name || payload.newTeamBName || "Team B",
            short_name: teamBObj?.short_name || "TB",
            color: teamBObj?.color || "#f85c00",
            players: mockPlayers.filter((p) =>
              payload.team2_players?.includes(p.id),
            ),
          },
          started_at: new Date().toISOString(),
          ended_at: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          host_user_id: "u1",
          toss_winner_id: payload.toss_winner_id || null,
          toss_decision: payload.toss_decision || null,
          winner_team_id: null,
          man_of_match_id: null,
          worst_player_id: null,
          
          // Populate live fields
          batting_team_name: teamAObj?.name || "Team A",
          bowling_team_name: teamBObj?.name || "Team B",
          total_runs: 0,
          wickets: 0,
          completed_overs: 0,
          balls_in_current_over: 0,
          striker_name: "Select Striker",
          non_striker_name: "Select Non-Striker",
        };
        mockMatches.push(newMatch);
        return Promise.resolve({ data: { success: true, data: newMatch } });
      }

      if (url.match(/\/users\/matches\/[^/]+\/toss$/) && method === "post") {
        return Promise.resolve({
          data: { success: true, data: mockMatches[0] },
        });
      }

      if (
        url.match(/\/users\/matches\/[^/]+\/innings$/) &&
        method === "post"
      ) {
        const parts = url.split("/");
        const matchIdx = parts.indexOf("matches");
        const matchId = parts[matchIdx + 1];
        const match = mockMatches.find((m) => m.id === matchId);

        if (match && match.innings.length === 0) {
          match.status = "live";
          match.innings.push({
            id: "i" + Date.now(),
            battingTeam:
              match.toss_decision === "bat"
                ? match.toss_winner_id === match.team1_id
                  ? match.teamA?.team_id || ""
                  : match.teamB?.team_id || ""
                : match.toss_winner_id === match.team1_id
                  ? match.teamB?.team_id || ""
                  : match.teamA?.team_id || "",
            bowlingTeam:
              match.toss_decision === "bowl"
                ? match.toss_winner_id === match.team1_id
                  ? match.teamA?.team_id || ""
                  : match.teamB?.team_id || ""
                : match.toss_winner_id === match.team1_id
                  ? match.teamB?.team_id || ""
                  : match.teamA?.team_id || "",
            runs: 0,
            wickets: 0,
            balls: 0,
            extras: { wides: 0, noBalls: 0, byes: 0, legByes: 0, penalty: 0 },
            batsmen: [],
            bowlers: [],
            partnerships: [],
            fallOfWickets: [],
            isCompleted: false,
          });
        }
        return Promise.resolve({
          data: { success: true, data: match || mockMatches[0] },
        });
      }

      if (url.match(/\/matches\/[^/]+\/live/) && method === "get") {
        const parts = url.split("/");
        const matchIdx = parts.indexOf("matches");
        const matchId = parts[matchIdx + 1];
        const match = mockMatches.find((m) => m.id === matchId);
        
        if (match && match.innings.length > 0) {
          const currentInnings = match.innings[match.currentInnings - 1];
          const battingTeam = match.team1_id === currentInnings.battingTeam ? match.teamA : match.teamB;
          const bowlingTeam = match.team1_id === currentInnings.battingTeam ? match.teamB : match.teamA;
          
          match.batting_team_name = battingTeam?.name || "Batting Team";
          match.bowling_team_name = bowlingTeam?.name || "Bowling Team";
          match.total_runs = currentInnings.runs;
          match.wickets = currentInnings.wickets;
          match.completed_overs = Math.floor(currentInnings.balls / 6);
          match.balls_in_current_over = currentInnings.balls % 6;
          match.striker_name = currentInnings.batsmen.find(b => !b.isOut)?.playerName || "N/A";
          match.non_striker_name = currentInnings.batsmen.filter(b => !b.isOut)[1]?.playerName || "N/A";
        }

        return Promise.resolve({
          data: { success: true, data: match || mockMatches[0] },
        });
      }

      // SCORING ENDPOINTS
      if (url.match(/\/users\/innings\/[^/]+\/deliveries$/) && method === "post") {
        const parts = url.split("/");
        const inningIdx = parts.indexOf("innings");
        const inningId = parts[inningIdx + 1];
        
        const payload =
          typeof config.data === "string"
            ? JSON.parse(config.data)
            : config.data;
        const match = mockMatches.find((m) => m.id === payload.matchId);

        if (!match) {
          return Promise.reject({
            response: { data: { message: "Match not found" } },
          });
        }

        const currentInnings = match.innings.find(i => i.id === inningId) || match.innings[match.currentInnings - 1];
        if (!currentInnings) {
          return Promise.reject({
            response: { data: { message: "Innings not started" } },
          });
        }

        const isWide = payload.isWide || false;
        const isNoBall = payload.isNoBall || false;
        const isBye = payload.isBye || false;
        const isLegBye = payload.isLegBye || false;
        const isLegal = !isWide && !isNoBall;

        const ball: Ball = {
          id: "b" + Date.now(),
          inningsId: inningId,
          overNumber: Math.floor((currentInnings.balls || 0) / 6),
          ballNumber: ((currentInnings.balls || 0) % 6) + 1,
          batsmanId: payload.batsmanId || "p1",
          bowlerId: payload.bowlerId || "p3",
          runs: payload.runs || 0,
          isWicket: payload.isWicket || false,
          isWide,
          isNoBall,
          isBye,
          isLegBye,
          isFour: payload.runs === 4,
          isSix: payload.runs === 6,
          commentary: `${payload.runs || 0} runs${!isLegal ? " (Extra)" : ""}`,
          timestamp: new Date().toISOString(),
        };

        // Update Total Score and Balls
        const penaltyRuns = isWide || isNoBall ? 1 : 0;
        const totalRunsThisBall = (payload.runs || 0) + penaltyRuns;
        
        currentInnings.runs += totalRunsThisBall;
        if (isLegal) {
          currentInnings.balls += 1;
        }

        // Update Extras Object
        if (isWide) currentInnings.extras.wides += (1 + (payload.runs || 0));
        else if (isNoBall) currentInnings.extras.noBalls += (1 + (payload.runs || 0));
        else if (isBye) currentInnings.extras.byes += (payload.runs || 0);
        else if (isLegBye) currentInnings.extras.legByes += (payload.runs || 0);

        if (payload.isWicket) {
          currentInnings.wickets += 1;
        }

        // Auto-end innings if all players are out
        const totalPlayers = currentInnings.battingTeam === match.teamA?.team_id 
          ? match.teamA?.players?.length || 11 
          : match.teamB?.players?.length || 11;

        if (currentInnings.wickets >= totalPlayers) {
          currentInnings.isCompleted = true;
          if (match.currentInnings >= 2) {
            match.status = "completed";
          }
        }

        // Update Batsman Stats
        if (payload.batsmanId) {
          let batsman = currentInnings.batsmen.find(b => b.playerId === payload.batsmanId);
          if (!batsman) {
            const player = mockPlayers.find(p => p.id === payload.batsmanId);
            batsman = {
              playerId: payload.batsmanId,
              playerName: player?.name || "Unknown",
              runs: 0,
              balls: 0,
              fours: 0,
              sixes: 0,
              isOut: false,
              strikeRate: 0
            };
            currentInnings.batsmen.push(batsman);
          }
          
          if (!payload.isWide) {
            batsman.balls += 1;
            batsman.runs += payload.runs || 0;
            if (payload.runs === 4) batsman.fours += 1;
            if (payload.runs === 6) batsman.sixes += 1;
            batsman.strikeRate = parseFloat(((batsman.runs / batsman.balls) * 100).toFixed(2));
          }
          
          if (payload.isWicket && !payload.dismissalType?.includes("run-out")) {
            batsman.isOut = true;
          }
        }

        // Update Bowler Stats
        if (payload.bowlerId) {
          let bowler = currentInnings.bowlers.find(b => b.playerId === payload.bowlerId);
          if (!bowler) {
            const player = mockPlayers.find(p => p.id === payload.bowlerId);
            bowler = {
              playerId: payload.bowlerId,
              playerName: player?.name || "Unknown",
              overs: 0,
              balls: 0,
              maidens: 0,
              runs: 0,
              wickets: 0,
              wides: 0,
              noBalls: 0,
              economy: 0
            };
            currentInnings.bowlers.push(bowler);
          }

          const isLegal = !payload.isWide && !payload.isNoBall;
          const runsConceded = (payload.runs || 0) + (payload.isWide || payload.isNoBall ? 1 : 0);
          
          bowler.runs += runsConceded;
          if (payload.isWide) bowler.wides += 1;
          if (payload.isNoBall) bowler.noBalls += 1;
          if (payload.isWicket) bowler.wickets += 1;
          
          if (isLegal) {
            bowler.balls += 1;
            if (bowler.balls === 6) {
              bowler.overs += 1;
              bowler.balls = 0;
            }
          }
          
          const totalOverBalls = (bowler.overs * 6) + bowler.balls;
          if (totalOverBalls > 0) {
            bowler.economy = parseFloat(((bowler.runs / totalOverBalls) * 6).toFixed(2));
          }
        }

        // Save ball to history
        if (!mockBallHistory[payload.matchId]) {
          mockBallHistory[payload.matchId] = [];
        }
        mockBallHistory[payload.matchId].push(ball);

        return Promise.resolve({ data: { success: true, data: ball } });
      }

      if (
        url.includes("/users/scoring/") &&
        url.includes("/undo") &&
        method === "post"
      ) {
        const parts = url.split("/");
        const scoringIdx = parts.indexOf("scoring");
        const matchId = parts[scoringIdx + 1];
        const match = mockMatches.find((m) => m.id === matchId);
        if (!match) {
          return Promise.reject({
            response: { data: { message: "Match not found" } },
          });
        }

        const currentInnings = match.innings[match.currentInnings - 1];
        if (!currentInnings) {
          return Promise.reject({
            response: { data: { message: "Innings not started" } },
          });
        }

        const history = mockBallHistory[matchId];
        if (!history || history.length === 0) {
          return Promise.reject({
            response: { data: { message: "No balls to undo" } },
          });
        }

        const lastBall = history.pop();
        if (lastBall) {
          const isWide = lastBall.isWide || false;
          const isNoBall = lastBall.isNoBall || false;
          const isBye = lastBall.isBye || false;
          const isLegBye = lastBall.isLegBye || false;
          const isLegal = !isWide && !isNoBall;

          currentInnings.balls -= isLegal ? 1 : 0;
          const penalty = isWide || isNoBall ? 1 : 0;
          currentInnings.runs -= ((lastBall.runs || 0) + penalty);

          if (isWide) currentInnings.extras.wides -= (1 + (lastBall.runs || 0));
          else if (isNoBall) currentInnings.extras.noBalls -= (1 + (lastBall.runs || 0));
          else if (isBye) currentInnings.extras.byes -= (lastBall.runs || 0);
          else if (isLegBye) currentInnings.extras.legByes -= (lastBall.runs || 0);

          if (lastBall.isWicket) {
            currentInnings.wickets -= 1;
            currentInnings.isCompleted = false;
            match.status = "live";
          }
        }

        return Promise.resolve({ data: { success: true } });
      }

      if (
        url.includes("/users/scoring/") &&
        url.includes("/end-innings") &&
        method === "post"
      ) {
        const parts = url.split("/");
        const scoringIdx = parts.indexOf("scoring");
        const matchId = parts[scoringIdx + 1];
        const match = mockMatches.find((m) => m.id === matchId);
        if (match) {
          const currentInnings = match.innings[match.currentInnings - 1];
          if (currentInnings) currentInnings.isCompleted = true;
          
          if (match.currentInnings === 1) {
            match.currentInnings = 2;
            // Create second innings
            match.innings.push({
              id: "i" + Date.now(),
              battingTeam: currentInnings.bowlingTeam,
              bowlingTeam: currentInnings.battingTeam,
              runs: 0,
              wickets: 0,
              balls: 0,
              extras: { wides: 0, noBalls: 0, byes: 0, legByes: 0, penalty: 0 },
              batsmen: [],
              bowlers: [],
              partnerships: [],
              fallOfWickets: [],
              isCompleted: false,
              target: currentInnings.runs + 1
            });
          } else {
            match.status = "completed";
          }
        }
        return Promise.resolve({ data: { success: true } });
      }

      // MATCH End Mock Endpoint
      if (
        url.includes("/users/scoring/") &&
        url.endsWith("/end") &&
        method === "post"
      ) {
        const parts = url.split("/");
        const scoringIdx = parts.indexOf("scoring");
        const matchId = parts[scoringIdx + 1];
        const match = mockMatches.find((m) => m.id === matchId);
        if (match) {
          match.status = "completed";
          const currentInnings = match.innings[match.currentInnings - 1];
          if (currentInnings) currentInnings.isCompleted = true;
        }
        return Promise.resolve({ data: { success: true } });
      }

      // TEAM/PLAYER ENDPOINTS
      if (url === "/users/teams" && method === "get") {
        return Promise.resolve({
          data: {
            success: true,
            data: {
              teams: mockTeams,
              total: mockTeams.length,
            },
          },
        });
      }

      if (url === "/users/teams" && method === "post") {
        const payload =
          typeof config.data === "string"
            ? JSON.parse(config.data)
            : config.data;
        
        const newTeam: Team = {
          team_id: "t" + Date.now(),
          name: payload.name,
          short_name: payload.short_name,
          color: payload.color,
          players: payload.players || [],
        };

        // ...
        mockTeams.push(newTeam);
        return Promise.resolve({ data: { success: true, data: newTeam } });
      }

      if (url.match(/\/users\/teams\/[^/]+$/) && method === "get") {
        const teamId = url.split("/").pop();
        const team = mockTeams.find((t) => t.team_id === teamId);
        if (team) {
          return Promise.resolve({ data: { success: true, data: team } });
        }
      }

      if (url.match(/\/users\/teams\/[^/]+$/) && method === "put") {
        const teamId = url.split("/").pop();
        const teamIdx = mockTeams.findIndex((t) => t.team_id === teamId);
        if (teamIdx !== -1) {
          const payload =
            typeof config.data === "string"
              ? JSON.parse(config.data)
              : config.data;
          mockTeams[teamIdx] = { ...mockTeams[teamIdx], ...payload };
          return Promise.resolve({
            data: { success: true, data: mockTeams[teamIdx] },
          });
        }
      }

      if (url.match(/\/users\/teams\/[^/]+$/) && method === "delete") {
        const teamId = url.split("/").pop();
        const teamIdx = mockTeams.findIndex((t) => t.team_id === teamId);
        if (teamIdx !== -1) {
          mockTeams.splice(teamIdx, 1);
          return Promise.resolve({ data: { success: true } });
        }
      }

      if (url === "/users/players" && method === "get") {
        return Promise.resolve({
          data: {
            success: true,
            data: { players: mockPlayers, total: mockPlayers.length },
          },
        });
      }

      if (url.match(/\/users\/players\/[^/]+$/) && method === "get") {
        const playerId = url.split("/").pop();
        const player = mockPlayers.find((p) => p.id === playerId);
        if (player) {
          return Promise.resolve({ data: { success: true, data: player } });
        }
      }

      if (url === "/users/players" && method === "post") {
        const payload =
          typeof config.data === "string"
            ? JSON.parse(config.data)
            : config.data;
        const newPlayer: Player = {
          id: "p" + Date.now(),
          ...payload,
          stats: {
            // ...
          },
        };
        mockPlayers.push(newPlayer);
        return Promise.resolve({ data: { success: true, data: newPlayer } });
      }

      // STATISTICS ENDPOINTS
      if (url === "/users/statistics" && method === "get") {
        return Promise.resolve({ data: { success: true, data: mockStats } });
      }

      if (url.match(/\/users\/statistics\/player\/[^/]+$/) && method === "get") {
        return Promise.resolve({
          data: { success: true, data: mockPlayers[0].stats },
        });
      }

      if (url === "/users/statistics/dashboard" && method === "get") {
        return Promise.resolve({
          data: { success: true, data: mockDashboardStats },
        });
      }

      if (url.match(/\/users\/matches\/[^/]+\/highlights/) && method === "get") {
        return Promise.resolve({
          data: {
            success: true,
            data: [
              // ...
            ],
          },
        });
      }

      // SERIES ENDPOINTS
      if (url === "/users/series" && method === "get") {
        return Promise.resolve({ data: { success: true, data: mockSeries } });
      }

      return Promise.reject(error);
    },
  );
}
