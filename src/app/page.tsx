import JuicePage from "@/components/common/cards/JuicePage";
import HeroImageCard from "@/components/common/cards/HeroImageCard";
import FruitCard from "@/components/common/cards/FruitCard";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  const fruits = [
    { img: "/images/1.png", name: "Mango" },
    { img: "/images/1.png", name: "Blueberry" },
    { img: "/images/1.png", name: "Pistachio" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff7ee] to-[#fcdcc9] text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <div className="flex items-center gap-2">
          <Image src="/images/1.png" alt="logo" width={32} height={32} className="rounded-full" />
          <span className="font-bold text-lg">Fruity</span>
        </div>
        <ul className="flex gap-8 text-sm font-medium">
          <li className="hover:text-pink-600 cursor-pointer">Home</li>
          <li className="hover:text-pink-600 cursor-pointer">Menu</li>
          <li className="hover:text-pink-600 cursor-pointer">Features</li>
          <li className="hover:text-pink-600 cursor-pointer">Contact</li>
        </ul>
        <button className="border border-gray-700 px-4 py-1.5 rounded-lg hover:bg-gray-800 hover:text-white transition">
          Sign Up
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row justify-between items-center px-10 lg:px-20 py-12">
        <div className="max-w-xl space-y-5">
          <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
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
      <section className="px-10 lg:px-20 py-16">
        <h2 className="text-3xl font-bold mb-4">Why you should choose us?</h2>
        <p className="max-w-md text-gray-600 mb-10">
          Our commitment to excellence in the realm of juices sets us apart from
          the competition.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {fruits.map((fruit, i) => (
            <FruitCard key={i} img={fruit.img} name={fruit.name} />
          ))}
        </div>
      </section>

      <JuicePage />
    </div>
  );
};

export default HomePage;
