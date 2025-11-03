// import Cookies from "js-cookie";
// export const logout = (history) => {
//   Cookies.remove("x_ufo");
//   Cookies.remove("x_auth_token");
//   localStorage.removeItem("token");
//   return history("/");
// };
import Cookies from "js-cookie";

export const logout = (router) => {
  // Remove cookies
  Cookies.remove("x_ufo");
  Cookies.remove("x_auth_token");

  // Remove any saved user data
  localStorage.removeItem("token");
  localStorage.removeItem("x_ufo");

  // ✅ redirect to homepage
  router.push("/");
};

