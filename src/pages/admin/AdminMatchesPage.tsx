import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Eye, Trash2, Flag } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const mockMatches = [
  { id: '1', teamA: 'MI', teamB: 'CSK', status: 'live', date: '2026-05-14', reports: 0 },
  { id: '2', teamA: 'RCB', teamB: 'KKR', status: 'completed', date: '2026-05-13', reports: 2 },
  { id: '3', teamA: 'DC', teamB: 'SRH', status: 'upcoming', date: '2026-05-15', reports: 0 },
  { id: '4', teamA: 'PBKS', teamB: 'RR', status: 'live', date: '2026-05-14', reports: 1 },
]

export default function AdminMatchesPage() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  const filtered = mockMatches.filter(m => {
    if (filter !== 'all' && m.status !== filter) return false
    if (search && !m.teamA.toLowerCase().includes(search.toLowerCase()) && !m.teamB.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl md:text-3xl font-bold text-white">Match Management</h1>
        <p className="text-sm text-white/50 mt-1">Monitor and manage all matches</p>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
          <Input
            placeholder="Search matches..."
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
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="live">Live</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="upcoming">Upcoming</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4">
        {filtered.map((match) => (
          <Card key={match.id} className="glass-card p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-white">{match.teamA}</span>
                  <span className="text-white/40">vs</span>
                  <span className="text-lg font-bold text-white">{match.teamB}</span>
                </div>
                <Badge variant={match.status === 'live' ? 'live' : match.status === 'completed' ? 'secondary' : 'default'}>
                  {match.status}
                </Badge>
                {match.reports > 0 && (
                  <Badge variant="destructive" className="gap-1">
                    <Flag className="h-3 w-3" />
                    {match.reports} reports
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-white/40">{match.date}</span>
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-red-400">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
