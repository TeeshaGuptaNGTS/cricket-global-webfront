"use client";
import Image from "next/image";
import { CheckCircle, ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRouter,useParams } from "next/navigation";
import { Imgmembership } from "@/shared/images";
import membershipApi from "@/api/membership.api";
import { useEffect, useState } from "react";
import { htmlTostring } from "@/utils/htmlTostring";
import { toast } from "react-toastify";

export default function MembershipDetailsPage() {
    const router = useRouter();
      const [plans, setPlans] = useState([]);
     const { id } = useParams();


    // api integerate start
  const fetchPlans = async () => {
      try {
        const reqbody= {id:id}
        const res = await membershipApi.getPlanById(reqbody);
        console.log("Membership Plans Response:", res);
  
        if (res.status?.toLowerCase() === "success") {
    setPlans(res.data);
  }
  
      } catch (error) {
        console.log("Fetch membership error:", error);
      }
    };
  useEffect(() => {
      fetchPlans();
    }, [id]);
  // payment stripe link
  const handlePayment = async (plan) => {
    try {
      const payload = {
        planId: plan._id,
        
      };

      const res = await membershipApi.createMembershipPayment(payload);
      console.log("Membership payment res:", res);
      

      if (!res || res?.status?.toLowerCase() !== "success") {
        return toast.error(res?.message || "Payment failed ❌");
      }

      window.location.href = res.data;

    } catch (error) {
      console.log("Payment Error:", error);
      toast.error("Something went wrong ❌");
    }
  };

  // require login
  const requireLogin = (callback) => {
  const token = getTokenLocal();

  if (!token) {
    toast("Please login to continue.");
    window.location.href = "/login";
    return;
  }

  callback(); // user logged in → proceed
};


  return (
    <div className="min-h-screen bg-gray-50 px-4 md:px-10 lg:px-20 py-10">

      {/* Back Button */}
      <button
      onClick={() => router.push("/membership")}
      className="mt-4 md:mt-0 bg-green-600 hover:bg-green-700 text-white px-7 py-3 font-bold rounded-lg flex items-center gap-2 mb-5  transition cursor-pointer"
    >
      <ArrowLeft size={20} /> Back to Pricing Plans
    </button>

      {/* BANNER */}
      <div className="relative w-full h-[280px] md:h-[360px] lg:h-[420px] rounded-3xl overflow-hidden shadow">
        <Image
          src={Imgmembership.imgPassion1}
          alt="Platinum Membership"
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">
        
        {/* Title + Price */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b1441]">
               {plans[0]?.name}
            </h1>
            <p className="mt-2 text-green-600 font-semibold text-lg">
              Price:  £{plans[0]?.price} (One-time payment)
            </p>
          </div>

          
        </div>

        <hr className="my-6" />

        {/* Description */}
         <p> {htmlTostring(plans[0]?.description)}</p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Membership Benefits</h2>

        {/* BENEFITS LIST */}
        <div className="grid sm:grid-cols-2 gap-4">
          {
          //   [
          //   "Priority access to international match tickets",
          //   "Discounts on CLG merchandise",
          //   "Invitation to exclusive CLG annual meets",
          //   "Entry to junior members meets",
          //   "Access to private members-only online events",
          //   "Opportunity to meet cricket celebrities",
          //   "Subscription to premium newsletter",
          //   "Exclusive behind-the-scenes cricket content",
          // ]
          plans?.benefit.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="text-green-600 mt-1" size={22} />
              <p className="text-gray-700 leading-tight">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
  {/* <button
    onClick={() => handlePayment(plans[0])}
    className="
      bg-green-600 hover:bg-green-700 text-white 
      px-6 py-3 text-base      
      sm:px-10 sm:py-4 sm:text-lg  
      font-bold 
      rounded-xl shadow-lg 
      transition cursor-pointer
      w-[85%] sm:w-auto       
    "
  >
    Join Platinum Membership
  </button> */}
  <button
  onClick={() => requireLogin(() => handlePayment(plans[0]))}
  className="
    bg-green-600 hover:bg-green-700 text-white 
    px-6 py-3 text-base
    sm:px-10 sm:py-4 sm:text-lg  
    font-bold 
    rounded-xl shadow-lg 
    transition cursor-pointer
    w-[85%] sm:w-auto
  "
>
  Join Platinum Membership
</button>

</div>


      </div>
    </div>
  );
}
