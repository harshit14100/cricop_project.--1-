# CricOP - Cricket Scoring Application

A production-ready cricket scoring web application built with modern React ecosystem.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Zustand** - State management
- **TanStack Query** - Server state management
- **React Router DOM** - Routing
- **Axios** - HTTP client
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Features

### Authentication
- Phone number login
- JWT authentication with refresh tokens
- Remember me functionality
- Forgot password flow

### Dashboard
- Live matches overview
- Statistics cards
- Upcoming matches
- Top performers

### Match Management
- Multi-step match creation flow
- Series management
- Team selection
- Player selection (Playing XI)
- Toss simulation
- Shareable match links

### Live Scoring
- Mobile-first scoring interface
- Run buttons (0, 1, 2, 3, 4, 6)
- Extras (Wide, No Ball, Bye, Leg Bye)
- Wickets (Bowled, Caught, Run Out, LBW, Stumped, Hit Wicket)
- Free hit indicator
- Undo last ball
- End innings
- Real-time commentary

### Match View
- Live scoreboard
- Full scorecard (batting & bowling)
- Ball-by-ball commentary
- Match highlights
- Statistics graphs

### Player Profiles
- Player statistics
- Batting and bowling records
- Achievements
- Match history

### Statistics & Leaderboards
- Top batsmen
- Top bowlers
- Most sixes
- Highest strike rates
- Economy leaders
- MVP rankings

### Admin Panel
- User management
- Match monitoring
- System health overview
- Role-based access control

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── layout/          # Layout components
│   ├── shared/          # Shared components
│   ├── auth/            # Auth components
│   ├── dashboard/       # Dashboard components
│   ├── match/           # Match components
│   ├── scoring/         # Scoring components
│   ├── players/         # Player components
│   └── admin/           # Admin components
├── pages/
│   ├── auth/            # Auth pages
│   ├── dashboard/       # Dashboard pages
│   ├── match/           # Match pages
│   ├── scoring/         # Scoring pages
│   ├── players/         # Player pages
│   ├── statistics/      # Statistics pages
│   └── admin/           # Admin pages
├── features/
│   ├── auth/            # Auth feature
│   ├── matches/         # Match feature
│   ├── players/         # Player feature
│   ├── scoring/         # Scoring feature
│   └── admin/           # Admin feature
├── hooks/               # Custom hooks
├── services/            # API services
├── store/               # Zustand stores
├── routes/              # Route definitions
├── layouts/             # Layout components
├── lib/                 # Utilities
├── types/               # TypeScript types
└── utils/               # Helper functions
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd cricop

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=https://api.cricop.com/v1
```

## Design System

### Colors
- Primary: `#3b5bdb` (Royal Blue)
- Accent: `#00d4ff` (Electric Blue)
- Background: `#0a1628` (Dark Navy)
- Card: `#0d1e36` (Navy)
- Text: `#ffffff` (White)
- Muted: `rgba(255,255,255,0.5)`

### Typography
- Headings: Outfit
- Body: Inter

## License

MIT License
