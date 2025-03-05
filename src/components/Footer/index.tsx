"use client";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaTiktok, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<null | "success" | "error">(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically call an API to handle the subscription
    if (email && email.includes('@')) {
      setSubscribeStatus("success");
      setEmail("");
      setTimeout(() => setSubscribeStatus(null), 3000);
    } else {
      setSubscribeStatus("error");
    }
  };

  return (
    <footer className="pt-16 pb-8 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-1">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Evera Global</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Brave Ideas, Smart Solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-orange-600 dark:text-orange-500" />
                <p className="text-gray-600 dark:text-gray-400">
                  Dallas, TX & Addis Ababa, Ethiopia
                </p>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3 text-orange-600 dark:text-orange-500" />
                <a href="tel:+1234567890" className="text-gray-600 transition-colors dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500">
                  +1 (682) 386-9056
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-orange-600 dark:text-orange-500" />
                <a href="mailto:info@everaglobal.com" className="text-gray-600 transition-colors dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500">
                  info@everaglobal.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="mb-6 text-lg font-bold text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-600 transition-colors dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 transition-colors dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 transition-colors dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 transition-colors dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="mb-6 text-lg font-bold text-gray-900 dark:text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/digital-transformation" className="text-gray-600 transition-colors dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link href="/services/software-development" className="text-gray-600 transition-colors dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-solutions" className="text-gray-600 transition-colors dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/data-analytics" className="text-gray-600 transition-colors dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-gray-600 transition-colors dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services/ai-ml" className="text-gray-600 transition-colors dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500">
                  AI & Machine Learning
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="mb-6 text-lg font-bold text-gray-900 dark:text-white">Stay Updated</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Subscribe to our newsletter for the latest industry insights and company news.
            </p>
            <form onSubmit={handleSubscribe} className="mb-4">
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-white transition-colors bg-orange-600 rounded-md hover:bg-orange-700"
                >
                  Subscribe
                </button>
              </div>
            </form>
            {subscribeStatus === "success" && (
              <p className="text-sm text-green-600 dark:text-green-400">
                Thank you for subscribing!
              </p>
            )}
            {subscribeStatus === "error" && (
              <p className="text-sm text-red-600 dark:text-red-400">
                Please enter a valid email address.
              </p>
            )}
          </div>
        </div>

        {/* Social Media Links */}
        <div className="pt-8 mb-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="https://www.facebook.com/everaglobal" 
              className="text-gray-600 transition-colors dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a 
              href="https://www.instagram.com/everaglobal?igsh=dGIxMzNmbmJkYWU1&utm_source=qr" 
              className="text-gray-600 transition-colors dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/company/evera-global/" 
              className="text-gray-600 transition-colors dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="https://x.com/EveraGlobal/" 
              className="text-gray-600 transition-colors dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a 
              href="https://tiktok.me/evera.global" 
              className="text-gray-600 transition-colors dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok size={20} />
            </a>
          </div>
          
          {/* Centered Copyright Text */}
          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Evera Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;