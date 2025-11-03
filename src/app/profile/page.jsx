"use client";
import React, { useState, useEffect } from "react";
import authInstance from "@/api/auth/auth.api";
import { getTokenLocal, getUserLocal, setTokenLocal, setUserLocal } from "@/utils/localStorage.util";

const Profile = () => {
  const userToken = getTokenLocal();

  // ✅ call getUserLocal() only once on mount
  const [userData] = useState(() => getUserLocal());

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    favouriteTeam: "",
    nationality: "",
    countryOfResidency: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    postcode: "",
    membershipNumber: "",
    isSubscribed: false,
  });

  // ✅ Populate formData on mount (run once)
  useEffect(() => {
    if (userData) {
      setFormData({
        firstName: userData?.firstName || "",
        lastName: userData?.lastName || "",
        email: userData?.email || "",
        contact: userData?.contact || "",
        favouriteTeam: userData?.favouriteTeam || "",
        nationality: userData?.nationality || "",
        // countryOfResidency: userData?.countryOfResidency || "",
        gender: userData?.gender || "",
        dateOfBirth: userData?.dateOfBirth?.split("T")[0] || "",
        address: userData?.address || "",
        postcode: userData?.postcode || "",
        membershipNumber: userData?.membershipNumber || "",
        isSubscribed: userData?.isSubscribed || false,
      });
    }
  }, []); // 👈 empty dependency array to avoid loop

  // ✅ Handle field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Submit updated data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Updated profile data:", formData);

    try {
      const res = await authInstance.profileUpdate(formData);
      console.log("Profile updated successfully:", res);
    //   setTokenLocal(res?.data?.token);
            // alert("Login Successful ✅");
            setUserLocal(res?.data?.user)
      // TODO: Add toast here
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-[#001B5E]">
          Update Your Profile
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
          />

          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={formData.contact}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
          />

          <input
            type="text"
            name="favouriteTeam"
            placeholder="Favourite Team"
            value={formData.favouriteTeam}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
          />

          <input
            type="text"
            name="nationality"
            placeholder="Nationality"
            value={formData.nationality}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
          />

          

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
          />

          <input
            type="text"
            name="postcode"
            placeholder="Postcode"
            value={formData.postcode}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
          />

          <input
            type="text"
            name="membershipNumber"
            placeholder="Membership Number"
            value={formData.membershipNumber}
            readOnly
            className="border p-3 rounded-lg w-full bg-gray-100 cursor-not-allowed"
          />

          <input
            type="text"
            name="isSubscribed"
            value={formData.isSubscribed ? "Subscribed" : "Not Subscribed"}
            readOnly
            className="border p-3 rounded-lg w-full bg-gray-100 cursor-not-allowed"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-green-600 hover:bg-[#001B5E] text-white font-semibold py-3 rounded-md transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
