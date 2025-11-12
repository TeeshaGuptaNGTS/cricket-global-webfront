"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { homepage1 } from "@/shared/images";
import { useRouter } from "next/navigation";


const Home = () => {
  //   const images = [Home1, Home2];
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % homepage1.length);
        setFade(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);


  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section
      className={`relative h-screen w-full flex flex-col items-center justify-center text-center text-white transition-all duration-1000 ${fade ? "opacity-100" : "opacity-100"
        }`}
      style={{
        backgroundImage: `url(${homepage1[currentImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center 75%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content with animation */}
      <motion.div
        className="relative z-10 px-6 mb-18"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-lg [letter-spacing:9px] text-[#d6d8d2] mb-4 font-extralight leading-6"
          variants={item}
        >
          WELCOME TO
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl mb-6 font-semibold"
          variants={item}
        >
          CRICKET LOVERS GLOBAL
        </motion.h1>

        <motion.p
          className="text-2xl font-extralight max-w-4xl mx-auto mb-8 text-[#d6d8d2]"
          variants={item}
        >
          An ever-growing community of cricket lovers across the globe who share
          a passion for the sport.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={item}
        >
          <button onClick={() => router.push("/signup")} className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full cursor-pointer">
            SIGN UP NOW
          </button>
          <button onClick={() => router.push("/about")} className="border-2 border-white hover:bg-white hover:text-black font-semibold px-8 py-3 rounded-full transition-all cursor-pointer">
            LEARN MORE
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
