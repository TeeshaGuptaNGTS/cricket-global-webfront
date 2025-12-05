// "use client"
// import React, { useState } from "react";
// import { logoimg ,logoImg} from "@/shared/images"

// import { Send } from "lucide-react";
// import Image from "next/image";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     message: "",
//     address: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     alert("Your message has been sent!");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white-600 px-4 sm:px-6 md:px-10 py-7">
//       <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-[900px]">
       
//         <div className="md:w-1/2 w-full flex flex-col items-center justify-center p-8 bg-gradient-to-b from-blue-950 to-blue-700 text-white">
//           <Image
//             src={logoimg.logobase}
//             alt="Cricket Lovers Global Logo"
//             className="w-52 md:w-72 mb-4"
//           />
//         </div>

        
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white shadow-xl p-6 sm:p-8 md:p-10 w-full  md:border-t-3 md:border-l-2  animate-fadeInUp  border-t-[6px] border-l-[3px]  border-b-[6px] border-r-[6px] border-gray-300
// "
//         >
//           <h1 className="text-3xl sm:text-4xl font-bold text-[#001B5E] mb-8 text-center animate-fadeInDown">
//             CONTACT US
//           </h1>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Name */}
//             <div className="relative">
//               <label className="text-sm font-medium text-gray-700 mb-1 block">
//                 Your Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#551FFF] transition-shadow duration-300"
//               />
//             </div>

//             {/* Email */}
//             <div className="relative">
//               <label className="text-sm font-medium text-gray-700 mb-1 block">
//                 Your Email <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#551FFF] transition-shadow duration-300"
//               />
//             </div>

//             {/* contact */}
//             <div className="relative">
//               <label className="text-sm font-medium text-gray-700 mb-1 block">
//                 contact Number <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="contact"
//                 placeholder="Enter your contact number"
//                 value={formData.contact}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#551FFF] transition-shadow duration-300"
//               />
//             </div>

//             {/* Service */}
//             <div className="relative">
//               <label className="text-sm font-medium text-gray-700 mb-1 block">
//                 Service Type <span className="text-red-500">*</span>
//               </label>
//               <select
//                 name="service"
//                 value={formData.service}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-gray-300 rounded-xl px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-[#3812a8] transition-shadow duration-300"
//               >
//                 <option value="">Select a service</option>
//                 <option value="membership">Membership Inquiry</option>
//                 <option value="events">Event Registration</option>
//                 <option value="support">Support</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>

//             {/* Address */}
//             <div className="relative md:col-span-2">
//               <label className="text-sm font-medium text-gray-700 mb-1 block">
//                 Address <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="address"
//                 placeholder="Enter your address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#551FFF] transition-shadow duration-300"
//               />
//             </div>
//           </div>

//           {/* Message */}
//           <div className="mt-6">
//             <label className="text-sm font-medium text-gray-700 mb-1 block">
//               Message
//             </label>
//             <textarea
//               name="message"
//               placeholder="Write your message here..."
//               rows="5"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#551FFF] transition-shadow duration-300"
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-center mt-8">
//             <button
//               type="submit"
//               className="flex items-center gap-2 bg-blue-950 text-white px-8 py-2 rounded-3xl text-lg font-medium shadow-md hover:shadow-lg cursor-pointer"
//             >
//               <Send size={18} />
//               Send
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;


"use client";
import React, { useState } from "react";
import { logoimg } from "@/shared/images";
import Image from "next/image";
import { Send } from "lucide-react";
import authInstance from "@/api/auth/auth.api";
import { toast } from "react-toastify";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.contact.trim()) {
      newErrors.contact = "Please enter your contact number.";
    } else if (!/^[0-9]{10}$/.test(formData.contact)) {
      newErrors.contact = "Please enter a valid 10-digit contact number.";
    }
    if (!formData.address.trim())
      newErrors.address = "Please enter your address.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        console.log("Submitting contact form data:", formData);

        // ✅ Replace with your actual API call
        const res = await authInstance.ContactUs(formData);
        console.log("Contact form submitted:", res);
        if(res?.status == "Success"){
        toast.success("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          contact: "",
          message: "",
          address: "",
        });}

      } catch (error) {
        console.error("Error submitting form:", error);
        setErrors("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 md:px-10 py-7">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-[900px]">
        {/* Left Side */}
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center p-8 bg-gradient-to-b from-blue-950 to-blue-700 text-white">
          <Image
            src={logoimg.logobase}
            alt="Cricket Lovers Global Logo"
            className="w-52 md:w-72 mb-4"
          />
        </div>

        {/* Right Side - Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-3xl p-6 sm:p-8 md:p-10 w-full border-t border-b border-r border-gray-300 rounded-tr-2xl rounded-br-2xl "
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-[#001B5E] mb-8 text-center">
            CONTACT US
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#551FFF]`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#551FFF]`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            
            {/* contact */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="contact"
                placeholder="Enter your contact number"
                value={formData.contact}
                onChange={handleChange}
                className={`w-full border ${
                  errors.contact ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#551FFF]`}
              />
              {errors.contact && (
                <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
              )}
            </div>

            {/* Address */}
            <div className="">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full border ${
                  errors.address ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#551FFF]`}
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address}</p>
              )}
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
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#551FFF]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-950 text-white px-8 py-2 rounded-3xl text-lg font-medium shadow-md hover:shadow-lg cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
