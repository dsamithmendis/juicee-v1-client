import Image from "next/image";

interface JuiceCardProps {
  name: string;
  description: string;
  price: string;
  imageSrc: string;
}

const JuiceCard = ({ name, description, price, imageSrc }: JuiceCardProps) => (
  <div className="relative rounded-2xl p-4 lg:p-8 shadow-2xl hover:shadow-md transition overflow-hidden bg-gradient-to-t from-[#f7ede6] to-[#f0c4a5] group">
    {/* Image */}
    <Image
      src={imageSrc}
      alt={name}
      width={1200}
      height={1200}
      className="h-80 w-full object-cover rounded-2xl"
    />

    {/* Card content */}
    <div className="mt-3">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-2 text-pink-600 font-bold">Rs. {price}/-</div>
    </div>

    {/* Overlay on hover */}
    <div className="absolute inset-0 bg-black/50 flex flex-row items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
      <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition">
        Buy
      </button>
      <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition">
        Details
      </button>
    </div>
  </div>
);

export default JuiceCard;
