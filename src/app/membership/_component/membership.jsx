"use client";
import React, { useEffect, useState } from "react";
import { images } from "@/shared/images";

const Membership1 = () => {
  

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change background image every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative flex items-center justify-center text-center text-white h-[400px] transition-all duration-700 ease-in-out"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        // backgroundImage: `url(${homepage1[currentImage]})`,,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#00175f]/50"></div>
      <div className="relative z-10 px-4 max-w-3xl">
        <h1 className="!text-5xl md:text-5xl font-bold mb-4">
          Become A CLG Member<br></br> Today
        </h1>
        <p className="text-base md:text-lg leading-tight text-[#ced2d8]">
          Being a member of Cricket Lovers Global unlocks opportunities that
          every cricket lover around the globe craves for – watching matches
          together, cricket debates, interaction with cricketers and more.
        </p>
      </div>
    </div>
  );
};

export default Membership1;