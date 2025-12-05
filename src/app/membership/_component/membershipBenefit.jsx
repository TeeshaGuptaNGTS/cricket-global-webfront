"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { benfitIconImg } from "@/shared/images";

const blogs = [
  {
    title: "Ticket Priority",
  desc: "Including international matches from the allocation received by Cricket Lovers Global",
    img: benfitIconImg.benfitIcon7,
  },
  {
    title: "CLG Merchandise",
    desc: "At a preferential rate",
    img: benfitIconImg.benfitIcon8,
  },
  {
    title: "Discounts",
    desc: "Preferential rates on partner vendor products",
    img: benfitIconImg.benfitIcon10,
  },
  {
    title: "Annual Meetings",
    desc: "Entry to Cricket Lovers Global Annual Meet",
    img: benfitIconImg.benfitIcon3,
  },
  {
    title: "Junior Meets",
    desc: "Entry to the Annual Junior Meets",
    img: benfitIconImg.benfitIcon11,
  },
  {
    title: "Experiences",
    desc: "Ability to participate in online/virtual events and watch matches in the company of fellow fans",
    img: benfitIconImg.benfitIcon2,
  },
  {
    title: "Up Close",
    desc: "Opportunity to meet your favourite cricket icons.",
    img: benfitIconImg.benfitIcon4,
  },
  {
    title: "Newsletter",
    desc: "Stay updated with the latest cricket news and announcements.",
    img: benfitIconImg.benfitIcon5,
  },
  {
    title: "Member Access",
    desc: "Dedicated CLG member area access on website",
    img: benfitIconImg.benfitIcon13,
  },
  {
    title: "Member Content",
    desc: "Get access to premium member-only content, behind-the-scenes stories, and exclusive cricket insights.",
    img: benfitIconImg.benfitIcon1,
  },
  {
    title: "Competition Entry",
    desc: "Participate in fun challenges, prediction contests, and exciting competitions to win amazing prizes.",
    img: benfitIconImg.benfitIcon9,
  },
  {
    title: "More to Come",
    desc: "We’re just getting started! Stay tuned for more exciting member benefits and upcoming features.",
    img: benfitIconImg.benfitIcon12,
  },
];

const MembershipBenefit = () => {
  const scrollRef = useRef(null);

  // Auto Slide Logic
  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (!container) return;

      scrollAmount += 320;
      container.scrollTo({ left: scrollAmount, behavior: "smooth" });

      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }, 600);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      {/* Header Section */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col gap-10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#4154f1] font-semibold uppercase tracking-wider text-base sm:text-lg">
            Membership Benefits
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#0b1441] mt-2">
            What you can expect when <br className="hidden md:block" />
            you join us
          </h2>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-10 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

          {blogs.map((item, idx) => (
            <div
              key={idx}
              className="
                bg-gradient-to-t from-[#e8ebf0] to-[#f3f5f8]
                rounded-3xl border border-gray-300 shadow-sm p-3 sm:p-4 md:p-4
                transition hover:shadow-lg
              "
            >
              {/* IMAGE BOX */}
              <div className="h-[140px] sm:h-[150px] md:h-[160px] w-full flex items-center justify-center">
                <div
                  className="
                    rounded-2xl overflow-hidden shadow 
                    flex items-center justify-center
                    w-24 h-24 sm:w-28 sm:h-28 md:w-28 md:h-28
                  "
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* TEXT CONTENT */}
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
