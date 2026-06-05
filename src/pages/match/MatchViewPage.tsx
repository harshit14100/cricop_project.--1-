import { useParams, Navigate } from 'react-router-dom'
import { Activity, FileText, MessageSquare, BarChart3 } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { ScoreBoard } from '@/components/shared/ScoreBoard'
import { useMatch, useMatchScorecard } from '@/hooks'
import { calculateRunRate } from '@/lib/utils'
import { MatchHeader } from '@/components/match/MatchHeader'
import { BattingScorecard } from '@/components/match/BattingScorecard'
import { BowlingScorecard } from '@/components/match/BowlingScorecard'
import { MatchInfoCard } from '@/components/match/MatchInfoCard'
import { LoadingScreen } from '@/components/shared/LoadingScreen'
import { ErrorState } from '@/components/shared/ErrorState'

export default function MatchViewPage() {
  const { matchId } = useParams<{ matchId: string }>()
  const { data: match, isLoading, error } = useMatch(matchId || '')
  const { data: scorecard, isLoading: isScorecardLoading } = useMatchScorecard(matchId || '')

  if (isLoading || isScorecardLoading) return <LoadingScreen />
  if (error || !match) return <ErrorState title="Error" description="Could not load match details." />

  // If the match is live, we should redirect to the specialized live view
  if (match.status === 'live') {
    return <Navigate to={`/match/${match.id}/live`} replace />
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      <MatchHeader match={match} />

      <ScoreBoard match={match} />

      <Tabs defaultValue="scorecard">
        <TabsList className="w-full grid grid-cols-4">
          <TabsTrigger value="scorecard"><FileText className="h-4 w-4 mr-1" /> Scorecard</TabsTrigger>
          <TabsTrigger value="commentary"><MessageSquare className="h-4 w-4 mr-1" /> Commentary</TabsTrigger>
          <TabsTrigger value="info"><Activity className="h-4 w-4 mr-1" /> Info</TabsTrigger>
          <TabsTrigger value="stats"><BarChart3 className="h-4 w-4 mr-1" /> Stats</TabsTrigger>
        </TabsList>

        <TabsContent value="scorecard" className="mt-6 space-y-6">
          <BattingScorecard scorecard={scorecard} matchId={match.id} />
          <BowlingScorecard scorecard={scorecard} />
        </TabsContent>

        <TabsContent value="info" className="mt-6">
          <MatchInfoCard match={match} />
        </TabsContent>

        <TabsContent value="commentary" className="mt-6">
          <Card className="glass-card p-8 text-center">
            <p className="text-sm text-white/50">Full match commentary available soon</p>
          </Card>
        </TabsContent>

        <TabsContent value="stats" className="mt-6">
          <div className="grid grid-cols-2 gap-4">
            <Card className="glass-card p-4 text-center">
              <p className="text-2xl font-bold text-white">0</p>
              <p className="text-xs text-white/50">Highest Partnership</p>
            </Card>
            <Card className="glass-card p-4 text-center">
              <p className="text-2xl font-bold text-white">
                {calculateRunRate(match.total_runs || 0, (match.completed_overs || 0) * 6 + (match.balls_in_current_over || 0))}
              </p>
              <p className="text-xs text-white/50">Match Run Rate</p>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
