"use client";

import { homepage } from "@/shared/images";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Passion1 = () => {
  const scrollRef = useRef(null);

  //  Auto-scroll slides (smooth right → left loop)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;

    const autoSlide = () => {
      const cardWidth = container.firstChild?.offsetWidth || 1000;
      const gap = 16;

      scrollAmount += cardWidth + gap;

      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });

      const maxScrollLeft =
        container.scrollWidth - container.clientWidth - 5;

      //  Smooth reset when end reached
      if (scrollAmount >= maxScrollLeft) {
        setTimeout(() => {
          scrollAmount = 0;
          container.scrollTo({ left: 0, behavior: "smooth" });
        }, 1000);
      }
    };

    const interval = setInterval(autoSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  //  Manual arrows scroll
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  //  Fade + Scale Animation
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section className="bg-white text-center py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden mt-9">
      
      <h2 className="text-[#1a1a40] text-3xl sm:text-6xl font-bold mb-18 tracking-wide">
        PASSION BEYOND <br className="hidden sm:block" /> BOUNDARIES
      </h2>

      <div className="relative max-w-[1200px] mx-auto w-full">

        {/*  Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-md shadow-md 
                     p-3 rounded-full hover:bg-white z-10 hidden md:flex"
        >
          <FaChevronLeft className="text-[#1a1a40] text-xl" />
        </button>

        {/*  Slider Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
        >
          {homepage.map((img,index) => (
            <motion.div
              key={index}
              className="
                flex-shrink-0
                w-[92%]           
                sm:w-[48%]        
                lg:w-[32%]        
                rounded-xl
                overflow-hidden
                shadow-lg
                snap-center
              "
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Image
                src={img}
                alt={`CLG Member ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-[350px] sm:h-[380px] md:h-[420px] object-cover rounded-xl"
              />
            </motion.div>
          ))}
        </div>

        {/*  Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-md shadow-md
                     p-3 rounded-full hover:bg-white z-10 hidden md:flex"
        >
          <FaChevronRight className="text-[#1a1a40] text-xl" />
        </button>
      </div>
    </section>
  );
};

export default Passion1;
