import JuiceCard from "./JuiceCard";
import ContactForm from "./ContactForm";
import Sitemap from "./Sitemap";
import Image from "next/image";

const juices = [
  {
    name: "Red Dragon Fruit Juice",
    description: "Fresh Dragon fruit with a splash of ice.",
    price: "Rs.180/-",
    imageSrc: "/images/1.png",
  },
  {
    name: "Pine Apple Fruit Juice",
    description: "Creamy blend of ripe pine.",
    price: "Rs.120/-",
    imageSrc: "/images/1.png",
  },
  {
    name: "Avocado Juice",
    description: "Enriched with natural flavors for a healthy start.",
    price: "Rs.140/-",
    imageSrc: "/images/1.png",
  },
];

const JuicePage = () => (
  <div className="bg-gradient-to-br from-pink-100 to-pink-300 min-h-screen p-6">
    <h1 className="text-3xl font-bold text-center text-pink-700 mb-8">
      Explore Best Menu Selections
    </h1>

    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {juices.map((juice) => (
        <JuiceCard key={juice.name} {...juice} />
      ))}
    </div>

    <div className="grid md:grid-cols-2 gap-6 mb-12">
      <ContactForm />
      <div className="bg-pink-500 rounded-lg p-6">
        <Sitemap />
        <div className="mt-6 text-white">
          <p>📞 +491723490698</p>
          <p>📧 abc@gmail.com</p>
        </div>
        <Image
          src="/images/1.png"
          alt="Strawberry"
          className="w-16 mt-4"
          width={64}
          height={64}
        />
      </div>
    </div>

    <footer className="text-center text-gray-600 mt-8">
      © 2025 | All rights reserved
    </footer>
  </div>
);

export default JuicePage;
