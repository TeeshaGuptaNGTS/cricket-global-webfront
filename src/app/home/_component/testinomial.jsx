import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";


import { profile ,imgprofile2,imgprofile1 } from "@/shared/images";



const Testinomials = () => {
  return (
    <section className="bg-[#f3f5f8] py-24 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-20">
        <h3 className="text-[#1A1A40] text-3xl sm:text-4xl font-semibold mb-3 tracking-[6px] uppercase">
          Loved By
        </h3>
        <h3 className="text-[#4eac55] text-5xl sm:text-7xl font-semibold tracking-tight uppercase">
          <CountUp start={0} end={500} duration={4} />+ Members
        </h3>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24 md:gap-40">
        {/* Left Testimonial */}
        <div className="flex flex-col items-start justify-between max-w-[500px] mx-auto text-left">
          <p className="text-[#8c8c93] text-[16px] leading-relaxed font-normal mb-8">
            “Cricket Lovers Global is an awesome group of cricket lovers across
            countries. I started going with their group of friends to the World
            Cup 2019 in England and the experience was absolutely amazing.”
          </p>

          <div className="flex items-center gap-3 mt-auto">
            <Image
              src={profile.imgprofile1}
              alt="Pritam"
              className="w-14 h-14 rounded-full object-cover"
            />
            <p className="italic font-medium text-[#1A1A40]">
              Pritam – CLG Member
            </p>
          </div>
        </div>

        {/* Right Testimonial */}
        <div className="flex flex-col items-start justify-between max-w-[500px] mx-auto text-left">
          <p className="text-[#8c8c93] text-[16px] leading-relaxed font-normal mb-8">
            “Cricket Lovers Global made sure the vibes were amazing at the
            matches, and I’ve made many fantastic memories. I’m very excited to
            see the CLG ambassadors in the T20 World Cup!”
          </p>

          <div className="flex items-center gap-3 mt-auto">
            <Image
              src={profile.imgprofile2}
              alt="Supriya"
              className="w-14 h-14 rounded-full object-cover"
            />
            <p className="italic font-medium text-[#1A1A40]">
              Supriya – CLG Member
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testinomials;
