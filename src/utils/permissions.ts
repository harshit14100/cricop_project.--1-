import { Match } from "@/types";

/**
 * Checks if the current user is the host of the match and can edit its state.
 */
export const canEditMatch = (match: Match | undefined, currentUserId: string | undefined): boolean => {
  if (!match || !currentUserId) return false;
  
  // The backend uses host_user_id to identify the creator/scorer
  return match.host_user_id === currentUserId;
};
