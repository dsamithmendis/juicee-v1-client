import JuicePage from "@/components/common/cards/JuicePage";
import HeroImageCard from "@/components/common/cards/HeroImageCard";
import FruitCard from "@/components/common/cards/FruitCard";
import React from "react";

const HomePage = () => {
  const fruits = [
    { img: "/images/1.png", name: "Mango" },
    { img: "/images/1.png", name: "Blueberry" },
    { img: "/images/1.png", name: "Pistachio" },
  ];

  return (
    <div className="w-full text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row justify-between items-center px-10 lg:px-20 py-12">
        <div className="max-w-xl space-y-5">
          <h1 className="max-w-2xl text-5xl font-extrabold leading-tight text-gray-900">
            Revitalize Your Routing, <br />
            <span className="text-pink-600">Fresh, Fruity, Fantastic!</span>
          </h1>
          <p className="text-gray-600">
            Experience the perfect blend of sweetness & freshness in every drop.
            100% natural, no added sugar, pure fruity delight.
          </p>
          <div className="flex gap-4">
            <button className="bg-gray-900 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition">
              View Menu
            </button>
            <button className="border border-gray-700 px-5 py-2 rounded-md hover:bg-gray-800 hover:text-white transition">
              Discount
            </button>
          </div>
        </div>

        {/* Hero Image Card */}
        <div className="mt-10 lg:mt-0">
          <HeroImageCard src="/images/1.png" alt="Juice glass" />
        </div>
      </section>

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
