import api from './api'
import type { User, ApiResponse } from '@/types'

interface LoginCredentials {
  phone: string
  password: string
  rememberMe?: boolean
}

interface SignupData {
  name: string
  phone: string
  email: string
  password: string
}

interface AuthResponse {
  user: User
  token: string
  refreshToken: string
}

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const { data } = await api.post<ApiResponse<AuthResponse>>('/auth/login', credentials)
    return data.data
  },

  signup: async (data: SignupData): Promise<AuthResponse> => {
    const response = await api.post<ApiResponse<AuthResponse>>('/auth/register', data)
    return response.data.data
  },

  logout: async (): Promise<void> => {
    await api.post('/auth/logout')
  },

  refreshToken: async (refreshToken: string): Promise<{ token: string }> => {
    const { data } = await api.post<ApiResponse<{ token: string }>>('/auth/refresh', { refreshToken })
    return data.data
  },

  forgotPassword: async (phone: string): Promise<void> => {
    await api.post('/auth/forgot-password', { phone })
  },

  verifyOTP: async (phone: string, otp: string): Promise<void> => {
    await api.post('/auth/verify-otp', { phone, otp })
  },

  resetPassword: async (phone: string, otp: string, newPassword: string): Promise<void> => {
    await api.post('/auth/reset-password', { phone, otp, newPassword })
  },

  getProfile: async (): Promise<User> => {
    const { data } = await api.get<ApiResponse<User>>('/auth/profile')
    return data.data
  },

  updateProfile: async (profileData: Partial<User>): Promise<User> => {
    const { data } = await api.put<ApiResponse<User>>('/auth/profile', profileData)
    return data.data
  },
}
