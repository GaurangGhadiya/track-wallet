import axios from "axios";
import Constants from "expo-constants";

// Set BASE_URL from Expo Config (or use a hardcoded URL)
const BASE_URL = Constants.expoConfig.extra.EXPO_BASE_URL || "http://your-api-url.com";

// Create Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// API Request Interceptor (For Adding Token)
api.interceptors.request.use(
  async (config) => {
    const token = "YOUR_AUTH_TOKEN"; // Replace with async storage token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("📡 Request:", config.method.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error("❌ Request Error:", error);
    return Promise.reject(error);
  }
);

// API Response Interceptor (For Handling Errors)
api.interceptors.response.use(
  (response) => {
    console.log("✅ Response:", response.status, response.data);
    return response;
  },
  (error) => {
    if (error.response) {
      // console.error("❌ API Error:", error.response.status, error.response.data);
    } else if (error.request) {
      // console.error("❌ No Response Received:", error.request);
    } else {
      // console.error("❌ Request Setup Error:", error.message);
    }
    return Promise.reject(error);
  }
);

// API Methods
export const apiService = {
  get: (endpoint, params = {}) => api.get(endpoint, { params }),
  post: (endpoint, data) => api.post(endpoint, data),
  put: (endpoint, data) => api.put(endpoint, data),
  delete: (endpoint) => api.delete(endpoint),
};

export default api;
