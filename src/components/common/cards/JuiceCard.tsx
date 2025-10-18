import Image from "next/image";

interface JuiceCardProps {
  name: string;
  description: string;
  price: string;
  imageSrc: string;
}

const JuiceCard = ({ name, description, price, imageSrc }: JuiceCardProps) => (
  <div className="rounded-lg shadow-2xl p-8">
    <Image
      src={imageSrc}
      alt={name}
      width={1200}
      height={1200}
      className="w-full h-80 object-cover rounded-md mb-3"
    />
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="text-gray-600">{description}</p>
    <div className="mt-2 text-pink-600 font-bold">Rs. {price}/-</div>
  </div>
);

export default JuiceCard;
