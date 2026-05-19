import api from "./api";

export const authService = {
  async login(data: { phone: string; password: string }) {
    const response = await api.post("/auth/login", {
      phone_no: data.phone,
      password: data.password,
    });

    const responseData = response.data;

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

    const responseData = response.data;

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

    return response.data;
  },

  async updateProfile(data: any) {
    const response = await api.put("/users/me", data);

    return response.data;
  },
};
