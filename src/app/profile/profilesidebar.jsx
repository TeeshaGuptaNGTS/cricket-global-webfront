"use client";

import { User, Ticket, Settings, LogOut, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { logout } from "@/utils/common.util";
import { useState } from "react";

export default function ProfileSidebar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const menu = [
    { label: "Profile", icon: <User size={18} />, href: "/profile" },
    { label: "Membership plan", icon: <User size={18} />, href: "/profile/membership-history" },
    { label: "My Tickets", icon: <Ticket size={18} />, href: "/event-history" },
  ];

  return (
    <>
      {/* MOBILE TOP BAR WITH HAMBURGER */}
      <div className="md:hidden w-auto p-2 bg-white shadow md:h-fit">
        <button onClick={() => setOpen(true)}>
          <Menu size={18} className="text-gray-700" />
        </button>
      </div>

      {/* DESKTOP SIDEBAR */}
      <aside className="w-64 bg-white shadow-xl  hidden md:block max-h-full sticky top-0">
        <div className="p-6 ">
          <h1 className="text-xl font-bold text-gray-800">User Dashboard</h1>
        </div>

        <nav className="p-4 space-y-2">
          {menu.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#EEF2FF] 
              hover:text-[#3E63DD] transition text-gray-700 font-medium"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}

          <button
            onClick={() => logout(router)}
            className="flex items-center gap-3 p-3 rounded-xl text-red-500 hover:bg-red-50 transition"
          >
            <LogOut size={18} /> Logout
          </button>
        </nav>
      </aside>

      {/*  MOBILE SIDEBAR OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        ></div>
      )}

      {/* MOBILE SLIDE-IN SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 h-fit w-64 bg-white shadow-xl border-r z-50 
          transform transition-transform duration-300 md:hidden 
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-between p-4 border-b">
          <h1 className="text-xl font-bold text-gray-800">Menu</h1>
          <button onClick={() => setOpen(false)}>
            <X size={26} className="text-gray-700" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menu.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#EEF2FF] 
              hover:text-[#3E63DD] transition text-gray-700 font-medium"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}

          <button
            onClick={() => {
              setOpen(false);
              logout(router);
            }}
            className="flex items-center gap-3 mt-10 p-3 rounded-xl text-red-500 hover:bg-red-50 transition"
          >
            <LogOut size={18} /> Logout
          </button>
        </nav>
      </aside>
    </>
  );
}
