import Image from "next/image";

export default function Header() {
  return (
    <section className="mt-10 bg-[#fff7ee] text-gray-800">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/1.png"
            alt="logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="font-extrabold text-2xl">JUCIEE</span>
        </div>

        {/* Menu */}
        <ul className="flex gap-8 text-sm font-medium">
          <li className="hover:text-pink-600 cursor-pointer">Home</li>
          <li className="hover:text-pink-600 cursor-pointer">Menu</li>
          <li className="hover:text-pink-600 cursor-pointer">Features</li>
          <li className="hover:text-pink-600 cursor-pointer">Contact</li>
        </ul>

        {/* Sign Up Button */}
        <button className="border border-gray-700 px-4 py-1.5 rounded-lg hover:bg-gray-800 hover:text-white transition">
          Sign Up
        </button>
      </div>
    </section>
  );
}
