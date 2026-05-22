import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, Phone, ArrowRight, MessageSquare, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useOtpLogin } from "@/hooks";
import { cn } from "@/lib/utils";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const otpLogin = useOtpLogin();

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) {
      setError("Please enter a valid phone number");
      return;
    }
    setError("");
    setStep(2);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === "123456") {
      otpLogin.mutate(phone);
    } else {
      setError("Invalid OTP. Hint: Use 123456");
    }
  };

  return (
    <div className="w-full">
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
        className="glass-card p-6 md:p-8"
      >
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-white">
            {step === 1 ? "Forgot Password?" : "Verify OTP"}
          </h2>
          <p className="text-sm text-white/50 mt-1">
            {step === 1
              ? "Enter your phone number to receive an OTP"
              : `Enter the 6-digit code sent to ${phone}`}
          </p>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2 mb-6">
          <div
            className={cn(
              "h-1 flex-1 rounded-full transition-colors",
              step >= 1 ? "bg-blue-500" : "bg-white/10",
            )}
          />
          <div
            className={cn(
              "h-1 flex-1 rounded-full transition-colors",
              step >= 2 ? "bg-blue-500" : "bg-white/10",
            )}
          />
        </div>

        {step === 1 ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="pl-10"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-xs text-red-400">{error}</p>}
            </div>

            <Button type="submit" className="w-full h-12 text-base font-semibold">
              Send OTP
              <MessageSquare className="ml-2 h-4 w-4" />
            </Button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="otp">Enter OTP</Label>
              <div className="relative">
                <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                <Input
                  id="otp"
                  type="text"
                  placeholder="123456"
                  className="pl-10 text-center tracking-[0.5em] font-bold text-lg"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-xs text-red-400">{error}</p>}
              <p className="text-[10px] text-white/30 text-center italic">
                Development Hint: Use 123456
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                className="flex-1 h-12"
                onClick={() => {
                  setStep(1);
                  setError("");
                }}
              >
                Back
              </Button>
              <Button
                type="submit"
                className="flex-1 h-12 text-base font-semibold"
                isLoading={otpLogin.isPending}
              >
                Verify & Login
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="text-center mt-4">
              <button
                type="button"
                className="text-xs text-electric hover:underline"
                onClick={() => setOtp("123456")}
              >
                Resend OTP
              </button>
            </div>
          </form>
        )}

        <div className="mt-6 text-center">
          <p className="text-sm text-white/50">
            Remember your password?{" "}
            <Link
              to="/login"
              className="text-electric hover:text-electric/80 font-medium transition-colors"
            >
              Sign in
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
