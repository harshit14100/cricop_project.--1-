import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const authService = {
  async login(data: { phone: string; password: string }) {
    const response = await API.post("/auth/login", {
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
    const response = await API.post("/auth/signup", {
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
    const response = await API.get("/users/me");

    return response.data;
  },

  async updateProfile(data: any) {
    const response = await API.put("/users/me", data);

    return response.data;
  },
};
