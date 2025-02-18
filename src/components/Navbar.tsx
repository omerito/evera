"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../components/Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile main menu state
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Desktop "Services" submenu state
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // Mobile "Services" submenu state

  // Define service categories for the "Services" submenu
  const serviceCategories = [
    { title: "Business Automation", slug: "business-automation" },
    { title: "Data & Analytics", slug: "data-analytics" },
    { title: "Cloud & Infrastructure", slug: "cloud-infrastructure" },
    { title: "Security & Compliance", slug: "security-compliance" },
    { title: "Customer Engagement", slug: "customer-engagement" },
  ];

  // Main menu items
  const mainMenu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", subMenu: serviceCategories },
    { name: "Contact", path: "/contact" },
  ];

  // Trigger custom event for Services page to update its expanded category
  const triggerServicesUpdate = () => {
    if (typeof window !== "undefined" && window.location.pathname === "/services") {
      setTimeout(() => {
        window.dispatchEvent(new Event("services-hash-update"));
      }, 50);
    }
  };

  return (
    <header className="fixed w-full top-0 z-50">
      {/* Thin gradient bar at the top */}
      <div
        className="h-5"
        style={{
          background:
            "linear-gradient(99deg, #FF7100 6.68%, #FFE0A5 49.09%, #FFC96D 93.31%)",
        }}
      />

      {/* Main navbar */}
      <nav className="bg-white shadow-lg h-16 flex items-center">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Use the new Logo component */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer"
            >
              <Logo />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8 items-center">
            {mainMenu.map((item, index) => {
              if (item.name === "Services" && item.subMenu) {
                return (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {/* "Services" is clickable and routes to /services */}
                    <Link
                      href="/services"
                      className="group text-black text-lg font-medium transition-all hover:text-orange-600 flex items-center focus:outline-none"
                    >
                      {item.name}
                      <ChevronDown size={20} className="ml-1 text-gray-600" />
                    </Link>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg p-2 z-50"
                        >
                          {item.subMenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={`/services#${subItem.slug}`}
                              onClick={triggerServicesUpdate}
                              className="block px-4 py-2 text-black hover:bg-orange-600 hover:text-white rounded transition"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              } else {
                return (
                  <Link
                    key={index}
                    href={item.path}
                    className="relative group text-black text-lg font-medium transition-all hover:text-orange-600"
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-600 transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                );
              }
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="md:hidden bg-white shadow-md py-4 absolute w-full left-0 top-[5rem] flex flex-col items-center space-y-4"
            >
              {mainMenu.map((item, index) => {
                if (item.name === "Services" && item.subMenu) {
                  return (
                    <div key={index} className="w-full flex flex-col items-center">
                      {/* Use a single row to keep text + arrow aligned */}
                      <div className="block w-full text-center px-4 py-2">
                        <div className="inline-flex items-center gap-2 text-black text-lg font-medium transition-all hover:text-orange-600">
                          {/* "Services" link */}
                          <Link
                            href="/services"
                            onClick={() => {
                              setIsOpen(false);
                            }}
                          >
                            {item.name}
                          </Link>
                          {/* Arrow to expand/collapse submenu */}
                          <button
                            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                            className="focus:outline-none"
                          >
                            <ChevronDown
                              size={20}
                              className={`transition-transform duration-300 ${
                                isMobileServicesOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>
                      </div>

                      {/* Submenu items */}
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="w-full flex flex-col items-center"
                          >
                            {item.subMenu.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={`/services#${subItem.slug}`}
                                onClick={() => {
                                  triggerServicesUpdate();
                                  setIsOpen(false);
                                }}
                                className="block w-full text-center px-4 py-2 text-black hover:bg-orange-600 hover:text-white transition"
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                } else {
                  // Other items (Home, About, Contact)
                  return (
                    <Link
                      key={index}
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-center text-black text-lg font-medium transition-all hover:text-orange-600"
                    >
                      {item.name}
                    </Link>
                  );
                }
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
