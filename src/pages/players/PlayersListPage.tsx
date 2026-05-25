import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Plus, User } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import { PlayerCard } from "@/components/shared/PlayerCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { SkeletonCard } from "@/components/shared/SkeletonCard";

import { usePlayers, useCreatePlayer } from "@/hooks";

export default function PlayersListPage() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newPlayerName, setNewPlayerName] = useState("");
  const [newPlayerPhone, setNewPlayerPhone] = useState("");
  const [battingStyle, setBattingStyle] = useState("right-handed");

  const createPlayer = useCreatePlayer();

  const handleAddPlayer = () => {
    if (!newPlayerName.trim()) return;
    createPlayer.mutate(
      { 
        name: newPlayerName, 
        phone: newPlayerPhone,
        battingStyle: battingStyle as any 
      },
      {
        onSuccess: () => {
          setIsAddOpen(false);
          setNewPlayerName("");
          setNewPlayerPhone("");
        },
      },
    );
  };

  const { data, isLoading, error: fetchError } = usePlayers({
    search,
    limit: 100,
  });

  const players = Array.isArray(data) ? data : data?.players || [];
  const filteredPlayers = players.filter((p: any) => 
    p?.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-wrap items-center justify-between gap-4"
      >
        <div className="flex-1 min-w-[220px]">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Players</h1>

          <p className="text-sm text-white/50 mt-1">
            Manage your team players and view statistics
          </p>
        </div>

        <Button className="gap-2 shrink-0" onClick={() => setIsAddOpen(true)}>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} className="h-24" />
          ))}
        </div>
      ) : filteredPlayers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPlayers.map((player: any, index: number) => (
            <PlayerCard
              key={player.id || `player-${index}`}
              player={player}
              statValue={player.stats?.runs?.toString() || "0"}
              statLabel="Runs"
              trend="up"
              index={index}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={User}
          title={fetchError ? "Error Loading Players" : "No players found"}
          description={fetchError ? "Could not connect to the backend server." : "Add your first player to get started."}
          actionLabel="Add Player"
          onAction={() => setIsAddOpen(true)}
        />
      )}
      <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Player</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label>Player Name</Label>
              <Input
                placeholder="Enter player name"
                value={newPlayerName}
                onChange={(e) => setNewPlayerName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Phone Number</Label>
              <Input
                placeholder="+91 98765 43210"
                type="tel"
                value={newPlayerPhone}
                onChange={(e) => setNewPlayerPhone(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Batting Style</Label>
              <Select value={battingStyle} onValueChange={setBattingStyle}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="right-handed">Right Handed</SelectItem>
                  <SelectItem value="left-handed">Left Handed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              className="w-full"
              onClick={handleAddPlayer}
              isLoading={createPlayer.isPending}
            >
              Add Player
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
