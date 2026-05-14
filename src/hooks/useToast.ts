import { useUIStore } from '@/store/uiStore';
import { useCallback } from 'react';

export function useToast() {
  const { addToast, removeToast } = useUIStore();

  const toast = useCallback((title: string, options?: { description?: string; type?: 'success' | 'error' | 'warning' | 'info' }) => {
    addToast({
      title,
      description: options?.description,
      type: options?.type || 'info',
    });
  }, [addToast]);

  return { toast, removeToast };
}
