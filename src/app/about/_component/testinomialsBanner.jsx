import React from "react";
import { homepage1, Imageabout } from "@/shared/images";
const images = Imageabout;

const Testimonialbanner = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white flex flex-col items-center justify-center text-center px-6 py-16 md:py-24 h-[60vh] md:h-[85vh]"
      style={{
        // backgroundImage: `url("${homepage1.Home1.src}")`
        backgroundImage: `url(${images[0].src})`,
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#001B5E]/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl">
        
        <div className="text-9xl font-extrabold leading-tight">“</div>


        <h2 className="text-2xl sm:text-4xl md:text-6xl font-semibold uppercase leading-tight tracking-wider">
          CRICKET LOVERS GROUP<br />
          MAKE SURE TICKETS ARE<br />
          ONLY SOLD AT FACE VALUE<br />
          AND THEY HAVE A<br />
          WELCOMING NATURE.
        </h2>

        <p className="mt-6 text-sm md:text-base italic text-gray-200">
          Pritam - CLG Member
        </p>
      </div>
    </section>
  );
};

export default Testimonialbanner;
