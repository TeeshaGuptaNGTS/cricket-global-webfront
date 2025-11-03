import React from "react";
import Aboutpage from "./_component/aboutPage";

import Story from "./_component/story";
import Vision from "./_component/vision";
import Testimonial from "./_component/testinomials";
import Testimonialbanner from "./_component/testinomialsBanner";

export default function about() {
  return (
    <>
      <Aboutpage/>
      <Story/>
      <Vision/>
      <Testimonial/>
      <Testimonialbanner/>
    </>
  );
}
