import { motion } from 'framer-motion'
import { Users, Shield, BarChart3, AlertTriangle, CheckCircle, XCircle, Clock } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { StatCard } from '@/components/shared/StatCard'
import { useAuthStore } from '@/store'

export default function AdminDashboardPage() {
  const { user } = useAuthStore()

  if (user?.role !== 'admin') {
    return (
      <div className="flex items-center justify-center h-96">
        <Card className="glass-card p-8 text-center">
          <Shield className="h-12 w-12 text-red-400 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white">Access Denied</h2>
          <p className="text-sm text-white/50 mt-2">You need admin privileges to view this page.</p>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl md:text-3xl font-bold text-white">Admin Dashboard</h1>
        <p className="text-sm text-white/50 mt-1">System overview and management</p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Users" value={1248} icon={Users} color="blue" />
        <StatCard title="Hosts" value={156} icon={Shield} color="amber" />
        <StatCard title="Live Matches" value={12} icon={BarChart3} color="green" />
        <StatCard title="Reports" value={3} icon={AlertTriangle} color="red" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="glass-card p-4">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Users</h3>
          <div className="space-y-3">
            {[
              { name: 'Rahul Sharma', role: 'host', status: 'active', date: '2 min ago' },
              { name: 'Priya Patel', role: 'user', status: 'active', date: '15 min ago' },
              { name: 'Amit Kumar', role: 'user', status: 'pending', date: '1 hour ago' },
            ].map((u, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-sm font-bold text-blue-400">
                    {u.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{u.name}</p>
                    <p className="text-xs text-white/40 capitalize">{u.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={u.status === 'active' ? 'success' : 'warning'} className="text-xs">
                    {u.status === 'active' ? <CheckCircle className="h-3 w-3 mr-1" /> : <Clock className="h-3 w-3 mr-1" />}
                    {u.status}
                  </Badge>
                  <span className="text-xs text-white/30">{u.date}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="glass-card p-4">
          <h3 className="text-lg font-semibold text-white mb-4">System Health</h3>
          <div className="space-y-4">
            {[
              { label: 'API Response Time', value: 45, max: 100, unit: 'ms', status: 'good' },
              { label: 'Database Load', value: 32, max: 100, unit: '%', status: 'good' },
              { label: 'Active Connections', value: 856, max: 2000, unit: '', status: 'good' },
              { label: 'Error Rate', value: 0.2, max: 5, unit: '%', status: 'good' },
            ].map((metric, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-white/60">{metric.label}</span>
                  <span className="text-sm text-white font-medium">{metric.value}{metric.unit}</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-electric transition-all"
                    style={{ width: `${(metric.value / metric.max) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
