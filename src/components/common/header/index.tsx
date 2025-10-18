"use client";

import Image from "next/image";
import { useState } from "react";
import { RiMenuLine } from "@remixicon/react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="mt-10 text-gray-800">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/1.png"
            alt="logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="font-extrabold text-2xl">JUICEE</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-md font-medium">
          <li className="hover:text-pink-600 cursor-pointer">Home</li>
          <li className="hover:text-pink-600 cursor-pointer">Menu</li>
          <li className="hover:text-pink-600 cursor-pointer">Features</li>
          <li className="hover:text-pink-600 cursor-pointer">Contact</li>
        </ul>

        {/* Desktop Sign Up */}
        <button className="hidden md:block border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition">
          Sign Up
        </button>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <RiMenuLine />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <ul className="flex flex-col mt-4 gap-4 md:hidden text-sm font-medium">
          <li className="hover:text-pink-600 cursor-pointer">Home</li>
          <li className="hover:text-pink-600 cursor-pointer">Menu</li>
          <li className="hover:text-pink-600 cursor-pointer">Features</li>
          <li className="hover:text-pink-600 cursor-pointer">Contact</li>
          <li>
            <button className="w-full text-left border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition">
              Sign Up
            </button>
          </li>
        </ul>
      )}
    </section>
  );
}
