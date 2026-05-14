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

  const [matchData, setMatchData] = useState({
    matchType: "t20" as const,
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

  const handleCreateMatch = async () => {
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
                        <SelectItem value="new">+ Create New Team</SelectItem>
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
                        setMatchData({ ...matchData, teamBId: v })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select team" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">+ Create New Team</SelectItem>
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
                <h2 className="text-xl font-semibold text-white">
                  Playing Squad
                </h2>
                <p className="text-sm text-white/50">
                  Select players and setup squad details
                </p>

                {/* Fixed: Custom Number of Players & Common Player */}
                <div className="space-y-4 mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="space-y-2">
                    <Label>Players per team</Label>
                    <Input
                      type="number"
                      value={playersPerTeam}
                      onChange={(e) =>
                        setPlayersPerTeam(Number(e.target.value))
                      }
                      min={2}
                      max={11}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Select Common Player (Bats for both teams)</Label>
                    <Select
                      value={commonPlayerId}
                      onValueChange={setCommonPlayerId}
                    >
                      <SelectTrigger>
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

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h3 className="text-sm font-medium text-white mb-3">
                      Team A Players ({playersPerTeam})
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {playersData?.players
                        .slice(0, playersPerTeam)
                        .map((p) => (
                          <Badge
                            key={p.id}
                            variant="secondary"
                            className="justify-center py-2"
                          >
                            {p.name}
                          </Badge>
                        )) ||
                        Array.from({ length: playersPerTeam }).map((_, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="justify-center py-2"
                          >
                            Player {i + 1}
                          </Badge>
                        ))}
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
                        setMatchData({ ...matchData, tossWinner: v })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select toss winner" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="teamA">Team A</SelectItem>
                        <SelectItem value="teamB">Team B</SelectItem>
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
                          setMatchData({ ...matchData, tossChoice: "bat" })
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
                          setMatchData({ ...matchData, tossChoice: "bowl" })
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

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}
