import axios from "axios";

// Configure base URL based on environment
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
});

// Request interceptor for auth token
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") { // Ensure running in browser
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    // Handle token refresh (status 401)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (refreshToken) {
          const { data } = await axios.post(`${BASE_URL}/auth/refresh/`, { refresh: refreshToken });
          localStorage.setItem("accessToken", data.access);
          originalRequest.headers.Authorization = `Bearer ${data.access}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        console.error("Token refresh failed", refreshError);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login"; // Redirect to login
      }
    }
    
    // Format error messages
    if (error.response) {
      const formattedError = new Error(
        error.response.data?.detail || 
        error.response.data?.message || 
        "An error occurred"
      );
      formattedError.status = error.response.status;
      throw formattedError;
    } else if (error.request) {
      throw new Error("No response received from server");
    } else {
      throw error;
    }
  }
);

export default api;