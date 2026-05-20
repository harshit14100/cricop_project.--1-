import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { authService } from '@/services'
import { useAuthStore, useUIStore } from '@/store'

export function useLogin() {
  const navigate = useNavigate()
  const { setUser, setToken, setAuthenticated } = useAuthStore()
  const { addToast } = useUIStore()

  return useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      setUser(data.user)
      setToken(data.token)
      setAuthenticated(true)
      addToast({ title: 'Welcome back!', description: `Signed in as ${data.user.name}`, variant: 'success' })
      navigate('/dashboard')
    },
    onError: (error: any) => {
      addToast({ title: 'Login failed', description: error.response?.data?.message || 'Something went wrong', variant: 'error' })
    },
  })
}

export function useSignup() {
  const navigate = useNavigate()
  const { setUser, setToken, setAuthenticated } = useAuthStore()
  const { addToast } = useUIStore()

  return useMutation({
    mutationFn: authService.signup,
    onSuccess: (data) => {
      setUser(data.user)
      setToken(data.token)
      setAuthenticated(true)
      addToast({ title: 'Account created!', description: 'Welcome to CricOP', variant: 'success' })
      navigate('/dashboard')
    },
    onError: (error: any) => {
      addToast({ title: 'Signup failed', description: error.response?.data?.message || 'Something went wrong', variant: 'error' })
    },
  })
}

export function useLogout() {
  const navigate = useNavigate()
  const { logout } = useAuthStore()
  const { addToast } = useUIStore()

  return useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      logout()
      addToast({ title: 'Logged out', description: 'See you soon!', variant: 'default' })
      navigate('/login')
    },
    onError: () => {
      logout()
      navigate('/login')
    },
  })
}

export function useProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: authService.getProfile,
    enabled: useAuthStore.getState().isAuthenticated,
  })
}

export function useUpdateProfile() {
  const queryClient = useQueryClient()
  const { setUser } = useAuthStore()
  const { addToast } = useUIStore()

  return useMutation({
    mutationFn: authService.updateProfile,
    onSuccess: (data) => {
      setUser(data)
      queryClient.invalidateQueries({ queryKey: ['profile'] })
      addToast({ title: 'Profile updated', variant: 'success' })
    },
    onError: (error: any) => {
      addToast({ title: 'Update failed', description: error.response?.data?.message, variant: 'error' })
    },
  })
}
