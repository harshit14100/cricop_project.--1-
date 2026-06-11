import { useState } from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  TrendingUp,
  Target,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlayerCard } from "@/components/shared/PlayerCard";
import { SkeletonCard } from "@/components/shared/SkeletonCard";
import { useStatistics } from "@/hooks";

export default function StatisticsPage() {
  const [timeRange] = useState("all-time");
  const { data, isLoading } = useStatistics({ timeRange });

  const rankings = {
    topBatsmen: data?.topBatsmen || [],
    topBowlers: data?.topBowlers || [],
    mostSixes: data?.mostSixes || [],
    highestStrikeRates: data?.highestStrikeRates || [],
    economyLeaders: data?.economyLeaders || [],
    mvpRankings: data?.mvpRankings || [],
  };

  const tabs = [
    {
      id: "batting",
      label: "Top Batsmen",
      icon: Target,
      data: rankings.topBatsmen,
      unit: "runs",
    },
    {
      id: "bowling",
      label: "Top Bowlers",
      icon: Zap,
      data: rankings.topBowlers,
      unit: "wickets",
    },
    {
      id: "sixes",
      label: "Most Sixes",
      icon: Trophy,
      data: rankings.mostSixes,
      unit: "sixes",
    },
    {
      id: "strike-rate",
      label: "Strike Rate",
      icon: TrendingUp,
      data: rankings.highestStrikeRates,
      unit: "SR",
    },
    {
      id: "economy",
      label: "Economy",
      icon: ArrowDownRight,
      data: rankings.economyLeaders,
      unit: "econ",
    },
    {
      id: "mvp",
      label: "MVP Rankings",
      icon: ArrowUpRight,
      data: rankings.mvpRankings,
      unit: "pts",
    },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Statistics
        </h1>
        <p className="text-sm text-white/50 mt-1">
          Leaderboards and player analytics
        </p>
      </motion.div>

      <Tabs defaultValue="batting">
        <TabsList className="w-full grid grid-cols-3 md:grid-cols-6 h-auto">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="flex flex-col items-center gap-1 py-3"
            >
              <tab.icon className="h-4 w-4" />
              <span className="text-xs">{tab.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id} className="mt-4">
            {isLoading ? (
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <SkeletonCard key={i} className="h-20" />
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {tab.data.map((player: any, i: number) => (
                  <PlayerCard
                    key={player.playerId}
                    player={{
                      id: player.playerId,
                      name: player.playerName,
                      battingStyle: player.battingStyle as any,
                      bowlingStyle: player.bowlingStyle as any,
                      avatar: player.avatar,
                    }}
                    rank={i + 1}
                    statValue={
                      typeof player.value === "number"
                        ? player.value.toFixed(
                            tab.unit === "SR" || tab.unit === "econ" ? 1 : 0,
                          )
                        : player.value
                    }
                    statLabel={tab.unit}
                    trend={i < 3 ? "up" : undefined}
                    index={i}
                  />
                ))}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
