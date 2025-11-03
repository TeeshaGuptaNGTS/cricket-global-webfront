// import axios from "axios";
// const baseURL = process.env.NEXT_PUBLIC_API_URL;
// // import { toast } from "react-toastify";

// const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// export class HttpClient {
//   constructor(baseURL) {
//     console.log("base url",baseURL)
//     this.instance = axios.create({
//        baseURL,
//     });
//     this._initializeResponseInterceptor();
//   }

//   _initializeResponseInterceptor = () => {
//     this.instance.interceptors.response.use(
//       this._handleResponse,
//       this._handleError
//     );
//   };

//   _handleResponse = (response) => {
//     const { data } = response;
    
//     //   Show toast message globally based on API response
//     if (data.status === "success") {
//       // toast.success(capitalize(data.message) || "Request successful!");
//     } else if (data.status === "fail" || data.status === "error") {
//       // toast.error(capitalize(data.message) || "Something went wrong!");
//     }

//     return data; // Return the actual response data
//   }

//   _handleError = async ({ response, config }) => {
//     const originalRequest = config;
    
//     // console.log("config handleError:", response, config)

//     if (response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       // toast.error("Session expired! Please log in again.");
//       return this.instance(originalRequest);
//     }
    
//     // toast.error(response?.data?.message || "An unexpected error occurred!");

//     return Promise.reject(response);
//   };
  
// }

// export default HttpClient;

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