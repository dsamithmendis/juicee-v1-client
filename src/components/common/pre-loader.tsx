"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/../public/images/1.png";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gradient-to-b from-[#f7ede6] to-[#f0c4a5] transition-opacity duration-700 ${
        loading ? "opacity-100 z-50" : "opacity-0 -z-10"
      }`}
    >
      <div className="relative flex items-center justify-center">
        <div className="h-24 w-24 rounded-full border-2 border-gray-900 border-t-transparent animate-spin" />
        <div className="absolute rounded-full inset-0 flex items-center justify-center">
          <Image
            src={Logo}
            alt="Pre-Loader logo"
            className="h-12 w-12 object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
