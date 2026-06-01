import { Match } from "@/types";

/**
 * Checks if the current user is the host of the match and can edit its state.
 * Handles multiple possible field names from different backend versions.
 */
export const canEditMatch = (match: any, currentUserId: string | undefined): boolean => {
  if (!match || !currentUserId) return false;
  
  // 1. Check for explicit isHost boolean (often provided by calculated fields in backend)
  if (match.isHost === true || match.is_host === true) return true;

  // 2. Check various possible host ID field names
  const hostId = match.host_user_id || match.host_id || match.userId || match.creator_id || match.createdBy || match.host?.id || match.creator?.id;
  
  // Debug log to help identify field name mismatches in development
  if (process.env.NODE_ENV === 'development' && !hostId) {
    console.warn('Match object missing host identification:', match);
  }

  if (hostId && String(hostId) === String(currentUserId)) return true;

  // 3. Admin fallback (optional - depends on business rules)
  // if (userRole === 'admin') return true;
  
  return false;
};
