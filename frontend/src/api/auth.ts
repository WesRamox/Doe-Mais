import axios from "axios";

const API_URL = "http://localhost:3000/api"; // Altere para sua API

export const api = axios.create({
  baseURL: API_URL,
});

const setToken = (token: string) => localStorage.setItem("token", token)
const getToken = () => localStorage.getItem("token")
const removeToken = () => localStorage.removeItem("token");

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
});

export const login = async (credentials: string) => {
  const { data } = await api.post("/auth/login", credentials)
  setToken(data.token);
  return data.user
}

export const register = async (userData: {
  name: string;
  email: string;
  password: string;
  bloodtype: string;
}) => {
  const { data } = await api.post("/auth/register", userData);
  setToken(data.user); // Atualizar rota de registro para gerar token - backend
  return data.message;
}

export const logout = () => {
  removeToken();
};

export const fetchUser = async () => {
  const { data } = await api.get("/auth/me"); // Endpoint para buscar dados do usuário
  return data;
};