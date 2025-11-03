"use client";
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { logoimg } from "@/shared/images";
import Image from "next/image";
import Link from "next/link";
import { getTokenLocal, getUserLocal } from "@/utils/localStorage.util";
import { logout } from "@/utils/common.util";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const userData = getUserLocal();
  const userToken = getTokenLocal();
  const router = useRouter();

  const handleLogout = () => {
    logout(router); // ✅ pass router.push as "history"
    setShowDropdown(false);
  };


  return (
    <nav className="bg-[#001B5E] text-white py-4 relative w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <Image
              src={logoimg.logoImg}
              alt="Cricket Lovers Global"
              className="h-16 w-32"
            />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex space-x-8 text-l font-normalbold">
          <Link href="/about" className="hover:text-green-400">
            ABOUT
          </Link>
          <Link href="/cares" className="hover:text-green-400">
            CLG CARES
          </Link>
          <Link href="/gallery" className="hover:text-green-400">
            GALLERY
          </Link>
          <Link href="/membership" className="hover:text-green-400">
            MEMBERSHIP
          </Link>
          <Link href="/events" className="hover:text-green-400">
            EVENTS
          </Link>
          <Link
            href="https://clgacademy.co.uk/"
            className="hover:text-green-400"
          >
            CLG ACADEMY
          </Link>
          <Link href="/contact" className="hover:text-green-400">
            CONTACT
          </Link>
        </div>

        {/* Auth Button / Dropdown */}
        {userToken && userData ? (
          <div className="relative hidden lg:block">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex flex-col items-end bg-green-50 border border-green-600 text-green-800 px-6 py-2 rounded-full focus:outline-none hover:bg-green-100 transition"
            >
              <div className="flex items-center gap-2">
                <div className="text-right">
                  <span className="text-sm font-medium block">
                    {userData.email}
                  </span>
                  <span className="text-base font-semibold">
                    {userData.firstName} {userData.lastName}
                  </span>
                </div>
                <ChevronDown
                  className={`transition-transform ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                  size={18}
                />
              </div>
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-green-600 rounded-lg shadow-lg text-[#001B5E]">
                <Link
                  href="/profile"
                  className="block px-4 py-2 hover:bg-green-50 hover:text-green-700"
                  onClick={() => setShowDropdown(false)}
                >
                  Profile
                </Link>
               
                <Link
                  href="/event-history"
                  className="block px-4 py-2 hover:bg-green-50 hover:text-green-700"
                  onClick={() => setShowDropdown(false)}
                >
                  Event History
                </Link>
                 <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-red-50 hover:text-red-700 border-t border-green-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            href="/login"
            className="hidden lg:block bg-green-600 hover:bg-[#001B5E] border border-transparent hover:border-green-600 hover:text-green-600 text-white font-semibold px-9 py-3 rounded-full"
          >
            LOGIN / SIGN UP
          </Link>
        )}

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#001B5E] text-center space-y-4 py-6">
          <Link href="/about" className="block hover:text-green-400" onClick={() => setIsOpen(false)}>
            ABOUT
          </Link>
          <Link href="/cares" className="block hover:text-green-400" onClick={() => setIsOpen(false)}>
            CLG CARES
          </Link>
          <Link href="/gallery" className="block hover:text-green-400" onClick={() => setIsOpen(false)}>
            GALLERY
          </Link>
          <Link href="/membership" className="block hover:text-green-400" onClick={() => setIsOpen(false)}>
            MEMBERSHIP
          </Link>
          <Link href="/events" className="block hover:text-green-400" onClick={() => setIsOpen(false)}>
            EVENTS
          </Link>
          <Link href="https://clgacademy.co.uk/" className="block hover:text-green-400" onClick={() => setIsOpen(false)}>
            CLG ACADEMY
          </Link>
          <Link href="/contact" className="block hover:text-green-400" onClick={() => setIsOpen(false)}>
            CONTACT
          </Link>

          {/* Mobile Auth Display */}
          {userToken && userData ? (
            <div className="flex flex-col items-center text-green-400 font-semibold py-3">
              <span className="text-sm">{userData.email}</span>
              <span className="text-base">
                {userData.firstName} {userData.lastName}
              </span>
              <div className="flex flex-col gap-1 mt-2">
                <Link href="/profile" className="text-sm hover:text-white" onClick={() => setIsOpen(false)}>
                  Profile
                </Link>
               
                <Link href="/event-history" className="text-sm hover:text-white" onClick={() => setIsOpen(false)}>
                  Event History
                </Link>
                 <Link  className="text-sm hover:text-white" onClick={() => setIsOpen(false)}>
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            <Link
              href="/login"
              className="block bg-green-600 hover:bg-[#001B5E] border border-transparent hover:border-green-600 hover:text-green-600 text-white font-semibold px-9 py-3 rounded-full mx-auto w-max cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              LOGIN / SIGN UP
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
