"use client";
import { usePathname } from "next/navigation";
import Script from "next/script";
import Footer from "./_layout/footer";
import Navbar from "./_layout/navbar";
import  Loginpage  from "./login/page";
import  Signuppage  from "./signup/page";
import PaymentSuccess from "./payment-success/_component/successpage";

export default function Userwrapper({ children }) {
  const pathname = usePathname();
  const hideNavFooter = pathname === "/login" || pathname === "/signup"|| pathname==="/success";

  return (
    <>
      {/* <InternetStatus> */}
      {!hideNavFooter && <Navbar/>}
      {children}
      {!hideNavFooter && <Footer />}
      {/* </InternetStatus> */}
    </>
  );
}