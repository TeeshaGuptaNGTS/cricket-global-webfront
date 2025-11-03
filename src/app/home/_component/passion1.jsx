"use client";

import { homepage } from "@/shared/images";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Passion1 = () => {
  const scrollRef = useRef(null);

  // Auto-scroll slides
  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;

      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScrollLeft - 5) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: container.clientWidth, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Manual scroll
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Animation
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

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 backdrop-blur-md shadow-md p-3 rounded-full hover:bg-white z-10 cursor-pointer hidden md:flex"
        >
          <FaChevronLeft className="text-[#1a1a40] text-xl" />
        </button>

        {/* Image Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-scroll scroll-smooth scrollbar-hide"
        >
          {homepage.map((img, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 
                w-full
                sm:w-[50%]
                lg:w-[33.33%]
                rounded-xl overflow-hidden shadow-md"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Image
                src={img}
                alt={`CLG Member ${index + 1}`}
                className="w-full h-[480px] sm:h-[350px] md:h-[450px] object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 backdrop-blur-md shadow-md p-3 rounded-full hover:bg-white z-10 cursor-pointer hidden md:flex"
        >
          <FaChevronRight className="text-[#1a1a40] text-xl" />
        </button>
      </div>
    </section>
  );
};

export default Passion1;
