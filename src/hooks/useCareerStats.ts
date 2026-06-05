import { useQuery } from "@tanstack/react-query";
import { statisticsApi } from "@/api/statistics";

export const useCareerStats = (playerId: string) => {
  return useQuery({
    queryKey: ["career-stats", playerId],
    queryFn: () => statisticsApi.getPlayerStatistics(playerId),
    enabled: !!playerId,
  });
};
