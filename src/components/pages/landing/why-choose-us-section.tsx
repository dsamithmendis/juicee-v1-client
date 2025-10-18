import FruitCard from "@/components/common/cards/FruitCard";

const WhyChooseUsSection = () => {
  const fruits = [
    { img: "/images/1.png", name: "Mango" },
    { img: "/images/1.png", name: "Blueberry" },
    { img: "/images/1.png", name: "Pistachio" },
  ];

  return (
    <section className="w-full mt-10">
      <div className="flex justify-between items-start w-full">
        {/* Left Group: Text */}
        <div className="flex-shrink-0 w-2/7">
          <p className="text-4xl font-extrabold mb-2">
            Why you
            <br className="hidden md:block" /> should{" "}
            <br className="hidden md:block" />
            choose us?
          </p>
          <p className="text-gray-600">
            Our commitment to excellence in the realm of juices sets us apart
            from the competition.
          </p>
        </div>

        {/* Right Group: Cards */}
        <div className="flex flex-wrap gap-4 justify-end w-5/7">
          {fruits.map((fruit, i) => (
            <div key={i} className={`w-2/7 ${i === 1 ? "relative mt-32" : ""}`}>
              <FruitCard img={fruit.img} name={fruit.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUsSection;
