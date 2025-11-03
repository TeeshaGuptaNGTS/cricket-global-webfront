import React from "react";
import { Imgmembership} from "@/shared/images";
import Image from "next/image";

const SoloMembership = () => {
  return (
    <div className="bg-[#f7f9fc] h-full flex flex-col justify-center px-6 md:px-20 lg:px-32 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Section */}
        <div className="max-w-xl">
          {/* Price */}
          <p className="text-[#2e5ae0] font-bold text-lg mb-2">£10 / YEAR</p>

          {/* Title */}
          <h1 className="text-[#1b2141] font-bold !text-4xl mb-6">Solo Membership</h1>

          {/* Description */}
          <p className="text-[#324c72] text-[16px] leading-relaxed mb-8">
            The above ‘Get Started’ link will redirect to Stripe where payment is<br></br>
            to be made. If the page is exited, payment will not be made and the<br></br>
            sign-up membership will not be processed.
          </p>

          {/* Button */}
          <button className="bg-[#34a853] text-white font-bold text-lg px-8 py-3 rounded-full shadow-md hover:bg-white hover:text-green-500 border-2    transition-opacity duration-200">
            GET STARTED
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="rounded-2xl overflow-hidden shadow-md max-w-xl">
          <Image
            src={Imgmembership.imgPassion1} // replace with your actual image path
            alt="Solo Membership"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* reCAPTCHA placeholder (bottom-right corner) */}
      <div className="fixed bottom-5 right-5">
        <div className="w-[80px] h-[80px] bg-gray-100 border rounded-md shadow flex items-center justify-center text-xs text-gray-400">
          reCAPTCHA
        </div>
      </div>
    </div>
  );
};

export default SoloMembership;