"use client";

import { useEffect, useState } from "react";
import JuiceCard from "@/components/common/cards/juice-card";

interface Juice {
  _id: string;
  name: string;
  title: string;
  description: string;
  price: number;
  base64: string;
}

export default function MenuSection() {
  const [juices, setJuices] = useState<Juice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJuices() {
      try {
        const res = await fetch("/api/juice-cards");
        const data: Juice[] = await res.json();
        setJuices(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchJuices();
  }, []);

  if (loading) return <p>Loading menu...</p>;

  return (
    <section className="w-full mt-10">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10">
        Explore Best <br className="hidden md:block" />
        Menu Selections
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {juices.map((juice) => (
          <JuiceCard
            key={juice._id}
            name={juice.title}
            description={juice.description}
            price={juice.price.toString()}
            imageSrc={juice.base64}
          />
        ))}
      </div>
    </section>
  );
}
