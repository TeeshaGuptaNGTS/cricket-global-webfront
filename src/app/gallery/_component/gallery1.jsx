"use client"
import React from "react";
import { motion } from "framer-motion";
import { gallery } from "@/shared/images";
import Image from "next/image";



const Gallery1 = () => {
  return (
    <section className="bg-[#e9e3dd] py-10 sm:py-14 md:py-19 px-3 sm:px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-14 md:mb-18">
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[70px] font-semibold text-[#0d0d36] uppercase -tracking-normal mb-6 sm:mb-8 md:mb-12">
          Cricket Lovers Global Gallery
        </h2>
        <p className="text-[#4b5563] mt-4 sm:mt-5 mb-6 sm:mb-8 md:mb-12 text-base sm:text-lg md:text-2xl tracking-tight leading-6 sm:leading-7 md:leading-8">
          Where we keep all our memories in the form of <br className="hidden md:block" />
          photos and videos from our amazing events.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 ">
        {gallery.map((img, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
              ease: "easeOut",
            }}
          >
            <Image
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-[120px] sm:h-[180px] md:h-[250px] lg:h-[350px] object-cover transform hover:scale-110 transition duration-500 ease-out"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery1;
