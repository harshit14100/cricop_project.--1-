import { format } from 'date-fns';

export function formatOvers(balls: number): string {
  const overs = Math.floor(balls / 6);
  const remainingBalls = balls % 6;
  if (overs === 0) return `${remainingBalls} ball${remainingBalls !== 1 ? 's' : ''}`;
  if (remainingBalls === 0) return `${overs}`;
  return `${overs}.${remainingBalls}`;
}

export function formatRunRate(runs: number, balls: number): string {
  if (balls === 0) return '0.00';
  return ((runs / balls) * 6).toFixed(2);
}

export function formatRequiredRate(target: number, runs: number, ballsRemaining: number): string {
  if (ballsRemaining <= 0) return '0.00';
  return (((target - runs) / ballsRemaining) * 6).toFixed(2);
}

export function formatDate(date: string | Date): string {
  return format(new Date(date), 'MMM dd, yyyy');
}

export function formatDateTime(date: string | Date): string {
  return format(new Date(date), 'MMM dd, yyyy HH:mm');
}

export function formatTime(date: string | Date): string {
  return format(new Date(date), 'HH:mm');
}

export function calculateStrikeRate(runs: number, balls: number): string {
  if (balls === 0) return '0.00';
  return ((runs / balls) * 100).toFixed(2);
}

export function calculateEconomy(runs: number, balls: number): string {
  if (balls === 0) return '0.00';
  return ((runs / balls) * 6).toFixed(2);
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function generateShareableLink(matchId: string): string {
  return `${window.location.origin}/match/${matchId}/live`;
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}

export function shareViaWhatsApp(text: string, url: string): string {
  return `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`;
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function getTeamColor(index: number): string {
  const colors = [
    '#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6',
    '#ec4899', '#06b6d4', '#f97316', '#84cc16', '#6366f1'
  ];
  return colors[index % colors.length];
}

export function getMatchStatusColor(status: string): string {
  switch (status) {
    case 'live': return 'text-green-400 bg-green-400/10';
    case 'upcoming': return 'text-blue-400 bg-blue-400/10';
    case 'completed': return 'text-gray-400 bg-gray-400/10';
    case 'abandoned': return 'text-red-400 bg-red-400/10';
    default: return 'text-gray-400 bg-gray-400/10';
  }
}

export function getWicketTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    'bowled': 'b',
    'caught': 'c',
    'run-out': 'run out',
    'lbw': 'lbw',
    'stumped': 'st',
    'hit-wicket': 'hit wkt',
    'retired': 'retired',
    'timed-out': 'timed out',
  };
  return labels[type] || type;
}

export function getBowlingStyleLabel(style: string): string {
  const labels: Record<string, string> = {
    'right-arm-fast': 'RAF',
    'right-arm-medium': 'RAM',
    'right-arm-offspin': 'RAO',
    'right-arm-legspin': 'RAL',
    'left-arm-fast': 'LAF',
    'left-arm-medium': 'LAM',
    'left-arm-orthodox': 'LAO',
    'left-arm-chinaman': 'LAC',
  };
  return labels[style] || style;
}
