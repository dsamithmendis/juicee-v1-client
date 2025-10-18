const Sitemap = () => (
  <div className="text-white">
    <h2 className="text-xl font-bold mb-2">Sitemap</h2>
    <ul className="space-y-1">
      {["Home", "About Us", "Services", "Blog", "Contact Us"].map((item) => (
        <li key={item} className="hover:underline cursor-pointer">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default Sitemap;
