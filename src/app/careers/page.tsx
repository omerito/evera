"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, BookOpen, ChevronDown, ChevronUp, MapPin, Clock } from "lucide-react";
import jobsData from "@/components/Careers/JobsData";
import certificationsData from "@/components/Careers/CertificationsData";
import Breadcrumb from "@/components/Common/Breadcrumb";

export default function Careers() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("jobs");
  const [expandedJobs, setExpandedJobs] = useState(new Set());
  const [expandedCourses, setExpandedCourses] = useState(new Set());

  // Check URL hash on mount to set active tab (e.g., "#courses" or "#jobs")
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("courses")) {
        setActiveTab("courses");
      } else if (hash.includes("jobs")) {
        setActiveTab("jobs");
      } else if (hash === "#about") {
        const aboutSection = document.getElementById("about-section");
        aboutSection?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const toggleJobExpansion = (id: string) => {
    setExpandedJobs((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleCourseExpansion = (id: string) => {
    setExpandedCourses((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Breadcrumb
        pageName="Careers"
        description="Join our team or enhance your skills with our certification courses. We're always looking for talented individuals to help us build the future."
      />

      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="flex justify-center max-w-md p-1 mx-auto mb-8 space-x-2 bg-gray-100 rounded-full dark:bg-gray-800 md:space-x-4">
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
              onClick={() => setActiveTab("courses")}
              className={`flex items-center px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 ${
                activeTab === "courses"
                  ? "bg-orange-600 text-white shadow-md"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              <BookOpen size={18} className="mr-2" />
              Certification Courses
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "jobs" && (
            <motion.div
              key="jobs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              {jobsData.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="p-6 transition-all bg-white border-2 border-transparent rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:border-orange-500"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-xs font-medium text-orange-600 bg-orange-100 rounded-full dark:bg-orange-900/30 dark:text-orange-400">
                      {job.type}
                    </span>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <MapPin size={14} className="mr-1" />
                      {job.location}
                    </div>
                  </div>
                  
                  <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                    {job.title}
                  </h2>
                  
                  <p className="mb-4 text-gray-700 dark:text-gray-300">{job.description}</p>
                  
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
                  
                  {/* Expanded Details */}
                  <AnimatePresence>
                    {expandedJobs.has(job.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-4 mb-4 overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-700/30"
                      >
                        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Job Details</h3>
                        <p className="text-gray-700 dark:text-gray-300">{job.details}</p>
                        
                        <h3 className="mt-4 mb-2 text-lg font-semibold text-gray-900 dark:text-white">Requirements</h3>
                        <ul className="pl-5 mb-4 space-y-1 text-gray-700 list-disc dark:text-gray-300">
                          {job.requirements?.map((req, idx) => (
                            <li key={idx}>{req}</li>
                          )) || <li>No specific requirements listed.</li>}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="flex items-center justify-between mt-6">
                    <button
                      onClick={() => toggleJobExpansion(job.id)}
                      className="flex items-center font-semibold text-orange-600 transition-colors dark:text-orange-500 hover:text-orange-700 dark:hover:text-orange-400"
                    >
                      {expandedJobs.has(job.id) ? (
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
                    
                    <button
                      onClick={() => router.push("/contact?ref=job-" + job.id + "&source=careers&type=job&title=" + encodeURIComponent(job.title))}
                      className="px-6 py-2 text-white transition-colors bg-orange-600 rounded-lg hover:bg-orange-700 dark:hover:bg-orange-500"
                    >
                      Apply Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
          
          {activeTab === "courses" && (
            <motion.div
              key="courses"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              {certificationsData.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="p-6 transition-all bg-white border-2 border-transparent rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:border-orange-500"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-xs font-medium text-orange-600 bg-orange-100 rounded-full dark:bg-orange-900/30 dark:text-orange-400">
                      {course.provider}
                    </span>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Clock size={14} className="mr-1" />
                      {course.duration}
                    </div>
                  </div>
                  
                  <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                    {course.title}
                  </h2>
                  
                  <p className="mb-4 text-gray-700 dark:text-gray-300">{course.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.skills.slice(0, 3).map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 text-xs bg-gray-100 rounded dark:bg-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                    {course.skills.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-gray-100 rounded dark:bg-gray-700">
                        +{course.skills.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* Expanded Details */}
                  <AnimatePresence>
                    {expandedCourses.has(course.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-4 mb-4 overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-700/30"
                      >
                        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Course Details</h3>
                        <p className="text-gray-700 dark:text-gray-300">{course.details}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Level</h4>
                            <p className="text-gray-700 dark:text-gray-300">{course.level || "All Levels"}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Format</h4>
                            <p className="text-gray-700 dark:text-gray-300">{course.format || "Online"}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="flex items-center justify-between mt-6">
                    <button
                      onClick={() => toggleCourseExpansion(course.id)}
                      className="flex items-center font-semibold text-orange-600 transition-colors dark:text-orange-500 hover:text-orange-700 dark:hover:text-orange-400"
                    >
                      {expandedCourses.has(course.id) ? (
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
                    
                    <button
                      onClick={() => router.push("/contact?ref=course-" + course.id)}
                      className="px-6 py-2 text-white transition-colors bg-orange-600 rounded-lg hover:bg-orange-700 dark:hover:bg-orange-500"
                    >
                      Register Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}