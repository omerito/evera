import {
  Code,
  Smartphone,
  BarChart3,
  Database,
  Cloud,
  Shield,
  Users,
  Briefcase,
  GraduationCap,
  Phone
} from "lucide-react";
import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Services",
    path: "/services",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Website Development",
        path: "/services#website-development",
        newTab: false,
        icon: <Code size={18} className="mr-2 text-orange-600" />,
      },
      {
        id: 22,
        title: "App Development",
        path: "/services#app-development",
        newTab: false,
        icon: <Smartphone size={18} className="mr-2 text-orange-600" />,
      },
      {
        id: 23,
        title: "Business Automation",
        path: "/services#business-automation",
        newTab: false,
        icon: <BarChart3 size={18} className="mr-2 text-orange-600" />,
      },
      {
        id: 24,
        title: "Data & Analytics",
        path: "/services#data-analytics",
        newTab: false,
        icon: <Database size={18} className="mr-2 text-orange-600" />,
      },
      {
        id: 25,
        title: "Cloud & Infrastructure",
        path: "/services#cloud-infrastructure",
        newTab: false,
        icon: <Cloud size={18} className="mr-2 text-orange-600" />,
      },
      {
        id: 26,
        title: "Security & Compliance",
        path: "/services#security-compliance",
        newTab: false,
        icon: <Shield size={18} className="mr-2 text-orange-600" />,
      },
      {
        id: 27,
        title: "Customer Engagement",
        path: "/services#customer-engagement",
        newTab: false,
        icon: <Users size={18} className="mr-2 text-orange-600" />,
      },
    ],
  },
  {
    id: 3,
    title: "Portfolio",
    path: "/portfolio",
    newTab: false,
  },
  {
    id: 4,
    title: "Careers",
    path: "/careers",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Open Positions",
        path: "/careers#jobs",
        newTab: false,
        icon: <Briefcase size={18} className="mr-2 text-orange-600" />,
      },
      {
        id: 42,
        title: "Certification Courses",
        path: "/careers#courses",
        newTab: false,
        icon: <GraduationCap size={18} className="mr-2 text-orange-600" />,
      },
    ],
  },
  {
    id: 5,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
    icon: <Phone size={18} className="mr-2 text-orange-600" />,
  },
];

export default menuData;