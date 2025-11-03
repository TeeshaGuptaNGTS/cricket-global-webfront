import React from "react";
import { Imgmembership} from "@/shared/images";
import Image from "next/image";


const PricingPlan = () => {
  return (
    <div className="bg-white min-h-full flex flex-col items-center py-16 px-6">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-[#1b2141] mb-18 text-center">
        Pricing Plans
      </h1>

      {/* Card Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-30 max-w-7xl">
        {/* Left - Image */}
        <div className=" rounded-2xl overflow-hidden shadow-lg max-w-xl bg-green-100">
          <Image
            src={Imgmembership.imgPassion1} 
            alt="Membership Promo"
            className="w-full h-full object-cover  "
          />
        </div>

        {/* Right - Content */}
        <div className="max-w-lg">
          {/* Price */}
          <p className="text-blue-600 font-bold text-2xl mb-2 pt-6 gap-5">£250</p>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b2141] leading-snug mb-6">
            Platinum Lifetime <br /> Membership
          </h2>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            This membership is for individuals only. This offer is valid for a
            limited time and for a limited number of members. Memberships will
            be on a first-come, first-served basis.
          </p>

          {/* Button */}
          <button className="bg-green-600 text-white font-semibold text-lg px-5 py-3 !rounded-full shadow-md  hover:bg-white hover:text-green-500 border-2    transition-all duration-200
">
            GET STARTED
          </button>
        </div>
      </div>

      {/* reCAPTCHA box placeholder (bottom right corner) */}
      <div className="fixed bottom-5 right-5">
        <div className="w-[80px] h-[80px] bg-gray-100 border rounded-md shadow flex items-center justify-center text-xs text-gray-400">
          reCAPTCHA
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;