import JuicePage from "@/components/common/cards/JuicePage";
import FruitCard from "@/components/common/cards/FruitCard";
import React from "react";
import HeroSection from "@/components/pages/landing/hero-section";

const HomePage = () => {
  const fruits = [
    { img: "/images/1.png", name: "Mango" },
    { img: "/images/1.png", name: "Blueberry" },
    { img: "/images/1.png", name: "Pistachio" },
  ];

  return (
    <div className="w-full text-gray-800">
      <HeroSection />
      {/* Why Choose Us Section */}
      <section className="w-full px-10 lg:px-20 py-16">
        <div className="flex justify-between items-start w-full">
          {/* Left Group: Text */}
          <div className="flex-shrink-0 w-2/7">
            <h2 className="text-3xl font-bold mb-2">
              Why you should choose us?
            </h2>
            <p className="text-gray-600">
              Our commitment to excellence in the realm of juices sets us apart
              from the competition.
            </p>
          </div>

          {/* Right Group: Cards */}
          <div className="flex flex-wrap gap-4 justify-end w-5/7">
            {fruits.map((fruit, i) => (
              <div
                key={i}
                className={`w-2/7 ${i === 1 ? "relative mt-32" : ""}`}
              >
                <FruitCard img={fruit.img} name={fruit.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <JuicePage />
    </div>
  );
};

export default HomePage;
