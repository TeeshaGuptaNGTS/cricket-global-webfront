"use client";

import React, { useState, useEffect } from "react";
import authInstance from "@/api/auth/auth.api";
import { getUserLocal, setUserLocal } from "@/utils/localStorage.util";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ProfileForm() {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    favouriteTeam: "",
    nationality: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    postcode: "",
  });

  // Load user data
  useEffect(() => {
    const user = getUserLocal();
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        contact: user.contact || "",
        favouriteTeam: user.favouriteTeam || "",
        nationality: user.nationality || "",
        gender: user.gender || "",
        dateOfBirth: user.dateOfBirth?.split("T")[0] || "",
        address: user.address || "",
        postcode: user.postcode || "",
      });
    }
    setTimeout(() => setLoading(false), 600); // Shimmer effect
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await authInstance.profileUpdate(formData);
      if (res?.data?.user) setUserLocal(res.data.user);
      toast("✅ Profile Updated Successfully");
    } catch (err) {
      toast("❌ Something went wrong");
    }
  };

  // ✅ Shimmer Loading Skeleton
  if (loading) {
    return (
      <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-10 bg-gray-200 rounded-md"></div>
        ))}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {Object.keys(formData).map((key, i) => (
        <div key={i} className="flex flex-col">
          <label className="text-sm text-gray-600 dark:text-gray-500 font-medium mb-1 capitalize">
            {key.replace(/([A-Z])/g, " $1")}
          </label>

          {key === "dateOfBirth" ? (
            <DatePicker
              selected={new Date(formData.dateOfBirth)}
              onChange={(date) =>
                handleChange({
                  target: {
                    name: "dateOfBirth",
                    value: date.toISOString(),
                  },
                })
              }
              className="w-full border border-gray-200 bg-gray-50 focus:bg-white 
              rounded-md px-3 py-2 shadow-sm 
              focus:ring-2 focus:ring-[#3E63DD] outline-none transition
              text-xs md:text-sm focus:scale-[1.03]"
              dateFormat="dd / MM / yyyy"
            />
          ) : (
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="
                border border-gray-200 bg-gray-50 dark:bg-white/10 
              text-black focus:bg-white dark:focus:bg-white/20
                rounded-md px-3 py-2 shadow-sm focus:ring-2 
                focus:ring-[#3E63DD] outline-none transition-all duration-200
                text-xs md:text-sm focus:scale-[1.03]"
            />
          )}
        </div>
      ))}

      {/* Animated Button */}
      <button
        type="submit"
        className="col-span-1 md:col-span-2 bg-[#00a63e] hover:bg-[#26b95c]
        text-white py-3 rounded-xl font-semibold w-full shadow-lg transition 
        active:scale-95 animate-fadeIn"
      >
        Save Changes
      </button>
    </form>
  );
}
