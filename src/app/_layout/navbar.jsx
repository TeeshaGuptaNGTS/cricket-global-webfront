"use client";
import React, { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { logoimg } from "@/shared/images";
import Image from "next/image";
import Link from "next/link";
import {
  clearAuthLocal,
  getTokenLocal,
  getUserLocal,
} from "@/utils/localStorage.util";
import { logout } from "@/utils/common.util";
import { useRouter } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const userData = getUserLocal();
  const userToken = getTokenLocal();
  const router = useRouter();
  const [profileImage, setProfileImage] = useState(null);
  // ✅ PATCH 1 — Add profilePic
  const profilePic = userData?.avatarUrl || "/default-avatar.png";

  const handleLogout = () => {
    setShowDropdown(false);
    clearAuthLocal();
    logout(router);
  };
  useEffect(() => {
    setProfileImage(userData?.profileImage || null);
  }, []);
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
        {/* {userToken && userData ? (
          <div className="relative hidden lg:block">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex flex-col items-end bg-green-50 border border-green-600 text-green-800 px-6 py-2 rounded-full focus:outline-none hover:bg-green-100 transition"
            >
              <div className="flex items-center gap-2">

                
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    style={{
                      width: "10%",
                      height: "10%",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <FaUserCircle
                    size={100}
                    color="#ccc"
                    style={{ width: "20%", height: "20%" }}
                  />
                )}

                <div className="text-right">

                  <span className="text-base font-semibold">
                    {userData.firstName} {userData.lastName}
                  </span>
                </div>

                <ChevronDown
                  className={`transition-transform ${showDropdown ? "rotate-180" : ""
                    }`}
                  size={18}
                />
              </div>
            </button>

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
        )} */}
        {userToken && userData ? (
          <div className="relative  hidden lg:block">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center justify-between gap-3 bg-green-50 border border-green-600 text-green-800 px-4 py-2 rounded-full focus:outline-none hover:bg-green-100 transition w-full sm:w-auto"
            >
              {/* PROFILE IMAGE */}
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover border border-green-600"
                />
              ) : (
                <FaUserCircle className="text-green-600 w-10 h-10" />
              )}

              {/* USER NAME */}
              <div className="hidden sm:flex flex-col items-start">
                <span className="text-sm font-semibold truncate max-w-[100px]">
                  {userData.firstName} {userData.lastName}
                </span>
                <span className="text-sm font-semibold">
                  {" "}
                  {userData?.showMembership && (userData?.membershipNumber ?? "")}{" "}
                </span>
              </div>

              {/* DROPDOWN ICON */}
              <ChevronDown
                className={`transition-transform duration-200 ${
                  showDropdown ? "rotate-180" : ""
                }`}
                size={18}
              />
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-44 sm:w-48 p-1 bg-white border border-green-600 rounded-lg shadow-lg text-[#001B5E] z-50">
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
                <Link
                  href="/membership-history"
                  className="block px-4 py-2 hover:bg-green-50 hover:text-green-700"
                  onClick={() => setShowDropdown(false)}
                >
                  Membership-history
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
            className="bg-green-600 hover:bg-[#001B5E] hidden lg:block border border-transparent hover:border-green-600 hover:text-green-600 text-white font-semibold px-6 sm:px-9 py-2 sm:py-3 rounded-full transition"
          >
            LOGIN / SIGN UP
          </Link>
        )}

        <button
          className="lg:hidden focus:outline-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#001B5E] text-center space-y-4 py-6">
          <Link
            href="/about"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            href="/cares"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            CLG CARES
          </Link>
          <Link
            href="/gallery"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            GALLERY
          </Link>
          <Link
            href="/membership"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            MEMBERSHIP
          </Link>
          <Link
            href="/events"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            EVENTS
          </Link>
          <Link
            href="https://clgacademy.co.uk/"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            CLG ACADEMY
          </Link>
          <Link
            href="/contact"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </Link>

          {/* Mobile Auth Display */}
          {userToken && userData ? (
            <div className="flex flex-col items-center text-green-400 font-semibold py-3">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover border border-green-600 mb-3"
                />
              ) : (
                <FaUserCircle className="text-green-600 w-10 h-10" />
              )}

              <span className="text-sm">{userData.email}</span>
              <span className="text-base">
                {userData.firstName} {userData.lastName}
              </span>
              <span className="text-xs">
                {userData?.showMembership && userData?.membershipNumber}{" "}
              </span>

              <div className="flex flex-col gap-1 mt-2">
                <Link
                  href="/profile"
                  className="text-sm hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>

                <Link
                  href="/event-history"
                  className="text-sm hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Event History
                </Link>
                <Link
                  href="/membership-history"
                  className="text-sm hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Membership-history
                </Link>

                <button
                  className="text-sm hover:text-white "
                  onClick={handleLogout}
                >
                  Logout
                </button>
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
