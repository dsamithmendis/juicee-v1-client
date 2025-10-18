import ContactForm from "@/components/common/forms/contact-form";
import Image from "next/image";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from "@remixicon/react";
import Link from "next/link";

const Footer = () => (
  <section className="w-full mt-10">
    <div className="grid md:grid-cols-4 gap-6 mb-12">
      <div className="md:col-span-1">
        <ContactForm />
      </div>

      <div className="md:col-span-2">
        <div className="space-y-4 text-gray-800 items-center text-center">
          <h2 className="text-4xl font-extrabold">Sitemap</h2>
          <p className="text-gray-600">Easy Access</p>
          <ul className="space-y-4">
            {["About Us", "Services", "Blog"].map((item) => (
              <li key={item} className="hover:underline cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="md:col-span-1 flex flex-col items-center justify-start p-4">
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

          <div className="flex justify-center gap-4 mt-4">
            <Link
              href="#"
              className="hover:text-pink-600 transition-colors duration-300"
              aria-label="Instagram"
            >
              <RiInstagramFill size={28} />
            </Link>
            <Link
              href="#"
              className="hover:text-blue-600 transition-colors duration-300"
              aria-label="Facebook"
            >
              <RiFacebookCircleFill size={28} />
            </Link>
            <Link
              href="#"
              className="hover:text-gray-800 transition-colors duration-300"
              aria-label="Twitter"
            >
              <RiTwitterXFill size={28} />
            </Link>
            <Link
              href="#"
              className="hover:text-red-700 transition-colors duration-300"
              aria-label="Youtube"
            >
              <RiYoutubeFill size={28} />
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center text-gray-800 my-5">
      © 2025 | All rights reserved.
    </div>
  </section>
);

export default Footer;
