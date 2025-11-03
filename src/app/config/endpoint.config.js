import HttpClient from "../api/index.api";

export const HttpMethod = {
    Get: "GET",
    Post: "POST",
    Put: "PUT",
    Patch: "PATCH",
    Delete: "DELETE",
  };
  
  const ApiRoutes = {
    Auth: {
      Login: {
        Endpoint: "/auth/login",
        Method: HttpMethod.Post,
      },
    }
  };
  
  export default ApiRoutes;