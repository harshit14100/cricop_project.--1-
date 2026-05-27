import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Trophy,
  Users,
  MapPin,
  UserCheck,
  Coins,
  Share2,
  CheckCircle,
  Copy,
  MessageCircle,
  Search,
  Plus,
  Minus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCreateMatch, useTeams, usePlayers } from "@/hooks";
import { useUIStore } from "@/store";

const steps = [
  { id: 1, title: "Match Setup", icon: Trophy },
  { id: 2, title: "Teams Selection", icon: Users },
  { id: 3, title: "Players Squad", icon: UserCheck },
  { id: 4, title: "Officials Info", icon: MapPin },
  { id: 5, title: "The Toss", icon: Coins },
  { id: 6, title: "Share Match", icon: Share2 },
];

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function StartMatchPage() {
  const navigate = useNavigate();
  const { addToast } = useUIStore();
  const [currentStep, setCurrentStep] = useState(1);

  // Custom states added for fixes & new features
  const [newTeamA, setNewTeamA] = useState("");
  const [newTeamB, setNewTeamB] = useState("");
  const [playersPerTeam, setPlayersPerTeam] = useState(11);
  const [commonPlayerId, setCommonPlayerId] = useState("none");
  const [teamAPlayerIds, setTeamAPlayerIds] = useState<string[]>([]);
  const [teamBPlayerIds, setTeamBPlayerIds] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [matchData, setMatchData] = useState({
    matchType: "t20" as "t20" | "odi" | "test" | "custom",
    totalOvers: 20,
    teamAId: "",
    teamBId: "",
    venue: "",
    umpires: [] as string[],
    scorers: [] as string[],
    tossWinner: "",
    tossChoice: "" as "bat" | "bowl" | "",
  });

  const [copied, setCopied] = useState(false);

  const createMatch = useCreateMatch();
  const { data: teamsData } = useTeams();
  const { data: playersData } = usePlayers();

  const handleNext = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const togglePlayer = (playerId: string, team: "A" | "B") => {
    if (team === "A") {
      setTeamAPlayerIds((prev) =>
        prev.includes(playerId)
          ? prev.filter((id) => id !== playerId)
          : [...prev, playerId],
      );
      setTeamBPlayerIds((prev) => prev.filter((id) => id !== playerId));
    } else {
      setTeamBPlayerIds((prev) =>
        prev.includes(playerId)
          ? prev.filter((id) => id !== playerId)
          : [...prev, playerId],
      );
      setTeamAPlayerIds((prev) => prev.filter((id) => id !== playerId));
    }
  };

  const handleCreateMatch = async () => {
    if (teamAPlayerIds.length < 2 || teamBPlayerIds.length < 1) {
      addToast({
        title: "Invalid Squads",
        description: "Please select enough players",
        variant: "error",
      });

      return;
    }

    try {
      const tossWinnerId =
        matchData.tossWinner === "teamA"
          ? matchData.teamAId
          : matchData.teamBId;

      const battingTeamId =
        matchData.tossChoice === "bat"
          ? tossWinnerId
          : tossWinnerId === matchData.teamAId
            ? matchData.teamBId
            : matchData.teamAId;

      const bowlingTeamId =
        battingTeamId === matchData.teamAId
          ? matchData.teamBId
          : matchData.teamAId;

      const battingTeamPlayers =
        battingTeamId === matchData.teamAId
          ? teamAPlayerIds
          : teamBPlayerIds;

      const bowlingTeamPlayers =
        battingTeamId === matchData.teamAId
          ? teamBPlayerIds
          : teamAPlayerIds;

      const response = await createMatch.mutateAsync({
        team1_id: matchData.teamAId,

        team2_id: matchData.teamBId,

        venue: matchData.venue,

        overs: matchData.totalOvers,

        players_per_team: playersPerTeam,

        team1_players: teamAPlayerIds,

        team2_players: teamBPlayerIds,

        toss_winner_id: tossWinnerId,

        toss_decision: (matchData.tossChoice || "bat") as "bat" | "bowl",

        batting_team_id: battingTeamId,

        bowling_team_id: bowlingTeamId,

        striker_id: battingTeamPlayers[0] || "",

        non_striker_id: battingTeamPlayers[1] || "",

        current_bowler_id: bowlingTeamPlayers[0] || "",
      });

      addToast({
        title: "Success",
        description: "Match created successfully",
        variant: "success",
      });

      const matchId =
        (response as any)?.id ||
        (response as any)?.data?.id ||
        (response as any)?.match_id ||
        (response as any)?.data?.match_id;

      if (!matchId) {
        console.error("MATCH ID MISSING");
        addToast({
          title: "Error",
          description: "Match was created but ID is missing in response.",
          variant: "error",
        });
        return;
      }
      
      navigate(`/live-scoring/${matchId}`);
    } catch (error: any) {
      console.error("CREATE MATCH ERROR:", error);

      addToast({
        title: "Error",
        description: error.response?.data?.message || "Failed to create match. Please try again.",
        variant: "error",
      });
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(
      `https://cricop.com/match/${createMatch.data?.id}`,
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareWhatsApp = () => {
    const text = `Join me on CricOP for live cricket scoring! https://cricop.com/match/${createMatch.data?.id}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  const players = Array.isArray(playersData)
    ? playersData
    : (playersData as any)?.players || [];
  const filteredPlayers = players.filter((p: any) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const getTeamName = (teamId: string, defaultName: string) => {
    if (teamId === "new") return defaultName || "New Team";
    return (
      (teamsData as any)?.teams?.find((t: any) => (t.team_id || t.id) === teamId)?.name || "Select Team"
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Start New Match
        </h1>
        <p className="text-sm text-white/50 mt-1">
          Set up your match in a few easy steps
        </p>
      </motion.div>

      {/* Progress Steps */}
      <div className="mb-8 overflow-x-auto pb-4">
        <div className="flex items-center justify-between min-w-[600px]">
          {steps.map((step, i) => {
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;
            return (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{
                      backgroundColor: isActive
                        ? "#3b5bdb"
                        : isCompleted
                          ? "#0a1628"
                          : "rgba(255,255,255,0.05)",
                      borderColor: isActive
                        ? "#5c7cfa"
                        : isCompleted
                          ? "#3b5bdb"
                          : "rgba(255,255,255,0.1)",
                    }}
                    className="w-10 h-10 rounded-xl border-2 flex items-center justify-center"
                  >
                    {isCompleted ? (
                      <CheckCircle className="h-5 w-5 text-blue-400" />
                    ) : (
                      <step.icon
                        className={cn(
                          "h-5 w-5",
                          isActive ? "text-white" : "text-white/40",
                        )}
                      />
                    )}
                  </motion.div>
                  <span
                    className={cn(
                      "text-[10px] mt-2",
                      isActive ? "text-white" : "text-white/40",
                    )}
                  >
                    {step.title}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={cn(
                      "h-0.5 flex-1 mx-2 rounded-full",
                      isCompleted ? "bg-blue-500" : "bg-white/10",
                    )}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="glass-card p-6 md:p-8">
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white">
                  Match Setup
                </h2>

                <div className="space-y-2">
                  <Label>Match Type</Label>
                  <Select
                    value={matchData.matchType}
                    onValueChange={(v) =>
                      setMatchData((prev) => ({ ...prev, matchType: v as any }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="t20">T20 (20 overs)</SelectItem>
                      <SelectItem value="odi">ODI (50 overs)</SelectItem>
                      <SelectItem value="test">Test Match</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {matchData.matchType === "custom" && (
                  <div className="space-y-2">
                    <Label>Number of Overs</Label>
                    <Input
                      type="number"
                      value={matchData.totalOvers}
                      onChange={(e) =>
                        setMatchData((prev) => ({
                          ...prev,
                          totalOvers: parseInt(e.target.value) || 20,
                        }))
                      }
                      min={1}
                      max={50}
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label>Series (Optional)</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select or create series" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">+ Create New Series</SelectItem>
                      {teamsData?.teams?.length === 0 ? (
                        <SelectItem value="none" disabled>
                          No series available
                        </SelectItem>
                      ) : (
                        <>
                          <SelectItem value="ipl">IPL 2026</SelectItem>
                          <SelectItem value="t20">T20 World Cup</SelectItem>
                        </>
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white">
                  Select Teams
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Team A</Label>
                    <Select
                      value={matchData.teamAId}
                      onValueChange={(v) =>
                        setMatchData((prev) => ({ ...prev, teamAId: v }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select team" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">+ Create New Team</SelectItem>
                        {((teamsData as any)?.teams || [])
                          ?.filter((t: any) => (t.team_id || t.id) !== matchData.teamBId)
                          .map((t: any) => (
                            <SelectItem key={t.team_id || t.id} value={t.team_id || t.id}>
                              {t.name}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                    {matchData.teamAId === "new" && (
                      <Input
                        placeholder="Enter Team A Name"
                        value={newTeamA}
                        onChange={(e) => setNewTeamA(e.target.value)}
                        className="mt-2"
                      />
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>Team B</Label>
                    <Select
                      value={matchData.teamBId}
                      onValueChange={(v) =>
                        setMatchData((prev) => ({ ...prev, teamBId: v }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select team" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">+ Create New Team</SelectItem>
                        {((teamsData as any)?.teams || [])
                          ?.filter((t: any) => (t.team_id || t.id) !== matchData.teamAId)
                          .map((t: any) => (
                            <SelectItem key={t.team_id || t.id} value={t.team_id || t.id}>
                              {t.name}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                    {matchData.teamBId === "new" && (
                      <Input
                        placeholder="Enter Team B Name"
                        value={newTeamB}
                        onChange={(e) => setNewTeamB(e.target.value)}
                        className="mt-2"
                      />
                    )}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-white">
                      Playing Squad
                    </h2>
                    <p className="text-sm text-white/50">
                      Select players for both teams
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="space-y-1">
                      <Label className="text-xs">Players per team</Label>
                      <Input
                        type="number"
                        value={playersPerTeam}
                        onChange={(e) =>
                          setPlayersPerTeam(Number(e.target.value))
                        }
                        min={2}
                        max={11}
                        className="w-20 h-8"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Players Table/List */}
                  <div className="md:col-span-2 space-y-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                      <Input
                        className="pl-10"
                        placeholder="Search players..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>

                    <div className="rounded-xl border border-white/10 overflow-hidden bg-white/5">
                      <div className="max-h-[400px] overflow-y-auto">
                        <table className="w-full text-left">
                          <thead className="bg-white/5 text-xs uppercase text-white/40">
                            <tr>
                              <th className="px-4 py-3 font-medium">Player</th>
                              <th className="px-4 py-3 font-medium text-right">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {filteredPlayers.map((player: any) => {
                              const inTeamA = teamAPlayerIds.includes(
                                player.id,
                              );
                              const inTeamB = teamBPlayerIds.includes(
                                player.id,
                              );
                              const isCommon = commonPlayerId === player.id;

                              return (
                                <tr
                                  key={player.id}
                                  className="group hover:bg-white/5 transition-colors"
                                >
                                  <td className="px-4 py-3">
                                    <div className="flex items-center gap-3">
                                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">
                                        {player.name[0]}
                                      </div>
                                      <div>
                                        <div className="text-sm font-medium text-white">
                                          {player.name}
                                          {isCommon && (
                                            <Badge
                                              variant="outline"
                                              className="ml-2 text-[10px] py-0 border-amber-500/50 text-amber-500"
                                            >
                                              Common
                                            </Badge>
                                          )}
                                        </div>
                                        <div className="text-[10px] text-white/40">
                                          {player.battingStyle}
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="px-4 py-3 text-right">
                                    <div className="flex justify-end gap-2">
                                      <Button
                                        size="sm"
                                        variant={
                                          inTeamA ? "default" : "outline"
                                        }
                                        className={cn(
                                          "h-8 px-2 text-xs",
                                          inTeamA
                                            ? "bg-blue-600 hover:bg-blue-700"
                                            : "hover:bg-blue-500/10 hover:text-blue-400",
                                        )}
                                        onClick={() =>
                                          togglePlayer(player.id, "A")
                                        }
                                        disabled={isCommon}
                                      >
                                        {inTeamA ? (
                                          <Minus className="h-3 w-3 mr-1" />
                                        ) : (
                                          <Plus className="h-3 w-3 mr-1" />
                                        )}
                                        {
                                          getTeamName(
                                            matchData.teamAId,
                                            newTeamA,
                                          ).split(" ")[0]
                                        }
                                      </Button>
                                      <Button
                                        size="sm"
                                        variant={
                                          inTeamB ? "default" : "outline"
                                        }
                                        className={cn(
                                          "h-8 px-2 text-xs",
                                          inTeamB
                                            ? "bg-orange-600 hover:bg-orange-700"
                                            : "hover:bg-orange-500/10 hover:text-orange-400",
                                        )}
                                        onClick={() =>
                                          togglePlayer(player.id, "B")
                                        }
                                        disabled={isCommon}
                                      >
                                        {inTeamB ? (
                                          <Minus className="h-3 w-3 mr-1" />
                                        ) : (
                                          <Plus className="h-3 w-3 mr-1" />
                                        )}
                                        {
                                          getTeamName(
                                            matchData.teamBId,
                                            newTeamB,
                                          ).split(" ")[0]
                                        }
                                      </Button>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* Selected Squads Sidebar */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-sm font-medium text-white mb-3 flex justify-between">
                        <span>{getTeamName(matchData.teamAId, newTeamA)}</span>
                        <span
                          className={cn(
                            teamAPlayerIds.length === playersPerTeam
                              ? "text-emerald-400"
                              : "text-amber-400",
                          )}
                        >
                          {teamAPlayerIds.length}/{playersPerTeam}
                        </span>
                      </h3>
                      <div className="flex flex-wrap gap-1">
                        {teamAPlayerIds.map((id) => {
                          const p = (playersData as any)?.players.find(
                            (pl: any) => pl.id === id,                          );
                          return (
                            <Badge
                              key={id}
                              variant="secondary"
                              className="text-[10px]"
                            >
                              {p?.name}
                            </Badge>
                          );
                        })}
                        {teamAPlayerIds.length === 0 && (
                          <span className="text-xs text-white/20 italic">
                            No players selected
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-sm font-medium text-white mb-3 flex justify-between">
                        <span>{getTeamName(matchData.teamBId, newTeamB)}</span>
                        <span
                          className={cn(
                            teamBPlayerIds.length === playersPerTeam
                              ? "text-emerald-400"
                              : "text-amber-400",
                          )}
                        >
                          {teamBPlayerIds.length}/{playersPerTeam}
                        </span>
                      </h3>
                      <div className="flex flex-wrap gap-1">
                        {teamBPlayerIds.map((id) => {
                          const p = (playersData as any)?.players.find(
                            (pl: any) => pl.id === id,                          );
                          return (
                            <Badge
                              key={id}
                              variant="secondary"
                              className="text-[10px]"
                            >
                              {p?.name}
                            </Badge>
                          );
                        })}
                        {teamBPlayerIds.length === 0 && (
                          <span className="text-xs text-white/20 italic">
                            No players selected
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                      <Label className="text-xs text-amber-500 mb-2 block">
                        Common Player (Both Teams)
                      </Label>
                      <Select
                        value={commonPlayerId}
                        onValueChange={(v) => {
                          setCommonPlayerId(v);
                          if (v !== "none") {
                            // Remove from individual teams if selected as common
                            setTeamAPlayerIds((prev) =>
                              prev.filter((id) => id !== v),
                            );
                            setTeamBPlayerIds((prev) =>
                              prev.filter((id) => id !== v),
                            );
                          }
                        }}
                      >
                        <SelectTrigger className="h-8 text-xs bg-transparent border-white/10">
                          <SelectValue placeholder="None" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          {(playersData as any)?.players.map((p: any) => (
                            <SelectItem key={p.id} value={p.id}>
                              {p.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white">
                  Match Officials
                </h2>

                <div className="space-y-2">
                  <Label>Venue</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                    <Input
                      className="pl-10"
                      placeholder="Wankhede Stadium, Mumbai"
                      value={matchData.venue}
                      onChange={(e) =>
                        setMatchData((prev) => ({ ...prev, venue: e.target.value }))
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Umpires</Label>
                  <Input placeholder="Enter umpire names (comma separated)" />
                </div>

                <div className="space-y-2">
                  <Label>Scorers</Label>
                  <Input placeholder="Enter scorer names" />
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white text-center">
                  Toss Time!
                </h2>

                <motion.div
                  animate={{ rotateY: [0, 360, 720, 1080] }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-2xl shadow-amber-500/30"
                >
                  <Coins className="h-16 w-16 text-white" />
                </motion.div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Toss Winner</Label>
                    <Select
                      value={matchData.tossWinner}
                      onValueChange={(v) =>
                        setMatchData((prev) => ({ ...prev, tossWinner: v }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select toss winner" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="teamA">
                          {getTeamName(matchData.teamAId, newTeamA)}
                        </SelectItem>
                        <SelectItem value="teamB">
                          {getTeamName(matchData.teamBId, newTeamB)}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Elected To</Label>
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        type="button"
                        variant={
                          matchData.tossChoice === "bat" ? "default" : "outline"
                        }
                        className="h-16 text-lg"
                        onClick={() =>
                          setMatchData((prev) => ({ ...prev, tossChoice: "bat" }))
                        }
                      >
                        Bat
                      </Button>
                      <Button
                        type="button"
                        variant={
                          matchData.tossChoice === "bowl"
                            ? "default"
                            : "outline"
                        }
                        className="h-16 text-lg"
                        onClick={() =>
                          setMatchData((prev) => ({ ...prev, tossChoice: "bowl" }))
                        }
                      >
                        Bowl
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 6 && (
              <div className="space-y-6 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto"
                >
                  <CheckCircle className="h-10 w-10 text-emerald-400" />
                </motion.div>

                <h2 className="text-xl font-semibold text-white">
                  Match Ready!
                </h2>
                <p className="text-sm text-white/50">
                  Share this link with your team and audience
                </p>

                <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
                  <Input
                    readOnly
                    value={`https://cricop.com/match/${createMatch.data?.id || "abc123"}`}
                    className="border-0 bg-transparent"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={copyLink}
                    className="flex-shrink-0"
                  >
                    {copied ? (
                      <CheckCircle className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                <div className="flex gap-3 justify-center">
                  <Button
                    variant="outline"
                    onClick={shareWhatsApp}
                    className="gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </Button>
                  <Button
                    onClick={() =>
                      navigate(
                        `/live-scoring/${(createMatch.data as any)?.data?.id || createMatch.data?.id || "abc123"}`,
                      )
                    }
                  >
                    Start Scoring
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      {currentStep < 6 && (
        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>

          {currentStep === 5 ? (
            <Button
              onClick={handleCreateMatch}
              isLoading={createMatch.isPending}
              className="gap-2"
              disabled={
                teamAPlayerIds.length === 0 || teamBPlayerIds.length === 0
              }
            >
              Confirm & Create
              <CheckCircle className="h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleNext} className="gap-2">
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
