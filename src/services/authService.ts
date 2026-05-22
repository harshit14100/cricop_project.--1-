import api from "./api";

export const authService = {
  async login(data: { phone: string; password: string }) {
    const response = await api.post("/auth/login", {
      phone_no: data.phone,
      password: data.password,
    });

    // Support both { data: { ... } } and direct response
    const responseData = response.data.data || response.data;

    if (responseData.token) {
      localStorage.setItem("token", responseData.token);
    }

    return responseData;
  },

  async signup(data: { name: string; phone: string; password: string }) {
    const response = await api.post("/auth/signup", {
      name: data.name,
      phone_no: data.phone,
      password: data.password,
    });

    const responseData = response.data.data || response.data;

    if (responseData.token) {
      localStorage.setItem("token", responseData.token);
    }

    return responseData;
  },

  async logout() {
    localStorage.removeItem("token");

    return true;
  },

  async getProfile() {
    const response = await api.get("/users/me");

    return response.data.data || response.data;
  },

  async updateProfile(data: any) {
    const response = await api.put("/users/me", data);

    return response.data.data || response.data;
  },

  async mockOtpLogin(phone: string) {
    // Simulate finding a registered user or creating a new one if not found
    // This matches the behavior in mockApi.ts
    return new Promise((resolve) => {
      setTimeout(() => {
        // Try to normalize phone for comparison
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

        // If it's the admin phone from mockApi
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
