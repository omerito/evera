"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Settings,
  BarChart2,
  Cloud,
  Shield,
  MessageSquare,
} from "lucide-react";

// Define the service categories with a slug for each category
const serviceCategories = [
  {
    title: "Business Automation",
    slug: "business-automation",
    services: [
      {
        name: "Workflow Automation",
        description:
          "Streamline your processes and reduce manual tasks with automated workflows.",
      },
      {
        name: "Invoice & Payment Processing",
        description:
          "Automate invoicing and payment collections to optimize cash flow.",
      },
      {
        name: "Document Management",
        description:
          "Digitize and organize your documents for secure and efficient retrieval.",
      },
      {
        name: "ERP Integration",
        description:
          "Seamlessly integrate your enterprise systems for unified operations.",
      },
    ],
  },
  {
    title: "Data & Analytics",
    slug: "data-analytics",
    services: [
      {
        name: "Business Intelligence",
        description:
          "Unlock insights with comprehensive dashboards and real-time reporting.",
      },
      {
        name: "Data Warehousing",
        description: "Centralize your data for efficient storage and retrieval.",
      },
      {
        name: "Real-Time Analytics",
        description:
          "Gain immediate insights with live data processing and visualization.",
      },
      {
        name: "Predictive Analytics",
        description:
          "Leverage machine learning to forecast trends and business outcomes.",
      },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    slug: "cloud-infrastructure",
    services: [
      {
        name: "Cloud Resource Management",
        description:
          "Optimize cloud assets and control costs with intelligent resource allocation.",
      },
      {
        name: "DevOps & CI/CD Tools",
        description:
          "Accelerate your development cycles with streamlined DevOps solutions.",
      },
      {
        name: "Scalable Hosting Solutions",
        description:
          "Ensure high availability and performance with robust hosting services.",
      },
      {
        name: "Cloud Security & Compliance",
        description:
          "Maintain secure and compliant environments across your cloud platforms.",
      },
    ],
  },
  {
    title: "Security & Compliance",
    slug: "security-compliance",
    services: [
      {
        name: "Cybersecurity Monitoring",
        description:
          "Protect your business with 24/7 cybersecurity surveillance.",
      },
      {
        name: "Risk & Compliance Automation",
        description:
          "Automate risk assessments and regulatory compliance to reduce overhead.",
      },
      {
        name: "Data Privacy Management",
        description:
          "Safeguard sensitive information with advanced privacy tools.",
      },
      {
        name: "Secure Communication Tools",
        description:
          "Facilitate encrypted communications both internally and externally.",
      },
    ],
  },
  {
    title: "Customer Engagement",
    slug: "customer-engagement",
    services: [
      {
        name: "CRM & Lead Management",
        description:
          "Enhance customer relationships with effective CRM solutions.",
      },
      {
        name: "Automated Chatbots & Support",
        description:
          "Improve response times with AI-driven chat and support tools.",
      },
      {
        name: "Email Marketing Automation",
        description:
          "Engage your audience with targeted and automated email campaigns.",
      },
      {
        name: "Feedback & Survey Tools",
        description:
          "Collect actionable insights through seamless feedback systems.",
      },
    ],
  },
];

// Map category titles to corresponding icons
const categoryIcons = {
  "Business Automation": <Settings size={24} className="text-orange-600" />,
  "Data & Analytics": <BarChart2 size={24} className="text-orange-600" />,
  "Cloud & Infrastructure": <Cloud size={24} className="text-orange-600" />,
  "Security & Compliance": <Shield size={24} className="text-orange-600" />,
  "Customer Engagement": <MessageSquare size={24} className="text-orange-600" />,
};

export default function Services() {
  const router = useRouter();
  // Use a single state variable to track which category is expanded (by index)
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  // Toggle the expanded category: if clicking the same one, collapse it; otherwise, expand the clicked one.
  const toggleCategory = (index: number) => {
    setExpandedCategory((prev) => (prev === index ? null : index));
  };

  // On mount and on hash change, update the expanded category based on the URL hash.
  useEffect(() => {
    const updateExpandedCategoryFromHash = () => {
      if (window.location.hash) {
        const hash = window.location.hash.slice(1); // Remove the '#' character.
        const index = serviceCategories.findIndex(
          (cat) => cat.slug === hash
        );
        if (index !== -1) {
          setExpandedCategory(index);
        } else {
          setExpandedCategory(null);
        }
      } else {
        setExpandedCategory(null);
      }
    };

    updateExpandedCategoryFromHash();
    window.addEventListener("hashchange", updateExpandedCategoryFromHash);
    return () =>
      window.removeEventListener("hashchange", updateExpandedCategoryFromHash);
  }, []);

  return (
    <div className="pt-20 bg-white min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto py-8 px-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-bold text-center mb-12 text-black"
        >
          Our Services
        </motion.h2>

        {serviceCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-8">
            {/* Category Header */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() => toggleCategory(catIndex)}
              aria-expanded={expandedCategory === catIndex ? "true" : "false"}
              className="w-full flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <div className="flex items-center gap-4">
                {categoryIcons[category.title as keyof typeof categoryIcons]}
                <span className="text-2xl font-semibold text-gray-900">
                  {category.title}
                </span>
              </div>
              <motion.div
                animate={{ rotate: expandedCategory === catIndex ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={24} className="text-gray-600" />
              </motion.div>
            </motion.button>

            {/* Expandable Services List */}
            <AnimatePresence initial={false}>
              {expandedCategory === catIndex && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  {/* Padding wrapper ensures borders aren't clipped */}
                  <div className="py-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      {category.services.map((service, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.02 }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:border-orange-500 transition-all"
                        >
                          <h4 className="text-xl font-semibold text-black mb-2">
                            {service.name}
                          </h4>
                          <p className="text-gray-600">
                            {service.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/contact")}
            className="px-8 py-4 bg-orange-600 text-white rounded-lg shadow-lg hover:bg-orange-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Get a Quote
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
