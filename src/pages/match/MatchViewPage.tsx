import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Activity, FileText, MessageSquare, Star, BarChart3, Trophy } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScoreBoard } from '@/components/shared/ScoreBoard'
import { useMatch, useMatchHighlights } from '@/hooks'
import { formatOvers, calculateRunRate } from '@/lib/utils'

export default function MatchViewPage() {
  const { matchId } = useParams<{ matchId: string }>()
  const { data: match } = useMatch(matchId || '')
  const { data: highlights } = useMatchHighlights(matchId || '')

  if (!match) return null

  const currentInnings = match.innings[match.currentInnings - 1]

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold text-white">{match.teamA.name} vs {match.teamB.name}</h1>
        <div className="flex items-center gap-2 mt-2">
          <Badge variant={match.status === 'live' ? 'live' : 'secondary'}>
            {match.status.toUpperCase()}
          </Badge>
          <span className="text-sm text-white/50">{match.matchType.toUpperCase()} • {match.totalOvers} overs</span>
        </div>
      </motion.div>

      {currentInnings && <ScoreBoard match={match} currentInnings={currentInnings} />}

      <Tabs defaultValue="live">
        <TabsList className="w-full grid grid-cols-5">
          <TabsTrigger value="live"><Activity className="h-4 w-4 mr-1" /> Live</TabsTrigger>
          <TabsTrigger value="scorecard"><FileText className="h-4 w-4 mr-1" /> Scorecard</TabsTrigger>
          <TabsTrigger value="commentary"><MessageSquare className="h-4 w-4 mr-1" /> Commentary</TabsTrigger>
          <TabsTrigger value="highlights"><Star className="h-4 w-4 mr-1" /> Highlights</TabsTrigger>
          <TabsTrigger value="stats"><BarChart3 className="h-4 w-4 mr-1" /> Stats</TabsTrigger>
        </TabsList>

        <TabsContent value="live" className="mt-4">
          <div className="space-y-4">
            {/* Batting Scorecard */}
            <Card className="glass-card p-4">
              <h3 className="text-sm font-semibold text-white mb-3">Batting</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-white/40 text-xs border-b border-white/10">
                      <th className="text-left py-2">Batsman</th>
                      <th className="text-right py-2">R</th>
                      <th className="text-right py-2">B</th>
                      <th className="text-right py-2">4s</th>
                      <th className="text-right py-2">6s</th>
                      <th className="text-right py-2">SR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentInnings?.batsmen.map((b) => (
                      <tr key={b.playerId} className="border-b border-white/5">
                        <td className="py-2">
                          <span className={b.isOut ? 'text-white/50' : 'text-white font-medium'}>
                            {b.playerName} {!b.isOut && '*'}
                          </span>
                          {b.dismissal && <span className="text-xs text-white/40 block">{b.dismissal.type}</span>}
                        </td>
                        <td className="text-right py-2 text-white">{b.runs}</td>
                        <td className="text-right py-2 text-white/60">{b.balls}</td>
                        <td className="text-right py-2 text-blue-400">{b.fours}</td>
                        <td className="text-right py-2 text-purple-400">{b.sixes}</td>
                        <td className="text-right py-2 text-white/60">{b.strikeRate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Bowling Scorecard */}
            <Card className="glass-card p-4">
              <h3 className="text-sm font-semibold text-white mb-3">Bowling</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-white/40 text-xs border-b border-white/10">
                      <th className="text-left py-2">Bowler</th>
                      <th className="text-right py-2">O</th>
                      <th className="text-right py-2">M</th>
                      <th className="text-right py-2">R</th>
                      <th className="text-right py-2">W</th>
                      <th className="text-right py-2">Econ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentInnings?.bowlers.map((b) => (
                      <tr key={b.playerId} className="border-b border-white/5">
                        <td className="py-2 text-white">{b.playerName}</td>
                        <td className="text-right py-2 text-white">{formatOvers(b.balls)}</td>
                        <td className="text-right py-2 text-white/60">{b.maidens}</td>
                        <td className="text-right py-2 text-white">{b.runs}</td>
                        <td className="text-right py-2 text-red-400 font-bold">{b.wickets}</td>
                        <td className="text-right py-2 text-white/60">{b.economy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="scorecard" className="mt-4">
          <Card className="glass-card p-4">
            <h3 className="text-sm font-semibold text-white mb-3">Full Scorecard</h3>
            <p className="text-sm text-white/50">Complete match scorecard with all innings...</p>
          </Card>
        </TabsContent>

        <TabsContent value="commentary" className="mt-4">
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Card key={i} className="glass-card p-3">
                <div className="flex items-start gap-3">
                  <span className="text-xs text-white/40 font-mono">{i}.{(6-i)*2}</span>
                  <div>
                    <p className="text-sm text-white">{i === 1 ? 'SIX! Suryakumar Yadav hits a massive six over deep mid-wicket' : i === 2 ? 'FOUR! Cracking cover drive by Rohit Sharma' : 'Dot ball. Good length delivery defended back to bowler'}</p>
                    <span className="text-xs text-white/40">{i === 1 ? '6 runs' : i === 2 ? '4 runs' : '0 runs'}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="highlights" className="mt-4">
          <div className="space-y-3">
            {highlights?.map((h, i) => (
              <Card key={i} className="glass-card p-4">
                <div className="flex items-center gap-3">
                  <Trophy className="h-5 w-5 text-amber-400" />
                  <div>
                    <p className="text-sm text-white">{h.description}</p>
                    <span className="text-xs text-white/40">Over {h.over}.{h.ball}</span>
                  </div>
                </div>
              </Card>
            )) || (
              <Card className="glass-card p-8 text-center">
                <p className="text-sm text-white/50">No highlights available yet</p>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="stats" className="mt-4">
          <div className="grid grid-cols-2 gap-4">
            <Card className="glass-card p-4 text-center">
              <p className="text-2xl font-bold text-white">{currentInnings?.partnerships[0]?.runs || 45}</p>
              <p className="text-xs text-white/50">Highest Partnership</p>
            </Card>
            <Card className="glass-card p-4 text-center">
              <p className="text-2xl font-bold text-white">{calculateRunRate(currentInnings?.runs || 0, currentInnings?.balls || 1)}</p>
              <p className="text-xs text-white/50">Current Run Rate</p>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
