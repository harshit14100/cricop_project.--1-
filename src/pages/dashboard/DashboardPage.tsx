import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import {
  Play,
  TrendingUp,
  Users,
  Trophy,
  Calendar,
  ArrowRight,
  Zap,
  Activity,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StatCard } from "@/components/shared/StatCard";
import { MatchCard } from "@/components/shared/MatchCard";
import { PlayerCard } from "@/components/shared/PlayerCard";
import { SkeletonCard } from "@/components/shared/SkeletonCard";
import { EmptyState } from "@/components/shared/EmptyState";
import {
  useMatches,
  useDashboardStats,
  usePlayers,
  useLiveMatches,
} from "@/hooks";
import { useAuthStore } from "@/store";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { y: 24, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function DashboardPage() {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const handleStartMatchClick = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    navigate("/start-match");
  };

  const { data: matchesData, isLoading: matchesLoading } = useMatches();
  const { data: statsData, isLoading: statsLoading } = useDashboardStats();
  const { data: playersData, isLoading: playersLoading } = usePlayers();

  const matches = Array.isArray(matchesData) ? matchesData : [];
  const players = Array.isArray(playersData) ? playersData : [];
  const topPlayers = players.slice(0, 5);

  const liveMatches = matches.filter((m: any) => m.status === "live");
  const liveMatchQueries = useLiveMatches(liveMatches.map((m: any) => m.id));

  const liveMatchesWithScore = liveMatches.map((match: any, index: number) => ({
    ...match,
    ...(liveMatchQueries[index]?.data || {}),
  }));

  const [livePage, setLivePage] = useState(0);
  const livePerPage = 2;
  const totalLivePages = Math.ceil(liveMatchesWithScore.length / livePerPage);
  const paginatedLiveMatches = liveMatchesWithScore.slice(
    livePage * livePerPage,
    (livePage + 1) * livePerPage
  );

  const upcomingMatches = matches.filter((m) => m.status === "scheduled");

  return (
    <motion.div
      className="space-y-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Animated Background Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-electric/5 rounded-full blur-3xl"
        />
      </div>

      {/* Header */}
      <motion.div
        variants={item}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Dashboard
          </h1>
          <p className="text-sm text-white/50 mt-1">
            {user
              ? `Welcome back, ${user.name}! Here's what's happening today.`
              : "Welcome! Here's the latest in the world of cricket."}
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            className="gap-2 shadow-lg shadow-blue-500/25 bg-electric hover:bg-electric/90 relative overflow-hidden group"
            onClick={handleStartMatchClick}
          >
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <Play className="h-4 w-4 fill-current relative z-10" />
            <span className="relative z-10">Start New Match</span>
          </Button>
        </motion.div>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        variants={item}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {statsLoading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} className="h-28" />
          ))
        ) : (
          <>
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <StatCard
                title="Live Matches"
                value={statsData?.liveMatches || 0}
                icon={Activity}
                color="red"
                trend={12}
                trendLabel="vs yesterday"
                index={0}
              />
            </motion.div>
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <StatCard
                title="Total Matches"
                value={statsData?.totalMatches || 0}
                icon={Trophy}
                color="amber"
                trend={8}
                trendLabel="this month"
                index={1}
              />
            </motion.div>
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <StatCard
                title="Players"
                value={statsData?.totalPlayers || 0}
                icon={Users}
                color="blue"
                trend={5}
                trendLabel="new this week"
                index={2}
              />
            </motion.div>
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <StatCard
                title="Teams"
                value={statsData?.totalTeams || 0}
                icon={TrendingUp}
                color="green"
                trend={2}
                trendLabel="new this month"
                index={3}
              />
            </motion.div>
          </>
        )}
      </motion.div>

      {/* Live Matches */}
      <motion.section variants={item}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
              </span>
              Live Matches
            </h2>
            {totalLivePages > 1 && (
              <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-white/40 hover:text-white"
                  onClick={() => setLivePage((p) => Math.max(0, p - 1))}
                  disabled={livePage === 0}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-[10px] font-medium text-white/40 px-1">
                  {livePage + 1} / {totalLivePages}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-white/40 hover:text-white"
                  onClick={() => setLivePage((p) => Math.min(totalLivePages - 1, p + 1))}
                  disabled={livePage === totalLivePages - 1}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
          <Link
            to="/history"
            className="text-sm text-electric hover:text-electric/80 flex items-center gap-1 transition-colors group"
          >
            View All{" "}
            <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {matchesLoading ? (
          <div className="grid md:grid-cols-2 gap-4">
            <SkeletonCard className="h-64" />
            <SkeletonCard className="h-64" />
          </div>
        ) : paginatedLiveMatches.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-4">
            {paginatedLiveMatches.map((match, i) => (
              <MatchCard key={match.id} match={match} index={i} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <EmptyState
              icon={Activity}
              title="No Live Matches"
              description={
                user
                  ? "Start a new match to see live scoring here."
                  : "Log in to start a match and see live scoring here."
              }
              actionLabel={user ? "Start Match" : "Login to Start"}
              onAction={handleStartMatchClick}
            />
          </motion.div>
        )}
      </motion.section>

      {/* Upcoming & Recent */}
      <motion.div variants={item} className="grid lg:grid-cols-2 gap-6">
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
            <Card className="glass-card p-8 text-center border-dashed border-white/10">
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
              className="text-sm text-electric hover:text-electric/80 flex items-center gap-1 transition-colors group"
            >
              View All{" "}
              <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
          <div className="space-y-3">
            {playersLoading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <SkeletonCard key={i} className="h-20" />
              ))
            ) : topPlayers.length > 0 ? (
              topPlayers.map((player: any, i: number) => (
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
              <div className="glass-card p-6 text-center border-dashed border-white/10">
                <p className="text-sm text-white/40">
                  No player data available
                </p>
              </div>
            )}
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
}
