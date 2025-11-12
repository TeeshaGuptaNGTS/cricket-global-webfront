"use client";
import React, { useRef, useEffect } from "react";
import {
  Newspaper,
  Shirt,
  Tag,
  Users,
  Baby,
  KeyRound,
  Ticket,
  Camera,
  Star,
  Plus,
} from "lucide-react";
import Image from "next/image";
import { Imgbenefit, Imgmembership ,} from "@/shared/images";

const blogs = [
  {
    icon: <Ticket size={28} />,
    title: "Ticket Priority",
    desc: "Including international matches from the allocation received by Cricket Lovers Global",
    img: Imgbenefit.imgBenefit4,
  },
  {
    icon: <Shirt size={28} />,
    title: "CLG Merchandise",
    desc: "At a preferential rate",
    img: Imgbenefit.imgBenefit36,
  },
  {
    icon: <Tag size={28} />,
    title: "Discounts",
    desc: "Preferential rates on partner vendor products",
    img: Imgbenefit.imgBenefit10,
  },
  {
    icon: <Users size={28} />,
    title: "Annual Meetings",
    desc: "Entry to Cricket Lovers Global Annual Meet",
    img: Imgbenefit.imgBenefit22,
  },
  {
    icon: <Baby size={28} />,
    title: "Junior Meets",
    desc: "Entry to the Annual Junior Meets",
    img: Imgbenefit.imgBenefit34,
  },
  
  {
    icon: <Camera size={28} />,
    title: "Experiences",
    desc: "Ability to participate in online/virtual events and watch matches in the company of fellow fans",
    img: Imgbenefit.imgBenefit12,
  },
  {
    icon: <Star size={28} />,
    title: "Up Close",
    desc: "Opportunity to meet your favourite cricket icons.",
    img: Imgbenefit.imgBenefit49,
  },
  {
    icon: <Newspaper size={28} />,
    title: "Newsletter",
    desc: "Stay updated with the latest cricket news and announcements.",
    img: Imgbenefit.imgBenefit24,
  },
  {
    icon: <KeyRound size={28} />,
    title: "Member Access",
    desc: "Dedicated CLG member area access on website",
    img: Imgbenefit.imgBenefit41,
  },
  {
    icon: <Shirt size={28} />,
    title: "Member Content",
    desc: "Get access to premium member-only content, behind-the-scenes stories, and exclusive cricket insights.",
    img: Imgbenefit.imgBenefit1,
  },
  {
    icon: <Users size={28} />,
    title: "Competition Entry",
    desc: "Participate in fun challenges, prediction contests, and exciting competitions to win amazing prizes.",
    img: Imgbenefit.imgBenefit6,
  },
  {
    icon: <Plus size={28} />,
    title: "More to Come",
    desc: "We’re just getting started! Stay tuned for more exciting member benefits and upcoming features.",
    img: Imgbenefit.imgBenefit8,
  },
];

const MembershipBenefit = () => {
  
  const scrollRef = useRef(null);

  //  Auto Slide Logic
  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (!container) return;

      scrollAmount += 320; // Card width + gap
      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });

      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }, 0.6);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section>
      {/* section slider  */}
      <section
        className="bg-white-50
 py-12 sm:py-14 md:py-16 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col gap-10 sm:gap-10"
      >
        {/* Header */}
        <div className="text-center sm:text-left mb-6 sm:mb-10 max-w-3xl mx-auto sm:mx-0">
          <p className="text-[#4154f1] font-semibold uppercase tracking-wider text-base sm:text-lg md:text-xl">
            Membership Benefits
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#0b1441] mt-2">
            What you can expect when <br className="hidden md:block" />
            you join us
          </h2>
        </div>
      </section>
      <section className="py-10 px-4 sm:px-8 md:px-16 lg:px-24">
  <div
  className="
    grid 
    grid-cols-2        /*  Mobile: 2 cards */
    sm:grid-cols-3      /*  Tablet: 3 cards */
    lg:grid-cols-4      /*  Desktop: 4 cards */
    gap-6
  "
>
  {blogs.map((item, idx) => (
    <div
      key={idx}
      className="
        bg-gradient-to-t from-[#e8ebf0] to-[#f3f5f8]
        rounded-3xl 
        border border-gray-300 
        shadow-sm 
        overflow-hidden 
        transition
        hover:shadow-lg
        p-3 sm:p-4 md:p-5   /*  Responsive padding */
      "
    >
      {/*  Icon Center Box */}
      <div className="h-[140px] sm:h-[150px] md:h-[160px] w-full flex items-center justify-center">
        <div className="
          rounded-full 
          
          bg-white
          shadow 
          flex items-center justify-center
          w-16 h-16         /*  Mobile size */
          sm:w-18 sm:h-18   /*  Tablet size */
          md:w-20 md:h-20   /*  Desktop size */
        ">
          {React.cloneElement(item.icon, { 
            size: 32,        //  Mobile icon
            className: "sm:size-40 md:size-48" 
          })}
        </div>
      </div>

      {/*  Text Content */}
      <div className="text-center px-2 mt-3">
        <h3 className="text-sm sm:text-base md:text-xl font-bold leading-snug">
          {item.title}
        </h3>

        <p className="text-[11px] sm:text-[13px] md:text-sm text-gray-500 mt-1">
          {item.desc}
        </p>
      </div>
    </div>
  ))}
</div>

</section>

    </section>
  );
};

export default MembershipBenefit;
