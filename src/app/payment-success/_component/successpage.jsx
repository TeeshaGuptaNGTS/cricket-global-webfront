"use client";

import { useSearchParams } from "next/navigation";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

export default function PaymentSuccess() {
  const query = useSearchParams();

  const [showConfetti, setShowConfetti] = useState(true);

  const name = query.get("name");
  const amount = query.get("amount");
  const orderId = query.get("orderId");

  useEffect(() => {
    setTimeout(() => setShowConfetti(false), 4000);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <CheckCircle className="text-green-600 mx-auto mb-3" size={60} />

        <h1 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful 🎉</h1>
        <p className="text-gray-600 mb-6">Thank you for your payment!</p>

        {/* <div className="bg-gray-100 rounded-lg p-4 mb-6 text-left text-sm space-y-2">
          <p><strong>Name:</strong> {name || "Guest"}</p>
          <p><strong>Order ID:</strong> {orderId || "--"}</p>
          <p><strong>Amount Paid:</strong> ₹{amount || "--"}</p>
        </div> */}

        <Link href="/">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
