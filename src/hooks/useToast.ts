import { useUIStore } from '@/store/uiStore';
import { useCallback } from 'react';

export function useToast() {
  const { addToast, removeToast } = useUIStore();

  const toast = useCallback((title: string, options?: { description?: string; variant?: 'default' | 'success' | 'error' | 'warning' }) => {
    addToast({
      title,
      description: options?.description,
      variant: options?.variant || 'default',
    });
  }, [addToast]);

  return { toast, removeToast };
}
