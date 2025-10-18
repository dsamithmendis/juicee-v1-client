const ContactForm = () => (
  <form className="bg-white rounded-lg shadow-md p-6 space-y-4">
    <h2 className="text-2xl font-bold text-pink-600">Contact Us</h2>
    <input
      type="text"
      placeholder="Full Name"
      className="w-full p-2 border rounded"
    />
    <input
      type="email"
      placeholder="Your Email"
      className="w-full p-2 border rounded"
    />
    <textarea
      placeholder="Your Message"
      className="w-full p-2 border rounded h-24"
    />
    <button
      type="submit"
      className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
    >
      Submit
    </button>
  </form>
);

export default ContactForm;
