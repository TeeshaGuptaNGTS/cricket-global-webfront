// "use client";
// import React, { useState, useEffect } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import authInstance from "@/api/auth/auth.api";
// import Image from "next/image";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { logoimg } from "@/shared/images";

// export default function ResetPassword() {
//   const [formData, setFormData] = useState({
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const [showPassword, setShowPassword] = useState({
//     newPassword: false,
//     confirmPassword: false,
//   });

//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const token = searchParams.get("token");

//   useEffect(() => {
//     if (!token) setError("Invalid or missing token");
//   }, [token]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const toggleShowPassword = (field) => {
//     setShowPassword((prev) => ({
//       ...prev,
//       [field]: !prev[field],
//     }));
//   };

//   const handleReset = async (e) => {
//     e.preventDefault();
//     setError("");
//     setMessage("");

//     const { newPassword, confirmPassword } = formData;

//     if (!newPassword || !confirmPassword)
//       return setError("All fields are required");

//     if (newPassword.length < 6)
//       return setError("Password must be at least 6 characters long");

//     if (newPassword !== confirmPassword)
//       return setError("Passwords do not match");

//     setLoading(true);

//     try {
//       const reqBody = { token, newPassword };
//       const res = await authInstance.resetPass(reqBody);
//       console.log("Reset Password Response:", res);

//       setLoading(false);

//       if (!res?.success) {
//         setError(res?.message || "Failed to reset password");
//         return;
//       }

//       setMessage("Password reset successfully");
//       setTimeout(() => router.push("/login"), 1500);
//     } catch (err) {
//       console.error("Reset Password Error:", err);
//       setError(
//         err?.response?.data?.message ||
//           err?.message ||
//           "Something went wrong"
//       );
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
//         {/* Logo */}
//         <Image
//           src={logoimg.logoImg}
//           alt="Logo"
//           className="w-36 mx-auto mb-2"
//         />

//         <h3 className="text-xl font-semibold mb-6 text-black">
//           CREATE NEW PASSWORD
//         </h3>

//         <form onSubmit={handleReset} className="w-full max-w-sm mx-auto">
//           {/* New Password */}
//           <div className="text-left mb-4 relative">
//             <label className="block font-semibold mb-1 text-black text-sm">
//               NEW PASSWORD
//             </label>
//             <input
//               type={showPassword.newPassword ? "text" : "password"}
//               name="newPassword"
//               placeholder="Enter new password"
//               className={`w-full p-2 border rounded-md outline-none pr-10 ${
//                 error && error.toLowerCase().includes("new")
//                   ? "border-red-500"
//                   : "border-gray-300"
//               }`}
//               value={formData.newPassword}
//               onChange={handleChange}
//               required
//             />
//             <span
//               onClick={() => toggleShowPassword("newPassword")}
//               className="absolute right-3 top-[34px] cursor-pointer text-gray-500 hover:text-gray-700"
//             >
//               {showPassword.newPassword ? (
//                 <AiOutlineEyeInvisible size={20} />
//               ) : (
//                 <AiOutlineEye size={20} />
//               )}
//             </span>
//           </div>

//           {/* Confirm Password */}
//           <div className="text-left mb-4 relative">
//             <label className="block font-semibold mb-1 text-black text-sm">
//               CONFIRM PASSWORD
//             </label>
//             <input
//               type={showPassword.confirmPassword ? "text" : "password"}
//               name="confirmPassword"
//               placeholder="Confirm new password"
//               className={`w-full p-2 border rounded-md outline-none pr-10 ${
//                 error && error.toLowerCase().includes("match")
//                   ? "border-red-500"
//                   : "border-gray-300"
//               }`}
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//             />
//             <span
//               onClick={() => toggleShowPassword("confirmPassword")}
//               className="absolute right-3 top-[34px] cursor-pointer text-gray-500 hover:text-gray-700"
//             >
//               {showPassword.confirmPassword ? (
//                 <AiOutlineEyeInvisible size={20} />
//               ) : (
//                 <AiOutlineEye size={20} />
//               )}
//             </span>
//           </div>

//           {/* Error / Success Message */}
//           {error && (
//             <p className="text-left text-red-500 text-sm mb-2">{error}</p>
//           )}
//           {message && (
//             <p className="text-left text-green-600 text-sm mb-2">{message}</p>
//           )}

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full p-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition"
//             disabled={loading}
//           >
//             {loading ? "Processing..." : "Reset Password"}
//           </button>

//           {/* Back to Login */}
//           <p className="mt-3 text-sm text-center">
//             Remembered your password?{" "}
//             <span
//               onClick={() => router.push("/login")}
//               className="text-green-600 font-semibold cursor-pointer hover:underline"
//             >
//               Go back to Login
//             </span>
//           </p>
//         </form>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import authInstance from "@/api/auth/auth.api";
import Image from "next/image";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { logoimg } from "@/shared/images";

function ResetPasswordForm() {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    newPassword: false,
    confirmPassword: false,
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) setError("Invalid or missing token");
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleShowPassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleReset = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    const { newPassword, confirmPassword } = formData;

    if (!newPassword || !confirmPassword)
      return setError("All fields are required");

    if (newPassword.length < 6)
      return setError("Password must be at least 6 characters long");

    if (newPassword !== confirmPassword)
      return setError("Passwords do not match");

    setLoading(true);

    try {
      const reqBody = { token, newPassword };
      const res = await authInstance.resetPass(reqBody);
      console.log("Reset Password Response:", res);

      setLoading(false);

      if (!res?.success) {
        setError(res?.message || "Failed to reset password");
        return;
      }

      setMessage("Password reset successfully");
      setTimeout(() => router.push("/login"), 1500);
    } catch (err) {
      console.error("Reset Password Error:", err);
      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Something went wrong"
      );
      setLoading(false);
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
          CREATE NEW PASSWORD
        </h3>

        <form onSubmit={handleReset} className="w-full max-w-sm mx-auto">
          {/* New Password */}
          <div className="text-left mb-4 relative">
            <label className="block font-semibold mb-1 text-black text-sm">
              NEW PASSWORD
            </label>
            <input
              type={showPassword.newPassword ? "text" : "password"}
              name="newPassword"
              placeholder="Enter new password"
              className={`w-full p-2 border rounded-md outline-none pr-10 ${
                error && error.toLowerCase().includes("new")
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              value={formData.newPassword}
              onChange={handleChange}
              required
            />
            <span
              onClick={() => toggleShowPassword("newPassword")}
              className="absolute right-3 top-[34px] cursor-pointer text-gray-500 hover:text-gray-700"
            >
              {showPassword.newPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="text-left mb-4 relative">
            <label className="block font-semibold mb-1 text-black text-sm">
              CONFIRM PASSWORD
            </label>
            <input
              type={showPassword.confirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm new password"
              className={`w-full p-2 border rounded-md outline-none pr-10 ${
                error && error.toLowerCase().includes("match")
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <span
              onClick={() => toggleShowPassword("confirmPassword")}
              className="absolute right-3 top-[34px] cursor-pointer text-gray-500 hover:text-gray-700"
            >
              {showPassword.confirmPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </span>
          </div>

          {/* Error / Success Message */}
          {error && (
            <p className="text-left text-red-500 text-sm mb-2">{error}</p>
          )}
          {message && (
            <p className="text-left text-green-600 text-sm mb-2">{message}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition"
            disabled={loading}
          >
            {loading ? "Processing..." : "Reset Password"}
          </button>

          {/* Back to Login */}
          <p className="mt-3 text-sm text-center">
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

// ✅ Wrap in Suspense (needed for useSearchParams)
export default function ResetPassword() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <ResetPasswordForm />
    </Suspense>
  );
}

