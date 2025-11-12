import { getTokenLocal } from "@/utils/localStorage.util";
import ApiRoutes from "@/app/configs/endpoints.config";
// import ApiRoutes from "@/configs/endpoints.config";
 // Import the API Routes
import HttpClient from "../index.api";
import { toast } from "react-toastify";
const baseURL = process.env.NEXT_PUBLIC_API_URL;


class Auth extends HttpClient {
  constructor() {
    super(baseURL);
    this._initializeRequestInterceptor();
    this._initializeResponseInterceptor();
  }

  _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use((config) => {
      config.headers["Authorization"] = `Bearer ${getTokenLocal() || ""}`;
      // config.headers["authKey"] = process.env.NEXT_PUBLIC_API_AUTH_KEY;
      // config.headers["Content-Type"] = "text/plain";

      return config;
    });
  };

  _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      async (response) => {
        let data;
        if (response) {
          data = await response; // Decrypt response body
          if (data.status == "success") {
          } else if (data.status == "fail") {
            toast.error(data.message);
          }
        } else {
          toast.error(response.message);
          // console.log("No encryptedData found in response.");
        }
        return data;
      },
      (error) => Promise.reject(error)
    );
  };

  // **Auth APIs with Encrypted Requests**
  login = async (reqBody) => {
    return this.instance({
      method: ApiRoutes.auth.login.Method,
      url: ApiRoutes.auth.login.Endpoint,
      data: reqBody,
    });
  };
  // signup
  signup = async (reqBody) => {
    return this.instance({
      method: ApiRoutes.auth.signup.Method,
      url: ApiRoutes.auth.signup.Endpoint,
      data: reqBody,
    });
  };
  // reset password 
  resetPass = async (reqBody) => {
    return this.instance({
      method: ApiRoutes.auth.reset.Method,
      url: ApiRoutes.auth.reset.Endpoint,
      data: reqBody,
    });
  };
  // forget password

  forgetPass = async (reqBody) => {
    return this.instance({
      method: ApiRoutes.auth.forget.Method,
      url: ApiRoutes.auth.forget.Endpoint,
      data: reqBody,
    });
  };
  profileUpdate = async (reqBody) =>{
    return this.instance({
      method: ApiRoutes.auth.updateProfile.Method,
      url:ApiRoutes.auth.updateProfile.Endpoint,
      data:reqBody,
    })
  }
  profileImage = async (reqBody) => {
  return this.instance({
    method: ApiRoutes.auth.updateImage.Method,
    url: ApiRoutes.auth.updateImage.Endpoint,
    data: reqBody,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

  getEventHistory = async () =>{
    return this.instance({
      method: ApiRoutes.auth.eventHistory.Method,
      url:ApiRoutes.auth.eventHistory.Endpoint,
      data:""
    })
  }
  

}


//  Export an instance of the `Auth` class
const authInstance = new Auth();
export default authInstance;
