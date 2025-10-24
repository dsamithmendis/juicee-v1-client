const ContactForm = () => (
  <form className="space-y-4 text-gray-800">
    <h2 className="text-4xl font-extrabold">Contact Us</h2>
    <p className="text-gray-600">
      We would love to hear from you! Please fill out the form below.
    </p>
    <input
      type="text"
      placeholder="Full Name"
      className="w-full px-4 py-2 rounded-2xl bg-white"
    />
    <input
      type="email"
      placeholder="Your Email"
      className="w-full px-4 py-2 rounded-2xl bg-white"
    />
    <textarea
      placeholder="Your Message"
      className="w-full px-4 py-2 rounded-2xl h-24 bg-white"
    />
    <button
      type="submit"
      className="bg-pink-700 text-white w-full px-5 py-2 rounded-2xl hover:bg-pink-600"
    >
      Submit
    </button>
  </form>
);

export default ContactForm;
