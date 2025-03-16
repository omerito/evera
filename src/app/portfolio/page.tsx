"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { portfolioData } from "@/components/Portfolio/PortfolioData";
import CallToAction from "@/components/CallToAction";
import Image from "next/image";

// Define categories based on the portfolio data
const categories = ["All", ...Array.from(new Set(portfolioData.map(item => item.category)))];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedProjects, setExpandedProjects] = useState(new Set());
  
  // Check URL hash on mount to set active category
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.slice(1);
      if (hash && categories.includes(hash)) {
        setActiveCategory(hash);
      }
    }
  }, []);

  const toggleProjectExpansion = (id: string) => {
    setExpandedProjects((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const filteredProjects = activeCategory === "All" 
    ? portfolioData 
    : portfolioData.filter(project => project.category === activeCategory);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    
    // Update URL hash without causing a page reload
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", category === "All" ? "/portfolio" : `#${category}`);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Breadcrumb
        pageName="Our Portfolio"
        description="Explore our diverse portfolio of successful projects across various industries. Each project showcases our expertise, innovation, and commitment to excellence."
      />

      {/* Portfolio Overview */}
      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">


        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 space-x-2 md:space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 mb-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-orange-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-white border-2 border-transparent rounded-lg shadow-md dark:bg-gray-800 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden h-60">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-0 right-0 p-2 m-2 text-xs font-medium text-white bg-orange-600 rounded-full">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 text-xs bg-orange-100 text-orange-600 rounded-full dark:bg-orange-900/30 dark:text-orange-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs bg-gray-100 rounded dark:bg-gray-700">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  {/* Expanded Details */}
                  <AnimatePresence>
                    {expandedProjects.has(project.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-4 mb-4 overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-700/30"
                      >
                        <div className="mb-4">
                          <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Challenge</h4>
                          <p className="text-gray-700 dark:text-gray-300">{project.challenges}</p>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Solution</h4>
                          <p className="text-gray-700 dark:text-gray-300">{project.solutions}</p>
                        </div>
                        
                        <div>
                          <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Results</h4>
                          <p className="text-gray-700 dark:text-gray-300">{project.results}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="flex items-center justify-between mt-6">
                    <button
                      onClick={() => toggleProjectExpansion(project.id)}
                      className="flex items-center font-semibold text-orange-600 transition-colors dark:text-orange-500 hover:text-orange-700 dark:hover:text-orange-400"
                    >
                      {expandedProjects.has(project.id) ? (
                        <>
                          <ChevronUp size={18} className="mr-1" />
                          Hide Details
                        </>
                      ) : (
                        <>
                          <ChevronDown size={18} className="mr-1" />
                          View Details
                        </>
                      )}
                    </button>
                    
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 text-white transition-colors bg-orange-600 rounded-lg hover:bg-orange-700 dark:hover:bg-orange-500"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Visit Site
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>


      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
