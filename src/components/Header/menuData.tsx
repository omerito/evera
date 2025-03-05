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
        title: "Web Development",
        path: "/services#website-development",
        newTab: false,
      },
      {
        id: 22,
        title: "App Development",
        path: "/services#app-development",
        newTab: false,
      },
      {
        id: 23,
        title: "Business Automation",
        path: "/services#business-development",
        newTab: false,
      },
      {
        id: 24,
        title: "Data & Analytics",
        path: "/services#data-analytics",
        newTab: false,
      },
      {
        id: 25,
        title: "Cloud & Infrastructure",
        path: "/services#cloud-infrastructure",
        newTab: false,
      },
      {
        id: 26,
        title: "Security & Compliance",
        path: "/services#security",
        newTab: false,
      },
      {
        id: 27,
        title: "Customer Engagement",
        path: "/services#security",
        newTab: false,
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
  },

];
export default menuData;