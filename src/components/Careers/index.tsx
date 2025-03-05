"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Briefcase, Award } from "lucide-react";
import Link from "next/link";
import jobsData from "./JobsData"
import certificationsData from "./CertificationsData";

const Careers = () => {
  const [activeTab, setActiveTab] = useState<"jobs" | "certifications">("jobs");

  // Only show 3 items from each category
  const featuredJobs = jobsData.slice(0, 3);
  const featuredCertifications = certificationsData.slice(0, 3);

  return (
    <section className="relative z-10 py-16 overflow-hidden bg-gray-50 dark:bg-gray-900/50 md:py-20 lg:py-28">
    
      <div className="absolute top-0 right-0 z-[-1] opacity-20">
        <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M550 0H50C22.3858 0 0 22.3858 0 50V350C0 377.614 22.3858 400 50 400H550C577.614 400 600 377.614 600 350V50C600 22.3858 577.614 0 550 0Z" fill="url(#paint0_linear_careers)" />
          <path d="M550 20H50C33.4315 20 20 33.4315 20 50V350C20 366.569 33.4315 380 50 380H550C566.569 380 580 366.569 580 350V50C580 33.4315 566.569 20 550 20Z" stroke="#EA580C" strokeOpacity="0.2" strokeWidth="2" />
          <defs>
            <linearGradient id="paint0_linear_careers" x1="300" y1="0" x2="300" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EA580C" stopOpacity="0.05" />
              <stop offset="1" stopColor="#EA580C" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 z-[-1] opacity-15">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M200 400C310.457 400 400 310.457 400 200C400 89.5431 310.457 0 200 0C89.5431 0 0 89.5431 0 200C0 310.457 89.5431 400 200 400ZM200 350C282.843 350 350 282.843 350 200C350 117.157 282.843 50 200 50C117.157 50 50 117.157 50 200C50 282.843 117.157 350 200 350Z" fill="#EA580C" fillOpacity="0.1" />
          <path d="M200 300C255.228 300 300 255.228 300 200C300 144.772 255.228 100 200 100C144.772 100 100 144.772 100 200C100 255.228 144.772 300 200 300Z" stroke="#EA580C" strokeOpacity="0.2" strokeWidth="2" />
        </svg>
      </div>
      
      {/* Subtle diagonal lines pattern */}
      <div className="absolute inset-0 z-[-1] opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="diagonalLines" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="40" stroke="#EA580C" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>

      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]">
              Join Our Team
            </h2>
            <div className="h-1 mx-auto mb-6 bg-orange-600 rounded-full w-28"></div>
            <p className="mx-auto mb-10 max-w-[570px] text-base text-body-color dark:text-body-color-dark">
              Explore opportunities to grow your career with us and be part of our mission to transform businesses.
            </p>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-gray-100 rounded-full dark:bg-gray-800">
            <button
              onClick={() => setActiveTab("jobs")}
              className={`flex items-center px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 ${
                activeTab === "jobs"
                  ? "bg-orange-600 text-white shadow-md"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              <Briefcase size={18} className="mr-2" />
              Open Positions
            </button>
            <button
              onClick={() => setActiveTab("certifications")}
              className={`flex items-center px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 ${
                activeTab === "certifications"
                  ? "bg-orange-600 text-white shadow-md"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              <Award size={18} className="mr-2" />
              Certifications
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "jobs" && (
            <motion.div
              key="jobs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-3"
            >
              {featuredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="p-6 bg-white border-2 border-transparent rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:border-orange-500"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-xs font-medium text-orange-600 bg-orange-100 rounded-full dark:bg-orange-900/30">
                      {job.type}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {job.location}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                    {job.title}
                  </h3>
                  <p className="mb-4 text-body-color dark:text-body-color-dark">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.slice(0, 3).map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 text-xs bg-gray-100 rounded dark:bg-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                    {job.skills.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-gray-100 rounded dark:bg-gray-700">
                        +{job.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "certifications" && (
            <motion.div
              key="certifications"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-3"
            >
              {featuredCertifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="p-6 bg-white border-2 border-transparent rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:border-orange-500"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-xs font-medium text-orange-600 bg-orange-100 rounded-full dark:bg-orange-900/30">
                      {cert.provider}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {cert.duration}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="mb-4 text-body-color dark:text-body-color-dark">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.slice(0, 3).map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 text-xs bg-gray-100 rounded dark:bg-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-gray-100 rounded dark:bg-gray-700">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/careers"
            className="inline-flex items-center px-8 py-4 text-base font-medium text-white transition-all bg-orange-600 rounded-lg hover:bg-orange-700 dark:hover:bg-orange-500"
          >
            View All Opportunities
            <ChevronRight size={20} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
