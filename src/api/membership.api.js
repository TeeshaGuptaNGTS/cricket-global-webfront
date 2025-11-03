import { Limelight } from "next/font/google";
import HttpClient from "./index.api";  // adjust path if needed


const baseURL = process.env.NEXT_PUBLIC_API_URL;

class MemebrshipApi extends HttpClient {
  constructor() {
    super(baseURL);
  }

  // ✅ Get all events with filters
  getAllMembershipPlan = async () => {
    return await this.instance.get(
      `/plan/get-all-membership-plans`,
      {
        params: {limit: 2}
      }
    );
  };
}

// Create instance
const memebrshipApi = new MemebrshipApi();
export default memebrshipApi;
