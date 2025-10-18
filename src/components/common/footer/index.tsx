import JuiceCard from "@/components/common/cards/juice-card";
import ContactForm from "@/components/common/forms/contact-form";
import Image from "next/image";

const juices = [
  {
    name: "Red Dragon Fruit Juice",
    description: "Fresh Dragon fruit with a splash of ice.",
    price: "180",
    imageSrc: "/images/1.png",
  },
  {
    name: "Pine Apple Fruit Juice",
    description: "Creamy blend of ripe pine.",
    price: "120",
    imageSrc: "/images/1.png",
  },
  {
    name: "Avocado Juice",
    description: "Enriched with natural flavors for a healthy start.",
    price: "140",
    imageSrc: "/images/1.png",
  },
];

const Footer = () => (
  <section className="mt-10 min-h-screen">
    <h1 className="text-4xl font-extrabold text-gray-800 mb-10">
      Explore Best <br className="hidden md:block" />
      Menu Selections
    </h1>

    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {juices.map((juice) => (
        <JuiceCard key={juice.name} {...juice} />
      ))}
    </div>

    <div className="grid md:grid-cols-4 gap-6 mb-12">
      <div className="col-span-1">
        <ContactForm />
      </div>

      <div className="col-span-2">
        <div className="space-y-4 text-gray-800 items-center text-center">
          <h2 className="text-4xl font-extrabold">Sitemap</h2>
          <p className="text-gray-600">Easy Access</p>
          <ul className="space-y-4">
            {["About Us", "Services", "Blog"].map(
              (item) => (
                <li key={item} className="hover:underline cursor-pointer">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      <div className="col-span-1 flex flex-col items-center justify-start p-4">
        <Image
          src="/images/1.png"
          alt="Strawberry"
          className="w-full h-auto rounded-md"
          width={1200}
          height={1200}
        />
        <div className="mt-4 text-gray-800 text-center space-y-4">
          <p>📞 +123 456 789 000</p>
          <p>📧 email@email.me</p>
        </div>
      </div>
    </div>
    <div className="text-center text-gray-800 my-5">
      © 2025 | All rights reserved.
    </div>
  </section>
);

export default Footer;
