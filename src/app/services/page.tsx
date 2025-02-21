"use client";

import Head from "next/head";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Settings,
  BarChart2,
  Cloud,
  Shield,
  MessageSquare,
  Check,
  Globe,
  Smartphone,
  Plus,
  Info,
} from "lucide-react";

const serviceCategories = [
  {
    title: "Website Development",
    slug: "website-development",
    icon: <Globe size={24} className="text-orange-600" />,
    services: [
      {
        name: "Responsive Web Design",
        description: "Create modern, responsive websites",
        products: [
          { id: "wd-01", name: "Responsive Framework Pro" },
          { id: "wd-02", name: "SEO Optimized Template" },
        ],
      },
      {
        name: "E-commerce Solutions",
        description: "Develop scalable online stores",
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
    icon: <Smartphone size={24} className="text-orange-600" />,
    services: [
      {
        name: "iOS App Development",
        description: "Build native iOS applications",
        products: [
          { id: "ad-01", name: "iOS Native Suite" },
          { id: "ad-02", name: "Swift Accelerator" },
        ],
      },
      {
        name: "Android App Development",
        description: "Develop high-performance Android apps",
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
    icon: <Settings size={24} className="text-orange-600" />,
    services: [
      {
        name: "Workflow Automation",
        description: "Streamline processes with automated workflows",
        products: [
          { id: "wf-01", name: "Process Builder Pro" },
          { id: "wf-02", name: "Task Automator Suite" },
          { id: "wf-03", name: "Approval Flow Manager" },
        ],
      },
      {
        name: "Invoice & Payment Processing",
        description: "Automate invoicing and payment collections",
        products: [
          { id: "inv-01", name: "Smart Invoice Processor" },
          { id: "inv-02", name: "Payment Gateway Integrator" },
        ],
      },
      {
        name: "Document Management",
        description: "Digitize and organize your documents",
        products: [
          { id: "doc-01", name: "Secure Document Vault" },
          { id: "doc-02", name: "AI Document Classifier" },
        ],
      },
      {
        name: "ERP Integration",
        description: "Seamlessly integrate enterprise systems",
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
    icon: <BarChart2 size={24} className="text-orange-600" />,
    services: [
      {
        name: "Business Intelligence",
        description: "Unlock insights with comprehensive dashboards",
        products: [
          { id: "bi-01", name: "Insight Dashboard Pro" },
          { id: "bi-02", name: "Real-Time Analytics Engine" },
        ],
      },
      {
        name: "Data Warehousing",
        description: "Centralize your data storage",
        products: [
          { id: "dw-01", name: "Enterprise Data Hub" },
          { id: "dw-02", name: "Cloud Data Warehouse" },
        ],
      },
      {
        name: "Predictive Analytics",
        description: "Forecast trends with machine learning",
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
    icon: <Cloud size={24} className="text-orange-600" />,
    services: [
      {
        name: "Cloud Resource Management",
        description: "Optimize cloud assets and control costs",
        products: [
          { id: "crm-01", name: "Cloud Cost Optimizer" },
          { id: "crm-02", name: "Resource Allocation Manager" },
        ],
      },
      {
        name: "DevOps & CI/CD Tools",
        description: "Accelerate development cycles",
        products: [
          { id: "dev-01", name: "Pipeline Automator" },
          { id: "dev-02", name: "CI/CD Orchestrator" },
        ],
      },
      {
        name: "Scalable Hosting Solutions",
        description: "Ensure high availability and performance",
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
    icon: <Shield size={24} className="text-orange-600" />,
    services: [
      {
        name: "Cybersecurity Monitoring",
        description: "24/7 cybersecurity surveillance",
        products: [
          { id: "sec-01", name: "Threat Detection System" },
          { id: "sec-02", name: "Network Security Monitor" },
        ],
      },
      {
        name: "Risk & Compliance Automation",
        description: "Automate risk assessments",
        products: [
          { id: "rca-01", name: "Compliance Auditor" },
          { id: "rca-02", name: "Risk Assessment Engine" },
        ],
      },
      {
        name: "Data Privacy Management",
        description: "Safeguard sensitive information",
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
    icon: <MessageSquare size={24} className="text-orange-600" />,
    services: [
      {
        name: "CRM & Lead Management",
        description: "Enhance customer relationships",
        products: [
          { id: "crm-01", name: "Smart CRM Platform" },
          { id: "crm-02", name: "Lead Nurturing System" },
        ],
      },
      {
        name: "Automated Chatbots & Support",
        description: "AI-driven chat and support tools",
        products: [
          { id: "chat-01", name: "Conversational AI Assistant" },
          { id: "chat-02", name: "Support Bot Builder" },
        ],
      },
      {
        name: "Email Marketing Automation",
        description: "Targeted email campaigns",
        products: [
          { id: "ema-01", name: "Campaign Automator" },
          { id: "ema-02", name: "Audience Segmentation Engine" },
        ],
      },
    ],
  },
];

export default function Services() {
  const router = useRouter();
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<Set<string>>(new Set());
  const [expandedProduct, setExpandedProduct] = useState<{ id: string; name: string } | null>(null);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Returns product details based on product name
  const getProductDetails = (productName: string) => {
    if (productName === "Insight Dashboard Pro") {
      return "Insight Dashboard Pro features an interactive dashboard with real-time analytics, customizable widgets, and seamless integration with your data sources.";
    }
    return `More details about ${productName} coming soon.`;
  };

  const toggleProduct = (productId: string) => {
    setSelectedProducts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  // Hash-based navigation from the homepage navbar
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const slug = window.location.hash.substring(1);
      const index = serviceCategories.findIndex(
        (category) => category.slug === slug
      );
      if (index !== -1) {
        setExpandedCategory(index);
        setTimeout(() => {
          categoryRefs.current[index]?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 300);
      }
    }
  }, []);

  const SelectedProductsSummary = () => (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <span className="text-lg font-semibold text-gray-700">
          {selectedProducts.size > 0
            ? `Selected Products (${selectedProducts.size})`
            : "No Products Selected"}
        </span>
        <button
          onClick={() => router.push("/contact")}
          className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
        >
          Request Quote
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="pt-20 bg-white min-h-screen pb-24">
      <Head>
        <title>Our Services | Tech Solutions</title>
        <meta
          name="description"
          content="Explore our wide range of tech solutions including Business Automation, Data & Analytics, Cloud & Infrastructure, Security & Compliance, Customer Engagement, Website Development, and App Development."
        />
      </Head>

      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 px-4"
      >
        <h1 className="text-4xl font-bold text-black">Our Services</h1>
        <div className="h-1 w-24 bg-orange-600 mx-auto rounded-full my-4"></div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Explore our comprehensive suite of technology solutions designed to drive your business forward.
        </p>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto py-8 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {serviceCategories.map((category, catIndex) => (
          <div
            key={catIndex}
            ref={(el) => {
              categoryRefs.current[catIndex] = el;
            }}
            className="mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() =>
                setExpandedCategory((prev) =>
                  prev === catIndex ? null : catIndex
                )
              }
              className="w-full flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md hover:bg-orange-50 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                {category.icon}
                <span className="text-2xl font-semibold text-gray-900">
                  {category.title}
                </span>
              </div>
              <ChevronDown
                className={`transition-transform ${
                  expandedCategory === catIndex ? "rotate-180" : ""
                }`}
              />
            </motion.button>

            <AnimatePresence>
              {expandedCategory === catIndex && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="py-6 space-y-6">
                    {category.services.map((service, sIndex) => (
                      <div
                        key={sIndex}
                        className="bg-white rounded-lg shadow-sm border"
                      >
                        <div className="p-6 border-b">
                          <h4 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                            {service.name} <Plus size={16} className="text-orange-600" />
                          </h4>
                          <p className="text-gray-600 mt-2">
                            {service.description}
                          </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4 p-6">
                          {service.products.map((product) => (
                            <motion.div
                              key={product.id}
                              whileHover={{ y: -2 }}
                              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                                selectedProducts.has(product.id)
                                  ? "border-orange-500 bg-orange-50"
                                  : "border-gray-200 hover:border-orange-300"
                              }`}
                              onClick={() => toggleProduct(product.id)}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-medium text-gray-900">
                                  {product.name}
                                </span>
                                <Check
                                  className={`w-5 h-5 ${
                                    selectedProducts.has(product.id)
                                      ? "text-orange-600 opacity-100"
                                      : "text-gray-400 opacity-0"
                                  } transition-opacity`}
                                />
                              </div>
                              <motion.button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setExpandedProduct(product);
                                }}
                                whileHover={{ scale: 1.05 }}
                                className="mt-2 inline-flex items-center px-3 py-1 border border-orange-500 text-orange-600 rounded hover:bg-orange-500 hover:text-white transition-colors"
                              >
                                <Info size={16} className="mr-1" /> Learn More
                              </motion.button>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>

      <SelectedProductsSummary />

      {/* Modal for product "Learn More" details */}
      <AnimatePresence>
        {expandedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center ajustify-center bg-black bg-opacity-50"
            onClick={() => setExpandedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-lg p-8 max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setExpandedProduct(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                Back
              </button>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {expandedProduct.name}
              </h3>
              <p className="text-gray-700">
                {getProductDetails(expandedProduct.name)}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
