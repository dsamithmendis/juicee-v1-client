import React from "react";
import HeroSection from "@/components/pages/landing/hero-section";
import WhyChooseUsSection from "@/components/pages/landing/why-choose-us-section";

export default function HomePage () {
  
  return (
    <div className="w-full text-gray-800">
      <HeroSection />
      <WhyChooseUsSection />
    </div>
  );
};

