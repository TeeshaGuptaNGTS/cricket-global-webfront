import React from "react";

const News = () => {
  return (
    <section className="bg-[#1c234b] text-white py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Section */}
        <div className="text-center lg:text-left space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug mb-2">
            JOIN CRICKET LOVERS{" "}
            <br className="hidden sm:block" /> GLOBAL NEWSLETTER
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-md sm:max-w-lg mx-auto lg:mx-0 px-2 sm:px-0">
            Become part of the incredible community and be among the first to
            know of events, offers and more.
          </p>
        </div>

        {/* Right Section */}
        <div className="bg-white text-[#1c234b] p-4 sm:p-6 rounded-md shadow-md w-full max-w-lg sm:max-w-xl mx-auto">
          {/* Email Input Box */}
          <div className="flex flex-col sm:flex-row items-stretch gap-2">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md px-3 py-2 flex-grow text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#c9cbdb] text-sm sm:text-base"
            />
            <button className="bg-[#1c234b] text-white font-semibold px-8 sm:px-10 md:px-14 lg:px-16 py-2.5 sm:py-3 rounded-md hover:opacity-90 hover:bg-amber-50 hover:text-blue-950 border-2 transition-all duration-200 cursor-pointer">
              SEND
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
