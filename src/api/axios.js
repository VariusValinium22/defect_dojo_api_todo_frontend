import axios from "axios";

// Create an Axios instance with baseURL from environment variables
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Dynamic base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
