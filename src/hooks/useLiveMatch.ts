import { useQuery } from "@tanstack/react-query";
import { matchApi } from "@/api/match";

export const useLiveMatch = (matchId: string) => {
  return useQuery({
    queryKey: ["live-match", matchId],

    queryFn: () => matchApi.getLiveMatch(matchId),

    enabled: !!matchId,

    refetchInterval: 2000,
  });
};
