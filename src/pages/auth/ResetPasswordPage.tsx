import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Zap, Lock, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useResetPassword } from "@/hooks";
import { z } from "zod";

// Regex patterns & Zod schemas
const phoneSchema = z.string().regex(/^\d{10}$/, "Please enter exactly 10 digits.");

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ phone: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({ phone: "", password: "", confirmPassword: "" });
  const resetPassword = useResetPassword();
  const navigate = useNavigate();

  const validate = () => {
    let isValid = true;
    const newErrors = { phone: "", password: "", confirmPassword: "" };

    const phoneValidation = phoneSchema.safeParse(formData.phone);
    if (!phoneValidation.success) {
      newErrors.phone = phoneValidation.error.issues[0].message;
      isValid = false;
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      resetPassword.mutate(
        { phone_no: formData.phone, password: formData.password },
        {
          onSuccess: () => {
            navigate("/login");
          },
        }
      );
    }
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
          <h2 className="text-xl font-semibold text-white">Reset Password</h2>
          <p className="text-sm text-white/50 mt-1">Update your account password</p>
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
                maxLength={10}
                className={`pl-10 ${errors.phone ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: "" });
                }}
                required
              />
            </div>
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">New Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                className={`pl-10 pr-10 ${errors.password ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                value={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                  if (errors.password) setErrors({ ...errors, password: "" });
                }}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
              <Input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm new password"
                className={`pl-10 ${errors.confirmPassword ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                value={formData.confirmPassword}
                onChange={(e) => {
                  setFormData({ ...formData, confirmPassword: e.target.value });
                  if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: "" });
                }}
                required
              />
            </div>
            {errors.confirmPassword && <p className="text-xs text-red-500 mt-1">{errors.confirmPassword}</p>}
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-base font-semibold"
            isLoading={resetPassword.isPending}
          >
            Reset Password
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-white/50">
            Go back to{" "}
            <Link
              to="/login"
              className="text-electric hover:text-electric/80 font-medium transition-colors"
            >
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
