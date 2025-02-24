"use client";

import { motion } from "framer-motion";
import { FaTelegramPlane, FaWhatsapp, FaEnvelope, FaLinkedin, FaTwitter, FaFacebookF, FaTiktok, FaInstagram, FaCheckCircle } from "react-icons/fa";
import { Phone, Clock, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setMessage("Please enter your email.");
      setIsError(true);
      showMessage();
    } else if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      setIsError(true);
      showMessage();
    } else {
      setMessage("Thank you for subscribing!");
      setIsError(false);
      showMessage();
      setEmail("");
    }
  };

  const showMessage = () => {
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <>
      {/* Contact Section */}
      <div className="pt-24 bg-white min-h-screen flex justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl w-full flex flex-col gap-12"
        >
          {/* Form Section */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="space-y-10 max-w-3xl mx-auto">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">
                  Let&apos;s Talk About Your Idea
                </h2>
                <div className="h-1 w-24 bg-orange-600 mx-auto rounded-full" />
              </div>

              <motion.form
                action="https://formspree.io/f/xbldapkb"
                method="POST"
                className="space-y-8"
                onSubmit={() => setIsSubmitted(true)}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div whileHover={{ y: -2 }}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      className="w-full px-6 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none text-black"
                      required
                    />
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }}>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full px-6 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none text-black"
                    />
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      className="w-full px-6 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none text-black"
                      required
                    />
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }}>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject *"
                      className="w-full px-6 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none text-black"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div whileHover={{ y: -2 }}>
                  <textarea
                    name="message"
                    placeholder="Your Message *"
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none h-48 text-black"
                    required
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-orange-600 text-white py-4 rounded-xl font-medium tracking-wide shadow-lg hover:bg-orange-700 transition-colors focus:outline-none"
                >
                  <Send className="inline-block mr-2" /> Send Message
                </motion.button>
              </motion.form>
            </div>
          </motion.div>

          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-white text-black border border-orange-500 px-6 py-3 rounded-lg shadow-lg flex items-center gap-2"
            >
              <FaCheckCircle className="text-green-500" />
              Thank you! Your message has been sent successfully.
            </motion.div>
          )}

          {/* Contact Details Section */}
          <motion.div
            className="bg-gray-50 p-8 rounded-2xl shadow-xl border border-gray-100 mb-20"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="max-w-3xl mx-auto space-y-10">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">Contact Details</h2>
                <div className="h-1 w-24 bg-orange-600 mx-auto rounded-full" />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <FaEnvelope className="text-orange-600 mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                      <a href="mailto:info@everaglobal.com" className="text-gray-600 hover:text-orange-600 transition-colors">
                        info@everaglobal.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="text-orange-600 mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                      <a href="tel:+16823869056" className="text-gray-600 hover:text-orange-600 transition-colors">
                        +1 (682) 386-9056
                      </a>
                      <br />
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="text-orange-600 mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Office Hours</h3>
                      <p className="text-gray-600">Mon-Sat: 9AM - 6PM</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-orange-600 mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">U.S. Office</h3>
                      <p className="text-gray-600">Dallas, TX 75081</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="text-orange-600 mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Ethiopia Office</h3>
                      <p className="text-gray-600">
                        Jax Building, 8th Floor<br />
                        Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 mt-8">
                    <a href="https://wa.me/message/THTFYOOD7AVSK1" className="text-gray-600 hover:text-orange-600 transition-colors">
                      <FaWhatsapp size={28} />
                    </a>
                    <a href="https://t.me/everaglobal" className="text-gray-600 hover:text-orange-600 transition-colors">
                      <FaTelegramPlane size={28} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Newsletter Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-20 bg-white border-t border-gray-100"
      >
        <div className="max-w-2xl mx-auto text-center px-4">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-4xl font-bold text-gray-900">Stay Ahead with Insights</h3>
              <div className="h-1 w-24 bg-orange-600 mx-auto rounded-full" />
            </div>
            <p className="text-gray-600 text-lg">
              Get exclusive access to industry trends and transformation strategies
            </p>

            <form onSubmit={handleSubscribe} className="mt-8">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <input
                  type="email"
                  placeholder="Enter professional email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full md:w-96 px-6 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none text-black"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-700 transition-colors focus:outline-none flex items-center gap-2"
                >
                  <Send size={18} />
                  Subscribe
                </motion.button>
              </div>
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-3 rounded-full text-sm ${
                    isError ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                  }`}
                >
                  {message}
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-white text-gray-600 text-center py-8">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-gray-600 transition-colors">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.instagram.com/everaglobal?igsh=dGIxMzNmbmJkYWU1&utm_source=qr" className="hover:text-orange-500 transition-colors">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/company/evera-global/" className="hover:text-orange-500 transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://x.com/EveraGlobal/" className="hover:text-orange-500 transition-colors">
            <FaTwitter size={24} />
          </a>
          <a href="https://tiktok.me/evera.global" className="hover:text-orange-500 transition-colors">
            <FaTiktok size={24} />
          </a>
        </div>
        <h2 className="text-xl font-bold mb-2">Evera Global</h2>
        <p className="text-gray-400">Registered Company in the United States & Ethiopia</p>
        <p className="text-gray-400 mb-4">Dallas, TX & Addis Ababa, Ethiopia</p>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Evera Global. All rights reserved.
        </p>
      </footer>
    </>
  );
}