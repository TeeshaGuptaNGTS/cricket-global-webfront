"use client";
import React from "react";
import Slider from "react-slick";
import { Imgmembership} from "@/shared/images";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";



const Care1 = () => {
  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white text-[#001B5E] p-2 sm:p-3 rounded-full shadow-md z-10 transition cursor-pointer"
    >
      <ChevronRight size={20} sm={24} />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white text-[#001B5E] p-2 sm:p-3 rounded-full shadow-md z-10 transition cursor-pointer"
    >
      <ChevronLeft size={20} sm={24} />
    </button>
  );

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    vertical: false,
  verticalSwiping: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="bg-[#f8faff] text-[#0d0d36] px-4 sm:px-6 md:px-16 lg:px-16 py-10">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold tracking-wider mb-9">
        CLG CARES - OUR CSR INITIATIVES
      </h2>

      {/* Paragraph */}
      <div className="max-w-5xl mx-auto text-center text-[#70757c] leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl mb-8 md:mb-12">
        <p>
          At CLG Academy, our passion for the game does not stop at just
          developing cricketers of the future. We equally recognise our social
          responsibility. Our Corporate Social Responsibility (CSR) initiatives
          reflect our dedication towards creating a positive impact in the
          community and our inclusive approach.
        </p>
        <p className="mt-4">
          While we aspire to help millions of kids through cricket, we have made
          humble beginnings in this direction in the following ways:
        </p>
      </div>

      {/* Image + Text Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
        {/* Image Slider */}
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg mx-auto ">
          <Slider {...settings}>
            {[Imgmembership.imgPassion1, Imgmembership.imgPassion4].map((img, idx) => (
              <div key={idx}>
                <Image
                  src={img}
                  width={800}
  height={500}
                  alt={`CSR Activity ${idx + 1}`}
                  className="w-full h-[180px] sm:h-[250px] md:h-[400px] lg:h-[500px] object-cover rounded-lg hover:scale-130 transition-all duration-100"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Text */}
        <div className="text-left mt-4 md:mt-0 px-2 md:px-0">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold uppercase leading-tight text-[#0d0d36] mb-4">
            Supporting kids<br />at an<br />orphanage in<br />India
          </h3>
          <p className="text-[#70757c] text-sm sm:text-base md:text-md lg:text-lg leading-relaxed max-w-xl">
            During a recent academy tour to India, we spent a whole day at an
            Orphanage in Mumbai playing cricket and football with the inmates
            and shared a meal with them. We provided a personalised t-shirt to
            all 150 children at the Orphanage and also ordered their favourite
            McDonalds meal which we all ate together in their dining hall.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Care1;
