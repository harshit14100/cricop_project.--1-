import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Zap, Lock, Phone, User, Mail, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useSignup } from '@/hooks'

// Regex patterns
const phoneRegex = /^\d{10}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const signup = useSignup()

  const validateStep1 = () => {
    let isValid = true;
    const newErrors = { ...errors, phone: "", email: "" };

    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
      isValid = false;
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNextStep = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const validateStep2 = () => {
    let isValid = true;
    const newErrors = { ...errors, password: "", confirmPassword: "" };

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
    e.preventDefault()
    if (validateStep2()) {
      signup.mutate({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        password: formData.password,
      })
    }
  }

  return (
    <div className="w-full">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
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
        <p className="text-sm text-white/50 mt-1">Score Every Ball Like a Pro</p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-6 md:p-8"
      >
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-white">Create Account</h2>
          <p className="text-sm text-white/50 mt-1">Join the cricket revolution</p>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2 mb-6">
          <div className={cn('h-1 flex-1 rounded-full transition-colors', step >= 1 ? 'bg-blue-500' : 'bg-white/10')} />
          <div className={cn('h-1 flex-1 rounded-full transition-colors', step >= 2 ? 'bg-blue-500' : 'bg-white/10')} />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 ? (
            <>
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                  <Input
                    id="name"
                    placeholder="Virat Kohli"
                    className="pl-10"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
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
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="virat@cricket.com"
                    className={`pl-10 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    required
                  />
                </div>
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              <Button
                type="button"
                className="w-full h-12 text-base font-semibold"
                onClick={handleNextStep}
                disabled={!formData.name || !formData.phone || !formData.email}
              >
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </>
          ) : (
            <>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Min 8 characters"
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
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                  <Input
                    id="confirm"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Confirm password"
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

              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-white/50">
                  By signing up, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 h-12"
                  onClick={() => setStep(1)}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="flex-1 h-12 text-base font-semibold"
                  isLoading={signup.isPending}
                >
                  Create Account
                </Button>
              </div>
            </>
          )}
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-white/50">
            Already have an account?{' '}
            <Link to="/login" className="text-electric hover:text-electric/80 font-medium transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ')
}
