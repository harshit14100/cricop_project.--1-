import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, Filter, Trophy } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MatchCard } from '@/components/shared/MatchCard'
import { EmptyState } from '@/components/shared/EmptyState'
import { SkeletonCard } from '@/components/shared/SkeletonCard'
import { useMatches } from '@/hooks'
import { useAuthStore } from '@/store'

export default function MatchHistoryPage() {
  const navigate = useNavigate()
  const { user } = useAuthStore()

  const handleStartMatchClick = () => {
    if (!user) {
      navigate('/login')
      return
    }
    navigate('/start-match')
  }

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const { data, isLoading } = useMatches()

  const matchesRaw = Array.isArray(data) ? data : (data as any)?.matches || [];
  const matches = Array.isArray(matchesRaw) ? matchesRaw : [];
  
  const filtered = matches.filter(m => {
    if (filter !== 'all' && m.status !== filter) return false
    const teamAName = m.teamA?.name.toLowerCase() || "";
    const teamBName = m.teamB?.name.toLowerCase() || "";
    if (search && !teamAName.includes(search.toLowerCase()) && !teamBName.includes(search.toLowerCase())) return false
    return true
  })

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl md:text-3xl font-bold text-white">Match History</h1>
        <p className="text-sm text-white/50 mt-1">View all your past and upcoming matches</p>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
          <Input
            placeholder="Search teams..."
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-full sm:w-40">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Matches</SelectItem>
            <SelectItem value="live">Live</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="scheduled">Scheduled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Matches Grid */}
      {isLoading ? (
        <div className="grid md:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} className="h-64" />
          ))}
        </div>
      ) : filtered.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((match, i) => (
            <MatchCard key={match.id} match={match} index={i} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={Trophy}
          title="No matches found"
          description={user ? "Try adjusting your filters or start a new match." : "Log in to start a match and see them here."}
          actionLabel={user ? "Start Match" : "Login to Start"}
          onAction={handleStartMatchClick}
        />
      )}
    </div>
  )
}
