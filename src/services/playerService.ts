import api from './api';
import type { ApiResponse, Player, PaginatedResponse, PlayerStats } from '@/types';

export const playerService = {
  getPlayers: async (search?: string, teamId?: string, page = 1, limit = 20): Promise<ApiResponse<PaginatedResponse<Player>>> => {
    const response = await api.get('/players', { params: { search, teamId, page, limit } });
    return response.data;
  },

  getPlayer: async (id: string): Promise<ApiResponse<Player>> => {
    const response = await api.get(`/players/${id}`);
    return response.data;
  },

  createPlayer: async (data: Partial<Player>): Promise<ApiResponse<Player>> => {
    const response = await api.post('/players', data);
    return response.data;
  },

  updatePlayer: async (id: string, data: Partial<Player>): Promise<ApiResponse<Player>> => {
    const response = await api.patch(`/players/${id}`, data);
    return response.data;
  },

  deletePlayer: async (id: string): Promise<ApiResponse<void>> => {
    const response = await api.delete(`/players/${id}`);
    return response.data;
  },

  getStats: async (id: string): Promise<ApiResponse<PlayerStats>> => {
    const response = await api.get(`/players/${id}/stats`);
    return response.data;
  },

  uploadAvatar: async (id: string, file: File): Promise<ApiResponse<{ avatar: string }>> => {
    const formData = new FormData();
    formData.append('avatar', file);
    const response = await api.post(`/players/${id}/avatar`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },
};
