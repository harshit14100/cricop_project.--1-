import client from "../api/client";
import { useAuthStore } from "@/store";
import type { Player, Team, Match } from "@/types";

// Mock Data
const mockPlayers: Player[] = [
  { id: "p1", name: "Virat Kohli", battingStyle: "right-handed", bowlingStyle: "right-arm-medium" },
  { id: "p2", name: "Rohit Sharma", battingStyle: "right-handed", bowlingStyle: "right-arm-offbreak" },
  { id: "p3", name: "Jasprit Bumrah", battingStyle: "right-handed", bowlingStyle: "right-arm-fast" },
  { id: "p4", name: "KL Rahul", battingStyle: "right-handed", bowlingStyle: "right-arm-medium" },
  { id: "p5", name: "Hardik Pandya", battingStyle: "right-handed", bowlingStyle: "right-arm-fast-medium" },
  { id: "p6", name: "Ravindra Jadeja", battingStyle: "left-handed", bowlingStyle: "left-arm-orthodox" },
  { id: "p7", name: "Rishabh Pant", battingStyle: "left-handed", bowlingStyle: "right-arm-medium" },
  { id: "p8", name: "Mohammed Shami", battingStyle: "right-handed", bowlingStyle: "right-arm-fast" },
  { id: "p9", name: "Suryakumar Yadav", battingStyle: "right-handed", bowlingStyle: "right-arm-offbreak" },
  { id: "p10", name: "Kuldeep Yadav", battingStyle: "left-handed", bowlingStyle: "left-arm-chinaman" },
  { id: "p11", name: "Shubman Gill", battingStyle: "right-handed", bowlingStyle: "right-arm-offbreak" },
];

const mockTeams: Team[] = [
  { 
    id: "t1", 
    name: "Mumbai Indians", 
    short_name: "MI", 
    color: "#004ba0",
    players: mockPlayers.slice(0, 5)
  },
  { 
    id: "t2", 
    name: "Chennai Super Kings", 
    short_name: "CSK", 
    color: "#fdb913",
    players: mockPlayers.slice(5, 10)
  },
  { 
    id: "t3", 
    name: "Royal Challengers Bangalore", 
    short_name: "RCB", 
    color: "#ec1c24",
    players: mockPlayers.slice(1, 6)
  },
];

const mockMatches: Match[] = [
  {
    id: "m1",
    seriesName: "IPL 2026",
    matchType: "t20",
    team1_id: "t1",
    team_1_name: "Mumbai Indians",
    team2_id: "t2",
    team_2_name: "Chennai Super Kings",
    venue: "Wankhede Stadium, Mumbai",
    overs: 20,
    players_per_team: 11,
    status: "live",
    currentInnings: 1,
    innings: [
      {
        id: "i1",
        inning_number: 1,
        battingTeam: "t1",
        bowlingTeam: "t2",
        runs: 145,
        wickets: 4,
        balls: 94, // 15.4 overs
        extras: { wides: 5, noBalls: 2, byes: 0, legByes: 1, penalty: 0 },
        batsmen: [
          { playerId: "p1", playerName: "Virat Kohli", runs: 68, balls: 42, fours: 6, sixes: 2, isOut: false },
          { playerId: "p4", playerName: "KL Rahul", runs: 42, balls: 30, fours: 3, sixes: 1, isOut: true, dismissal: { type: 'caught', bowlerName: 'Mohammed Shami' } },
          { playerId: "p9", playerName: "Suryakumar Yadav", runs: 24, balls: 15, fours: 2, sixes: 1, isOut: false },
        ],
        bowlers: [
          { playerId: "p3", playerName: "Jasprit Bumrah", overs: 4, balls: 24, maidens: 0, runs: 28, wickets: 2, economy: 7.0 },
          { playerId: "p8", playerName: "Mohammed Shami", overs: 3.4, balls: 22, maidens: 0, runs: 34, wickets: 1, economy: 9.27 },
        ],
      }
    ],
    batting_team_id: "t1",
    batting_team_name: "Mumbai Indians",
    bowling_team_name: "Chennai Super Kings",
    total_runs: 145,
    wickets: 4,
    completed_overs: 15,
    balls_in_current_over: 4,
    display_overs: 15.4,
    striker_name: "Virat Kohli",
    non_striker_name: "Suryakumar Yadav",
    current_bowler_name: "Mohammed Shami",
    striker_id: "p1",
    non_striker_id: "p9",
    current_bowler_id: "p8",
    host_user_id: "u1",
  },
];

// Manual Axios Interceptor Mock
export const setupMockAPI = () => {
  client.interceptors.request.use(async (config) => {
    const { url, method, data: requestData } = config;
    
    // Add a small delay
    await new Promise(resolve => setTimeout(resolve, 300));

    let responseData: any = null;
    let status = 200;

    if (url === "/auth/login" && method === "post") {
      const { phone_no } = JSON.parse(requestData || "{}");
      responseData = {
        user: { id: "u1", name: "Demo User", phone_no, role: "admin" },
        token: "mock-jwt-token"
      };
    } else if (url === "/auth/signup" && method === "post") {
      const payload = JSON.parse(requestData || "{}");
      responseData = {
        user: { id: "u1", name: payload.name, phone_no: payload.phone_no, role: "user" },
        token: "mock-jwt-token"
      };
      status = 201;
    } else if (url === "/users/me" && method === "get") {
      responseData = { id: "u1", name: "Demo User", phone_no: "1234567890", role: "admin" };
    } else if (url === "/users/teams" && method === "get") {
      responseData = mockTeams;
    } else if (url?.match(/\/users\/teams\/[^/]+\/players/) && method === "get") {
      responseData = mockPlayers;
    } else if (url === "/users/players" && method === "get") {
      responseData = { data: mockPlayers };
    } else if (url === "/users/matches" && method === "get") {
      responseData = mockMatches;
    } else if (url === "/users/matches" && method === "post") {
      const payload = JSON.parse(requestData || "{}");
      const newMatch: Match = {
        id: "m" + Date.now(),
        ...payload,
        team_1_name: mockTeams.find(t => t.id === payload.team1_id)?.name || "Team 1",
        team_2_name: mockTeams.find(t => t.id === payload.team2_id)?.name || "Team 2",
        status: "scheduled",
        currentInnings: 1,
        innings: [],
        host_user_id: useAuthStore.getState().user?.id || "u1",
      };
      mockMatches.push(newMatch);
      responseData = { message: "match created successfully", id: newMatch.id };
      status = 201;
    } else if (url === "/users/matches/setup" && method === "post") {
      const payload = JSON.parse(requestData || "{}");
      const teamAObj = mockTeams.find(t => (t.team_id || t.id) === payload.team1_id);
      const teamBObj = mockTeams.find(t => (t.team_id || t.id) === payload.team2_id);

      const newMatch: Match = {
        id: "m" + Date.now(),
        ...payload,
        team_1_name: teamAObj?.name || "Team 1",
        team_2_name: teamBObj?.name || "Team 2",
        status: "scheduled",
        currentInnings: 1,
        innings: [],
        host_user_id: useAuthStore.getState().user?.id || "u1",
        total_runs: 0,
        wickets: 0,
        completed_overs: 0,
        balls_in_current_over: 0,
        batting_team_name: teamAObj?.name || "Team 1",
        bowling_team_name: teamBObj?.name || "Team 2",
        striker_name: mockPlayers.find(p => p.id === payload.striker_id)?.name || "Striker",
        non_striker_name: mockPlayers.find(p => p.id === payload.non_striker_id)?.name || "Non-Striker",
        current_bowler_name: mockPlayers.find(p => p.id === payload.current_bowler_id)?.name || "Bowler",
      };
      mockMatches.push(newMatch);
      responseData = { message: "match created successfully", match_id: newMatch.id };
      status = 201;
    } else if (url?.match(/\/users\/matches\/[^/]+\/live/) && method === "get") {
      const parts = url.split("/");
      const matchId = parts[parts.length - 2];
      const match = mockMatches.find(m => m.id === matchId);
      responseData = { data: match || mockMatches[0] };
    } else if (url?.match(/\/users\/matches\/[^/]+\/scorecard/) && method === "get") {
      const parts = url.split("/");
      const matchId = parts[parts.length - 2];
      responseData = {
        match_id: matchId,
        batting: [
          { player_id: "p1", player_name: "Virat Kohli", runs: 45, balls_faced: 30, fours: 4, sixes: 2 },
          { player_id: "p2", player_name: "Rohit Sharma", runs: 20, balls_faced: 15, fours: 2, sixes: 0 },
        ],
        bowling: [
          { player_id: "p3", player_name: "Jasprit Bumrah", overs_bowled: 4.0, runs_conceded: 25, wickets: 2 }
        ]
      };
    } else if (url?.match(/\/users\/matches\/[^/]+\/start/) && method === "post") {
      const parts = url.split("/");
      const matchId = parts[parts.length - 2];
      const match = mockMatches.find(m => m.id === matchId);
      if (match) {
        match.status = "live";
        if (!match.innings) match.innings = [];
        if (match.innings.length === 0) {
          match.innings.push({
            id: "i" + Date.now(),
            inning_number: 1,
            battingTeam: match.batting_team_id || match.team1_id,
            bowlingTeam: match.team2_id,
            runs: 0,
            wickets: 0,
            balls: 0,
            batsmen: [],
            bowlers: [],
          });
        }
      }
      responseData = { message: "Match started" };
    } else if (url?.match(/\/users\/innings\/[^/]+\/deliveries/) && method === "post") {
      responseData = { message: "Delivery recorded successfully" };
      status = 201;
    }

    if (responseData) {
      return Promise.reject({
        config,
        response: {
          data: responseData,
          status,
          statusText: status === 200 || status === 201 ? "OK" : "Error",
          headers: {},
          config,
        },
      });
    }

    return config;
  });

  // Since we use Promise.reject to skip the actual network request, we need an interceptor to catch it and return it as a success
  client.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && (error.response.status === 200 || error.response.status === 201)) {
        return Promise.resolve(error.response);
      }
      return Promise.reject(error);
    }
  );
};
