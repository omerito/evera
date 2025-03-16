"use client";

import { Portfolio } from "@/types/portfolio";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, X } from "lucide-react";

const SinglePortfolio = ({ portfolio }: { portfolio: Portfolio }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <div className="w-full">
      <motion.div 
        className="overflow-hidden bg-white border-2 border-transparent rounded-xl dark:border-gray-800 dark:bg-gray-800/50 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Project Image */}
        <div className="relative overflow-hidden aspect-video">
          <Image 
            src={portfolio.image} 
            alt={portfolio.title}
            fill
            className="object-cover transition-all duration-500 hover:scale-105"
          />
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="mb-3 text-xl font-bold text-black dark:text-white md:text-2xl">
            {portfolio.title}
          </h3>
          
          <p className="mb-4 text-body-color dark:text-body-color-dark">
            {portfolio.description}
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-5">
            {portfolio.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-xs font-medium text-orange-600 bg-orange-100 rounded-full dark:bg-orange-900/30"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div
            className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700 dark:hover:text-orange-400 group"
            onClick={() => setShowDetails(true)}
          >
            Learn more
            <motion.span 
              className="ml-1"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowRight size={16} />
            </motion.span>
          </div>
        </div>
      </motion.div>
      
      {/* Details Modal */}
      {showDetails && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
          onClick={() => setShowDetails(false)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-3xl max-h-[80vh] overflow-y-auto bg-white rounded-xl dark:bg-gray-800 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute p-2 bg-gray-100 rounded-full dark:bg-gray-700 top-4 right-4"
              onClick={() => setShowDetails(false)}
            >
              <X size={20} className="text-gray-600 dark:text-gray-300" />
            </button>
            
            <h2 className="mb-4 text-2xl font-bold text-black dark:text-white md:text-3xl">
              {portfolio.title}
            </h2>
            
            <div className="relative mb-6 overflow-hidden rounded-lg h-60 sm:h-80">
              <Image 
                src={portfolio.image} 
                alt={portfolio.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-orange-600">Overview</h3>
                <p className="text-body-color dark:text-body-color-dark">
                  {portfolio.detailedDescription || portfolio.description}
                </p>
              </div>
              
              {portfolio.challenges && (
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-orange-600">Challenges</h3>
                  <p className="text-body-color dark:text-body-color-dark">{portfolio.challenges}</p>
                </div>
              )}
              
              {portfolio.solutions && (
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-orange-600">Solutions</h3>
                  <p className="text-body-color dark:text-body-color-dark">{portfolio.solutions}</p>
                </div>
              )}
              
              {portfolio.results && (
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-orange-600">Results</h3>
                  <p className="text-body-color dark:text-body-color-dark">{portfolio.results}</p>
                </div>
              )}
              
              <div>
                <h3 className="mb-2 text-xl font-semibold text-orange-600">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {portfolio.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-sm font-medium text-orange-600 bg-orange-100 rounded-full dark:bg-orange-900/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {portfolio.link && (
                <div className="pt-4">
                  <a 
                    href={portfolio.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 font-medium text-white transition-all bg-orange-600 rounded-lg hover:bg-orange-700"
                  >
                    Visit Project
                    <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default SinglePortfolio;
