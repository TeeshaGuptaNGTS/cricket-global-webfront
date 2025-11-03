import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import your slider images
import Image from "next/image";
import { Imgmembership } from "@/shared/images";

const Care2 = () => {
  // Custom arrows for the slider
  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white text-[#001B5E] p-3 rounded-full shadow-md z-10 transition cursor-pointer"
    >
      <ChevronRight size={22} />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-3 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white text-[#001B5E] p-3 rounded-full shadow-md z-10 transition cursor-pointer"
    >
      <ChevronLeft size={22} />
    </button>
  );

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="bg-[#f8faff] text-[#0d0d36] px-4 sm:px-6 md:px-16 lg:px-20 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center justify-between">
        {/* LEFT TEXT */}
        <div className="order-2 md:order-1 text-left space-y-6 px-2 md:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold uppercase leading-tight tracking-tight text-[#0d0d36]">
            Supporting<br />Under<br />
            Privilege / Refugee<br />
            Kids in the UK
          </h2>

          <p className="text-[#70757c] text-sm sm:text-base md:text-m leading-relaxed max-w-lg">
            We plan to provide year-round cricket training to underprivileged
            kids and kids belonging to refugee families within the UK in the
            coming months through our academy. This will also include providing
            cricket gear, shoes, etc. to them. We plan to organise fundraisers to
            support this cause in the near future.
          </p>

          <p className="text-[#70757c] text-sm sm:text-base md:text-m leading-relaxed max-w-lg">
            We hope to be able to help more and more children through this
            initiative and make cricket a medium of hope and joy for all.
          </p>
        </div>

        {/* RIGHT SLIDER */}
        <div className="order-1 md:order-2 relative w-full overflow-hidden rounded-lg shadow-lg hover:scale-110 transition-all duration-100">
          <Slider {...settings}>
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <Image
                  src={Imgmembership.imgPassion4}
                  alt={`CSR Initiative ${i}`}
                  className="w-full h-[250px] sm:h-[350px] md:h-[430px] lg:h-[500px] object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Care2;
