import React from "react";
import Image from "next/image";
import Link from "next/link";
import { homepage, logoimg } from "@/shared/images";


import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f5f8fb] text-[#00175f] font-sans">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 text-left md:text-left items-start">
        
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          {/* Logo */}
          <Image
            src={logoimg.logobase} // 🔹 replace with your image path
            alt="Cricket Lovers Global"
            className="w-40 mb-4"
          />
          {/* Tagline */}
          <p className="text-lg font-semibold tracking-wide">
            PASSION BEYOND BOUNDARIES.
          </p>
          {/* Social Icons */}
          <div className="flex gap-5 mt-8 text-[22px]">
            <a href="#" className="!text-[#00175f] hover:text-[#00175f]">
              <FaFacebookF />
            </a>
            <a href="#" className="!text-[#00175f] hover:text-[#00175f]">
              <FaInstagram />
            </a>
            <a href="#" className="!text-[#00175f] hover:text-[#00175f]">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="">
          <h3 className="text-[22px] font-bold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-[16px]">
            <li><a href="/clg-about" className="!text-[#031036] !no-underline hover:no-underline">About</a></li>
            <li><a href="/clg-gallery" className="!text-[#00175f] !no-underline hover:no-underline">Gallery</a></li>
            <li><a href="clg-membership" className="!text-[#041f71] !no-underline hover:no-underline">Memberships</a></li>
            <li><a href="clg-events" className="!text-[#00175f] !no-underline hover:no-underline">Events</a></li>
            <li><a href="clg-academy" className="!text-[#00175f] !no-underline hover:no-underline">CLG Academy</a></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-[22px] font-bold mb-2">Get In Touch</h3>
          <p className="text-[16px] mb-2">
            <a
              href="mailto:info@cricketloversglobal.com"
              className="!text-[#00175f] !no-underline hover:no-underline"
            >
              info@cricketloversglobal.com
            </a>
          </p>
          <p className="text-[16px]">
            <a href="/clg-contact" className="!text-[#00175f] !no-underline hover:no-underline">
              Contact us
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#1c2a4b] text-white text-center py-3 text-l">
        © 2025 All Rights Reserved.&nbsp;
        <span className="font-normalbold">Managed by - FRWD Studio</span>
      </div>
    </footer>
  );
};

export default Footer;