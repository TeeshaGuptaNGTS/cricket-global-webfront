"use client";
import React, { useState } from "react";
import { logoimg } from "@/shared/images";

import authInstance from "@/api/auth/auth.api";
import { setTokenLocal, setUserLocal } from "@/utils/localStorage.util";
import Image from "next/image";
import { toast } from "react-toastify";
import { strengthIndicator, strengthColor } from "@/utils/password-strength.js";
import { Eye, EyeOff } from "lucide-react";

// Redux Import here
import { useDispatch } from "react-redux";
import { updateUser, updateToken } from "@/redux/redux-slice/user.slice";
import { Router } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) return setError("All fields are required ❌");

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email))
      return setEmailError("Please enter a valid email");

    setError("");
    setLoading(true);

    try {
      console.log("email, password", email, password);

      const res = await authInstance.login({ email, password, role: "user" });
      setLoading(false);

      if (res?.status?.toLowerCase() != "success")
        return setError(res?.message || "Login failed ");

      // ✅ LocalStorage Save
      // setTokenLocal(res?.data?.token);
      // setUserLocal(res?.data?.user);

      //  Redux State Update
      dispatch(updateToken(res?.data?.token));
      dispatch(updateUser(res?.data?.user));

      toast.success("Login Successful ");
      router.push("/");

      // window.location.href = "/";
    } catch (err) {
      setLoading(false);

      const backendMessage =
        err?.response?.data?.message ||
        err?.data?.message ||
        err?.message ||
        "Something went wrong";

      setError(backendMessage);
      // toast.error(backendMessage);
    }
  };
  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setPassword(val);

    if (val) {
      const strengthLevel = strengthIndicator(val);
      const strengthInfo = strengthColor(strengthLevel);
      setStrength(strengthInfo);
    } else {
      setStrength(null);
    }
  };

  // const handleForgetPass = async () => {
  //   if (!email) return setError("Email is required");

  //   const emailRegex =
  //     /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  //   if (!emailRegex.test(email))
  //     return setEmailError("Please enter a valid email");

  //   try {
  //     const res = await authInstance.forgetPass({ email });

  //     if  (res?.status?.toLowerCase() !== "success")

  //       return setError(res?.message || "Request failed");

  //     toast("Reset Email Sent Successfully");
  //   } catch {
  //     toast("Something went wrong");
  //   }
  // };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <Image src={logoimg.logoImg} alt="Logo" className="w-36 mx-auto mb-2" />

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
                  !emailRegex.test(val) ? "Please enter a valid email" : ""
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

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className={`w-full p-2 border rounded-md outline-none ${
                  strength?.label === "Poor"
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                value={password}
                onChange={(e) => {
                  const val = e.target.value;
                  setPassword(val);

                  // strength logic
                  const level = strengthIndicator(val);
                  const info = strengthColor(level);
                  setStrength(info);
                }}
                required
              />

              {/* Eye Icon */}
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {strength && (
              <p className="text-sm mt-1" style={{ color: strength.color }}>
                {strength.label}
              </p>
            )}
          </div>

          {error && (
            <p className="text-left text-red-500 text-sm mb-2">{error}</p>
          )}
          <p
            className="text-green-600 text-sm text-right cursor-pointer mb-2"
            onClick={() => router.push("/forget-password")}
          >
            Forgot Password?
          </p>

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
