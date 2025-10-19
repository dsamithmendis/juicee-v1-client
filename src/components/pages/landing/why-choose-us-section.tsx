"use client";

import { useEffect, useState } from "react";
import FruitCard from "@/components/common/cards/fruit-card";

interface Fruit {
  _id: string;
  name: string;
  title: string;
  base64: string;
}

const WhyChooseUsSection = () => {
  const [fruits, setFruits] = useState<Fruit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFruits() {
      try {
        const res = await fetch("/api/fruit-cards");
        const data: Fruit[] = await res.json();
        setFruits(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchFruits();
  }, []);

  if (loading) return <p>Loading fruits...</p>;

  return (
    <section className="w-full mt-10">
      <div className="flex flex-col md:flex-row justify-between items-start w-full gap-10 md:gap-6">
        <div className="w-full md:w-2/7">
          <p className="text-4xl font-extrabold mb-3">
            Why you
            <br className="hidden md:block" /> should
            <br className="hidden md:block" /> choose us?
          </p>
          <p className="text-gray-600">
            Our commitment to excellence in the realm of juices sets us apart
            from the competition.
          </p>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap gap-6 w-full md:w-5/7 justify-center md:justify-end">
          {fruits.map((fruit, i) => (
            <div
              key={fruit._id}
              className={`w-full md:w-2/7 ${
                i === 1 ? "md:relative md:mt-32" : ""
              }`}
            >
              <FruitCard img={fruit.base64} name={fruit.title || fruit.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
