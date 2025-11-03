import React from "react";

const Aboutpage = () => {
  return (
    <section className="bg-[#f5f7fc] text-[#1a1a40] py-8 px-6 md:px-16 lg:px-32 text-center">
      {/* Title */}
      <h2 className="text-[#0d0d36] text-3xl sm:text-6xl font-bold mb-2 tracking-widest leading-tight">
        WHAT IS CRICKET LOVERS <br className="hidden sm:block" /> GLOBAL?
      </h2>

      {/* Paragraphs */}
      <div className="max-w-5xl mx-auto space-y-6 text-[#556885] text-base font-light sm:text-[22px] leading-relaxed mt-8">
        <p>
          As the tag line <span className="italic">“Passion Beyond Boundaries”</span> suggests, it’s a place for everyone in love with
          the sport irrespective of the franchise or country you support.
        </p>

        <p>
          It’s nothing else but the passion that binds this community together.
          As part of CLG (Cricket Lovers Global), you are first a lover of the
          sport and then a follower of your franchise or country cricket team.
        </p>

        <p>
          We at Cricket Lovers Global take pride in equally supporting men and
          women cricket. In fact, promoting and creating awareness about women
          cricket is very close to our heart. We also encourage more and more
          youngsters to take up the sport. If you live and breathe cricket day
          in and day out, then you have landed at the right place. Check out our
          membership page (link) on how you can become a member of this
          ever-growing community.
        </p>
      </div>

      {/* Button */}
      <div className="mt-10">
        <button className="bg-green-600 hover:bg-white hover:text-green-400 hover:border-2 hover:border-green-400 text-white font-semibold px-10 py-3 rounded-full shadow-md transition-all duration-200">
          SIGN UP
        </button>
      </div>
    </section>
  );
};

export default Aboutpage
