import React from "react";
import { Imgmembership } from "@/shared/images";
import Image from "next/image";
const RibbonOffer = () => {
  return (
    <div className="flex justify-center items-start h-full bg-white px-4">
      <div className="flex items-center justify-between w-full max-w-6xl border !border-gray-900 rounded-lg bg-[#f9fbff] px-8 py-6 md:py-8 shadow-sm">
        {/* Left Section */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-2">
            <Image
              src={Imgmembership.imgRibbon}
              alt="Ribbon Logo"
              className="w-50 h-10 object-contain"
            />
          </div>

          <h3 className="text-[#1b2141] font-bold text-2xl">
            Free account via Ribbon
          </h3>

          <p className="text-[#324c72] text-lg">
            Free with Ribbon Global Multi-Currency Account
          </p>
        </div>

        <button className="bg-[#34a853] text-white font-bold text-sm md:text-base px-8 py-4 rounded-full shadow-md hover:bg-white hover:text-green-500 border-2 hover:px-16 transition-opacity duration-200 cursor-pointer">
          SIGN UP NOW (LIMITED OFFER)
        </button>
      </div>
    </div>
  );
};

export default RibbonOffer;
