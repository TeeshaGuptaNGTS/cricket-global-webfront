import { Contact } from "lucide-react";

export const HttpMethod = {
    Get: "GET",
    Post: "POST",
    Put: "PUT",
    Patch: "PATCH",
    Delete: "DELETE",
};



const ApiRoutes = {
    auth: {
        signup: { Method: HttpMethod.Post, Endpoint: "auth/sign-up" },
        login: { Method: HttpMethod.Post, Endpoint: "auth/login" },
        reset: { Method: HttpMethod.Post, Endpoint: "auth/reset-password" },
        forget: { Method: HttpMethod.Post, Endpoint: "auth/forget-password" },
        updateProfile: { Method: HttpMethod.Patch, Endpoint: "/user/update-profile" },
        updateImage: { Method: HttpMethod.Post, Endpoint: "/upload" },
        eventHistory: { Method: HttpMethod.Get, Endpoint: "/user/event-history" },
        newsletterSubscribe: { Method: HttpMethod.Post, Endpoint: "/user/newsletter-subscribe" },
        Contact:{ Method: HttpMethod.Post, Endpoint: "/user/contact-us"},
        getUserMembershipStatus: {  Method: HttpMethod.Get, Endpoint: "/user/membership-detail"}
    },

    payment: {
        createPayment: {
            Method: HttpMethod.Post,
            Endpoint: "/user/purchase-ticket"
        }
    },

    membership: {
        getAllMembershipPlan: {
            Endpoint: (params = {}) => {
                const query = new URLSearchParams(params).toString();
                return `/plan/get-all-membership-plans${query ? `?${query}` : ""}`;
            },
            Method: HttpMethod.Get
        },
       
    getPlans: {
      Method: "GET",
      Endpoint: "/membership/plans",
    },
    buy: {
      Method: "POST",
      Endpoint: "/membership/buy",
    },
    },
 
  product: {
    getAll: {
      Method: "GET",
      Endpoint: `/user/get-all-products`,
    },
    
  }




        

   
  
  
};


export default ApiRoutes;
