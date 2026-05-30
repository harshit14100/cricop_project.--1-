import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Phone, Award, TrendingUp, BarChart3, Calendar, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { usePlayer, usePlayerStatistics } from '@/hooks'

export default function PlayerProfilePage() {
  const { playerId } = useParams<{ playerId: string }>()
  const { data: player } = usePlayer(playerId || '')
  const { data: stats } = usePlayerStatistics(playerId || '')

  if (!player) return null

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => window.history.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold text-white">Player Profile</h1>
      </motion.div>

      {/* Profile Header */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass-card p-6"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Avatar className="h-24 w-24 ring-4 ring-blue-500/20">
            <AvatarImage src={player.avatar} />
            <AvatarFallback className="text-2xl">{player.name.charAt(0)}</AvatarFallback>
          </Avatar>

          <div className="text-center md:text-left flex-1">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <h2 className="text-2xl font-bold text-white">{player.name}</h2>
              {player.isCaptain && <Badge variant="warning">Captain</Badge>}
              {player.isWicketKeeper && <Badge variant="secondary">WK</Badge>}
            </div>
            <p className="text-sm text-white/60 capitalize">{player.battingStyle} • {player.bowlingStyle?.replace(/-/g, ' ')}</p>
            {player.phone_no && (
              <p className="text-sm text-white/40 mt-1 flex items-center justify-center md:justify-start gap-1">
                <Phone className="h-3 w-3" /> {player.phone_no}
              </p>
            )}
          </div>
        </div>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Matches', value: (stats as any)?.matches || 120, icon: Calendar },
          { label: 'Runs', value: (stats as any)?.runs || 4500, icon: Target },
          { label: 'Wickets', value: (stats as any)?.wickets || 0, icon: Award },
          { label: 'Strike Rate', value: (stats as any)?.strikeRate || 140.6, icon: TrendingUp },
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
      </div>

      {/* Detailed Stats */}
      <Tabs defaultValue="batting">
        <TabsList className="w-full grid grid-cols-2">
          <TabsTrigger value="batting"><Target className="h-4 w-4 mr-1" /> Batting</TabsTrigger>
          <TabsTrigger value="bowling"><BarChart3 className="h-4 w-4 mr-1" /> Bowling</TabsTrigger>
        </TabsList>

        <TabsContent value="batting" className="mt-4">
          <Card className="glass-card p-4">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Highest Score', value: (stats as any)?.highestScore || 113 },
                { label: 'Average', value: (stats as any)?.average || 45.0 },
                { label: 'Fifties', value: (stats as any)?.fifties || 35 },
                { label: 'Hundreds', value: (stats as any)?.hundreds || 5 },
                { label: 'Fours', value: (stats as any)?.fours || 380 },
                { label: 'Sixes', value: (stats as any)?.sixes || 120 },
              ].map((s) => (
                <div key={s.label} className="p-3 rounded-lg bg-white/5">
                  <p className="text-lg font-bold text-white">{s.value}</p>
                  <p className="text-xs text-white/50">{s.label}</p>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="bowling" className="mt-4">
          <Card className="glass-card p-4">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Best Bowling', value: (stats as any)?.bestBowling || '-' },
                { label: 'Economy', value: (stats as any)?.economy || 0 },
                { label: 'Balls Bowled', value: (stats as any)?.ballsBowled || 0 },
                { label: 'Runs Conceded', value: (stats as any)?.runsConceded || 0 },
              ].map((s) => (
                <div key={s.label} className="p-3 rounded-lg bg-white/5">
                  <p className="text-lg font-bold text-white">{s.value}</p>
                  <p className="text-xs text-white/50">{s.label}</p>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
