# Backend API Response Documentation

This document provides example response structures for all backend APIs identified in the project.

## Table of Contents
1. [Authentication APIs](#authentication-apis)
2. [Match APIs](#match-apis)
3. [Player APIs](#player-apis)
4. [Team APIs](#team-apis)
5. [Scoring APIs](#scoring-apis)
6. [Statistics APIs](#statistics-apis)

---

## Authentication APIs

### Login
**Endpoint:** `POST /auth/login`
**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "u1",
      "name": "Virat Kohli",
      "email": "virat@cricket.com",
      "phone": "+919876543210",
      "role": "admin",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "isActive": true
    },
    "token": "mock-jwt-token-1716984000000"
  }
}
```

### Signup
**Endpoint:** `POST /auth/signup`
**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "u1716984000000",
      "name": "New User",
      "email": "user@example.com",
      "phone": "+919000000000",
      "role": "user",
      "createdAt": "2026-05-29T10:00:00.000Z",
      "isActive": true
    },
    "token": "mock-jwt-token-1716984000000"
  }
}
```

### Get Profile
**Endpoint:** `GET /users/me`
**Response:**
```json
{
  "success": true,
  "data": {
    "id": "u1",
    "name": "Virat Kohli",
    "email": "virat@cricket.com",
    "phone": "+919876543210",
    "role": "admin",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "isActive": true
  }
}
```

### Logout
**Endpoint:** `POST /auth/logout`
**Response:**
```json
{
  "success": true
}
```

---

## Match APIs

### List Matches
**Endpoint:** `GET /users/matches`
**Response:**
```json
{
  "success": true,
  "data": {
    "matches": [
      {
        "id": "m1",
        "seriesName": "IPL 2026",
        "matchType": "t20",
        "team1_id": "t1",
        "team_1_name": "Mumbai Indians",
        "team2_id": "t2",
        "team_2_name": "Chennai Super Kings",
        "venue": "Wankhede Stadium",
        "overs": 20,
        "players_per_team": 11,
        "status": "live",
        "currentInnings": 1,
        "started_at": "2026-05-29T10:00:00.000Z",
        "total_runs": 156,
        "wickets": 3,
        "completed_overs": 16,
        "balls_in_current_over": 2
      }
    ],
    "total": 1
  }
}
```

### Get Match Details
**Endpoint:** `GET /users/matches/:id`
**Response:**
```json
{
  "success": true,
  "data": {
    "id": "m1",
    "team1_id": "t1",
    "team2_id": "t2",
    "venue": "Wankhede Stadium",
    "overs": 20,
    "status": "live",
    "innings": [
      {
        "id": "i1",
        "battingTeam": "t1",
        "bowlingTeam": "t2",
        "runs": 156,
        "wickets": 2,
        "balls": 98,
        "extras": { "wides": 4, "noBalls": 1, "byes": 0, "legByes": 2, "penalty": 0 },
        "batsmen": [],
        "bowlers": []
      }
    ]
  }
}
```

### Setup Match
**Endpoint:** `POST /users/matches/setup`
**Response:**
```json
{
  "success": true,
  "data": {
    "id": "m1716984000000",
    "status": "upcoming",
    "team_1_name": "Mumbai Indians",
    "team_2_name": "Chennai Super Kings"
  }
}
```

---

## Player APIs

### List Players
**Endpoint:** `GET /users/players`
**Response:**
```json
{
  "success": true,
  "data": {
    "players": [
      {
        "id": "p1",
        "name": "Virat Kohli",
        "battingStyle": "right-handed",
        "bowlingStyle": "right-arm-medium",
        "isCaptain": true
      }
    ],
    "total": 1
  }
}
```

### Get Player Statistics
**Endpoint:** `GET /users/players/:id/stats`
**Response:**
```json
{
  "success": true,
  "data": {
    "matches": 120,
    "runs": 4500,
    "wickets": 0,
    "strikeRate": 140.6,
    "average": 45.0,
    "highestScore": 113
  }
}
```

---

## Team APIs

### List Teams
**Endpoint:** `GET /users/teams`
**Response:**
```json
{
  "success": true,
  "data": {
    "teams": [
      {
        "team_id": "t1",
        "name": "Mumbai Indians",
        "short_name": "MI",
        "color": "#004ba0"
      }
    ],
    "total": 1
  }
}
```

---

## Scoring APIs

### Record Delivery
**Endpoint:** `POST /users/innings/:inningId/deliveries`
**Response:**
```json
{
  "success": true,
  "data": {
    "id": "b1716984000000",
    "runs": 4,
    "isWicket": false,
    "commentary": "4 runs",
    "timestamp": "2026-05-29T10:00:00.000Z"
  }
}
```

### Undo Last Ball
**Endpoint:** `POST /users/scoring/:matchId/undo`
**Response:**
```json
{
  "success": true
}
```

---

## Statistics APIs

### Dashboard Statistics
**Endpoint:** `GET /users/statistics/dashboard`
**Response:**
```json
{
  "success": true,
  "data": {
    "totalMatches": 45,
    "liveMatches": 2,
    "upcomingMatches": 5,
    "completedMatches": 38,
    "totalPlayers": 120,
    "totalTeams": 10
  }
}
```

### Overall Statistics
**Endpoint:** `GET /users/statistics`
**Response:**
```json
{
  "success": true,
  "data": {
    "topBatsmen": [
      {
        "playerId": "p1",
        "playerName": "Virat Kohli",
        "teamName": "RCB",
        "value": 4500,
        "matches": 120
      }
    ],
    "topBowlers": [],
    "mostSixes": [],
    "highestStrikeRates": [],
    "economyLeaders": [],
    "mvpRankings": []
  }
}
```
