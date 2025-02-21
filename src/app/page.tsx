"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Head from "next/head";
import {
  ChevronRight,
  Target,
  Globe,
  Database,
  Users,
  Smartphone,
  Settings,
  BarChart2,
  Cloud,
  Shield,
  MessageSquare
} from "lucide-react";
import Image from 'next/image';

// Partners data for the homepage marquee
const partners = [
  { name: "TechNova", logo: "/partners/technova.svg" },
  { name: "CloudSecure", logo: "/partners/cloudsecure.svg" },
  { name: "DataFlow", logo: "/partners/dataflow.svg" },
  { name: "BizAutomate", logo: "/partners/bizautomate.svg" },
  { name: "SafeGuard", logo: "/partners/safeguard.svg" },
];

// Services data for the infinite loop
const services = [
  {
    name: "Website Development",
    icon: <Globe size={24} className="text-orange-600" />,
    description: "Build modern, responsive websites tailored to your business needs.",
    link: "/services#website-development",
  },
  {
    name: "App Development",
    icon: <Smartphone size={24} className="text-orange-600" />,
    description: "Create high-performance mobile and web applications.",
    link: "/services#app-development",
  },
  {
    name: "Business Automation",
    icon: <Settings size={24} className="text-orange-600" />,
    description: "Streamline processes with automated workflows and tools.",
    link: "/services#business-automation",
  },
  {
    name: "Data & Analytics",
    icon: <BarChart2 size={24} className="text-orange-600" />,
    description: "Unlock insights with comprehensive data analytics solutions.",
    link: "/services#data-analytics",
  },
  {
    name: "Cloud & Infrastructure",
    icon: <Cloud size={24} className="text-orange-600" />,
    description: "Optimize cloud resources and build scalable infrastructure.",
    link: "/services#cloud-infrastructure",
  },
  {
    name: "Security & Compliance",
    icon: <Shield size={24} className="text-orange-600" />,
    description: "Ensure data security and regulatory compliance.",
    link: "/services#security-compliance",
  },
  {
    name: "Customer Engagement",
    icon: <MessageSquare size={24} className="text-orange-600" />,
    description: "Enhance customer relationships with AI-driven tools.",
    link: "/services#customer-engagement",
  },
];

export default function Home() {
  const router = useRouter();

  // Smooth scroll helper for internal navigation
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>
          Evera Global | Strategic Business Consulting & Digital Transformation
        </title>
        <meta
          name="description"
          content="Unlock business growth with expert consulting services. We help companies navigate challenges, implement strategic solutions, and drive success."
        />
      </Head>

      {/* HERO SECTION */}
      <div
        className="h-screen w-full relative"
        style={{
          backgroundImage: "url('/hero3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Gradient overlay for improved text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/80" />
        <div className="relative z-10 h-full flex flex-col justify-between">
          {/* Title & Description */}
          <div className="flex flex-col items-center justify-center flex-grow px-4 text-center space-y-8 pt-24 pb-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold text-black max-w-4xl leading-tight"
            >
              Transform Your Business with{" "}
              <span className="inline-block text-orange-600 mt-4 md:mt-6">
                Expert Consulting
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="text-lg md:text-xl text-black max-w-2xl leading-relaxed"
            >
              We help businesses navigate complex challenges and achieve sustainable growth through strategic consulting and innovative solutions.
            </motion.p>
          </div>

          {/* Services Marquee with fade overlays */}
          <div className="w-full px-4 mb-4">
            <div className="relative overflow-hidden">
              {/* Left Fade */}
              <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent pointer-events-none" />
              {/* Right Fade */}
              <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
              <div className="flex animate-marquee">
                {[...services, ...services].map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => router.push(service.link)}
                    className="flex flex-col items-center p-2 md:p-4 mx-2 cursor-pointer"
                  >
                    <div className="text-orange-600 mb-1">{service.icon}</div>
                    <h4 className="text-sm md:text-lg font-bold text-black mb-1">
                      {service.name}
                    </h4>
                    <p className="text-gray-700 text-center text-xs">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
              <style jsx>{`
                @keyframes marquee {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                .animate-marquee {
                  display: flex;
                  width: calc(200%);
                  animation: marquee 20s linear infinite;
                }
              `}</style>
            </div>
          </div>

          {/* Learn More Button */}
          <div className="mb-12 md:mb-16 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("about-section")}
              className="inline-flex items-center justify-center py-5 px-10 rounded-full bg-orange-600 border border-orange-600 shadow-lg font-bold text-lg text-white hover:bg-orange-700 focus:ring-4 focus:ring-orange-200 transition-all"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>

      {/* ABOUT & DETAILS SECTION */}
      <div id="about-section" className="pt-24 pb-16 bg-white snap-start px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* About Intro */}
          <section className="space-y-8 py-12 text-center">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold text-black">
                Redefining Business Excellence
              </h2>
              <div className="h-1 w-24 bg-orange-600 mx-auto rounded-full" />
            </div>
            <div className="grid gap-8 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              <p>
                Evera Global stands at the forefront of business transformation, combining strategic consulting expertise with cutting-edge technology solutions.
              </p>
              <p>
                We specialize in helping enterprises navigate digital evolution through custom SaaS development and talent optimization.
              </p>
              <p>
                Our holistic approach integrates data-driven insights with operational excellence, empowering organizations to achieve sustainable growth.
              </p>
            </div>
          </section>

          {/* PartnersSection placed here */}
          <section className="py-20 bg-gray-50 relative overflow-hidden">
            <div className="text-center space-y-4 mb-12">
              <h3 className="text-3xl font-bold text-black">
                Trusted by Industry Leaders
              </h3>
              <div className="h-1 w-24 bg-orange-600 mx-auto rounded-full" />
            </div>
            <div className="flex animate-marquee">
              {[...partners, ...partners].map((partner, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex justify-center items-center p-6 bg-white rounded-xl shadow-md transition-all border-2 border-transparent hover:border-orange-600 mx-4"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={48}
                    height={48}
                    className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </motion.div>
              ))}
            </div>
            <style jsx>{`
              @keyframes marquee {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-marquee {
                display: flex;
                width: calc(200%);
                animation: marquee 20s linear infinite;
              }
            `}</style>
          </section>

          {/* Additional Sections ... */}
          <section className="py-20 bg-gray-50 snap-start">
            <div className="max-w-6xl mx-auto px-4 space-y-16">
              <div className="text-center space-y-4">
                <h3 className="text-4xl font-bold text-black">
                  Our Strategic Approach
                </h3>
                <div className="h-1 w-24 bg-orange-600 mx-auto rounded-full" />
                <p className="text-gray-600 text-lg max-w-xl mx-auto">
                  Combining global perspective with technical depth.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 bg-white rounded-xl shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Target className="w-8 h-8 text-orange-600" />
                    <h4 className="text-2xl font-semibold text-orange-600">
                      Precision Consulting
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Data-driven strategies tailored to your market position and growth objectives.
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 bg-white rounded-xl shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Globe className="w-8 h-8 text-orange-600" />
                    <h4 className="text-2xl font-semibold text-orange-600">
                      Global Talent Network
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Access to vetted international tech professionals trained in modern development practices.
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 bg-white rounded-xl shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Database className="w-8 h-8 text-orange-600" />
                    <h4 className="text-2xl font-semibold text-orange-600">
                      Tech Infrastructure
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Future-proof architecture design for SaaS solutions with emphasis on scalability and security.
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 bg-white rounded-xl shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Users className="w-8 h-8 text-orange-600" />
                    <h4 className="text-2xl font-semibold text-orange-600">
                      Enterprise Transformation
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive modernization through automation, AI integration, and workforce development.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-20 bg-white snap-start">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:space-x-12 space-y-12 md:space-y-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 text-center"
              >
                <h3 className="text-4xl font-semibold text-black">Our Mission</h3>
                <div className="h-1 w-24 bg-orange-600 mx-auto rounded-full my-4" />
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower organizations with strategic frameworks and technical infrastructure needed to thrive in digital-first markets.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 text-center"
              >
                <h3 className="text-4xl font-semibold text-black">Our Vision</h3>
                <div className="h-1 w-24 bg-orange-600 mx-auto rounded-full my-4" />
                <p className="text-lg text-gray-700 leading-relaxed">
                  To redefine enterprise success by creating synergies between human expertise, strategic innovation, and technological advancement on a global scale.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Meet the Team */}
          <section className="py-20 bg-gray-50 snap-start">
            <div className="max-w-6xl mx-auto px-4 space-y-16">
              <div className="text-center space-y-4">
                <h3 className="text-4xl font-bold text-black">
                  Meet the Team
                </h3>
                <div className="h-1 w-24 bg-orange-600 mx-auto rounded-full" />
                <p className="text-gray-600 text-lg max-w-xl mx-auto">
                  The strategic minds driving global transformation.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Omer Seid",
                    role: "Chairman & Founder",
                    bio: "Proven expertise from working in various US-based Fortune 500 companies. Leads innovation, strategy, and visionary growth initiatives.",
                  },
                  {
                    name: "Fatuma Ahmed",
                    role: "Head of Marketing & Brand Strategy",
                    bio: "Shapes brand identity, marketing, growth, and strategic positioning.",
                  },
                  {
                    name: "Momina Ibrahim",
                    role: "Head of Operations",
                    bio: "Drives operational excellence, scalability, and strategic execution.",
                  },
                  {
                    name: "Mina Seid",
                    role: "Head of Data Science",
                    bio: "Oversees developments in AI, Machine Learning and data-driven innovation.",
                  },
                  {
                    name: "Aden Darge",
                    role: "Head of Engineering",
                    bio: "Drives innovation, technical excellence, and scalable solutions.",
                  },
                  {
                    name: "TBD",
                    role: "Paralegal & Legal Coordinator",
                    bio: "Manages contracts, compliance, and legal documentation.",
                  },
                ].map((member, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="group p-8 bg-white rounded-xl shadow-lg border-2 border-transparent hover:border-orange-500 transition-all"
                  >
                    <div className="space-y-4">
                      <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-orange-600 font-bold text-xl">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                      <h4 className="text-2xl font-bold text-black">
                        {member.name}
                      </h4>
                      <p className="text-orange-600 font-medium mb-2">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Centered Explore Careers Button */}
              <div className="flex justify-center mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push("/careers")}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-lg transition-all"
                >
                  Explore Careers
                </motion.button>
              </div>
            </div>
          </section>

          {/* FINAL CALL-TO-ACTION */}
          <section id="final-cta" className="py-20 bg-white text-center snap-start">
            <div className="max-w-6xl mx-auto px-4">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-black">
                    Ready to Transform Your Business?
                  </h3>
                  <div className="h-1 w-24 bg-orange-600 mx-auto rounded-full" />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push("/services")}
                  className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-lg transition-all"
                >
                  Explore Our Services
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
                <p className="text-gray-600 mt-4">
                  Discover how our strategic solutions can drive your growth.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
