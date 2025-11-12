import HttpClient from "./index.api";
import ApiRoutes from "@/app/configs/endpoints.config";
import { getTokenLocal } from "@/utils/localStorage.util";
import { toast } from "react-toastify";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

class ProductApi extends HttpClient {
  constructor() {
    super(baseURL);
    
  }
  

  // ✅ Get All Products
  getAllProducts = async () => {
    return this.instance({
      method: ApiRoutes.product.getAll.Method,
      url: ApiRoutes.product.getAll.Endpoint,
    });
  };

  // ✅ Get Product By ID
//   getProductById = async (id) => {
//     return this.instance({
//       method: ApiRoutes.product.getById.Method,
//       url: ApiRoutes.product.getById.Endpoint(id),
//     });
//   };
}

// ✅ Export Instance
const productApi = new ProductApi();
export default productApi;
