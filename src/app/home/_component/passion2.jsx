"use client";

import React from "react";
import { homepageposter } from "@/shared/images";
import Image from "next/image";
import { useRouter } from "next/navigation";


const Passion2 = () => {
  const router = useRouter();
  const cards = [
  { Img: homepageposter[0], title: "Enjoy Cricket Matches Together" },
  { Img: homepageposter[1], title: "Interact With Cricket Enthusiasts Worldwide" },
  { Img: homepageposter[2], title: "Meet Cricket Icons" },
  { Img: homepageposter[3], title: "Join The Community" }, // reuse first image
];


  return (
    <section className="bg-white py-16 px-6 md:px-20 text-center">
      {/* Card Grid */}
      <div className="flex flex-wrap justify-center gap-10 md:gap-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-[250px] md:w-[260px]"
          >
            <Image
              src={card.Img}
              alt={card.title}
              className="w-full h-auto rounded-md shadow-sm hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-[#0A1446] text-lg md:text-xl font-bold mt-4 leading-snug">
              {card.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-12">
        <button onClick={() => router.push("/signup")} className="bg-[#00B140] text-white font-semibold px-10 py-3 rounded-full hover:bg-[#009c38] transition-all duration-300 cursor-pointer">
          SIGN UP TODAY
        </button>
      </div>
    </section>
  );
};

export default Passion2;
