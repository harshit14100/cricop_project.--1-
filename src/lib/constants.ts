export const APP_NAME = 'CricOP';
export const APP_TAGLINE = 'Score Every Ball Like a Pro';

export const MATCH_TYPES = [
  { value: 't20', label: 'T20', overs: 20 },
  { value: 'odi', label: 'ODI', overs: 50 },
  { value: 'test', label: 'Test', overs: 90 },
  { value: 'custom', label: 'Custom', overs: 0 },
] as const;

export const WICKET_TYPES = [
  { value: 'bowled', label: 'Bowled', icon: 'Target' },
  { value: 'caught', label: 'Caught', icon: 'Hand' },
  { value: 'run-out', label: 'Run Out', icon: 'Zap' },
  { value: 'lbw', label: 'LBW', icon: 'Shield' },
  { value: 'stumped', label: 'Stumped', icon: 'CircleDot' },
  { value: 'hit-wicket', label: 'Hit Wicket', icon: 'AlertTriangle' },
  { value: 'retired', label: 'Retired', icon: 'LogOut' },
] as const;

export const EXTRAS_TYPES = [
  { value: 'wide', label: 'Wide', runs: 1 },
  { value: 'no-ball', label: 'No Ball', runs: 1 },
  { value: 'bye', label: 'Bye', runs: 0 },
  { value: 'leg-bye', label: 'Leg Bye', runs: 0 },
] as const;

export const BATTING_STYLES = [
  { value: 'right-handed', label: 'Right Handed' },
  { value: 'left-handed', label: 'Left Handed' },
] as const;

export const BOWLING_STYLES = [
  { value: 'right-arm-fast', label: 'Right Arm Fast' },
  { value: 'right-arm-medium', label: 'Right Arm Medium' },
  { value: 'right-arm-offspin', label: 'Right Arm Off Spin' },
  { value: 'right-arm-legspin', label: 'Right Arm Leg Spin' },
  { value: 'left-arm-fast', label: 'Left Arm Fast' },
  { value: 'left-arm-medium', label: 'Left Arm Medium' },
  { value: 'left-arm-orthodox', label: 'Left Arm Orthodox' },
  { value: 'left-arm-chinaman', label: 'Left Arm Chinaman' },
] as const;

export const POLLING_INTERVALS = {
  LIVE_MATCH: 2000,
  DEFAULT: 10000,
} as const;

export const TOAST_DURATION = 3000;

export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export const SUPPORTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

export const NAV_ITEMS = [
  { label: 'Dashboard', href: '/', icon: 'LayoutDashboard' },
  { label: 'Matches', href: '/matches', icon: 'Trophy' },
  { label: 'Players', href: '/players', icon: 'Users' },
  { label: 'Statistics', href: '/statistics', icon: 'BarChart3' },
  { label: 'History', href: '/history', icon: 'History' },
] as const;

export const ADMIN_NAV_ITEMS = [
  { label: 'Users', href: '/admin/users', icon: 'Users' },
  { label: 'Matches', href: '/admin/matches', icon: 'Trophy' },
  { label: 'Reports', href: '/admin/reports', icon: 'Flag' },
  { label: 'System', href: '/admin/system', icon: 'Settings' },
] as const;
