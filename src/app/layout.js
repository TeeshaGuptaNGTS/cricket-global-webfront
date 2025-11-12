"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { usePathname } from "next/navigation";
import Footer from "./_layout/footer";
import Navbar from "./_layout/navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "@/redux/redux-store/store";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "CRICKET LOVERS GLOBAL",
//   description: "Your app description",
//   icons: {
//     icon: "/favicon.ico",   // or /favicon.png
//   },
// };



export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideNavFooter = pathname === "/login" || pathname === "/signup" || pathname==="/success" ;
  return (
    
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > {!hideNavFooter && <Navbar/>}
      <main>
     <Provider store={store}>{children}</Provider>
     <ToastContainer  position="top-right" autoClose={3000}></ToastContainer>
     </main>
       {!hideNavFooter && <Footer />}

       
      </body>
    </html>
  );
}

