import client from "./client";
import { useAuthStore } from "@/store";

export const authApi = {
  async login(data: { phone: string; password: string }) {
    const response = await client.post("/auth/login", {
      phone_no: data.phone,
      password: data.password,
    });

    const responseData = response.data;

    if (responseData && responseData.token) {
      useAuthStore.getState().setToken(responseData.token);
      useAuthStore.getState().setAuthenticated(true);

      if (responseData.user) {
        useAuthStore.getState().setUser(responseData.user);
      }
    }

    return responseData;
  },

  async signup(data: {
    name: string;
    phone: string;
    email?: string;
    password: string;
  }) {
    const response = await client.post("/auth/signup", {
      name: data.name,
      phone_no: data.phone,
      email: data.email,
      password: data.password,
    });

    const responseData = response.data;

    if (responseData && responseData.token) {
      useAuthStore.getState().setToken(responseData.token);
      useAuthStore.getState().setAuthenticated(true);

      if (responseData.user) {
        useAuthStore.getState().setUser(responseData.user);
      }
    }

    return responseData;
  },

  async logout() {
    useAuthStore.getState().logout();
    return true;
  },

  async getProfile() {
    const response = await client.get<any>("/users/me");
    return response.data?.data || response.data;
  },

  async updateProfile(data: any) {
    const response = await client.put<any>("/users/me", data);
    return response.data?.data || response.data;
  },

  async resetPassword(data: any) {
    const response = await client.post("/auth/reset-password", data);
    return response.data;
  },

  async getUserByUsername(username: string) {
    const response = await client.get(`/users/profile/${username}`);
    return response.data;
  },

  async mockOtpLogin(phone: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const normalizedPhone = phone.replace(/\s+/g, "");

        const mockData = {
          user: {
            id: "u" + Date.now(),
            name: "User " + normalizedPhone.slice(-4),
            phone_no: phone,
            email: normalizedPhone + "@cricop.com",
            role: "user",
            battingStyle: "right-handed",
            stats: {
              matches: 12,
              runs: 345,
              ballsFaced: 250,
              wickets: 5,
              ballsBowled: 120,
              runsConceded: 180,
              catches: 4,
              highestScore: 56,
              strikeRate: 138,
              economy: 9.0,
              average: 28.75,
              fifties: 1,
              sixes: 15,
              fours: 25,
            },
          },
          token: "mock-jwt-token-" + Date.now(),
        };

        if (
          normalizedPhone === "+919876543210" ||
          normalizedPhone === "9876543210"
        ) {
          mockData.user = {
            id: "u1",
            name: "Virat Kohli",
            phone_no: "+919876543210",
            email: "virat@cricket.com",
            role: "admin",
            battingStyle: "right-handed",
            stats: {
              matches: 120,
              runs: 4500,
              ballsFaced: 3200,
              wickets: 0,
              ballsBowled: 0,
              runsConceded: 0,
              catches: 45,
              stumpings: 0,
              highestScore: 113,
              bestBowling: "-",
              strikeRate: 140.6,
              economy: 0,
              average: 45.0,
              fifties: 35,
              hundreds: 5,
              sixes: 120,
              fours: 380,
            },
          } as any;
        }

        localStorage.setItem("token", mockData.token);
        resolve(mockData);
      }, 1000);
    });
  },
};
