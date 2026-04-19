"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const WhatsAppButton = () => {
  // Replace with your actual WhatsApp number
  const whatsappNumber = "+8801713428432"; 
  const message = "Hello ERP17, I would like to know more about your services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[9999] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all hover:scale-110 active:scale-95 group animate-bounce-slow"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip */}
      <span className="absolute right-full mr-4 px-3 py-1 bg-white text-gray-800 text-xs font-bold rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
        Chat with us
      </span>
      
      <FaWhatsapp className="w-8 h-8" />
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping"></span>
    </Link>
  );
};

export default WhatsAppButton;
