import { Limelight } from "next/font/google";
import HttpClient from "./index.api";  // adjust path if needed
import ApiRoutes from "@/app/configs/endpoints.config";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

class MembershipApi extends HttpClient {
  constructor() {
    super(baseURL);
  }
  async createMembershipPayment(payload) {
    return this.post("/user/purchase-membership", payload); 
    // return this.post("/user/purchase-ticket", payload); 
  }

  async getAllPlans() {

    return this.get("/user/get-all-membership-plan",);
  }
getPlanById = async (id) => {
  console.log("id-------",id)
  return this.get(`/plan/get-membership-plan/${id}`);
};

  

  // ✅ Get all events with filters
  getAllMembershipPlan = async (queryParams = {limit: 2}) => {
    return await this.instance({
      method: ApiRoutes.membership.getAllMembershipPlan.Method,
      url:ApiRoutes.membership.getAllMembershipPlan.Endpoint(queryParams),
      // data:""
    })
     
    //  {
    //     params: {limit: 2}
    //   }
    
  };
}

// Create instance
const  membershipApi = new  MembershipApi();
export default  membershipApi;
