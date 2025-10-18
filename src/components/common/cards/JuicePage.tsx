import JuiceCard from "./JuiceCard";
import ContactForm from "./contact-form";
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
  <div className="min-h-screen">
    <h1 className="text-3xl font-bold text-center text-pink-700 mb-8">
      Explore Best Menu Selections
    </h1>

    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {juices.map((juice) => (
        <JuiceCard key={juice.name} {...juice} />
      ))}
    </div>

    <div className="grid md:grid-cols-4 gap-6 mb-12">
      {/* Left Column: Contact Form */}
      <div className="col-span-1">
        <ContactForm />
      </div>

      {/* Middle Column: Sitemap */}
      <div className="col-span-2">
        <Sitemap />
      </div>

      {/* Right Column: Image + Contact Info */}
      <div className="col-span-1 flex flex-col items-center justify-start p-4">
        <Image
          src="/images/1.png"
          alt="Strawberry"
          className="w-full h-auto rounded-md"
          width={1200}
          height={1200}
        />
        <div className="mt-4 text-gray-800 text-center space-y-4">
          <p>📞 +491723490698</p>
          <p>📧 abc@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
);

export default JuicePage;
