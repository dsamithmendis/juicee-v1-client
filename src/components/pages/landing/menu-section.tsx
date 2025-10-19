"use client";

import JuiceCard from "@/components/common/cards/juice-card";
import JuiceCardSkeleton from "@/components/common/skeletons/juice-card-skeleton";
import { useJuices } from "@/hooks/useJuice";

export default function MenuSection() {
  const { juices, loading } = useJuices();

  return (
    <section className="w-full mt-10">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10">
        Explore Best <br className="hidden md:block" />
        Menu Selections
      </h1>

      {loading ? (
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {Array.from({ length: 3 }).map((_, i) => (
            <JuiceCardSkeleton key={i} />
          ))}
        </div>
      ) : (
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
      )}
    </section>
  );
}
