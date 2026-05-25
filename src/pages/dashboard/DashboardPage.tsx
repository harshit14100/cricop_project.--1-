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

export default function DashboardPage() {
  const { data: matchesData, isLoading: matchesLoading } = useMatches({
    limit: 10,
  });
  const { data: statsData, isLoading: statsLoading } = useDashboardStats();
  const { data: playersData, isLoading: playersLoading } = usePlayers({ limit: 5 });

  const matches = matchesData?.matches || [];
  const liveMatches = matches.filter((m) => m.status === "live");
  const upcomingMatches = matches.filter((m) => m.status === "upcoming");
  const topPlayers = playersData?.players || [];

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
            {playersLoading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <SkeletonCard key={i} className="h-20" />
              ))
            ) : topPlayers.length > 0 ? (
              topPlayers.map((player, i) => (
                <PlayerCard
                  key={player.id}
                  player={player}
                  rank={i + 1}
                  statValue={(player.stats?.runs || 0).toString()}
                  statLabel="runs"
                  trend="up"
                  index={i}
                />
              ))
            ) : (
              <div className="glass-card p-6 text-center">
                <p className="text-sm text-white/40">No player data available</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
