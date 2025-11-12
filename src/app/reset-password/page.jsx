"use client";
import React, { useState } from "react";
import authInstance from "@/api/auth/auth.api";

export default function ForgotPassword() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [email,  setEmail] = useState("")
  const [emailError, setEmailError] = useState("");
  

  const handleForgot = async (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    setEmailError("");
    setMessage("");
    setLoading(true);

    try {
      const reqBody = { email };
      const res = await authInstance.forgotPass(reqBody);
      console.log("Forgot Password Response:", res);

      setLoading(false);

      if (!res?.success) {
        setMessage(res?.message || "Request failed ❌");
        return;
      }

      setMessage("Reset link sent to your email ✅");
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong ❌");
      setLoading(false);
    }
  };

  return (
    <section className="main-container-login1">
      <div className="container1">
        <div className="form-box1">
          <img
            src="/assets/images/Logo.webp"
            alt="Logo"
            className="logo1"
          />
          <h3>FORGOT PASSWORD</h3>

          <form onSubmit={handleForgot}>
            <div className="input-group1">
              <label>EMAIL</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  const val = e.target.value.trim().toLowerCase();
                  setEmail(val);
                  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                  setEmailError(!emailRegex.test(val) ? "Please enter a valid email" : "");
                }}
                required
                className={emailError ? "input-error" : ""}
              />
              {emailError && (
                <p style={{ color: "red", fontSize: "13px" }}>{emailError}</p>
              )}
            </div>

            {message && <p style={{ color: "orange", fontSize: "14px" }}>{message}</p>}

            <button type="submit" className="btn1" disabled={loading}>
              {loading ? "Sending..." : "Send Reset Link"}
            </button>

            <p className="signup-text1">
              BACK TO <a href="/login">LOGIN</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
