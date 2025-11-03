import EventHistory from "../event-history/page";

export const HttpMethod = {
  Get: "GET",
  Post: "POST",
  Put: "PUT",
  Patch: "PATCH",
  Delete: "DELETE",
};



 const ApiRoutes = {
    auth:{
        signup:{
            Method:HttpMethod.Post,
            Endpoint:"auth/sign-up"
        },
        login:{
            Method:HttpMethod.Post,
            Endpoint:"auth/login"
        },
        reset:{
            Method:HttpMethod.Post,
            Endpoint:"auth/reset-password"
        },
        forget:{
            Method:HttpMethod.Post,
            Endpoint:"auth/forget-password"
        },
        ticketdetails:{
            Method:HttpMethod.Post,
            Endpoint:"auth/"
        },
        updateProfile:{
            Method:HttpMethod.Patch,
            Endpoint: "/user/update-profile"
        },
        eventHistory : {
            Method: HttpMethod.Get,
            Endpoint: "/user/event-history"
        }
    }
}
export default ApiRoutes