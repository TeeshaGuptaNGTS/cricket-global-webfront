"use client"
import React, { useState } from "react";
import { logoimg ,logoImg} from "@/shared/images"

import { Send } from "lucide-react";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Your message has been sent!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white-600 px-4 sm:px-6 md:px-10 py-7">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-[900px]">
       
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center p-8 bg-gradient-to-b from-blue-950 to-blue-700 text-white">
          <Image
            src={logoimg.logobase}
            alt="Cricket Lovers Global Logo"
            className="w-52 md:w-72 mb-4"
          />
        </div>

        
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl p-6 sm:p-8 md:p-10 w-full  md:border-t-3 md:border-l-2  animate-fadeInUp  border-t-[6px] border-l-[3px]  border-b-[6px] border-r-[6px] border-gray-300
"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-[#001B5E] mb-8 text-center animate-fadeInDown">
            CONTACT US
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="relative">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#551FFF] transition-shadow duration-300"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#551FFF] transition-shadow duration-300"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#551FFF] transition-shadow duration-300"
              />
            </div>

            {/* Service */}
            <div className="relative">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Service Type <span className="text-red-500">*</span>
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-[#3812a8] transition-shadow duration-300"
              >
                <option value="">Select a service</option>
                <option value="membership">Membership Inquiry</option>
                <option value="events">Event Registration</option>
                <option value="support">Support</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Address */}
            <div className="relative md:col-span-2">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#551FFF] transition-shadow duration-300"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mt-6">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#551FFF] transition-shadow duration-300"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-950 text-white px-8 py-2 rounded-3xl text-lg font-medium shadow-md hover:shadow-lg cursor-pointer"
            >
              <Send size={18} />
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
