import FruitCard from "@/components/common/cards/fruit-card";

const WhyChooseUsSection = () => {
  const fruits = [
    { img: "/images/1.png", name: "Mango" },
    { img: "/images/1.png", name: "Blueberry" },
    { img: "/images/1.png", name: "Pistachio" },
  ];

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
              key={i}
              className={`w-full md:w-2/7 ${i === 1 ? "md:relative md:mt-32" : ""}`}
            >
              <FruitCard img={fruit.img} name={fruit.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
