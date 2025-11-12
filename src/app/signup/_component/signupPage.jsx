"use client";
import authInstance from "@/api/auth/auth.api";
import Image from "next/image";
import React, { useState } from "react";
import { logoimg } from "@/shared/images";
import { toast } from "react-toastify";

// ✅ Redux imports
import { useDispatch } from "react-redux";
import { updateUser, updateToken } from "@/redux/redux-slice/user.slice";
import { setTokenLocal, setUserLocal } from "@/utils/localStorage.util";

export default function Signup() {
  const dispatch = useDispatch();

  const countries = [
    { code: "", name: "Select your country" },
    { code: "India", name: "India" },
    { code: "United States", name: "United States" },
    { code: "United Kingdom", name: "United Kingdom" },
    { code: "Australia", name: "Australia" },
    { code: "Canada", name: "Canada" },
    { code: "New Zealand", name: "New Zealand" },
    { code: "South Africa", name: "South Africa" },
    { code: "Pakistan", name: "Pakistan" },
    { code: "Bangladesh", name: "Bangladesh" },
    { code: "Sri Lanka", name: "Sri Lanka" },
    { code: "Other", name: "Other" },
  ];

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [dobError, setDobError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match ❌");
      return;
    }

    setError("");
    setLoading(true);

    const reqBody = {
      firstName,
      lastName,
      gender,
      country,
      email,
      password,
      dateOfBirth,
    };

    try {
      const res = await authInstance.signup(reqBody);
      setLoading(false);

      if (!res?.success) {
        toast.success(res?.message);

        // ✅ LocalStorage save
        setUserLocal(res?.data?.user);
        setTokenLocal(res?.data?.token);

        // ✅ Redux save
        dispatch(updateUser(res?.data?.user));
        dispatch(updateToken(res?.data?.token));

        window.location.href = "/";
        return;
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong ❌");
      setLoading(false);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl text-center">
        <Image src={logoimg.logoImg} className="w-36 mx-auto mb-2" alt="Logo" />
        <h3 className="text-xl font-semibold text-black mb-6">SIGN UP</h3>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="text-left">
              <label className="block font-semibold mb-1 text-sm text-black">FIRSTNAME</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full p-2 border border-gray-300 rounded-md outline-none"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="text-left">
              <label className="block font-semibold mb-1 text-sm text-black">LASTNAME</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full p-2 border border-gray-300 rounded-md outline-none"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="text-left">
              <label className="block font-semibold mb-1 text-sm text-black">GENDER</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md outline-none"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="text-left">
              <label className="block font-semibold mb-1 text-sm text-black">COUNTRY</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md outline-none"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                {countries.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="text-left">
              <label className="block font-semibold mb-1 text-sm text-black">PASSWORD</label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full p-2 border border-gray-300 rounded-md outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="text-left">
              <label className="block font-semibold mb-1 text-sm text-black">CONFIRM PASSWORD</label>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full p-2 border border-gray-300 rounded-md outline-none"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="text-left">
              <label className="block font-semibold mb-1 text-sm text-black">EMAIL</label>
              <input
                type="email"
                placeholder="Enter email"
                className={`w-full p-2 border rounded-md outline-none ${
                  emailError ? "border-red-500" : "border-gray-300"
                }`}
                value={email}
                onChange={(e) => {
                  const val = e.target.value.trim().toLowerCase();
                  setEmail(val);
                  const regex =
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                  setEmailError(
                    !regex.test(val)
                      ? "Please enter a valid email"
                      : ""
                  );
                }}
                required
              />
              {emailError && (
                <p className="text-red-500 text-xs">{emailError}</p>
              )}
            </div>

            <div className="text-left">
              <label className="block font-semibold mb-1 text-sm text-black">
                Date of Birth
              </label>
              <input
                type="date"
                placeholder="Select date of birth"
                className={`w-full p-2 border rounded-md outline-none ${
                  dobError ? "border-red-500" : "border-gray-300"
                }`}
                value={dateOfBirth}
                onChange={(e) => {
                  const val = e.target.value;
                  setDateOfBirth(val);
                }}
                required
              />
              {dobError && (
                <p className="text-red-500 text-xs">{dobError}</p>
              )}
            </div>
          </div>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <button
            type="submit"
            className="w-full p-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition"
            disabled={loading}
          >
            {loading ? "Processing..." : "Sign Up"}
          </button>

          <p className="mt-3 text-sm">
            ALREADY HAVE AN ACCOUNT?{" "}
            <a href="/login" className="text-green-600 font-semibold">
              LOGIN
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
