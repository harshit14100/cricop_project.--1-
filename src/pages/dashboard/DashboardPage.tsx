import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Play,
  TrendingUp,
  Users,
  Trophy,
  Calendar,
  ArrowRight,
  Zap,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StatCard } from "@/components/shared/StatCard";
import { MatchCard } from "@/components/shared/MatchCard";
import { PlayerCard } from "@/components/shared/PlayerCard";
import { SkeletonCard } from "@/components/shared/SkeletonCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { useMatches, useDashboardStats, usePlayers } from "@/hooks";
import type { Match, Player } from "@/types";

// Mock data for demo
const mockMatches: Match[] = [
  {
    id: "1",
    matchType: "t20",
    totalOvers: 20,
    status: "live",
    currentInnings: 1,
    teamA: {
      id: "t1",
      name: "Mumbai Indians",
      shortName: "MI",
      color: "#004ba0",
      players: [],
    },
    teamB: {
      id: "t2",
      name: "Chennai Super Kings",
      shortName: "CSK",
      color: "#f85c00",
      players: [],
    },
    innings: [
      {
        battingTeam: "t1",
        bowlingTeam: "t2",
        runs: 156,
        wickets: 3,
        balls: 98,
        extras: { wides: 4, noBalls: 1, byes: 0, legByes: 2, penalty: 0 },
        batsmen: [
          {
            playerId: "p1",
            playerName: "Rohit Sharma",
            runs: 45,
            balls: 32,
            fours: 4,
            sixes: 2,
            isOut: false,
            strikeRate: 140.6,
          },
          {
            playerId: "p2",
            playerName: "Suryakumar Yadav",
            runs: 38,
            balls: 24,
            fours: 3,
            sixes: 2,
            isOut: false,
            strikeRate: 158.3,
          },
        ],
        bowlers: [
          {
            playerId: "p3",
            playerName: "Deepak Chahar",
            overs: 3,
            balls: 4,
            maidens: 0,
            runs: 28,
            wickets: 1,
            wides: 2,
            noBalls: 0,
            economy: 7.0,
          },
        ],
        partnerships: [],
        fallOfWickets: [],
        isCompleted: false,
      },
    ],
    startTime: new Date().toISOString(),
  },
  {
    id: "2",
    matchType: "t20",
    totalOvers: 20,
    status: "upcoming",
    currentInnings: 1,
    teamA: {
      id: "t3",
      name: "Royal Challengers",
      shortName: "RCB",
      color: "#ec1c24",
      players: [],
    },
    teamB: {
      id: "t4",
      name: "Kolkata Knight Riders",
      shortName: "KKR",
      color: "#3a225d",
      players: [],
    },
    innings: [],
    startTime: new Date(Date.now() + 86400000).toISOString(),
    venue: "Eden Gardens",
  },
];

const mockPlayers: Player[] = [
  {
    id: "p1",
    name: "Virat Kohli",
    battingStyle: "right-handed",
    bowlingStyle: "right-arm-medium",
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
];

export default function DashboardPage() {
  const { data: matchesData, isLoading: matchesLoading } = useMatches({
    status: "live",
    limit: 5,
  });
  const { data: statsData, isLoading: statsLoading } = useDashboardStats();
  usePlayers({ limit: 5 });

  const matches = matchesData?.matches || mockMatches;
  const liveMatches = matches.filter((m) => m.status === "live");
  const upcomingMatches = matches.filter((m) => m.status === "upcoming");

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Dashboard
          </h1>
          <p className="text-sm text-white/50 mt-1">
            Welcome back! Here's what's happening today.
          </p>
        </div>
        <Link to="/start-match">
          <Button size="lg" className="gap-2 shadow-lg shadow-blue-500/25">
            <Play className="h-4 w-4" />
            Start New Match
          </Button>
        </Link>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statsLoading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} className="h-28" />
          ))
        ) : (
          <>
            <StatCard
              title="Live Matches"
              value={statsData?.liveMatches || 1}
              icon={Activity}
              color="red"
              trend={12}
              trendLabel="vs yesterday"
            />
            <StatCard
              title="Total Matches"
              value={statsData?.totalMatches || 156}
              icon={Trophy}
              color="amber"
              trend={8}
              trendLabel="this month"
            />
            <StatCard
              title="Players"
              value={statsData?.totalPlayers || 48}
              icon={Users}
              color="blue"
              trend={5}
              trendLabel="new this week"
            />
            <StatCard
              title="Teams"
              value={statsData?.totalTeams || 12}
              icon={TrendingUp}
              color="green"
              trend={2}
              trendLabel="new this month"
            />
          </>
        )}
      </div>

      {/* Live Matches */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Live Matches
          </h2>
          <Link
            to="/history"
            className="text-sm text-electric hover:text-electric/80 flex items-center gap-1"
          >
            View All <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        {matchesLoading ? (
          <div className="grid md:grid-cols-2 gap-4">
            <SkeletonCard className="h-64" />
            <SkeletonCard className="h-64" />
          </div>
        ) : liveMatches.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-4">
            {liveMatches.map((match, i) => (
              <MatchCard key={match.id} match={match} index={i} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={Activity}
            title="No Live Matches"
            description="Start a new match to see live scoring here."
            actionLabel="Start Match"
            onAction={() => (window.location.href = "/start-match")}
          />
        )}
      </section>

      {/* Upcoming & Recent */}
      <div className="grid lg:grid-cols-2 gap-6">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <Calendar className="h-4 w-4 text-blue-400" />
              Upcoming Matches
            </h2>
          </div>
          {upcomingMatches.length > 0 ? (
            <div className="space-y-3">
              {upcomingMatches.slice(0, 3).map((match, i) => (
                <MatchCard key={match.id} match={match} index={i} />
              ))}
            </div>
          ) : (
            <Card className="glass-card p-8 text-center">
              <p className="text-sm text-white/50">
                No upcoming matches scheduled
              </p>
            </Card>
          )}
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <Zap className="h-4 w-4 text-electric" />
              Top Performers
            </h2>
            <Link
              to="/statistics"
              className="text-sm text-electric hover:text-electric/80 flex items-center gap-1"
            >
              View All <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="space-y-3">
            {mockPlayers.map((player, i) => (
              <PlayerCard
                key={player.id}
                player={player}
                rank={i + 1}
                statValue={(player.stats?.runs || 0).toString()}
                statLabel="runs"
                trend="up"
                index={i}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
