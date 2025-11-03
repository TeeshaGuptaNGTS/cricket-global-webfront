"use client";
import { usePathname } from "next/navigation";
import Script from "next/script";
import Footer from "./_layout/footer";
import Navbar from "./_layout/navbar";
import Home from "./home/_component/homepage";
import Main from "./home/page";
import MainMembership from "./membership/page";
import CaresPage from "./cares/page";
import About from "./about/page";
import Event from "./events/page";
import { Contactpage } from "./contact/page";
import { Loginpage } from "./login/page";
import { Signuppage } from "./signup/page";
import { Gallerypage } from "./gallery/page";

export default function Userwrapper({ children }) {
  const pathname = usePathname();
  const hideNavFooter = pathname === "/login" || pathname === "/signup";

  return (
    <>
      {/* <InternetStatus> */}
      {!hideNavFooter && <Navbar/>}
      {children}
      {/* <Main/>
      <MainMembership/>
      <CaresPage/>
      <About/>
      <Event/>
      <Contactpage/>
      <Loginpage/>
      <Signuppage/>
      <Gallerypage/> */}
      
      {!hideNavFooter && <Footer />}
      {/* </InternetStatus> */}
    </>
  );
}