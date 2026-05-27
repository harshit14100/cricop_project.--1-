import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Plus, Trash2, Save, ArrowLeft, Trophy, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useCreateTeam } from "@/hooks";

export default function CreateTeamPage() {
  const navigate = useNavigate();
  const createTeam = useCreateTeam();
  
  const [teamData, setTeamData] = useState({
    name: "",
    shortName: "",
    color: "#3b82f6",
  });

  const [players, setPlayers] = useState<{ id: string; name: string }[]>([]);
  const [newPlayerName, setNewPlayerName] = useState("");

  const addPlayer = () => {
    if (newPlayerName && newPlayerName.trim()) {
      setPlayers((prev) => [
        ...prev,
        { id: `p-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`, name: newPlayerName.trim() },
      ]);
      setNewPlayerName("");
    }
  };

  const removePlayer = (id: string) => {
    setPlayers((prev) => prev.filter((p) => p.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamData.name || !teamData.shortName) return;

    createTeam.mutate({
      team_id: "", // Server will generate this
      name: teamData.name,
      short_name: teamData.shortName,
      color: teamData.color,
      players: (players || []).map((p: any) => ({
        id: p.id,
        name: p.name,
        battingStyle: "right-handed" as const,
      })),
    }, {
      onSuccess: () => {
        navigate("/players");
      }
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate(-1)}
          className="rounded-full hover:bg-white/10"
        >
          <ArrowLeft className="h-5 w-5 text-white/60" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-white">Create Your Team</h1>
          <p className="text-white/50">Build your squad and start scoring</p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <Card className="glass-card border-white/10 bg-[#0d1e36]/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Trophy className="h-5 w-5 text-electric" />
                Team Identity
              </CardTitle>
              <CardDescription className="text-white/40">
                Give your team a name and a distinct look
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white/70">Team Name</Label>
                  <Input
                    id="name"
                    placeholder="e.g. Mumbai Mavericks"
                    className="bg-white/5 border-white/10 text-white focus:border-electric/50"
                    value={teamData.name}
                    onChange={(e) => setTeamData({ ...teamData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shortName" className="text-white/70">Short Name (3-4 letters)</Label>
                  <Input
                    id="shortName"
                    placeholder="e.g. MM"
                    className="bg-white/5 border-white/10 text-white focus:border-electric/50"
                    value={teamData.shortName}
                    onChange={(e) => setTeamData({ ...teamData, shortName: e.target.value.toUpperCase() })}
                    maxLength={4}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="color" className="text-white/70">Team Theme Color</Label>
                <div className="flex gap-4 items-center">
                  <input
                    id="color"
                    type="color"
                    className="w-12 h-12 rounded-lg bg-transparent border-none cursor-pointer"
                    value={teamData.color}
                    onChange={(e) => setTeamData({ ...teamData, color: e.target.value })}
                  />
                  <div className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/60 text-sm">
                    This color will be used for your team's scorecard and highlights
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10 bg-[#0d1e36]/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Users className="h-5 w-5 text-electric" />
                Squad Members ({players?.length || 0})
              </CardTitle>
              <CardDescription className="text-white/40">
                Add players to your team squad
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Enter player name"
                  className="bg-white/5 border-white/10 text-white focus:border-electric/50"
                  value={newPlayerName}
                  onChange={(e) => setNewPlayerName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addPlayer())}
                />
                <Button 
                  type="button" 
                  onClick={addPlayer}
                  className="bg-electric hover:bg-electric/80"
                  disabled={!newPlayerName.trim()}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 max-h-[300px] overflow-y-auto pr-2">
                <AnimatePresence>
                  {(players || []).map((player, index) => (
                    <motion.div
                      key={player.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-electric/20 flex items-center justify-center text-xs font-bold text-electric">
                          {index + 1}
                        </div>
                        <span className="text-white text-sm font-medium">{player.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removePlayer(player.id)}
                        className="text-white/20 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {(!players || players.length === 0) && (
                  <div className="col-span-full py-8 text-center border-2 border-dashed border-white/5 rounded-xl">
                    <UserPlus className="h-8 w-8 text-white/10 mx-auto mb-2" />
                    <p className="text-white/20 text-sm">No players added yet</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1 h-12 border-white/10 text-white hover:bg-white/5"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 h-12 bg-electric hover:bg-electric/80 text-white font-semibold"
              isLoading={createTeam.isPending}
            >
              <Save className="mr-2 h-4 w-4" />
              Create Team & Squad
            </Button>
          </div>
        </form>
      </motion.div>

      {/* Preview Card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-12"
      >
        <Label className="text-white/40 mb-3 block text-center uppercase tracking-wider text-xs">Preview</Label>
        <div 
          className="glass-card p-6 border-l-4 overflow-hidden relative"
          style={{ borderLeftColor: teamData.color }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none -mr-8 -mt-8">
            <Trophy className="w-full h-full text-white" />
          </div>
          <div className="flex items-center gap-4">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg"
              style={{ backgroundColor: teamData.color }}
            >
              {teamData.shortName || "?"}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{teamData.name || "Your Team Name"}</h3>
              <p className="text-white/50 text-sm">{players?.length || 0} Players • New Team</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
