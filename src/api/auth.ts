import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080",
});

export const loginUser = async (data: {
  phone: string;
  password: string;
}) => {

  const response = await API.post("/auth/login", {
    phone_no: data.phone,
    password: data.password,
  });

  return response.data;
};

export const signupUser = async (data: {
  name: string;
  phone: string;
  password: string;
}) => {

  const response = await API.post("/auth/signup", {
    name: data.name,
    phone_no: data.phone,
    password: data.password,
  });

  return response.data;
};