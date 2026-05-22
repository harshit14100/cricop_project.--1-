import { useState, useEffect } from "react";
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
import { useCreateMatch, useTeams, usePlayers } from "@/hooks";
import { cn } from "@/lib/utils";
import { useUIStore } from "@/store";

const steps = [
  { id: 1, title: "Match Setup", icon: Trophy },
  { id: 2, title: "Teams", icon: Users },
  { id: 3, title: "Players", icon: UserCheck },
  { id: 4, title: "Officials", icon: MapPin },
  { id: 5, title: "Toss", icon: Coins },
  { id: 6, title: "Share", icon: Share2 },
];

export default function StartMatchPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  // Custom states added for fixes & new features
  const [newTeamA, setNewTeamA] = useState("");
  const [newTeamB, setNewTeamB] = useState("");
  const [playersPerTeam, setPlayersPerTeam] = useState(11);
  const [commonPlayerId, setCommonPlayerId] = useState("none");
  const [teamAPlayerIds, setTeamAPlayerIds] = useState<string[]>([]);
  const [teamBPlayerIds, setTeamBPlayerIds] = useState<string[]>([]);
  const [playerSearchTerm, setPlayerSearchTerm] = useState("");

  const [isFlipping, setIsFlipping] = useState(false);
  const [coinResult, setCoinResult] = useState<"heads" | "tails" | null>(null);
  const [tossCall, setTossCall] = useState<"heads" | "tails" | null>(null);
  const [tossCaller, setTossCaller] = useState<"teamA" | "teamB">("teamA");

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
  const { addToast } = useUIStore();

  // Pre-fill players when team is selected
  useEffect(() => {
    if (matchData.teamAId && matchData.teamAId !== "new") {
      const teamA = teamsData?.teams.find((t) => t.id === matchData.teamAId);
      if (teamA?.players) {
        setTeamAPlayerIds(
          teamA.players.map((p) => p.id).slice(0, playersPerTeam),
        );
      }
    }
  }, [matchData.teamAId, teamsData, playersPerTeam]);

  useEffect(() => {
    if (matchData.teamBId && matchData.teamBId !== "new") {
      const teamB = teamsData?.teams.find((t) => t.id === matchData.teamBId);
      if (teamB?.players) {
        setTeamBPlayerIds(
          teamB.players.map((p) => p.id).slice(0, playersPerTeam),
        );
      }
    }
  }, [matchData.teamBId, teamsData, playersPerTeam]);

  const handleNext = () => {
    if (currentStep === 3) {
      if (teamAPlayerIds.length === 0 || teamBPlayerIds.length === 0) {
        addToast({
          title: "Selection Required",
          description: "Please select at least one player for each team.",
          variant: "warning",
        });
        return;
      }
    }
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleCreateMatch = async () => {
    if (teamAPlayerIds.length === 0 || teamBPlayerIds.length === 0) {
      addToast({
        title: "Incomplete Squads",
        description: "Each team must have at least one player to start.",
        variant: "error",
      });
      return;
    }

    // Pass custom data into mutation payload.
    // Note: ensure your backend/API function also expects these new properties.
    const match = await createMatch.mutateAsync({
      matchType: matchData.matchType,
      totalOvers: matchData.totalOvers,
      teamAId: matchData.teamAId,
      teamBId: matchData.teamBId,
      newTeamAName: matchData.teamAId === "new" ? newTeamA : undefined,
      newTeamBName: matchData.teamBId === "new" ? newTeamB : undefined,
      playersPerTeam: playersPerTeam,
      commonPlayerId: commonPlayerId === "none" ? undefined : commonPlayerId,
      teamAPlayerIds,
      teamBPlayerIds,
      venue: matchData.venue,
      umpires: matchData.umpires,
      scorers: matchData.scorers,
      tossWinner: matchData.tossWinner,
      tossChoice: matchData.tossChoice,
    } as any); // using 'as any' here if your hook types haven't been updated yet

    if (match) {
      handleNext();
    }
  };

  const togglePlayer = (playerId: string, team: "A" | "B") => {
    if (team === "A") {
      if (teamBPlayerIds.includes(playerId)) return; // Already in Team B
      setTeamAPlayerIds((prev) =>
        prev.includes(playerId)
          ? prev.filter((id) => id !== playerId)
          : prev.length < playersPerTeam
            ? [...prev, playerId]
            : prev,
      );
    } else {
      if (teamAPlayerIds.includes(playerId)) return; // Already in Team A
      setTeamBPlayerIds((prev) =>
        prev.includes(playerId)
          ? prev.filter((id) => id !== playerId)
          : prev.length < playersPerTeam
            ? [...prev, playerId]
            : prev,
      );
    }
  };

  const filteredPlayers = playersData?.players.filter((p) =>
    p.name.toLowerCase().includes(playerSearchTerm.toLowerCase()),
  );

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

  const handleFlipCoin = () => {
    if (!tossCall || isFlipping) return;

    setIsFlipping(true);
    setCoinResult(null);

    // Realistic coin flip animation logic
    setTimeout(() => {
      const result = Math.random() > 0.5 ? "heads" : "tails";
      setCoinResult(result);
      setIsFlipping(false);

      const winner =
        result === tossCall
          ? tossCaller
          : tossCaller === "teamA"
            ? "teamB"
            : "teamA";
      setMatchData((prev) => ({ ...prev, tossWinner: winner }));
    }, 2000);
  };

  const teamAName =
    teamsData?.teams.find((t) => t.id === matchData.teamAId)?.name ||
    newTeamA ||
    "Team A";
  const teamBName =
    teamsData?.teams.find((t) => t.id === matchData.teamBId)?.name ||
    newTeamB ||
    "Team B";

  return (
    <div className="max-w-3xl mx-auto">
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
      <div className="mb-8">
        <div className="flex items-center justify-between">
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
                      "text-xs mt-2 hidden md:block",
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
                      setMatchData({ ...matchData, matchType: v as any })
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
                        setMatchData({
                          ...matchData,
                          totalOvers: parseInt(e.target.value) || 20,
                        })
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
                      <SelectItem value="ipl">IPL 2026</SelectItem>
                      <SelectItem value="t20">T20 World Cup</SelectItem>
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
                        setMatchData({ ...matchData, teamAId: v })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select team" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">Custom Team Name</SelectItem>
                        {teamsData?.teams.map((t) => (
                          <SelectItem key={t.id} value={t.id}>
                            {t.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {/* Fixed: Show Input when creating new Team A */}
                    {matchData.teamAId === "new" && (
                      <Input
                        placeholder="Enter Custom Team A Name"
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
                        setMatchData({ ...matchData, teamBId: v })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select team" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">Custom Team Name</SelectItem>
                        {teamsData?.teams.map((t) => (
                          <SelectItem key={t.id} value={t.id}>
                            {t.name}
                          </SelectItem>
                        )) || (
                          <>
                            <SelectItem value="t2">
                              Chennai Super Kings
                            </SelectItem>
                            <SelectItem value="t4">
                              Kolkata Knight Riders
                            </SelectItem>
                            <SelectItem value="t5">Delhi Capitals</SelectItem>
                          </>
                        )}
                      </SelectContent>
                    </Select>
                    {/* Fixed: Show Input when creating new Team B */}
                    {matchData.teamBId === "new" && (
                      <Input
                        placeholder="Enter Custom Team B Name"
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
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-white">
                      Playing Squad
                    </h2>
                    <p className="text-sm text-white/50">
                      Select {playersPerTeam} players for each team
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Label className="text-xs">Per Team:</Label>
                    <Input
                      type="number"
                      className="w-16 h-8 text-center"
                      value={playersPerTeam}
                      onChange={(e) =>
                        setPlayersPerTeam(Number(e.target.value))
                      }
                      min={2}
                      max={11}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Input
                    placeholder="Search players..."
                    value={playerSearchTerm}
                    onChange={(e) => setPlayerSearchTerm(e.target.value)}
                    className="bg-white/5 border-white/10"
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Team A Selection */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-white">
                          Team A Squad ({teamAPlayerIds.length}/{playersPerTeam}
                          )
                        </h3>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 min-h-[200px] max-h-[300px] overflow-y-auto space-y-1">
                        {filteredPlayers?.map((p) => {
                          const isSelectedInOtherTeam = teamBPlayerIds.includes(
                            p.id,
                          );
                          return (
                            <div
                              key={p.id}
                              className={cn(
                                "flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors",
                                teamAPlayerIds.includes(p.id)
                                  ? "bg-blue-500/20 border border-blue-500/30"
                                  : isSelectedInOtherTeam
                                    ? "opacity-40 cursor-not-allowed"
                                    : "hover:bg-white/5 border border-transparent",
                              )}
                              onClick={() =>
                                !isSelectedInOtherTeam &&
                                togglePlayer(p.id, "A")
                              }
                            >
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">
                                  {p.name.charAt(0)}
                                </div>
                                <span className="text-sm text-white">
                                  {p.name}
                                </span>
                              </div>
                              {teamAPlayerIds.includes(p.id) && (
                                <CheckCircle className="h-4 w-4 text-blue-400" />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Team B Selection */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-white">
                          Team B Squad ({teamBPlayerIds.length}/{playersPerTeam}
                          )
                        </h3>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 min-h-[200px] max-h-[300px] overflow-y-auto space-y-1">
                        {filteredPlayers?.map((p) => {
                          const isSelectedInOtherTeam = teamAPlayerIds.includes(
                            p.id,
                          );
                          return (
                            <div
                              key={p.id}
                              className={cn(
                                "flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors",
                                teamBPlayerIds.includes(p.id)
                                  ? "bg-orange-500/20 border border-orange-500/30"
                                  : isSelectedInOtherTeam
                                    ? "opacity-40 cursor-not-allowed"
                                    : "hover:bg-white/5 border border-transparent",
                              )}
                              onClick={() =>
                                !isSelectedInOtherTeam &&
                                togglePlayer(p.id, "B")
                              }
                            >
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">
                                  {p.name.charAt(0)}
                                </div>
                                <span className="text-sm text-white">
                                  {p.name}
                                </span>
                              </div>
                              {teamBPlayerIds.includes(p.id) && (
                                <CheckCircle className="h-4 w-4 text-orange-400" />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <Label className="text-xs text-white/50 mb-2 block">
                      Common Player (Bats for both teams)
                    </Label>
                    <Select
                      value={commonPlayerId}
                      onValueChange={setCommonPlayerId}
                    >
                      <SelectTrigger className="h-9">
                        <SelectValue placeholder="None" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        {playersData?.players.map((p) => (
                          <SelectItem key={p.id} value={p.id}>
                            {p.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
                        setMatchData({ ...matchData, venue: e.target.value })
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
              <div className="space-y-8">
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold text-white">Toss</h2>
                  <p className="text-sm text-white/50">
                    Flip the coin to decide who bats first
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center py-8">
                  <div className="relative w-32 h-32 mb-8 perspective-1000">
                    <motion.div
                      animate={
                        isFlipping
                          ? {
                              rotateY: [0, 1800],
                              y: [0, -150, 0],
                              scale: [1, 1.2, 1],
                            }
                          : {
                              rotateY: coinResult === "tails" ? 1980 : 1800,
                            }
                      }
                      transition={
                        isFlipping
                          ? { duration: 2, ease: "easeInOut" }
                          : { duration: 0.5 }
                      }
                      style={{ transformStyle: "preserve-3d" }}
                      className="w-full h-full relative"
                    >
                      {/* Heads Side */}
                      <div
                        className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 flex items-center justify-center border-4 border-amber-200/50 shadow-2xl"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        <span className="text-3xl font-black text-amber-900">
                          H
                        </span>
                        <div className="absolute inset-2 border-2 border-amber-200/20 rounded-full" />
                      </div>
                      {/* Tails Side */}
                      <div
                        className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 flex items-center justify-center border-4 border-amber-200/50 shadow-2xl"
                        style={{
                          backfaceVisibility: "hidden",
                          transform: "rotateY(180deg)",
                        }}
                      >
                        <span className="text-3xl font-black text-amber-950">
                          T
                        </span>
                        <div className="absolute inset-2 border-2 border-amber-200/20 rounded-full" />
                      </div>
                    </motion.div>
                  </div>

                  {!matchData.tossWinner ? (
                    <div className="w-full max-w-sm space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-xs text-white/50">
                            Who's Calling?
                          </Label>
                          <Select
                            value={tossCaller}
                            onValueChange={(v) =>
                              setTossCaller(v as "teamA" | "teamB")
                            }
                          >
                            <SelectTrigger className="bg-white/5 border-white/10">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="teamA">{teamAName}</SelectItem>
                              <SelectItem value="teamB">{teamBName}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-xs text-white/50">
                            The Call
                          </Label>
                          <div className="grid grid-cols-2 gap-2">
                            <Button
                              variant={
                                tossCall === "heads" ? "default" : "outline"
                              }
                              className="h-10"
                              onClick={() => setTossCall("heads")}
                            >
                              Heads
                            </Button>
                            <Button
                              variant={
                                tossCall === "tails" ? "default" : "outline"
                              }
                              className="h-10"
                              onClick={() => setTossCall("tails")}
                            >
                              Tails
                            </Button>
                          </div>
                        </div>
                      </div>

                      <Button
                        className="w-full h-12 text-lg font-semibold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20"
                        onClick={handleFlipCoin}
                        disabled={!tossCall || isFlipping}
                      >
                        {isFlipping ? "Flipping..." : "Flip Coin"}
                      </Button>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="w-full max-w-sm text-center space-y-6"
                    >
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                        <p className="text-sm text-white/50 mb-1">
                          It's {coinResult?.toUpperCase()}!
                        </p>
                        <h3 className="text-xl font-bold text-white">
                          {matchData.tossWinner === "teamA"
                            ? teamAName
                            : teamBName}{" "}
                          won the toss
                        </h3>
                      </div>

                      <div className="space-y-3">
                        <Label className="text-xs text-white/50 uppercase tracking-wider">
                          Choose to
                        </Label>
                        <div className="grid grid-cols-2 gap-4">
                          <Button
                            variant={
                              matchData.tossChoice === "bat"
                                ? "default"
                                : "outline"
                            }
                            className={cn(
                              "h-20 text-xl font-bold rounded-2xl transition-all",
                              matchData.tossChoice === "bat" &&
                                "ring-4 ring-blue-500/20 scale-105",
                            )}
                            onClick={() =>
                              setMatchData({ ...matchData, tossChoice: "bat" })
                            }
                          >
                            BAT
                          </Button>
                          <Button
                            variant={
                              matchData.tossChoice === "bowl"
                                ? "default"
                                : "outline"
                            }
                            className={cn(
                              "h-20 text-xl font-bold rounded-2xl transition-all",
                              matchData.tossChoice === "bowl" &&
                                "ring-4 ring-blue-500/20 scale-105",
                            )}
                            onClick={() =>
                              setMatchData({ ...matchData, tossChoice: "bowl" })
                            }
                          >
                            BOWL
                          </Button>
                        </div>
                      </div>

                      <Button
                        variant="ghost"
                        className="text-white/40 hover:text-white"
                        onClick={() => {
                          setMatchData({
                            ...matchData,
                            tossWinner: "",
                            tossChoice: "",
                          });
                          setCoinResult(null);
                        }}
                      >
                        Redo Toss
                      </Button>
                    </motion.div>
                  )}
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
                        `/live-scoring/${createMatch.data?.id || "abc123"}`,
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
              disabled={!matchData.tossWinner || !matchData.tossChoice}
              className="gap-2"
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
