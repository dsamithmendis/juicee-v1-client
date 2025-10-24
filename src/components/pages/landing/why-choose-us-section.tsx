"use client";

import { useEffect, useState } from "react";
import FruitCard from "@/components/common/cards/fruit-card";
import FruitCardSkeleton from "@/components/common/skeletons/fruit-card-skeleton";
import { useFruits } from "@/hooks/useFruit";

export default function WhyChooseUsSection() {
  const { fruits, loading } = useFruits();
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if (!fruits || fruits.length <= 3) return;

    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % fruits.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [fruits]);

  if (loading) {
    return (
      <section className="w-full mt-10 flex justify-center gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className={`w-full md:w-2/7 ${i === 1 ? "md:relative md:mt-32" : ""}`}
          >
            <FruitCardSkeleton />
          </div>
        ))}
      </section>
    );
  }

  const totalFruits = fruits.length;
  const visibleFruits = [
    fruits[startIndex % totalFruits],
    fruits[(startIndex + 1) % totalFruits],
    fruits[(startIndex + 2) % totalFruits],
  ];

  return (
    <section className="w-full mt-10">
      <div className="flex flex-col md:flex-row justify-between items-start w-full gap-10 md:gap-6">
        <div className="w-full md:w-2/7">
          <p className="text-4xl text-gray-800 font-extrabold mb-3">
            Why you
            <br className="hidden md:block" /> should
            <br className="hidden md:block" /> choose us?
          </p>
          <p className="text-gray-600">
            Our commitment to excellence in the realm of juices sets us apart
            from the competition.
          </p>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap gap-6 w-full md:w-5/7 justify-center md:justify-end items-center transition-all duration-500">
          {visibleFruits.map((fruit, i) => (
            <div
              key={fruit._id}
              className={`w-full md:w-2/7 ${i === 1 ? "md:relative md:mt-32" : ""}`}
            >
              <FruitCard img={fruit.base64} name={fruit.title || fruit.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
