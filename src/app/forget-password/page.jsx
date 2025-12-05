"use client";
import React, { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import authInstance from "@/api/auth/auth.api";
import { logoimg } from "@/shared/images";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgetPass = async (e) => {
    e.preventDefault();
    if (!email) return setError("Email is required ❌");

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email))
      return setEmailError("Please enter a valid email");

    setError("");
    setLoading(true);

    try {
      const res = await authInstance.forgetPassword({ email });
      setLoading(false);
            
      if (res?.status?.toLowerCase() !== "success")
        return setError(res?.message || "Failed to send reset email");

      toast.success("Reset Email Sent Successfully");
    //   router.push("/login");
    } catch (err) {
      setLoading(false);
      const backendMessage =
        err?.response?.data?.message ||
        err?.data?.message ||
        err?.message ||
        "Something went wrong";
      setError(backendMessage);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        {/* Logo */}
        <Image
          src={logoimg.logoImg}
          alt="Logo"
          className="w-36 mx-auto mb-2"
        />

        <h3 className="text-xl font-semibold mb-6 text-black">
          FORGOT PASSWORD
        </h3>

        <form onSubmit={handleForgetPass}>
          {/* Email Field */}
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
              value={email}
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

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition"
            disabled={loading}
          >
            {loading ? "Processing..." : "Send Reset Link"}
          </button>

          {/* Back to login */}
          <p className="mt-3 text-sm">
            Remembered your password?{" "}
            <span
              onClick={() => router.push("/login")}
              className="text-green-600 font-semibold cursor-pointer hover:underline"
            >
              Go back to Login
            </span>
          </p>
        </form>
      </div>
    </section>
  );
}
