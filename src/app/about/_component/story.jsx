"use client"
import Image from "next/image";
import React from "react";
import { Imgabout,imgVision1 } from "@/shared/images";

const Story = () => {
  return (
    <section className="bg-[#f5f7fc] flex flex-col gap-9 md:flex-row items-center justify-evenly px-6 md:px-16 lg:px-24 py-14 lg:py-15">
      {/* Left Image */}
      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <Image
          src={Imgabout.imgVision1}
          alt="Our Story"
          className="w-full h-[450px] md:h-[520px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Right Text */}
      <div className="md:w-1/2 text-left md:pl-12">
        <h2 className="text-[#0d0d36] text-4xl sm:text-7xl font-semibold mb-8 tracking-wide">
          OUR STORY
        </h2>

        <p className="text-[#777d87] text-base sm:text-m leading-relaxed mb-4">
          Do you want to know how Cricket Lovers Global (CLG) was formed? Read
          On…
        </p>

        <p className="text-[#777d87] text-base sm:text-m  leading-relaxed ">
          ‘Twas May 2019. The biggest carnival of Cricket, the World Cup was
          returning to its birthplace after a wait of 20 years. The preparations
          were in full swing – not only by the organisers and participating
          teams but also the fans. Cricket enthusiasts from all over the world
          were going to descend on British soil to not only support their teams
          but to be part of what would be a spectacular event at venues across
          England and Wales. While speculations about who would win and what
          players will perform the best were part of every cricket conversation,
          one question that dominated all of them, especially in the UK was{" "}
          <span className="italic">“Do you have tickets?”</span>
        </p>
      </div>
    </section>
  );
};

export default Story;
