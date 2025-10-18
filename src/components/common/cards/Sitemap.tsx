const Sitemap = () => (
  <div className="space-y-4 text-gray-800 items-center text-center">
    <h2 className="text-4xl font-extrabold">Sitemap</h2>
    <p className="text-gray-600">
      Easy Access
    </p>
    <ul className="space-y-4">
      {["Home", "About Us", "Services", "Blog", "Contact Us"].map((item) => (
        <li key={item} className="hover:underline cursor-pointer">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default Sitemap;
