import HttpClient from "./index.api";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

class PaymentApi extends HttpClient {
  constructor() {
    super(baseURL);
  }

  async createPayment(payload) {
    console.log("payload",payload)
    return this.post(`/user/purchase-ticket`, payload);
  }
}

const paymentApi = new PaymentApi();
export default paymentApi;