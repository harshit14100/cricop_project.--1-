import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Zap, Lock, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useLogin } from "@/hooks";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({ phone: "", password: "" });
  const login = useLogin();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login.mutate(formData);
  };

  return (
    <div className="w-full relative">
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-8"
      >
        <div className="relative mb-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-electric flex items-center justify-center shadow-lg shadow-blue-500/30">
            <Zap className="h-8 w-8 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#0a1628] animate-pulse" />
        </div>
        <h1 className="text-2xl font-bold text-white">
          Cric<span className="text-electric">OP</span>
        </h1>
        <p className="text-sm text-white/50 mt-1">
          Score Every Ball Like a Pro
        </p>
      </motion.div>

      {/* Form Card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-6 md:p-8 relative z-10"
      >
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-white">Welcome Back</h2>
          <p className="text-sm text-white/50 mt-1">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
              <Input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                className="pl-10"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="pl-10 pr-10"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60 z-20"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Switch
                id="remember"
                checked={rememberMe}
                onCheckedChange={setRememberMe}
              />
              <Label
                htmlFor="remember"
                className="text-sm text-white/60 cursor-pointer"
              >
                Remember me
              </Label>
            </div>
            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-sm text-electric hover:text-electric/80 transition-colors cursor-pointer relative z-20 font-medium"
            >
              Forgot password?
            </button>
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-base font-semibold"
            isLoading={login.isPending}
          >
            Sign In
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-white/50">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-electric hover:text-electric/80 font-medium transition-colors"
            >
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-electric/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
    </div>
  );
}
