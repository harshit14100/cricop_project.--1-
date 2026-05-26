import client from "./client";
import { useAuthStore } from "@/store";

export const authApi = {
  async login(data: { phone: string; password: string }) {
    const response = await client.post("/auth/login", {
      phone: data.phone,
      phone_no: data.phone, // Supporting both conventions
      password: data.password,
    });

    const responseData = response.data.data || response.data;

    if (responseData.token) {
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
      phone: data.phone,
      phone_no: data.phone, // Supporting both conventions
      email: data.email,
      password: data.password,
    });

    const responseData = response.data.data || response.data;

    if (responseData.token) {
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
    const response = await client.get("/users/me");
    return response.data.data || response.data;
  },

  async updateProfile(data: any) {
    const response = await client.put("/users/me", data);
    return response.data.data || response.data;
  },

  async resetPassword(data: any) {
    const response = await client.post("/auth/reset-password", data);
    return response.data.data || response.data;
  },

  async getUserByUsername(username: string) {
    const response = await client.get(`/users/profile/${username}`);
    return response.data.data || response.data;
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
          } as any;
        }

        localStorage.setItem("token", mockData.token);
        resolve(mockData);
      }, 1000);
    });
  },
};
