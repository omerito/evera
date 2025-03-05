"use client";

import { motion } from "framer-motion";
import { FaTelegramPlane, FaWhatsapp, FaEnvelope, FaCheckCircle } from "react-icons/fa";
import { Phone, Clock, MapPin, Send, ChevronRight } from "lucide-react";
import { useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
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
      <Breadcrumb
        pageName="Contact Us"
        description="Get in touch with us to discuss your project or learn more about our services."
      />

      {/* Contact Section */}
      <div className="relative flex justify-center min-h-screen px-6 pt-32 overflow-hidden bg-white dark:bg-gray-900">
        {/* Abstract, shapeless SVG background elements */}
        <div className="absolute top-0 right-0 z-0 opacity-10 dark:opacity-20">
          <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M400 100C500 150 550 250 600 350C650 450 700 550 650 650C600 750 500 800 400 800C300 800 200 750 150 650C100 550 150 450 200 350C250 250 300 150 400 100Z" fill="url(#paint0_radial)" />
            <defs>
              <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 400) rotate(90) scale(400)">
                <stop stopColor="#EA580C" stopOpacity="0.8" />
                <stop offset="1" stopColor="#EA580C" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        
        <div className="absolute bottom-0 left-0 z-0 opacity-10 dark:opacity-20">
          <svg width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 300C150 200 250 150 350 100C450 50 550 0 650 50C750 100 800 200 800 300C800 400 750 500 650 550C550 600 450 550 350 500C250 450 150 400 100 300Z" fill="url(#paint1_radial)" />
            <defs>
              <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(350 350) rotate(45) scale(350)">
                <stop stopColor="#EA580C" stopOpacity="0.6" />
                <stop offset="1" stopColor="#EA580C" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 flex flex-col w-full max-w-6xl gap-12"
        >
          {/* Form Section */}
          <motion.div
            className="relative p-8 overflow-hidden bg-white border border-gray-100 shadow-xl dark:bg-gray-800 dark:border-gray-700 rounded-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Abstract tech decoration for form */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5 dark:opacity-10">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0Z" stroke="#EA580C" strokeWidth="2" />
                <path d="M100 20C144.183 20 180 55.8172 180 100C180 144.183 144.183 180 100 180C55.8172 180 20 144.183 20 100C20 55.8172 55.8172 20 100 20Z" stroke="#EA580C" strokeWidth="1" strokeDasharray="5 5" />
                <path d="M160 100H40" stroke="#EA580C" strokeWidth="1" />
                <path d="M100 40V160" stroke="#EA580C" strokeWidth="1" />
              </svg>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-10">
              <div className="space-y-4 text-center">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                  Let&apos;s Talk About Your Idea
                </h2>
                <div className="w-24 h-1 mx-auto bg-orange-600 rounded-full" />
                <p className="max-w-lg mx-auto text-gray-600 dark:text-gray-300">
                  Share your project details with us, and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              <motion.form
                action="https://formspree.io/f/xbldapkb"
                method="POST"
                className="space-y-8"
                onSubmit={() => setIsSubmitted(true)}
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <motion.div whileHover={{ y: -2 }}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      className="w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-lg dark:text-white dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none"
                      required
                    />
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }}>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-lg dark:text-white dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none"
                    />
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      className="w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-lg dark:text-white dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none"
                      required
                    />
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }}>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject *"
                      className="w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-lg dark:text-white dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div whileHover={{ y: -2 }}>
                  <textarea
                    name="message"
                    placeholder="Your Message *"
                    className="w-full h-48 px-6 py-4 text-black bg-white border border-gray-200 dark:text-white dark:bg-gray-700 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none"
                    required
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center w-full py-4 font-medium tracking-wide text-white transition-colors bg-orange-600 shadow-lg rounded-xl hover:bg-orange-700 focus:outline-none"
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
              className="fixed z-50 flex items-center gap-2 px-6 py-3 text-black transform -translate-x-1/2 bg-white border border-orange-500 rounded-lg shadow-lg dark:text-white dark:bg-gray-800 top-20 left-1/2"
            >
              <FaCheckCircle className="text-green-500" />
              Thank you! Your message has been sent successfully.
            </motion.div>
          )}

          {/* Contact Details Section */}
          <motion.div
            className="relative p-8 mb-20 overflow-hidden border border-gray-100 shadow-xl dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-2xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Abstract tech decoration for contact details */}
            <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none opacity-5 dark:opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                {/* Circuit-like patterns */}
                <path d="M0 300H800" stroke="#EA580C" strokeWidth="1" strokeDasharray="8 12" />
                <path d="M0 150H800" stroke="#EA580C" strokeWidth="0.5" strokeDasharray="4 8" />
                <path d="M0 450H800" stroke="#EA580C" strokeWidth="0.5" strokeDasharray="4 8" />
                
                {/* Connection nodes */}
                <circle cx="100" cy="300" r="10" fill="#EA580C" fillOpacity="0.2" />
                <circle cx="300" cy="300" r="10" fill="#EA580C" fillOpacity="0.2" />
                <circle cx="500" cy="300" r="10" fill="#EA580C" fillOpacity="0.2" />
                <circle cx="700" cy="300" r="10" fill="#EA580C" fillOpacity="0.2" />
                
                {/* Vertical connections */}
                <path d="M100 300V150" stroke="#EA580C" strokeWidth="0.5" strokeDasharray="4 6" />
                <path d="M300 300V450" stroke="#EA580C" strokeWidth="0.5" strokeDasharray="4 6" />
                <path d="M500 300V150" stroke="#EA580C" strokeWidth="0.5" strokeDasharray="4 6" />
                <path d="M700 300V450" stroke="#EA580C" strokeWidth="0.5" strokeDasharray="4 6" />
                
                {/* Connection boxes */}
                <rect x="75" y="125" width="50" height="50" rx="5" stroke="#EA580C" strokeWidth="0.5" fill="none" />
                <rect x="275" y="425" width="50" height="50" rx="5" stroke="#EA580C" strokeWidth="0.5" fill="none" />
                <rect x="475" y="125" width="50" height="50" rx="5" stroke="#EA580C" strokeWidth="0.5" fill="none" />
                <rect x="675" y="425" width="50" height="50" rx="5" stroke="#EA580C" strokeWidth="0.5" fill="none" />
                
                {/* Abstract data flow */}
                <path d="M0 100C100 80 200 120 300 100C400 80 500 120 600 100C700 80 800 120 900 100" stroke="#EA580C" strokeWidth="0.5" strokeDasharray="2 4" />
                <path d="M0 500C100 520 200 480 300 500C400 520 500 480 600 500C700 520 800 480 900 500" stroke="#EA580C" strokeWidth="0.5" strokeDasharray="2 4" />
              </svg>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-10">
              <div className="space-y-4 text-center">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Contact Details</h2>
                <div className="w-24 h-1 mx-auto bg-orange-600 rounded-full" />
                <p className="max-w-lg mx-auto text-gray-600 dark:text-gray-300">
                  Reach out to us through any of these channels for quick assistance.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start gap-4 p-4 transition-all rounded-lg hover:bg-white dark:hover:bg-gray-700"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full dark:bg-orange-900/30">
                      <FaEnvelope className="text-orange-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                      <a href="mailto:info@everaglobal.com" className="text-gray-600 transition-colors dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400">
                        info@everaglobal.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-4 p-4 transition-all rounded-lg hover:bg-white dark:hover:bg-gray-700"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full dark:bg-orange-900/30">
                      <Phone className="text-orange-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Call Us</h3>
                      <a href="tel:+16823869056" className="text-gray-600 transition-colors dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400">
                        +1 (682) 386-9056
                      </a>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-4 p-4 transition-all rounded-lg hover:bg-white dark:hover:bg-gray-700"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full dark:bg-orange-900/30">
                      <Clock className="text-orange-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Office Hours</h3>
                      <p className="text-gray-600 dark:text-gray-300">Mon-Sat: 9AM - 6PM</p>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start gap-4 p-4 transition-all rounded-lg hover:bg-white dark:hover:bg-gray-700"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full dark:bg-orange-900/30">
                      <MapPin className="text-orange-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">U.S. Office</h3>
                      <p className="text-gray-600 dark:text-gray-300">Dallas, TX 75081</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-4 p-4 transition-all rounded-lg hover:bg-white dark:hover:bg-gray-700"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full dark:bg-orange-900/30">
                      <MapPin className="text-orange-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Ethiopia Office</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Jax Building, 8th Floor<br />
                        Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </motion.div>

                  <div className="relative flex gap-4 p-4 mt-8">
                    {/* Abstract tech-themed background SVG for social links */}
                    <div className="absolute inset-0 z-0 overflow-hidden opacity-5 dark:opacity-10">
                      <svg width="100%" height="100%" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="50" r="15" stroke="#EA580C" strokeWidth="0.5" strokeDasharray="3 3"/>
                        <circle cx="180" cy="50" r="15" stroke="#EA580C" strokeWidth="0.5" strokeDasharray="3 3"/>
                        <path d="M20 50H180" stroke="#EA580C" strokeWidth="0.5" strokeDasharray="5 5"/>
                        <path d="M35 50C35 42.8203 40.8203 37 48 37H152C159.18 37 165 42.8203 165 50V50C165 57.1797 159.18 63 152 63H48C40.8203 63 35 57.1797 35 50V50Z" stroke="#EA580C" strokeWidth="0.2"/>
                      </svg>
                    </div>
                    
                    <motion.a 
                      href="https://wa.me/16823869056" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="z-10 flex items-center justify-center w-12 h-12 text-gray-600 transition-all bg-white rounded-full shadow-md cursor-pointer dark:text-gray-300 dark:bg-gray-700 hover:text-orange-600 dark:hover:text-orange-500 hover:shadow-lg"
                      whileHover={{ y: -5 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open("https://wa.me/16823869056", "_blank", "noopener,noreferrer");
                      }}
                    >
                      <FaWhatsapp size={22} className="pointer-events-none" />
                    </motion.a>
                    <motion.a 
                      href="https://t.me/everaglobal" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="z-10 flex items-center justify-center w-12 h-12 text-gray-600 transition-all bg-white rounded-full shadow-md cursor-pointer dark:text-gray-300 dark:bg-gray-700 hover:text-orange-600 dark:hover:text-orange-500 hover:shadow-lg"
                      whileHover={{ y: -5 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open("https://t.me/everaglobal", "_blank", "noopener,noreferrer");
                      }}
                    >
                      <FaTelegramPlane size={22} className="pointer-events-none" />
                    </motion.a>
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
        className="relative py-20 overflow-hidden bg-white border-t border-gray-100 dark:bg-gray-900 dark:border-gray-800"
      >
        {/* Abstract tech-themed background for newsletter */}
        <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#EA580C" strokeWidth="0.5" strokeOpacity="0.5" />
              </pattern>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <rect width="80" height="80" fill="url(#smallGrid)" />
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#EA580C" strokeWidth="1" strokeOpacity="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="relative z-10 max-w-2xl px-4 mx-auto text-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white">Stay Ahead with Insights</h3>
              <div className="w-24 h-1 mx-auto bg-orange-600 rounded-full" />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Get exclusive access to industry trends and transformation strategies
            </p>

            <form onSubmit={handleSubscribe} className="mt-8">
              <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                <input
                  type="email"
                  placeholder="Enter professional email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-3 text-black bg-white border border-gray-300 rounded-full dark:text-white dark:border-gray-600 md:w-96 dark:bg-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="flex items-center w-full gap-2 px-8 py-3 text-white transition-colors bg-orange-600 rounded-full shadow-lg md:w-auto hover:bg-orange-700 focus:outline-none group"
                >
                  <Send size={18} />
                  Subscribe
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute transition-opacity opacity-0 right-4 group-hover:opacity-100"
                  >
                    <ChevronRight size={16} />
                  </motion.span>
                </motion.button>
              </div>
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-3 rounded-full text-sm ${
                    isError ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                  }`}
                >
                  {message}
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </motion.section>
    </>
  );
}