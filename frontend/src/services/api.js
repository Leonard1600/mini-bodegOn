import axios from "axios";

const api = axios.create({
  baseURL: "https://mini-bodegon-backend-2026.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;


