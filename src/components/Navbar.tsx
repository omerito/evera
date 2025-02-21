"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../components/Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false); // Mobile main menu state
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<Record<string, boolean>>({}); // Submenu state

  // Define submenus for "Services" and "Careers"
  const serviceCategories = [
    { title: "Website Development", slug: "website-development" },
    { title: "App Development", slug: "app-development" },
    { title: "Business Automation", slug: "business-automation" },
    { title: "Data & Analytics", slug: "data-analytics" },
    { title: "Cloud & Infrastructure", slug: "cloud-infrastructure" },
    { title: "Security", slug: "security" },
    { title: "Marketing", slug: "marketing" },
  ];

  const careersSubmenu = [
    { title: "Job Listings", slug: "job-listings" },
    { title: "Courses", slug: "courses" },
  ];

  // Main menu items
  const mainMenu = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services", subMenu: serviceCategories },
    { name: "Careers", path: "/careers", subMenu: careersSubmenu },
    { name: "Contact", path: "/contact" },
  ];

  // Toggle submenu open state for a given menu item name
  const toggleSubMenu = (itemName: string) => {
    setIsSubMenuOpen((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  // Trigger custom event (for example, to update the Services page)
  const triggerSubMenuUpdate = () => {
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
          {/* Logo linking to Home */}
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
            {mainMenu.map((item, index) =>
              item.subMenu ? (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => toggleSubMenu(item.name)}
                  onMouseLeave={() => toggleSubMenu(item.name)}
                >
                  <Link
                    href={item.path}
                    className="group text-black text-lg font-medium transition-all hover:text-orange-600 flex items-center focus:outline-none"
                  >
                    {item.name}
                    <ChevronDown size={20} className="ml-1 text-gray-600" />
                  </Link>
                  <AnimatePresence>
                    {isSubMenuOpen[item.name] && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg p-2 z-50"
                      >
                        {item.subMenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={`${item.path}#${subItem.slug}`}
                            onClick={triggerSubMenuUpdate}
                            className="block px-4 py-2 text-black hover:bg-orange-600 hover:text-white rounded transition"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={index}
                  href={item.path}
                  className="relative group text-black text-lg font-medium transition-all hover:text-orange-600"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-600 transition-all duration-200 group-hover:w-full"></span>
                </Link>
              )
            )}
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
              {mainMenu.map((item, index) =>
                item.subMenu ? (
                  <div key={index} className="w-full flex flex-col items-center">
                    <div className="block w-full text-center px-4 py-2">
                      <div className="inline-flex items-center gap-2 text-black text-lg font-medium transition-all hover:text-orange-600">
                        <Link href={item.path} onClick={() => setIsOpen(false)}>
                          {item.name}
                        </Link>
                        <button
                          onClick={() => toggleSubMenu(item.name)}
                          className="focus:outline-none"
                        >
                          <ChevronDown
                            size={20}
                            className={`transition-transform duration-300 ${
                              isSubMenuOpen[item.name] ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                    <AnimatePresence>
                      {isSubMenuOpen[item.name] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="w-full flex flex-col items-center"
                        >
                          {item.subMenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={`${item.path}#${subItem.slug}`}
                              onClick={() => {
                                triggerSubMenuUpdate();
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
                ) : (
                  <Link
                    key={index}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center text-black text-lg font-medium transition-all hover:text-orange-600"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}