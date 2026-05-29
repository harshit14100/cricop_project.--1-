import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
// import { adminService } from '@/services'
import { useUIStore } from '@/store'


export function useAdminUsers(page = 1, limit = 50) {
  return useQuery({
    queryKey: ['admin', 'users', page, limit],
    queryFn: () => Promise.resolve({ data: [] }), // adminService.getUsers(page, limit),
  });
}

export function useUpdateUserRole() {
  const queryClient = useQueryClient();
  const { addToast } = useUIStore();

  return useMutation({
    mutationFn: (_vars: { userId: string; role: string }) =>
      Promise.resolve({ data: {} }), // adminService.updateUserRole(userId, role),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'users'] });
      addToast({
        title: 'Role Updated',
        description: 'User role has been updated successfully.',
        variant: 'success',
      });
    },
  });
}

export function useAdminStats() {
  return useQuery({
    queryKey: ['admin', 'stats'],
    queryFn: () => Promise.resolve({ data: {} }), // adminService.getSystemStats(),
  });
}
