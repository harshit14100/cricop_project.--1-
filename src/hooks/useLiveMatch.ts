import { useQueries } from "@tanstack/react-query";
import { matchService } from "@/services";

export function useLiveMatches(matchIds: string[]) {
  return useQueries({
    queries: (matchIds || []).map((id) => ({
      queryKey: ["live-match", id],
      queryFn: () => matchService.getLiveMatch(id),
      refetchInterval: 2000,
    })),
  });
}
