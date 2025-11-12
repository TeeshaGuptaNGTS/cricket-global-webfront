// "use client";
// import Image from "next/image";
// import { CheckCircle, ArrowLeft } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { Imgmembership } from "@/shared/images";
// import { useEffect, useState } from "react";
// import membershipApi from "@/api/membership.api";
// import { htmlTostring } from "@/utils/htmlTostring";


// export default function SoloMembershipDetailsPage() {
//   const router = useRouter();
//   const [plans, setPlans] = useState([]);
  
  
//   // api integerate start
//   const fetchPlans = async () => {
//       try {
//         const res = await membershipApi.getAllPlans();
//         console.log("Membership Plans Response:", res);
  
//         if (res.status?.toLowerCase() === "success") {
//     setPlans(res.data);
//   }
  
//       } catch (error) {
//         console.log("Fetch membership error:", error);
//       }
//     };
//   useEffect(() => {
//       fetchPlans();
//     }, []);
//   // payment stripe link
//   const handlePayment = async (plan) => {
//     try {
//       const payload = {
//         planId: plan._id,
        
//       };

//       const res = await membershipApi.createMembershipPayment(payload);
//       console.log("Membership payment res:", res);

//       if (!res || res?.status?.toLowerCase() !== "success") {
//         return toast.error(res?.message || "Payment failed ❌");
//       }

//       window.location.href = res?.data; 
//       console.log("url",res?.data)
// // window.location.replace(res.data);

//     } catch (error) {
//       console.log("Payment Error:", error);
//       toast.error("Something went wrong ❌");
//     }
//   };
  
  

//   return (
//     <section>
//     <div className="min-h-screen bg-gray-50 px-4 md:px-10 lg:px-20 py-10">

//       {/* Back Button */}
//       <button
//         onClick={() => router.push("/membership")}
//         className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 font-bold rounded-lg flex items-center gap-2 mb-5"
//       >
//         <ArrowLeft size={20} /> Back to Pricing Plans
//       </button>

//       {/* BANNER */}
//       <div className="relative w-full h-[280px] md:h-[360px] lg:h-[420px] rounded-3xl overflow-hidden shadow">
//         <Image
//           src={Imgmembership.imgPassion4}
//           alt="Solo Membership"
//           fill
//           className="object-cover"
//         />
//       </div>

//       {/* CONTENT */}
     
//       {plans.length > 0 && (
//          <>
//       <section>
//         <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

//         {/* Title + Price */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
//           <div>
//             <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b1441]">
//              {plans[1]?.name}
//             </h1>
//             <p className="mt-2 text-green-600 font-semibold text-lg">
//             Price:£{plans[1]?.price}
//             </p>
//           </div>
//         </div>

//         <hr className="my-6" />

//         {/* Description */}
//        <p> {htmlTostring(plans[1]?.description)}</p>

//         <h2 className="text-2xl font-bold mb-4">Membership Benefits</h2>

//         {/* BENEFITS LIST */}
//         <div className="grid sm:grid-cols-2 gap-4">
//           {[
//             "Discounts on CLG merchandise",
//             "Entry to Cricket Lovers Global annual meet",
//             "Entry to Junior Member events",
//             "Access to private member-only online sessions",
//             "CLG newsletter subscription",
//             "Access to behind-the-scenes cricket insights",
//             "Eligibility to participate in CLG competitions",
//             "Exclusive community-only updates",
//           ].map((benefit, i) => (
//             <div key={i} className="flex items-start gap-3">
//               <CheckCircle className="text-green-600 mt-1" size={22} />
//               <p className="text-gray-700 leading-tight">{benefit}</p>
//             </div>
//           ))}
//         </div>

//         <div className="mt-10 text-center">
//   <button
//     onClick={() => handlePayment(plans[1])}
//     className="
//       bg-green-600 hover:bg-green-700 text-white 
//       px-6 py-3 text-base      /* ✅ Mobile */
//       sm:px-10 sm:py-4 sm:text-lg   /* ✅ Tablet / Desktop */
//       font-bold 
//       rounded-xl shadow-lg 
//       transition cursor-pointer
//       w-[85%] sm:w-auto        /* ✅ Mobile full-ish width */
//     "
//   >
//     Join Solo Membership
//   </button>
// </div>


//       </div>
     
//       </section>
//       </>
//        )}
//         </div>
// </section>
   
//   );
// }
