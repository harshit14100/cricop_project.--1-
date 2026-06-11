import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type CelebrationType = "four" | "six" | "wicket";

interface CelebrationOverlayProps {
  type: CelebrationType;
}

export function CelebrationOverlay({ type }: CelebrationOverlayProps) {
  const configs = {
    four: {
      text: "FOUR!",
      color: "from-blue-600 to-cyan-500",
      shadow: "shadow-blue-500/50",
      particles: 20,
      particleColor: ["#60a5fa", "#22d3ee", "#ffffff"],
    },
    six: {
      text: "SIXER!",
      color: "from-purple-600 to-pink-500",
      shadow: "shadow-purple-500/50",
      particles: 30,
      particleColor: ["#a78bfa", "#f472b6", "#ffffff", "#fbbf24"],
    },
    wicket: {
      text: "OUT!",
      color: "from-red-600 to-orange-500",
      shadow: "shadow-red-500/50",
      particles: 15,
      particleColor: ["#ef4444", "#f97316", "#ffffff"],
    },
  };

  const config = configs[type];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none px-4"
    >
      {/* Background flash */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-white"
      />

      {/* Particle burst */}
      {Array.from({ length: config.particles }).map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: 0,
            y: 0,
            scale: 0,
            opacity: 1,
          }}
          animate={{
            x: (Math.random() - 0.5) * 600,
            y: (Math.random() - 0.5) * 600,
            scale: [0, 1.5, 0],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 1.5 + Math.random() * 0.5,
            delay: Math.random() * 0.1,
            ease: "easeOut",
          }}
          className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full"
          style={{
            backgroundColor: config.particleColor[i % config.particleColor.length],
            boxShadow: `0 0 6px ${config.particleColor[i % config.particleColor.length]}`,
          }}
        />
      ))}

      {/* Confetti lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`confetti-${i}`}
          initial={{
            x: 0,
            y: 0,
            rotate: 0,
            opacity: 1,
          }}
          animate={{
            x: Math.cos((i * 45 * Math.PI) / 180) * (200 + Math.random() * 100),
            y: Math.sin((i * 45 * Math.PI) / 180) * (200 + Math.random() * 100),
            rotate: 720,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 1.5 + Math.random() * 0.5,
            delay: Math.random() * 0.15,
            ease: "easeOut",
          }}
          className="absolute top-1/2 left-1/2 w-1.5 h-6 rounded-full"
          style={{
            backgroundColor: config.particleColor[i % config.particleColor.length],
          }}
        />
      ))}

      <motion.div
        initial={{ scale: 0.5, rotate: -10, y: 50 }}
        animate={{ scale: 1.1, rotate: 0, y: 0 }}
        exit={{ scale: 2, opacity: 0, rotate: 10 }}
        transition={{
          type: "spring",
          damping: 12,
          stiffness: 200,
          duration: 0.5,
        }}
        className={cn(
          "relative p-8 rounded-3xl bg-gradient-to-br shadow-2xl border-2 border-white/20",
          config.color,
          config.shadow,
        )}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-20"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full border-4 border-dashed border-white rounded-full scale-150" />
        </motion.div>

        <div className="relative z-10 text-center">
          <motion.h2
            initial={{ letterSpacing: "0.2em", scale: 1.5 }}
            animate={{ letterSpacing: "0.05em", scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-6xl md:text-8xl font-black text-white italic tracking-tighter drop-shadow-lg"
          >
            {config.text}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.2 }}
            className="h-1 bg-white/40 mt-2 rounded-full"
          />
        </div>
      </motion.div>

      {/* Sparkle particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          initial={{ scale: 0, rotate: 0, opacity: 1 }}
          animate={{
            scale: [0, 1.5, 0],
            rotate: 180,
            opacity: [1, 1, 0],
            x: Math.cos((i * 60 * Math.PI) / 180) * 120,
            y: Math.sin((i * 60 * Math.PI) / 180) * 120,
          }}
          transition={{ duration: 1.2, delay: 0.2 + i * 0.05 }}
          className="absolute top-1/2 left-1/2 w-2 h-2"
          style={{ color: "#ffffff" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 0l1.5 8.5L22 9l-6.5 5 2 8.5L12 17l-5.5 5.5 2-8.5L2 9l8.5-.5z" />
          </svg>
        </motion.div>
      ))}
    </motion.div>
  );
}
