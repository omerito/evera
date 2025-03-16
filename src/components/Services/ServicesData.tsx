import { Service } from "@/types/service";
import {
  Code,
  Smartphone,
  BarChart3,
  Database,
  Cloud,
  Shield,
  Users
} from "lucide-react";
import menuData from "@/components/Header/menuData";
import { ReactElement, JSX } from "react";

// Helper function to get service icon from menuData with proper type casting
const getServiceIcon = (slug: string): ReactElement | null => {
  const serviceMenu = menuData.find(item => item.title === "Services")?.submenu;
  const service = serviceMenu?.find(item => item.path?.includes(slug));
  // Return the icon if it exists and is a ReactElement, otherwise null
  return service?.icon as ReactElement || null;
};

// Helper function to create styled icon
const createStyledIcon = (IconComponent: React.ElementType): JSX.Element => {
  return <IconComponent size={40} className="text-orange-600" />;
};

const ServicesData: Service[] = [
  {
    id: 1,
    icon: getServiceIcon("website-development") || createStyledIcon(Code),
    title: "Website Development",
    paragraph:
      "Build modern, responsive websites tailored to your business needs.",
    link: "/services#website-development"
  },
  {
    id: 2,
    icon: getServiceIcon("app-development") || createStyledIcon(Smartphone),
    title: "App Development",
    paragraph:
      "Create high-performance mobile and web applications.",
    link: "/services#app-development"
  },
  {
    id: 3,
    icon: getServiceIcon("business-automation") || createStyledIcon(BarChart3),
    title: "Business Automation",
    paragraph:
      "Streamline processes with automated workflows and tools.",
    link: "/services#business-automation"
  },
  {
    id: 4,
    icon: getServiceIcon("data-analytics") || createStyledIcon(Database),
    title: "Data & Analytics",
    paragraph:
      "Unlock insights with comprehensive data analytics solutions.",
    link: "/services#data-analytics"
  },
  {
    id: 5,
    icon: getServiceIcon("cloud-infrastructure") || createStyledIcon(Cloud),
    title: "Cloud & Infrastructure",
    paragraph:
      "Optimize cloud resources and build scalable infrastructure.",
    link: "/services#cloud-infrastructure"
  },
  {
    id: 6,
    icon: getServiceIcon("security-compliance") || createStyledIcon(Shield),
    title: "Security & Compliance",
    paragraph:
      "Ensure data security and regulatory compliance.",
    link: "/services#security-compliance"
  },
  {
    id: 7,
    icon: getServiceIcon("customer-engagement") || createStyledIcon(Users),
    title: "Customer Engagement",
    paragraph:
      "Enhance customer relationships with AI-driven tools.",
    link: "/services#customer-engagement"
  },
];

export default ServicesData;