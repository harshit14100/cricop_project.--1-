import { Match } from "@/types";

/**
 * Checks if the current user is the host of the match and can edit its state.
 * Handles multiple possible field names from different backend versions.
 */
export const canEditMatch = (match: Match | null, currentUserId: string | undefined): boolean => {
  if (!match || !currentUserId) return false;
  
  // Use a variety of possible host ID fields for maximum resilience during refactoring
  const hostId = 
    match.host_user_id || 
    (match as any).hostId || 
    (match as any).host_id || 
    (match as any).userId || 
    (match as any).creator_id;

  if (hostId && String(hostId) === String(currentUserId)) return true;

  // Admin override
  if ((match as any).userRole === 'admin' || (match as any).role === 'admin') return true;

  // Final fallback: check nested team host info if available
  if ((match as any).teamA?.host_id === currentUserId) return true;

  return false;
};
