// import Cookies from "js-cookie";
// // import { useState } from "react";
// // const [isLoggedIn, setIsLoggedIn] = useState(false);

// export const getTokenLocal = () => {
//   return localStorage.getItem("token");
// };

// export const getUserLocal = () => {
//   const user = localStorage.getItem("x_ufo");

//   if (user !== null && user !== undefined) {
//     return JSON.parse(user);
//     // setIsLoggedIn(true);
//   } else {
//     return null;
//     // setIsLoggedIn(false);
//   }
// };

// export const setTokenLocal = (token) => {
//   localStorage.setItem("token", token);
// };



// export const setUserLocal = (user) => {
//   console.log("sdsd")
//   localStorage.setItem("x_ufo", JSON.stringify(user), { expires: 30 });
// };
import Cookies from "js-cookie";

export const getTokenLocal = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
};

export const getUserLocal = () => {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("x_ufo");
    return user ? JSON.parse(user) : null;
  }
  return null;
};

export const setTokenLocal = (token) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("token", token);
  }
};

export const setUserLocal = (user) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("x_ufo", JSON.stringify(user));
  }
};
