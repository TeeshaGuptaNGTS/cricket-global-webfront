

import axios from "axios";
import { getTokenLocal } from "@/utils/localStorage.util"; // ✅ import token helper

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export class HttpClient {
  constructor(baseURL) {
    console.log("Base URL:", baseURL);

    this.instance = axios.create({
      baseURL: baseURL || "https://773mm7xb-4002.inc1.devtunnels.ms/api/",
    });

    this._initializeRequestInterceptor();  // ✅ add request interceptor
    this._initializeResponseInterceptor();
  }

  // ========= API Methods =========
  get(url, config = {}) {
    return this.instance.get(url, config);
  }

  post(url, data, config = {}) {
    return this.instance.post(url, data, config);
  }

  put(url, data, config = {}) {
    return this.instance.put(url, data, config);
  }

  delete(url, config = {}) {
    return this.instance.delete(url, config);
  }

  // ========= Request Interceptor =========
  _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use((config) => {
      const token = getTokenLocal(); // ✅ get token from localStorage
      console.log("token----------------",token)
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      return config;
    });
  };

  // ========= Response Interceptor =========
  _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  };

  _handleResponse = (response) => {
    return response.data;
  };

  _handleError = async ({ response, config }) => {
    const originalRequest = config;

    if (response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return this.instance(originalRequest);
    }

    return Promise.reject(response?.data || response);
  };
}

export default HttpClient;