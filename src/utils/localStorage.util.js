import Cookies from "js-cookie";

// Get token from cookies
export const getTokenLocal = () => {
  if (typeof window !== "undefined") {
    return Cookies.get("token") || null;
  }
  return null;
};

//  Get user from localStorage
export const getUserLocal = () => {
  if (typeof window !== "undefined") {
    const user = Cookies.get("x_ufo");
    return user ? JSON.parse(user) : null;
  }
  return null;
};

//  Save token in cookies with expiry
export const setTokenLocal = (token) => {
  console.log("Setting token in cookies:", token);
  if (typeof window !== "undefined") {
    Cookies.set("token", token, { expires: 7 });  // 7 days
  }
};

//  Save user in localStorage
export const setUserLocal = (user) => {
  if (typeof window !== "undefined") {
    Cookies.set("x_ufo", JSON.stringify(user));
  }
};

//  Remove everything for logout
export const clearAuthLocal = () => {
  if (typeof window !== "undefined") {
    Cookies.remove("token");
    Cookies.remove("x_ufo");
  }
};
