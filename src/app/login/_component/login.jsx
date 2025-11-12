"use client";
import React, { useState } from "react";
import { logoimg } from "@/shared/images";

import authInstance from "@/api/auth/auth.api";
import { setTokenLocal, setUserLocal } from "@/utils/localStorage.util";
import Image from "next/image";
import { toast } from "react-toastify";

// Redux Import here 
import { useDispatch } from "react-redux";
import { updateUser, updateToken } from "@/redux/redux-slice/user.slice";

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) return setError("All fields are required ❌");

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email))
      return setEmailError("Please enter a valid email");

    setError("");
    setLoading(true);

    try {
      console.log("email, password", email, password);

      const res = await authInstance.login({ email, password });
      setLoading(false);

      if (res?.status?.toLowerCase() != "success")
        return setError(res?.message || "Login failed ❌");

      // ✅ LocalStorage Save
      setTokenLocal(res?.data?.token);
      setUserLocal(res?.data?.user);

      // ✅ Redux State Update
      dispatch(updateToken(res?.data?.token));
      dispatch(updateUser(res?.data?.user));

      toast.success("Login Successful ✅");

      window.location.href = "/";
    } catch {
      setLoading(false);
      setError("Something went wrong ❌");
    }
  };

  const handleForgetPass = async () => {
    if (!email) return setError("Email is required ❌");

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email))
      return setEmailError("Please enter a valid email");

    try {
      const res = await authInstance.forgetPass({ email });

      if  (res?.status?.toLowerCase() !== "success")

        return setError(res?.message || "Request failed ❌");

      toast("Reset Email Sent Successfully ✅");
    } catch {
      toast("Something went wrong ❌");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <Image
          src={logoimg.logoImg}
          alt="Logo"
          className="w-36 mx-auto mb-2"
        />

        <h3 className="text-xl font-semibold mb-6 text-black">LOGIN</h3>

        <form onSubmit={handleLogin}>
          <div className="text-left mb-4">
            <label className="block font-semibold mb-1 text-black text-sm">
              EMAIL
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full p-2 border rounded-md outline-none ${
                emailError ? "border-red-500" : "border-gray-300"
              }`}
              onChange={(e) => {
                const val = e.target.value.trim().toLowerCase();
                setEmail(val);
                const emailRegex =
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                setEmailError(
                  !emailRegex.test(val)
                    ? "Please enter a valid email"
                    : ""
                );
              }}
              required
            />
            {emailError && (
              <p className="text-red-500 text-xs mt-1">{emailError}</p>
            )}
          </div>

          <div className="text-left mb-2">
            <label className="block font-semibold mb-1 text-black text-sm">
              PASSWORD
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-300 rounded-md outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <p
            className="text-green-600 text-sm text-right cursor-pointer mb-2"
            onClick={handleForgetPass}
          >
            Forgot Password?
          </p>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <button
            type="submit"
            className="w-full p-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition"
            disabled={loading}
          >
            {loading ? "Processing..." : "Login"}
          </button>

          <p className="mt-3 text-sm">
            DON'T HAVE AN ACCOUNT?{" "}
            <a href="/signup" className="text-green-600 font-semibold">
              SIGN UP
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
