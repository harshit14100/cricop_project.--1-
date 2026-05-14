import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Bell, Shield, Moon, Smartphone, LogOut, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useAuthStore, useUIStore } from '@/store'
import { useLogout } from '@/hooks'

export default function SettingsPage() {
  const { user } = useAuthStore()
  const logout = useLogout()
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: true,
    autoRefresh: true,
    compactView: false,
  })

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl md:text-3xl font-bold text-white">Settings</h1>
        <p className="text-sm text-white/50 mt-1">Manage your account and preferences</p>
      </motion.div>

      {/* Profile Card */}
      <Card className="glass-card p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={user?.avatar} />
            <AvatarFallback className="text-xl">{user?.name?.charAt(0) || 'U'}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">{user?.name || 'User'}</h3>
            <p className="text-sm text-white/50">{user?.email}</p>
            <p className="text-sm text-white/50">{user?.phone}</p>
          </div>
          <Button variant="outline" size="sm">Edit Profile</Button>
        </div>
      </Card>

      {/* Preferences */}
      <Card className="glass-card p-4">
        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Preferences</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="h-5 w-5 text-white/40" />
              <div>
                <p className="text-sm text-white">Push Notifications</p>
                <p className="text-xs text-white/40">Get notified for match events</p>
              </div>
            </div>
            <Switch
              checked={settings.notifications}
              onCheckedChange={(v) => setSettings({ ...settings, notifications: v })}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Moon className="h-5 w-5 text-white/40" />
              <div>
                <p className="text-sm text-white">Dark Mode</p>
                <p className="text-xs text-white/40">Always on for CricOP</p>
              </div>
            </div>
            <Switch checked={true} disabled />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Smartphone className="h-5 w-5 text-white/40" />
              <div>
                <p className="text-sm text-white">Auto Refresh</p>
                <p className="text-xs text-white/40">Live score updates</p>
              </div>
            </div>
            <Switch
              checked={settings.autoRefresh}
              onCheckedChange={(v) => setSettings({ ...settings, autoRefresh: v })}
            />
          </div>
        </div>
      </Card>

      {/* Account */}
      <Card className="glass-card p-4">
        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Account</h3>
        <div className="space-y-2">
          <Button variant="ghost" className="w-full justify-between h-12">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-white/40" />
              <span className="text-sm text-white">Change Password</span>
            </div>
            <ChevronRight className="h-4 w-4 text-white/40" />
          </Button>
          <Button variant="ghost" className="w-full justify-between h-12">
            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-white/40" />
              <span className="text-sm text-white">Privacy Policy</span>
            </div>
            <ChevronRight className="h-4 w-4 text-white/40" />
          </Button>
        </div>
      </Card>

      <Button
        variant="destructive"
        className="w-full gap-2"
        onClick={() => logout.mutate()}
        isLoading={logout.isPending}
      >
        <LogOut className="h-4 w-4" />
        Log Out
      </Button>
    </div>
  )
}
