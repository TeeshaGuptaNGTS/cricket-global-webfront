// "use client";

// // import { useSearchParams } from "next/navigation";
// import { CheckCircle } from "lucide-react";
// import Link from "next/link";
// import Confetti from "react-confetti";
// import { useEffect, useState } from "react";

// export default function PaymentSuccess() {
//   // const query = useSearchParams();

//   const [showConfetti, setShowConfetti] = useState(true);

//   // const name = query.get("name");
//   // const amount = query.get("amount");
//   // const orderId = query.get("orderId");

//   useEffect(() => {
//     setTimeout(() => setShowConfetti(false), 4000);
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
//       {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

//       <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
//         <CheckCircle className="text-green-600 mx-auto mb-3" size={60} />

//         <h1 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful 🎉</h1>
//         <p className="text-gray-600 mb-6">Thank you for your payment!</p>

//         {/* <div className="bg-gray-100 rounded-lg p-4 mb-6 text-left text-sm space-y-2">
//           <p><strong>Name:</strong> {name || "Guest"}</p>
//           <p><strong>Order ID:</strong> {orderId || "--"}</p>
//           <p><strong>Amount Paid:</strong> ₹{amount || "--"}</p>
//         </div> */}

//         <Link href="/">
//           <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
//             Go to Home
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }
"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import Confetti to avoid SSR issues
const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

export default function PaymentSuccess() {
  const [showConfetti, setShowConfetti] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Only runs on client
    setDimensions({ width: window.innerWidth, height: window.innerHeight });

    const timer = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      {showConfetti && dimensions.width > 0 && (
        <Confetti width={dimensions.width} height={dimensions.height} />
      )}

      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <CheckCircle className="text-green-600 mx-auto mb-3" size={60} />

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Successful 🎉
        </h1>
        <p className="text-gray-600 mb-6">Thank you for your payment!</p>

        <Link href="/">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

