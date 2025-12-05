// "use client";

// import Image from "next/image";
// import { Imgmembership } from "@/shared/images";
// import { ArrowUpRight, User } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { solomembership } from "@/app/membership/_component/solomembership";
// import { useState, useEffect } from "react";
// import membershipApi from "@/api/membership.api";

// export default function PricingSection() {
//   const router = useRouter();
//   const [plans, setPlans] = useState([]);

//   // api integerate start
//   const fetchPlans = async () => {
//     try {
//       const res = await membershipApi.getAllPlans();
//       console.log("Membership Plans Response:", res);

//       if (res.status?.toLowerCase() === "success") {
//         setPlans(res.data);
//       }
//     } catch (error) {
//       console.log("Fetch membership error:", error);
//     }
//   };
//   useEffect(() => {
//     fetchPlans();
//   }, []);

//   return (
//     <section className="w-full px-4 md:px-10 lg:px-20 py-12 bg-gray-50">
//       {/* Heading Row */}
//       <div className="flex justify-between items-center mb-10">
//         <h2 className="text-3xl md:text-5xl font-extrabold text-[#0b1441]">
//           PRICING <span className="text-[#22c55e]">PLAN</span>
//         </h2>

//         {/* <button className="text-[#22c55e] font-semibold flex items-center gap-1 hover:underline  transition cursor-pointer">
//           VIEW MORE <ArrowUpRight size={18} />
//         </button> */}
//       </div>
//       {plans.length > 0 && (
//         <>
//           {/* MAIN GRID */}
//           <section>
//             <div className="grid lg:grid-cols-2 gap-10 items-start">
//               {/* LEFT SIDE CARDS → 2 Cards */}
//               <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
//                 {/* CARD 1 */}
//                 <div className="bg-gradient-to-t from-[#e8ebf0] to-[#f3f5f8] rounded-2xl shadow hover:shadow-lg overflow-hidden border-gray-300 snap-start hover:scale-105 transition duration-400 ">
//                   <div className="relative h-[260px] w-full">
//                     <Image
//                       src={Imgmembership.imgPassion1}
//                       alt="Platinum Membership"
//                       fill
//                       className="object-cover"
//                     />
//                   </div>

//                   <div className="p-6">
//                     <p className="text-sm flex items-center gap-1 text-gray-600 mb-2">
//                       <User size={16} /> BUY{" "}
//                       <span className="font-bold text-green-600">
//                         £{plans[0]?.price}
//                       </span>
//                     </p>

//                     <h3 className="text-2xl font-bold text-[#0b1441] leading-tight">
//                       {plans[0]?.name}
//                     </h3>

//                     <button
//                       onClick={() => router.push("/membership?view=platinum")}
//                       className="mt-4 text-[#22c55e] font-semibold flex items-center gap-1 hover:underline  transition cursor-pointer"
//                     >
//                       GET STARTED <ArrowUpRight size={18} />
//                     </button>
//                   </div>
//                 </div>

//                 {/* CARD 2 */}
//                 <div className="bg-gradient-to-t from-[#e8ebf0] to-[#f3f5f8] rounded-2xl shadow hover:shadow-lg overflow-hidden border-gray-300 snap-start hover:scale-105 transition duration-400">
//                   <div className="relative h-[260px] w-full">
//                     <Image
//                       src={Imgmembership.imgcare2}
//                       alt="Solo Membership"
//                       fill
//                       className="object-cover"
//                     />
//                   </div>

//                   <div className="p-6">
//                     <p className="text-sm flex items-center gap-1 text-gray-600 mb-2">
//                       <User size={16} /> BUY{" "}
//                       <span className="font-bold text-green-600">
//                         {" "}
//                         £{plans[1]?.price}
//                       </span>
//                     </p>

//                     <h3 className="text-2xl font-bold text-[#0b1441] leading-tight">
//                       {plans[1]?.name}
//                     </h3>

//                     <button
//                       onClick={() => router.push("/membership?view=platinum")}
//                       className="mt-4 text-[#22c55e] font-semibold flex items-center gap-1 hover:underline  transition cursor-pointer"
//                     >
//                       GET STARTED <ArrowUpRight size={18} />
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* RIGHT SECTION — LIMITED OFFER BOX */}
//               <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
//                 <div className="bg-gradient-to-t from-[#e8ebf0] to-[#f3f5f8] rounded-2xl shadow hover:shadow-lg overflow-hidden border-gray-300 snap-start hover:scale-105 transition duration-400">
//                   <div className="relative h-[260px] w-full">
//                     <Image
//                       src={Imgmembership.imgPassion4}
//                       alt="Solo Membership"
//                       fill
//                       className="object-cover"
//                     />
//                   </div>

//                   <div className="p-6">
//                     <p className="text-sm flex items-center gap-1 text-gray-600 mb-2">
//                       <User size={16} /> BUY{" "}
//                       <span className="font-bold text-green-600">
//                         {" "}
//                         £{plans[2]?.price}
//                       </span>
//                     </p>

//                     <h3 className="text-2xl font-bold text-[#0b1441] leading-tight">
//                       {plans[2]?.name}
//                     </h3>

//                     <button
//                       onClick={() => router.push("/membership?view=solo")}
//                       className="mt-4 text-[#22c55e] font-semibold flex items-center gap-1 hover:underline  transition cursor-pointer"
//                     >
//                       GET STARTED <ArrowUpRight size={18} />
//                     </button>
//                   </div>
//                 </div>
//                 <div className="bg-white border-2-gray-800 rounded-xl shadow p-10 text-center">
//                   <h3 className="text-3xl font-bold mb-6">LIMITED OFFER</h3>

//                   <p className="text-red-600 font-semibold mb-2">
//                     FREE ACCOUNT VIA RIBBON
//                   </p>

//                   <div className="flex justify-center my-6">
//                     <Image
//                       src={Imgmembership.imgRibbon}
//                       alt="Ribbon Logo"
//                       width={180}
//                       height={60}
//                     />
//                   </div>

//                   <p className="text-gray-800 text-sm font-medium leading-relaxed mb-6">
//                     FREE WITH RIBBON GLOBAL MULTI- <br />
//                     CURRENCY ACCOUNT
//                   </p>

//                   <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-lg flex items-center mx-auto gap-2  transition cursor-pointer">
//                     SIGNUP <ArrowUpRight size={18} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </>
//       )}
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { Imgmembership } from "@/shared/images";
import { ArrowUpRight, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import membershipApi from "@/api/membership.api";

export default function PricingSection() {
  const router = useRouter();
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const res = await membershipApi.getAllPlans();

      if (res.status?.toLowerCase() === "success") {
        setPlans(res.data);
      }
    } catch (error) {
      console.log("Fetch membership error:", error);
    }
  };
  console.log("Id of plan-----", plans)

  const images = [
    Imgmembership.imgPassion1,
    Imgmembership.imgcare2,
    Imgmembership.imgPassion4,
    Imgmembership.imgPassion2,
    Imgmembership.imgPassion3,
  ];

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-16 bg-gray-50">
      {/* Heading */}
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b1441]">
          PRICING <span className="text-[#22c55e]">PLAN</span>
        </h2>
      </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {plans.map((plan) => (
            <div
              key={plan._id}
              className="bg-white rounded-2xl shadow hover:shadow-lg border border-gray-200 hover:scale-[1.02] transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
             
              <div className="relative h-[300px] w-full bg-white rounded-2xl overflow-hidden border">
  {/* 🔥 Recommended Badge */}
  {plan.name === "Lifetime Family Membership" && (
    <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20">
      Recommended
    </span>
  )}
  
  {plan?.coverImage ? (
    <Image
      src={plan.coverImage}
      alt={plan.name}
      fill
      className="object-cover object-top rounded-2xl"
      sizes="(max-width: 768px) 100vw, 33vw"
      priority
    />
  ) : (
    <div className="flex items-center justify-center h-full text-gray-400 text-sm">
      No Image Available
    </div>
  )}
</div>


              {/* Content */}
              <div className="p-6 space-y-3">
                <p className="text-sm flex items-center gap-1 text-gray-600">
                  <User size={16} />
                  BUY{" "}
                  <span className="font-bold text-green-600">
                    £{plan.price || "0.00"}
                  </span>
                </p>

                <h3 className="text-2xl font-bold text-[#0b1441] leading-tight">
                  {plan.name}
                </h3>

                <p className="text-sm text-gray-600 line-clamp-3 min-h-[60px]">
                  {plan.description || "No description available."}
                </p>

                <button
                  onClick={() => router.push(`/membership/${plan?._id}`)}
                  className="mt-4 text-[#22c55e] font-semibold flex items-center gap-1 hover:underline transition cursor-pointer"
                >
                  GET STARTED <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          ))}

          <div className="bg-white border border-gray-300 rounded-2xl shadow p-10 text-center flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">LIMITED OFFER</h3>
            <p className="text-red-600 font-semibold mb-2">
              FREE ACCOUNT VIA RIBBON
            </p>

            <div className="flex justify-center my-6">
              <Image
                src={Imgmembership.imgRibbon}
                alt="Ribbon Logo"
                width={200}
                height={70}
              />
            </div>

            <p className="text-gray-700 text-sm font-medium leading-relaxed mb-6">
              FREE WITH RIBBON GLOBAL MULTI-CURRENCY ACCOUNT
            </p>

            <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-xl flex items-center mx-auto gap-2 transition cursor-pointer">
              SIGNUP <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
    </section>
  );
}
