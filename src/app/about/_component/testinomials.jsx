import Image from "next/image";
import React from "react";
import { profile } from "@/shared/images";


const Testimonial = () => {
  return (
    <section className="bg-[#f8faff] text-[#0d0d36] px-4 sm:px-6 md:px-12 lg:px-28 xl:px-60 py-12 sm:py-16 md:py-20">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide mb-10 sm:mb-14 md:mb-16">
        TESTIMONIALS
      </h2>

      {/* Testimonials Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 lg:gap-20 leading-relaxed text-justify">
        {/* Left Testimonial */}
        <div className="space-y-4">
          <p className="text-[#818994] text-sm sm:text-base font-extralight max-w-full">
            "Cricket lovers global is an awesome group of Cricket lovers across
            countries. I started going with their group of friends to the World
            cup 2019 in England and the experience was amazing. Everyone has a
            passion for cricket and they all are die-hard fans. We used to sit
            in groups and enjoy watching matches and have great discussions and
            celebrate wins and even take losses of the Indian Cricket team
            wholeheartedly. On the WhatsApp group, we do heated discussions
            about selections, IPL, why some players are not performing etc. The
            organisers of the group Piyush and Rahul are a great bunch of guys
            with infinite love for cricket. They make sure that tickets are
            available at the listed price or they try to arrange tickets for the
            match and if you happen to sit with them you are up for a treat with
            match chai and their welcoming nature. The group has bigger plans to
            get all Cricket lovers together."
          </p>
          <div className="mt-6 flex items-center gap-4 sm:gap-5">
            <Image
              src={profile.imgprofile1}
              alt="Pritam"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shadow-md "
            />
            <div>
              <p className="font-normalbold italic text-[#0d0d36] text-sm sm:text-base">
                Pritam
              </p>
            </div>
          </div>
        </div>

        {/* Right Testimonial */}
        <div className="space-y-4">
          <p className="text-[#818994] text-sm sm:text-base font-extralight max-w-full">
            “8000 km, 10 hours, 2 stops and a girl landed in the UK to see her
            dreams turning true. The itinerary had a spot for Nottingham, but
            the rain god had something else for her. The match was washed away
            but Cricket Lovers Global made sure the vibes were on and she had
            loads on her memory plate. Now she hopes to see the CLG ambassadors
            in T20 World Cup as well. The girl here is Supriya Katiyal proudly
            from Dhoni's town and working in Hyderabad with JP Morgan Chase.”
          </p>

          {/* Profile */}
          <div className="mt-6 flex items-center gap-4 sm:gap-5">
            <Image
              src={profile.imgprofile2}
              alt="Supriya"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shadow-md"
            />
            <div>
              <p className="font-normalbold italic text-[#0d0d36] text-sm sm:text-base">
                Supriya
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
