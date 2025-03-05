import { Portfolio } from "@/types/portfolio";

export const portfolioData: Portfolio[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with advanced product filtering, real-time inventory, and integrated payment solutions.",
    image: "/images/portfolio/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    category: "Web Development",
    detailedDescription: "We developed a comprehensive e-commerce solution for a fashion retailer looking to expand their online presence. The platform features a responsive design, advanced product search and filtering, real-time inventory management, and secure payment processing.",
    challenges: "The client needed a solution that could handle thousands of SKUs, integrate with their existing inventory management system, and provide a seamless shopping experience across devices.",
    solutions: "We implemented a custom product management system with MongoDB and built a responsive React frontend with advanced filtering capabilities. The Stripe API integration ensures secure payments, while real-time inventory updates prevent overselling.",
    results: "The platform launched successfully with a 45% increase in online sales within the first quarter and a 30% reduction in cart abandonment rates compared to their previous solution.",
    link: "https://example-ecommerce.com"
  },
  {
    id: "crm-system",
    title: "CRM & Business Analytics Platform",
    description: "A custom CRM system with integrated business analytics dashboards and automated client engagement tools.",
    image: "/images/portfolio/crm.jpg",
    technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "Docker"],
    category: "Business Automation",
    detailedDescription: "We built a custom CRM and business analytics platform for a consulting firm that needed to streamline client management and gain better insights from their data.",
    challenges: "The client's team was using disconnected tools for client management, data analysis, and reporting, resulting in efficiency loss and communication gaps.",
    solutions: "Our solution unified client data, communication history, project tracking, and business analytics in a single platform with custom-built dashboards and automated reporting.",
    results: "The new system reduced administrative time by 68% and improved client retention by providing timely insights that enabled proactive client management.",
    link: "https://example-crm.com"
  },
  {
    id: "healthcare-app",
    title: "Healthcare Mobile Application",
    description: "A HIPAA-compliant mobile application for patient monitoring and telehealth services with real-time data analysis.",
    image: "/images/portfolio/healthcare.jpg",
    technologies: ["React Native", "Node.js", "AWS", "Socket.io"],
    category: "App Development",
    detailedDescription: "We developed a secure, HIPAA-compliant mobile application for a healthcare provider to enable remote patient monitoring and telehealth services.",
    challenges: "The client needed a solution that could securely handle patient data, integrate with various medical devices, and provide real-time communication between patients and healthcare providers.",
    solutions: "We built a React Native application with end-to-end encryption, real-time data synchronization, and integrations with Bluetooth-enabled medical devices.",
    results: "The application has enabled the client to expand their telehealth services, reducing in-person visits by 40% for routine check-ups and improving patient satisfaction scores by 35%.",
    link: "https://example-healthcare.com",
    caseStudyLink: "/case-studies/healthcare-app"
  },
  {
    id: "data-analytics-dashboard",
    title: "Financial Data Analytics Dashboard",
    description: "A comprehensive financial analytics dashboard with predictive modeling and automated reporting capabilities.",
    image: "/images/portfolio/analytics.jpg",
    technologies: ["D3.js", "Python", "TensorFlow", "AWS"],
    category: "Data & Analytics",
    detailedDescription: "We created an advanced financial analytics dashboard for an investment firm that needed better tools for data visualization and predictive modeling.",
    challenges: "The client was dealing with massive amounts of financial data from various sources and needed a way to visualize trends and make data-driven decisions quickly.",
    solutions: "Our solution included custom data visualizations built with D3.js, automated data processing pipelines, and machine learning models for predictive analytics.",
    results: "The dashboard has helped the client identify investment opportunities more efficiently, with a reported 28% improvement in decision-making speed and accuracy.",
    link: "https://example-analytics.com"
  },
  {
    id: "cloud-migration",
    title: "Enterprise Cloud Migration",
    description: "A comprehensive cloud migration strategy and implementation for a large enterprise with legacy systems.",
    image: "/images/portfolio/cloud.jpg",
    technologies: ["AWS", "Kubernetes", "Terraform", "CI/CD"],
    category: "Cloud & Infrastructure",
    detailedDescription: "We designed and implemented a cloud migration strategy for a large enterprise with multiple legacy systems, moving their infrastructure to AWS for improved scalability and cost efficiency.",
    challenges: "The client had decades-old systems with complex interdependencies, strict compliance requirements, and needed to maintain business operations throughout the migration.",
    solutions: "We developed a phased migration approach using containerization, infrastructure as code, and automated testing to ensure a smooth transition with minimal disruption.",
    results: "The migration resulted in a 40% reduction in infrastructure costs, 99.99% uptime, and significantly improved deployment times, from days to minutes.",
    link: "https://example-cloud.com"
  }
];
