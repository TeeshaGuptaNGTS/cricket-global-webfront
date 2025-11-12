import HttpClient from "./index.api";
import ApiRoutes from "@/app/configs/endpoints.config"; // adjust path if needed

const baseURL = process.env.NEXT_PUBLIC_API_URL;

class PaymentApi extends HttpClient {
  constructor() {
    super(baseURL);
  }

  // ✅ Create payment
  createPayment = async (payload)=> {
    console.log("Creating payment with payload:", payload);

    return await this.instance({
      method: ApiRoutes.payment.createPayment.Method,
      url: ApiRoutes.payment.createPayment.Endpoint,
      data: payload,
    });
  }

 
}

const paymentApi = new PaymentApi();
export default paymentApi;
