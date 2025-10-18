import JuiceCard from "@/components/common/cards/juice-card";

const juices = [
  {
    name: "Mango Fruit Juice",
    description: "Mango fruit with a splash of ice.",
    price: "180",
    imageSrc: "/images/2.png",
  },
  {
    name: "Apricot Fruit Juice",
    description: "Creamy blend of apricot.",
    price: "160",
    imageSrc: "/images/3.png",
  },
  {
    name: "Orange Fruit Juice",
    description: "Sweet and rich tropical flavor.",
    price: "150",
    imageSrc: "/images/4.png",
  },
];

export default function MenuSection() {
  return (
    <section className="w-full mt-10">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10">
        Explore Best <br className="hidden md:block" />
        Menu Selections
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {juices.map((juice) => (
          <JuiceCard key={juice.name} {...juice} />
        ))}
      </div>
    </section>
  );
}
