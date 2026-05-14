import { create } from 'zustand'
import type { Toast } from '@/types'

interface UIStore {
  toasts: Toast[]
  sidebarOpen: boolean
  isMobile: boolean
  addToast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
  setSidebarOpen: (open: boolean) => void
  setIsMobile: (isMobile: boolean) => void
}

export const useUIStore = create<UIStore>((set) => ({
  toasts: [],
  sidebarOpen: false,
  isMobile: false,
  addToast: (toast) =>
    set((state) => ({
      toasts: [...state.toasts, { ...toast, id: Math.random().toString(36).substring(7) }],
    })),
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    })),
  setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
  setIsMobile: (isMobile) => set({ isMobile }),
}))
