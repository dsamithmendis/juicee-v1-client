import React from "react";
import HeroSection from "@/components/pages/landing/hero-section";
import WhyChooseUsSection from "@/components/pages/landing/why-choose-us-section";
import MenuSection from "@/components/pages/landing/menu-section";
import Preloader from "@/components/common/pre-loader";

export default function HomePage() {
  return (
    <div className="relative w-full text-gray-800">
      <Preloader />
      <HeroSection />
      <WhyChooseUsSection />
      <MenuSection />
    </div>
  );
}
