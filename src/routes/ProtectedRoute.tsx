import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '@/store'

interface ProtectedRouteProps {
  children?: React.ReactNode
  requiredRole?: 'user' | 'host' | 'admin'
}

export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const { isAuthenticated, user } = useAuthStore()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (requiredRole && user?.role !== requiredRole && user?.role !== 'admin') {
    return <Navigate to="/dashboard" replace />
  }

  return children ? <>{children}</> : <Outlet />
}
