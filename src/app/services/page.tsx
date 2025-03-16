"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Code,
  BarChart3,
  Database,
  Cloud,
  Shield,
  Users,
  Smartphone
} from "lucide-react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import menuData from "@/components/Header/menuData";

// Get service icons from menuData
const getServiceIcon = (slug: string) => {
  const serviceMenu = menuData.find(item => item.title === "Services")?.submenu;
  const service = serviceMenu?.find(item => item.path?.includes(slug));
  return service?.icon ? service.icon : null;
};

// Helper function to get icon with consistent styling
const getStyledIcon = (IconComponent: React.ElementType) => {
  return <IconComponent size={24} className="text-orange-600" />;
};

const serviceCategories = [
  {
    title: "Website Development",
    slug: "website-development",
    icon: getServiceIcon("website-development") || <Code size={24} className="text-orange-600" />,
    description: "Modern, responsive websites and e-commerce solutions tailored to your business needs.",
    services: [
      {
        name: "Responsive Web Design",
        description: "Create modern, responsive websites that look great on any device.",
        products: [
          { id: "wd-01", name: "Responsive Framework Pro" },
          { id: "wd-02", name: "SEO Optimized Template" },
        ],
      },
      {
        name: "E-commerce Solutions",
        description: "Develop scalable online stores with secure payment processing.",
        products: [
          { id: "wd-03", name: "Shopping Cart Pro" },
          { id: "wd-04", name: "Payment Integration Suite" },
        ],
      },
    ],
  },
  {
    title: "App Development",
    slug: "app-development",
    icon: getServiceIcon("app-development") || <Smartphone size={24} className="text-orange-600" />,
    description: "Native and cross-platform mobile applications for iOS and Android.",
    services: [
      {
        name: "iOS App Development",
        description: "Build native iOS applications with exceptional user experience.",
        products: [
          { id: "ad-01", name: "iOS Native Suite" },
          { id: "ad-02", name: "Swift Accelerator" },
        ],
      },
      {
        name: "Android App Development",
        description: "Develop high-performance Android apps to reach a wider audience.",
        products: [
          { id: "ad-03", name: "Android Native Suite" },
          { id: "ad-04", name: "Kotlin Framework" },
        ],
      },
    ],
  },
  {
    title: "Business Automation",
    slug: "business-automation",
    icon: getServiceIcon("business-automation") || <BarChart3 size={24} className="text-orange-600" />,
    description: "Streamline your operations with custom automation solutions.",
    services: [
      {
        name: "Workflow Automation",
        description: "Streamline processes with automated workflows and reduce manual tasks.",
        products: [
          { id: "wf-01", name: "Process Builder Pro" },
          { id: "wf-02", name: "Task Automator Suite" },
          { id: "wf-03", name: "Approval Flow Manager" },
        ],
      },
      {
        name: "Invoice & Payment Processing",
        description: "Automate invoicing and payment collections for better cash flow.",
        products: [
          { id: "inv-01", name: "Smart Invoice Processor" },
          { id: "inv-02", name: "Payment Gateway Integrator" },
        ],
      },
      {
        name: "Document Management",
        description: "Digitize and organize your documents with intelligent classification.",
        products: [
          { id: "doc-01", name: "Secure Document Vault" },
          { id: "doc-02", name: "AI Document Classifier" },
        ],
      },
      {
        name: "ERP Integration",
        description: "Seamlessly integrate enterprise systems for unified operations.",
        products: [
          { id: "erp-01", name: "Unified ERP Connector" },
          { id: "erp-02", name: "Data Sync Manager" },
        ],
      },
    ],
  },
  {
    title: "Data & Analytics",
    slug: "data-analytics",
    icon: getServiceIcon("data-analytics") || <Database size={24} className="text-orange-600" />,
    description: "Transform your data into actionable insights with advanced analytics.",
    services: [
      {
        name: "Business Intelligence",
        description: "Unlock insights with comprehensive dashboards and reporting tools.",
        products: [
          { id: "bi-01", name: "Insight Dashboard Pro" },
          { id: "bi-02", name: "Real-Time Analytics Engine" },
        ],
      },
      {
        name: "Data Warehousing",
        description: "Centralize your data storage for better analysis and reporting.",
        products: [
          { id: "dw-01", name: "Enterprise Data Hub" },
          { id: "dw-02", name: "Cloud Data Warehouse" },
        ],
      },
      {
        name: "Predictive Analytics",
        description: "Forecast trends with machine learning and statistical modeling.",
        products: [
          { id: "pa-01", name: "Trend Predictor AI" },
          { id: "pa-02", name: "Forecast Engine" },
        ],
      },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    slug: "cloud-infrastructure",
    icon: getServiceIcon("cloud-infrastructure") || <Cloud size={24} className="text-orange-600" />,
    description: "Scalable cloud solutions and infrastructure management.",
    services: [
      {
        name: "Cloud Resource Management",
        description: "Optimize cloud assets and control costs with intelligent monitoring.",
        products: [
          { id: "crm-01", name: "Cloud Cost Optimizer" },
          { id: "crm-02", name: "Resource Allocation Manager" },
        ],
      },
      {
        name: "DevOps & CI/CD Tools",
        description: "Accelerate development cycles with automated pipelines and deployments.",
        products: [
          { id: "dev-01", name: "Pipeline Automator" },
          { id: "dev-02", name: "CI/CD Orchestrator" },
        ],
      },
      {
        name: "Scalable Hosting Solutions",
        description: "Ensure high availability and performance for your applications.",
        products: [
          { id: "sh-01", name: "Elastic Hosting Platform" },
          { id: "sh-02", name: "High Availability Cluster" },
        ],
      },
    ],
  },
  {
    title: "Security & Compliance",
    slug: "security-compliance",
    icon: getServiceIcon("security-compliance") || <Shield size={24} className="text-orange-600" />,
    description: "Protect your digital assets and ensure regulatory compliance.",
    services: [
      {
        name: "Cybersecurity Monitoring",
        description: "24/7 cybersecurity surveillance and threat detection.",
        products: [
          { id: "sec-01", name: "Threat Detection System" },
          { id: "sec-02", name: "Network Security Monitor" },
        ],
      },
      {
        name: "Risk & Compliance Automation",
        description: "Automate risk assessments and compliance reporting.",
        products: [
          { id: "rca-01", name: "Compliance Auditor" },
          { id: "rca-02", name: "Risk Assessment Engine" },
        ],
      },
      {
        name: "Data Privacy Management",
        description: "Safeguard sensitive information and manage data privacy compliance.",
        products: [
          { id: "dpm-01", name: "Privacy Shield Manager" },
          { id: "dpm-02", name: "Data Protection Suite" },
        ],
      },
    ],
  },
  {
    title: "Customer Engagement",
    slug: "customer-engagement",
    icon: getServiceIcon("customer-engagement") || <Users size={24} className="text-orange-600" />,
    description: "Build stronger customer relationships with smart engagement tools.",
    services: [
      {
        name: "CRM & Lead Management",
        description: "Enhance customer relationships and manage leads effectively.",
        products: [
          { id: "crm-01", name: "Smart CRM Platform" },
          { id: "crm-02", name: "Lead Nurturing System" },
        ],
      },
      {
        name: "Automated Chatbots & Support",
        description: "AI-driven chat and support tools for 24/7 customer assistance.",
        products: [
          { id: "chat-01", name: "Conversational AI Assistant" },
          { id: "chat-02", name: "Support Bot Builder" },
        ],
      },
      {
        name: "Email Marketing Automation",
        description: "Targeted email campaigns and customer journey automation.",
        products: [
          { id: "ema-01", name: "Campaign Automator" },
          { id: "ema-02", name: "Audience Segmentation Engine" },
        ],
      },
    ],
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("");
  const [expandedServices, setExpandedServices] = useState(new Set());
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Check URL hash on mount to set active category
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setActiveCategory(hash);
        setTimeout(() => {
          categoryRefs.current[hash]?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        // Default to first category if no hash
        setActiveCategory(serviceCategories[0].slug);
      }
    }
  }, []);

  const toggleServiceExpansion = (serviceName: string) => {
    setExpandedServices((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(serviceName)) {
        newSet.delete(serviceName);
      } else {
        newSet.add(serviceName);
      }
      return newSet;
    });
  };

  const scrollToCategory = (slug: string) => {
    setActiveCategory(slug);
    categoryRefs.current[slug]?.scrollIntoView({ behavior: "smooth" });
    
    // Update URL hash without causing a page reload
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", `#${slug}`);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Breadcrumb
        pageName="Our Services"
        description="Transform your business with our comprehensive suite of technology solutions. From web and app development to advanced data analytics and cloud infrastructure."
      />

      {/* About Section */}
      <div id="about-section" className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">How We Help Businesses</h2>
        <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
          We specialize in delivering end-to-end technology solutions that drive business growth and innovation.
          Our team of experts works closely with you to understand your unique challenges and develop 
          customized solutions that meet your specific needs.
        </p>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="flex items-center mb-4">
              <div className="p-2 mr-4 bg-orange-100 rounded-full dark:bg-orange-900/30">
                {getStyledIcon(Users)}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Consultation</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              We begin with a thorough consultation to understand your business objectives and challenges.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="flex items-center mb-4">
              <div className="p-2 mr-4 bg-orange-100 rounded-full dark:bg-orange-900/30">
                {getStyledIcon(Code)}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Solution Design</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Our experts design customized solutions that perfectly align with your business needs.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="flex items-center mb-4">
              <div className="p-2 mr-4 bg-orange-100 rounded-full dark:bg-orange-900/30">
                {getStyledIcon(BarChart3)}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Implementation</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              We implement your solution with precision, ensuring minimal disruption to your operations.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Navigation Bar */}
      <div className="sticky top-0 z-10 py-4 bg-white shadow-md dark:bg-gray-800">
        <div className="container px-4 mx-auto overflow-x-auto sm:px-6 lg:px-8">
          <div className="flex space-x-2 md:space-x-4">
            {serviceCategories.map((category) => (
              <button
                key={category.slug}
                onClick={() => scrollToCategory(category.slug)}
                className={`flex items-center whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeCategory === category.slug
                    ? "bg-orange-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Service Categories Sections */}
      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        {serviceCategories.map((category) => (
          <div
            key={category.slug}
            id={category.slug}
            ref={(el) => {
              categoryRefs.current[category.slug] = el;
              return undefined;
            }}
            className="py-16 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center mb-8">
              <div className="p-2 mr-4 bg-orange-100 rounded-full dark:bg-orange-900/30">
                {category.icon}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">{category.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {category.services.map((service) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">{service.name}</h3>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">{service.description}</p>
                  
                  <button
                    onClick={() => toggleServiceExpansion(service.name)}
                    className="flex items-center mb-4 font-medium text-orange-600 dark:text-orange-500 hover:text-orange-700 dark:hover:text-orange-400"
                  >
                    {expandedServices.has(service.name) ? (
                      <>
                        <ChevronUp size={18} className="mr-1" />
                        Hide Products
                      </>
                    ) : (
                      <>
                        <ChevronDown size={18} className="mr-1" />
                        View Products
                      </>
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {expandedServices.has(service.name) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-4 mb-4 overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-700/30"
                      >
                        <h4 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">Available Products</h4>
                        <div className="space-y-2">
                          {service.products.map((product) => (
                            <div key={product.id} className="flex items-center">
                              <span className="text-gray-700 dark:text-gray-300">{product.name}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <motion.div className="flex justify-end">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.name)}&category=${encodeURIComponent(category.title)}`}
                      className="px-4 py-2 text-white transition-colors bg-orange-600 rounded-lg hover:bg-orange-700 dark:hover:bg-orange-500"
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
