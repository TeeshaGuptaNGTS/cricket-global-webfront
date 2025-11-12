"use client";
import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      
      {/* Popup Box */}
      <div className="bg-white w-[70%] max-h-[80%] rounded-xl shadow-lg p-6 overflow-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          ✖
        </button>

        {children}
      </div>

    </div>
  );
}
