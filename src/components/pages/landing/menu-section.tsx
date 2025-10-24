"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import JuiceCard from "@/components/common/cards/juice-card";
import JuiceCardSkeleton from "@/components/common/skeletons/juice-card-skeleton";
import { useJuices } from "@/hooks/useJuice";

interface Juice {
  _id: string;
  title: string;
  description: string;
  price: number;
  base64: string;
}

export default function MenuSection() {
  const { juices, loading } = useJuices();
  const slots = 3;
  const [visibleCards, setVisibleCards] = useState<Juice[]>([]);

  useEffect(() => {
    if (!loading && juices.length > 0) {
      setVisibleCards(juices.slice(0, slots));
    }
  }, [loading, juices]);

  useEffect(() => {
    if (!loading && juices.length > slots) {
      const interval = setInterval(() => {
        setVisibleCards((prev) => {
          const remaining = juices.filter(
            (j) => !prev.some((v) => v._id === j._id)
          );
          if (remaining.length === 0) return prev;

          const randomNew =
            remaining[Math.floor(Math.random() * remaining.length)];
          const randomSlot = Math.floor(Math.random() * slots);

          const updated = [...prev];
          updated[randomSlot] = randomNew;
          return updated;
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [loading, juices]);

  return (
    <section className="w-full mt-10">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10">
        Explore Best <br className="hidden md:block" /> Menu Selections
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {loading
          ? Array.from({ length: slots }).map((_, i) => (
              <JuiceCardSkeleton key={i} />
            ))
          : visibleCards.map((juice) => (
              <AnimatePresence key={juice._id}>
                <motion.div
                  key={juice._id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <JuiceCard
                    name={juice.title}
                    description={juice.description}
                    price={juice.price.toString()}
                    imageSrc={juice.base64}
                  />
                </motion.div>
              </AnimatePresence>
            ))}
      </div>
    </section>
  );
}
