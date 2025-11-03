import React from "react";
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

const benefits = [
  { icon: <Ticket size={28} />, title: "Ticket Priority", desc: "Including international matches from the allocation received by Cricket Lovers Global" },
  { icon: <Shirt size={28} />, title: "CLG Merchandise", desc: "At a preferential rate" },
  { icon: <Tag size={28} />, title: "Discounts", desc: "Preferential rates on partner vendor products" },
  { icon: <Users size={28} />, title: "Annual Meetings", desc: "Entry to Cricket Lovers Global Annual Meet" },
  { icon: <Baby size={28} />, title: "Junior Meets", desc: "Entry to the Annual Junior Meets" },
  { icon: <KeyRound size={28} />, title: "Member Access", desc: "Dedicated CLG member area access on website" },
  { icon: <Camera size={28} />, title: "Experiences", desc: "Ability to participate in online/virtual events and watch matches in the company of fellow fans" },
  { icon: <Star size={28} />, title: "Up Close", desc: "Opportunity to meet your favourite cricket icons." },
  { icon: <Newspaper size={28} />, title: "Newsletter", desc: "Stay updated with the latest cricket news and announcements." },
  { icon: <Shirt size={28} />, title: "Member Content", desc: "Get access to premium member-only content, behind-the-scenes stories, and exclusive cricket insights." },
  { icon: <Users size={28} />, title: "Competition Entry", desc: "Participate in fun challenges, prediction contests, and exciting competitions to win amazing prizes." },
  { icon: <Plus size={28} />, title: "More to Come", desc: "We’re just getting started! Stay tuned for more exciting member benefits and upcoming features." },
];

const MembershipBenefit = () => {
  return (
    <section className="bg-[#f3f5f8] py-12 sm:py-14 md:py-16 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col gap-10 sm:gap-10">
      {/* Header */}
      <div className="text-center sm:text-left mb-6 sm:mb-10 max-w-3xl mx-auto sm:mx-0">
        <p className="text-[#4154f1] font-semibold uppercase tracking-wider text-base sm:text-lg md:text-xl">
          Membership Benefits
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#0b1441] mt-2">
          What you can expect when{" "}
          <br className="hidden md:block" />
          you join us
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 justify-items-center">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="bg-[#f3f5f8] shadow-sm rounded-2xl p-5 flex flex-col gap-3 border-4 border-gray-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out
            h-[240px] w-[270px]"
          >
            <div className="text-white bg-[#467ff6] p-2 w-fit rounded-xl">
              {item.icon}
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#0b1441]">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MembershipBenefit;
