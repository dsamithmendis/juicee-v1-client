import Image from "next/image";

interface JuiceCardProps {
  name: string;
  description: string;
  price: string;
  imageSrc: string;
}

const JuiceCard = ({ name, description, price, imageSrc }: JuiceCardProps) => (
  <div className="rounded-2xl p-4 lg:p-8 shadow-2xl hover:shadow-md transition overflow-hidden bg-gradient-to-t from-[#f7ede6] to-[#f0c4a5]">
    <Image
      src={imageSrc}
      alt={name}
      width={1200}
      height={1200}
      className="h-80 object-cover"
    />
    <h3 className="mt-3 text-xl font-semibold">{name}</h3>
    <p className="text-gray-600">{description}</p>
    <div className="mt-2 text-pink-600 font-bold">Rs. {price}/-</div>
  </div>
);

export default JuiceCard;
