"use client";
import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      {/* Modal Box */}
      <div className="relative bg-white w-[70%] max-h-[80%] rounded-xl shadow-lg p-6 flex flex-col">

        {children}

      </div>

    </div>
  );
}
