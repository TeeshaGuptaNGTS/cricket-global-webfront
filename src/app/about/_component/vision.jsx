import Image from "next/image";
import { Imgabout } from "@/shared/images";

const Vision = () => {
  return (
    <section className="bg-[#f5f7fc] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-14 lg:py-15 gap-10">
      {/* Left Content */}
      <div className="md:w-1/2 text-left mb-10 md:mb-0 ">
        <h2 className="text-[#0d0d36] text-4xl sm:text-7xl font-semibold mb-8 tracking-wide">
          OUR VISION
        </h2>
        <p className="text-[#8a929e] text-base sm:text-m leading-relaxed max-w-md">
          Cricket Lovers Global (CLG) is a dream venture by two cricket crazy
          friends <span className="font-semibold">Rahul Vyas</span> and{" "}
          <span className="font-semibold">Piyush Somaiya</span> to bring together
          like minded people who are equally passionate about the sport by
          providing them a platform to interact, debate and most importantly,
          watch cricket together across venues around the world.
        </p>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src={Imgabout.imgVision2}

          alt="Our Vision"
          className="w-full h-[450px] md:h-[520px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default Vision;
