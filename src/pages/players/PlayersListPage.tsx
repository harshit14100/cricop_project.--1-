import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, Plus, User, Trophy, TrendingUp } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { PlayerCard } from '@/components/shared/PlayerCard'
import { EmptyState } from '@/components/shared/EmptyState'
import { SkeletonCard } from '@/components/shared/SkeletonCard'
import { usePlayers } from '@/hooks'

export default function PlayersListPage() {
  const [search, setSearch] = useState('')
  const { data, isLoading } = usePlayers({ search, limit: 20 })

  const players = data?.players || [
    { id: '1', name: 'Virat Kohli', battingStyle: 'right-handed', bowlingStyle: 'right-arm-medium', isCaptain: true, stats: { matches: 120, runs: 4500, strikeRate: 140.6, economy: 0, wickets: 0 } },
    { id: '2', name: 'Rohit Sharma', battingStyle: 'right-handed', bowlingStyle: 'right-arm-offbreak', stats: { matches: 115, runs: 3800, strikeRate: 145.2, economy: 0, wickets: 0 } },
    { id: '3', name: 'Jasprit Bumrah', battingStyle: 'right-handed', bowlingStyle: 'right-arm-fast', stats: { matches: 98, runs: 120, strikeRate: 150, economy: 7.6, wickets: 145 } },
    { id: '4', name: 'Ravindra Jadeja', battingStyle: 'left-handed', bowlingStyle: 'left-arm-spin', stats: { matches: 105, runs: 2100, strikeRate: 125.4, economy: 7.2, wickets: 89 } },
    { id: '5', name: 'MS Dhoni', battingStyle: 'right-handed', bowlingStyle: 'right-arm-medium', isWicketKeeper: true, stats: { matches: 130, runs: 3200, strikeRate: 138.9, economy: 0, wickets: 0 } },
  ]

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Players</h1>
          <p className="text-sm text-white/50 mt-1">Manage your team players and view statistics</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Player
        </Button>
      </motion.div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
        <Input
          placeholder="Search players..."
          className="pl-10"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {isLoading ? (
        <div className="grid md:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} className="h-24" />
          ))}
        </div>
      ) : players.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-4">
          {players.map((player, i) => (
            <PlayerCard
              key={player.id}
              player={player}
              statValue={player.stats?.runs.toString()}
              statLabel="runs"
              trend="up"
              index={i}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={User}
          title="No players found"
          description="Add your first player to get started."
          actionLabel="Add Player"
          onAction={() => {}}
        />
      )}
    </div>
  )
}
