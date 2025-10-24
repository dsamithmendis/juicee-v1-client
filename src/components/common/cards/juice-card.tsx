import Image from "next/image";

interface JuiceCardProps {
  name: string;
  description: string;
  price: string;
  imageSrc: string;
}

const JuiceCard = ({ name, description, price, imageSrc }: JuiceCardProps) => (
  <div className="relative rounded-2xl p-4 lg:p-8 shadow-2xl hover:shadow-md transition overflow-hidden bg-gradient-to-t from-[#f7ede6] to-[#f0c4a5] group">
    <Image
      src={imageSrc}
      alt={name}
      width={720}
      height={540}
      className="h-80 w-full object-cover rounded-2xl"
    />

    <div className="mt-3">
      <h3 className="text-xl line-clamp-1 font-semibold">{name}</h3>
      <p className="text-gray-600 line-clamp-1">{description}</p>
      <div className="mt-2 text-pink-600 font-bold line-clamp-1">
        LKR. {price}/-
      </div>
    </div>

    <div className="absolute inset-0 bg-black/30 flex flex-row items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
      <button className="cursor-pointer hover:bg-[#FFBD43] transition px-6 py-2 bg-[#FFBD43]/80 text-white rounded-full shadow-lg">
        Buy
      </button>
      <button className="cursor-pointer hover:bg-[#FFBD43] transition px-6 py-2 bg-[#FFBD43]/80 text-white rounded-full shadow-lg">
        Details
      </button>
    </div>
  </div>
);

export default JuiceCard;
