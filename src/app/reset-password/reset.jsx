
"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import authInstance from "@/api/auth/auth.api";
import { toast } from "react-toastify";

export default function ResetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); //  URL se token laa rahe

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      return toast("Passwords do not match ❌");
    }

    setLoading(true);

    try {
      const res = await authInstance.resetPass({
        token,
        password,
      });

      setLoading(false);

      if (res?.status?.toLowerCase() !== "success") {
        toast.error(res?.message || "Reset failed ❌");
        return;
      }

      toast.success("Password reset successfully ");
      router.push("/login");

    } catch (err) {
      toast.error("Something went wrong ❌");
      setLoading(false);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h3 className="text-xl font-bold text-center mb-4">Reset Password</h3>

        <form onSubmit={handleReset}>
          <input
            type="password"
            placeholder="New Password"
            className="w-full p-3 border rounded mb-3"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 border rounded mb-3"
            onChange={(e) => setConfirm(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
          >
            {loading ? "Updating..." : "Reset Password"}
          </button>
        </form>
      </div>
    </section>
  );
}
