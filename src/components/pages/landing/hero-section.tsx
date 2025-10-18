import HeroImageCard from "@/components/common/cards/HeroImageCard";

export default function HeroSection() {
  return (
    <section className="mt-10 flex flex-col lg:flex-row justify-between items-center">
      <div className="max-w-xl space-y-5">
        <h1 className="max-w-2xl text-5xl font-extrabold leading-tight text-gray-900">
          Revitalize Your Routing, <br />
          <span className="text-pink-600">Fresh, Fruity, Fantastic!</span>
        </h1>
        <p className="text-gray-600">
          Experience the perfect blend of sweetness & freshness in every drop.
          100% natural, no added sugar, pure fruity delight.
        </p>
        <div className="flex gap-4">
          <button className="bg-gray-900 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition">
            View Menu
          </button>
          <button className="border border-gray-700 px-5 py-2 rounded-md hover:bg-gray-800 hover:text-white transition">
            Discount
          </button>
        </div>
      </div>

      {/* Hero Image Card */}
      <div className="">
        <HeroImageCard src="/images/1.png" alt="Juice glass" />
      </div>
    </section>
  );
}
