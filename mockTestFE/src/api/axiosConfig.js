// src/api/axiosConfig.js
import axios from "axios";

axios.defaults.withCredentials = true;

const api = axios.create({
  baseURL: "http://localhost:8080",
});

//attach JWT token from localStorage every request

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); 
  console.log("Token being sent:", token);  

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
