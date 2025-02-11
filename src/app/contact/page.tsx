export default function Contact() {
    return (
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <input type="text" name="name" placeholder="Your Name" className="w-full p-3 border rounded mb-4" required />
          <input type="email" name="email" placeholder="Your Email" className="w-full p-3 border rounded mb-4" required />
          <textarea name="message" placeholder="Your Message" className="w-full p-3 border rounded mb-4" required />
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    );
  }
  