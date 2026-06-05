import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AnimatePresence } from 'framer-motion'
import router from '@/routes'
import './index.css'

// Enable mock API for development/demo
// Set VITE_USE_MOCK_API=true in .env to use mock data
import { setupMockAPI } from '@/services/mockApi'
if (import.meta.env.VITE_USE_MOCK_API === 'true') {
  setupMockAPI()
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AnimatePresence mode="wait">
        <RouterProvider router={router} />
      </AnimatePresence>
    </QueryClientProvider>
  </React.StrictMode>
)
