import React from "react";
// import { videos } from "@/shared/images";
const videos = [
    "/assets/video1.mp4",
    "/assets/video1.mp4",
    "/assets/video1.mp4",
    "/assets/video1.mp4",
  ];

const Gallery2 = () => {
  

  return (
    <section className="bg-[#f4f4f4] py-10 px-4">
       <h2 className="text-3xl font-bold text-center text-[#001B5E] mb-10">
         Video Gallery
       </h2>

       <div className="flex flex-col items-center space-y-8">
         {videos.map((video, index) => (
         <video
             key={index}
             src={video}
             controls
            className="w-full max-w-5xl rounded-2xl shadow-lg"
         />
        ))}
      </div>
    </section>

//     <section className="bg-[#f4f4f4] py-10 px-4">
//   <h2 className="text-3xl font-bold text-center text-[#001B5E] mb-10">
//     Video Gallery
//   </h2>

//   <div className="flex flex-col items-center space-y-8">
//     {videos.map((video, index) => (
//       <video
//         key={index}
//         controls
//         className="w-full max-w-5xl rounded-2xl shadow-lg"
//       >
//         <source src={video} type="video/mp4" />
//       </video>
//     ))}
//   </div>
// </section>

  );
};

export default Gallery2;
