import Image from "next/image";

interface JuiceCardProps {
  name: string;
  description: string;
  price: string;
  imageSrc: string;
}

const JuiceCard = ({ name, description, price, imageSrc }: JuiceCardProps) => (
  <div className="rounded-lg shadow-md p-4 text-center">
    <Image
      src={imageSrc}
      alt={name}
      width={64}
      height={64}
      className="w-full h-40 object-cover rounded-md mb-3"
    />
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="text-gray-600">{description}</p>
    <div className="mt-2 text-pink-600 font-bold">{price}</div>
    <button className="mt-2 text-gray-400 hover:text-pink-500">❤️</button>
  </div>
);

export default JuiceCard;
