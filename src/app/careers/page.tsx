"use client";

import Head from "next/head";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, BookOpen } from "lucide-react";

const jobListings = [
  {
    id: "job-01",
    title: "Full-Stack Engineer",
    location: "Remote",
    description:
      "Join our team as a Full-Stack Engineer and work on cutting-edge projects using modern technologies.",
    details:
      "You will design, develop, and maintain both frontend and backend systems. Proficiency in React, Node.js, and databases is required. Experience with cloud platforms is a plus.",
  },
  {
    id: "job-02",
    title: "UI/UX Designer",
    location: "Remote",
    description:
      "We are looking for a creative UI/UX Designer to craft intuitive and visually appealing user experiences.",
    details:
      "This role involves creating wireframes, prototypes, and collaborating with development teams. A strong portfolio and experience with tools like Figma or Sketch are required.",
  },
  {
    id: "job-03",
    title: "Accountant",
    location: "Remote",
    description:
      "We need a detail-oriented Accountant to manage financial records and ensure compliance.",
    details:
      "Responsibilities include preparing financial statements, managing budgets, and ensuring tax compliance. Experience with accounting software like QuickBooks is required.",
  },
];

const certificationCourses = [
  {
    id: "course-01",
    title: "Full-Stack Development Bootcamp",
    description:
      "A comprehensive program to turn beginners into job-ready full-stack developers.",
    details:
      "This 6-month course covers HTML, CSS, JavaScript, React, Node.js, and databases. Includes hands-on projects and preparation for Google and Amazon certifications.",
  },
  {
    id: "course-02",
    title: "UI/UX Design Certification",
    description:
      "Learn the fundamentals of user-centered design and prototyping.",
    details:
      "This 3-month course teaches design principles, wireframing, and tools like Figma. Graduates will be prepared for entry-level UI/UX roles.",
  },
  {
    id: "course-03",
    title: "Cloud Engineering Program",
    description:
      "Master cloud infrastructure and deployment with AWS and Google Cloud.",
    details:
      "A 4-month course covering cloud architecture, resource management, and security. Prepares students for AWS Certified Solutions Architect and Google Cloud certifications.",
  },
];

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
    <div className="pt-28 bg-white min-h-screen pb-24">
      <Head>
        <title>Careers & Certifications | TechFlex Solutions</title>
        <meta
          name="description"
          content="Explore remote job opportunities and certification courses at TechFlex Solutions. Join our team or enhance your skills with our comprehensive training programs."
        />
        <meta
          name="keywords"
          content="remote jobs, full-stack engineer, UI/UX designer, accountant, certification courses, full-stack development, cloud engineering, UI/UX design"
        />
        <meta name="author" content="TechFlex Solutions" />
        <link rel="canonical" href="https://techflex.com/careers" />
      </Head>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <motion.h1
            className="text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            Careers & Certifications
          </motion.h1>
          <p className="text-gray-600 mt-2">
            Join our team or enhance your skills with our industry-leading programs.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={() => setActiveTab("jobs")}
            className={`px-6 py-3 font-semibold transition-colors border-b-4 ${
              activeTab === "jobs"
                ? "border-orange-600 text-orange-600"
                : "border-transparent text-gray-600 hover:text-orange-600"
            }`}
          >
            Job Listings
          </button>
          <button
            onClick={() => setActiveTab("courses")}
            className={`px-6 py-3 font-semibold transition-colors border-b-4 ${
              activeTab === "courses"
                ? "border-orange-600 text-orange-600"
                : "border-transparent text-gray-600 hover:text-orange-600"
            }`}
          >
            Certification Courses
          </button>
        </div>

        <AnimatePresence>
          {activeTab === "jobs" && (
            <motion.div
              key="jobs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              {jobListings.map((job) => (
                <motion.div
                  key={job.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-lg shadow-md border p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Briefcase size={24} className="text-orange-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                      {job.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    <span className="font-semibold">Location:</span> {job.location}
                  </p>
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  
                  {/* Expanded Details */}
                  <AnimatePresence>
                    {expandedJobs.has(job.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden mb-4"
                      >
                        <p className="text-gray-700">{job.details}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <button
                    onClick={() => toggleJobExpansion(job.id)}
                    className="text-orange-600 font-semibold mb-4 block text-center"
                  >
                    {expandedJobs.has(job.id) ? "Hide Details" : "Learn More"}
                  </button>
                  <div className="flex justify-center">
                    <button
                      onClick={() => router.push("/contact")}
                      className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
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
              className="grid md:grid-cols-2 gap-6"
            >
              {certificationCourses.map((course) => (
                <motion.div
                  key={course.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-lg shadow-md border p-6 flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <BookOpen size={24} className="text-orange-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                      {course.title}
                    </h2>
                  </div>
                  <p className="text-gray-700 mb-4">{course.description}</p>
                  
                  {/* Expanded Details */}
                  <AnimatePresence>
                    {expandedCourses.has(course.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden mb-4"
                      >
                        <p className="text-gray-700">{course.details}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <button
                    onClick={() => toggleCourseExpansion(course.id)}
                    className="text-orange-600 font-semibold mb-4 block text-center"
                  >
                    {expandedCourses.has(course.id) ? "Hide Details" : "Learn More"}
                  </button>
                  <div className="flex justify-center">
                    <button
                      onClick={() => router.push("/contact")}
                      className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
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