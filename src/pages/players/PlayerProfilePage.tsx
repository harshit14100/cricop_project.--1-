import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Phone, Award, TrendingUp, BarChart3, Calendar, Target } from 'lucide-react'
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell,
} from 'recharts'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { usePlayer, usePlayerCareerStats } from '@/hooks'
import { LoadingScreen } from '@/components/shared/LoadingScreen'
import { ErrorState } from '@/components/shared/ErrorState'

const COLORS = {
  blue: '#3b82f6',
  electric: '#00d4ff',
  purple: '#a78bfa',
  amber: '#f59e0b',
  emerald: '#10b981',
  red: '#ef4444',
  pink: '#ec4899',
}

const chartColors = [COLORS.blue, COLORS.electric, COLORS.purple, COLORS.amber, COLORS.emerald, COLORS.pink]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
}

interface TooltipPayloadEntry {
  name?: string
  value?: number
  color?: string
}

function ChartTooltip({ active, payload, label }: { active?: boolean; payload?: TooltipPayloadEntry[]; label?: string }) {
  if (!active || !payload?.length) return null
  return (
    <div className="glass-card px-3 py-2 text-sm border border-white/10">
      <p className="text-white/60 text-xs mb-1">{label}</p>
      {payload.map((entry, i) => (
        <p key={i} style={{ color: entry.color }} className="font-medium">
          {entry.name}: {entry.value}
        </p>
      ))}
    </div>
  )
}

export default function PlayerProfilePage() {
  const { playerId } = useParams<{ playerId: string }>()

  const { data: player, isLoading: playerLoading, error: playerError } = usePlayer(playerId || '')
  const { data: stats } = usePlayerCareerStats(playerId || '')

  const s = (stats as any) || {}

  const radarData = [
    { stat: 'Runs', value: Math.min((s.runs || 0) / 10, 100), full: s.runs || 0 },
    { stat: 'Avg', value: Math.min((s.batting_avg || 0) * 5, 100), full: (s.batting_avg || 0).toFixed(1) },
    { stat: 'SR', value: Math.min((s.strike_rate || 0) / 2, 100), full: (s.strike_rate || 0).toFixed(1) },
    { stat: 'Wickets', value: Math.min((s.wickets || 0) * 10, 100), full: s.wickets || 0 },
    { stat: 'Econ', value: Math.max(0, 100 - (s.economy || 0) * 10), full: (s.economy || 0).toFixed(1) },
    { stat: 'Catches', value: Math.min((s.catches || 0) * 20, 100), full: s.catches || 0 },
  ]

  const battingChartData = [
    { name: 'Runs', value: s.runs || 0 },
    { name: 'Balls', value: s.balls_faced || 0 },
    { name: 'Fours', value: s.fours || 0 },
    { name: 'Sixes', value: s.sixes || 0 },
    { name: '50s', value: s.fifties || 0 },
    { name: '100s', value: s.hundreds || 0 },
  ]

  const bowlingChartData = [
    { name: 'Wickets', value: s.wickets || 0 },
    { name: 'Overs', value: parseFloat((s.overs_bowled || 0).toFixed(1)) },
    { name: 'Runs\nGiven', value: s.runs_conceded || 0 },
    { name: 'Catches', value: s.catches || 0 },
    { name: 'Stump', value: s.stumpings || 0 },
  ]

  if (playerLoading) return <LoadingScreen />

  if (playerError || !player) {
    return (
      <div className="p-8">
        <ErrorState
          title="Player Not Found"
          description="We couldn't find the player you're looking for. They might have been deleted or the ID is incorrect."
        />
        <div className="mt-4 text-center">
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      className="max-w-3xl mx-auto space-y-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => window.history.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold text-white">Player Profile</h1>
      </motion.div>

      {/* Profile Header */}
      <motion.div variants={item} className="glass-card p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Avatar className="h-24 w-24 ring-4 ring-blue-500/20">
            <AvatarImage src={player.avatar} />
            <AvatarFallback className="text-2xl bg-gradient-to-br from-blue-600 to-electric">
              {player.name.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div className="text-center md:text-left flex-1">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <h2 className="text-2xl font-bold text-white">{player.name}</h2>
              {player.isCaptain && <Badge variant="warning">Captain</Badge>}
              {player.isWicketKeeper && <Badge variant="secondary">WK</Badge>}
            </div>
            <p className="text-sm text-white/60 capitalize">
              {player.battingStyle} • {player.bowlingStyle?.replace(/-/g, ' ')}
            </p>
            {player.phone_no && (
              <p className="text-sm text-white/40 mt-1 flex items-center justify-center md:justify-start gap-1">
                <Phone className="h-3 w-3" /> {player.phone_no}
              </p>
            )}
          </div>
        </div>
      </motion.div>

      {/* Radar Chart - Career Overview */}
      <motion.div variants={item}>
        <Card className="glass-card p-4 md:p-6">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-electric" />
            Career Overview
          </h3>
          <div className="h-72 md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
                <PolarGrid stroke="rgba(255,255,255,0.08)" />
                <PolarAngleAxis
                  dataKey="stat"
                  tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                />
                <PolarRadiusAxis
                  angle={30}
                  domain={[0, 100]}
                  tick={false}
                  axisLine={false}
                />
                <Radar
                  name="Stats"
                  dataKey="value"
                  stroke={COLORS.electric}
                  fill={COLORS.electric}
                  fillOpacity={0.15}
                  strokeWidth={2}
                  dot={{ fill: COLORS.electric, r: 3 }}
                  activeDot={{ r: 5, fill: COLORS.electric }}
                />
                <Tooltip content={<ChartTooltip />} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          {/* Radar stat labels */}
          <div className="grid grid-cols-3 gap-2 mt-4">
            {radarData.map((d) => (
              <div key={d.stat} className="text-center p-1.5 rounded-lg bg-white/5">
                <p className="text-xs text-white/40">{d.stat}</p>
                <p className="text-sm font-bold text-white">{d.full}</p>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Stats Overview */}
      <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Matches', value: s.matches || 0, icon: Calendar },
          { label: 'Runs', value: s.runs || 0, icon: Target },
          { label: 'Wickets', value: s.wickets || 0, icon: Award },
          { label: 'Strike Rate', value: (s.strike_rate || 0).toFixed(2), icon: TrendingUp },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="glass-card p-4 text-center">
              <stat.icon className="h-5 w-5 text-blue-400 mx-auto mb-2" />
              <p className="text-xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-white/50">{stat.label}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Detailed Stats with Charts */}
      <motion.div variants={item}>
        <Tabs defaultValue="batting">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="batting"><Target className="h-4 w-4 mr-1" /> Batting</TabsTrigger>
            <TabsTrigger value="bowling"><BarChart3 className="h-4 w-4 mr-1" /> Bowling</TabsTrigger>
          </TabsList>

          <TabsContent value="batting" className="mt-4 space-y-4">
            {/* Batting Bar Chart */}
            <Card className="glass-card p-4 md:p-6">
              <h4 className="text-xs font-bold text-white/50 uppercase tracking-wider mb-4">
                Batting Performance
              </h4>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={battingChartData} margin={{ top: 5, right: 10, bottom: 5, left: -10 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis
                      dataKey="name"
                      tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 11 }}
                      axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip content={<ChartTooltip />} />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={40}>
                      {battingChartData.map((_, i) => (
                        <Cell key={i} fill={chartColors[i % chartColors.length]} fillOpacity={0.8} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Batting Stats Grid */}
            <Card className="glass-card p-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Highest Score', value: s.highest_score ?? 'NA' },
                  { label: 'Average', value: (s.batting_avg || 0).toFixed(2) },
                  { label: 'Balls Faced', value: s.balls_faced || 0 },
                  { label: 'Fours', value: s.fours || 0 },
                  { label: 'Sixes', value: s.sixes || 0 },
                  { label: 'Strike Rate', value: (s.strike_rate || 0).toFixed(2) },
                ].map((stat) => (
                  <div key={stat.label} className="p-3 rounded-lg bg-white/5">
                    <p className="text-lg font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-white/50">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="bowling" className="mt-4 space-y-4">
            {/* Bowling Bar Chart */}
            <Card className="glass-card p-4 md:p-6">
              <h4 className="text-xs font-bold text-white/50 uppercase tracking-wider mb-4">
                Bowling & Fielding
              </h4>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={bowlingChartData} margin={{ top: 5, right: 10, bottom: 5, left: -10 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis
                      dataKey="name"
                      tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 11 }}
                      axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip content={<ChartTooltip />} />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={50}>
                      {bowlingChartData.map((_, i) => (
                        <Cell key={i} fill={chartColors[i % chartColors.length]} fillOpacity={0.8} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Bowling Stats Grid */}
            <Card className="glass-card p-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Overs Bowled', value: (s.overs_bowled || 0).toFixed(1) },
                  { label: 'Runs Conceded', value: s.runs_conceded || 0 },
                  { label: 'Economy', value: (s.economy || 0).toFixed(2) },
                  { label: 'Catches', value: s.catches || 0 },
                  { label: 'Stumpings', value: s.stumpings || 0 },
                  { label: 'Best Bowling', value: s.best_bowling || 'NA' },
                ].map((stat) => (
                  <div key={stat.label} className="p-3 rounded-lg bg-white/5">
                    <p className="text-lg font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-white/50">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  )
}
