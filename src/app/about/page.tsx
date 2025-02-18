"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { Target, Globe, Database, Users, Send, Check, ChevronRight } from "lucide-react";

export default function About() {

  return (
    <>
      <Head>
        <title>About Evera Global | Strategic Business Consulting & Digital Transformation</title>
        <meta name="description" content="Discover Evera Global's unique approach combining strategic consulting, technology innovation, and global talent solutions for enterprise growth and digital transformation." />
        <meta name="keywords" content="business consulting, digital transformation, SaaS solutions, global talent, enterprise strategy" />
        <meta property="og:title" content="About Evera Global | Strategic Business Consulting" />
        <meta property="og:description" content="Expert consulting services for enterprise growth and digital transformation" />
      </Head>

      <div className="pt-24 pb-16 bg-white min-h-screen px-6">
        <div className="max-w-6xl mx-auto space-y-20">

          {/* About Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 py-12 text-center">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold text-gray-900">Redefining Business Excellence</h2>
              <div className="h-1 w-24 bg-orange-600 mx-auto rounded-full"/>
            </div>
            <div className="grid gap-8 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              <p>
                Evera Global stands at the forefront of business transformation, combining strategic consulting expertise with 
                cutting-edge technology solutions. We specialize in helping enterprises navigate digital evolution through 
                custom SaaS development and global talent optimization.
              </p>
              <p>
                Our holistic approach integrates data-driven insights with operational excellence, empowering organizations 
                to achieve sustainable growth in today's competitive landscape.
              </p>
            </div>
          </motion.section>

          {/* Strategic Approach */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 space-y-16">
              <div className="text-center space-y-4">
                <h3 className="text-4xl font-bold text-gray-900">Our Strategic Approach</h3>
                <div className="h-1 w-24 bg-orange-600 mx-auto rounded-full"/>
                <p className="text-gray-600 text-lg max-w-xl mx-auto">
                  Combining global perspective with technical depth
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-8 bg-white rounded-xl shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <Target className="w-8 h-8 text-orange-600" />
                    <h4 className="text-2xl font-semibold text-orange-600">Precision Consulting</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Data-driven strategies tailored to your market position and growth objectives, 
                    backed by comprehensive analysis and industry benchmarks.
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-8 bg-white rounded-xl shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <Globe className="w-8 h-8 text-orange-600" />
                    <h4 className="text-2xl font-semibold text-orange-600">Global Talent Network</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Access to vetted international tech professionals trained in modern development 
                    practices and business alignment.
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-8 bg-white rounded-xl shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <Database className="w-8 h-8 text-orange-600" />
                    <h4 className="text-2xl font-semibold text-orange-600">Tech Infrastructure</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Future-proof architecture design for SaaS solutions with emphasis on 
                    scalability, security, and seamless integration.
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-8 bg-white rounded-xl shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <Users className="w-8 h-8 text-orange-600" />
                    <h4 className="text-2xl font-semibold text-orange-600">Enterprise Transformation</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive modernization through automation, AI integration, 
                    and workforce development programs.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Mission & Vision */}
          <div className="space-y-20 py-12">
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="space-y-8 max-w-4xl mx-auto text-center">
              <div className="space-y-4">
                <h3 className="text-4xl font-semibold text-gray-900">Our Mission</h3>
                <div className="h-1 w-24 bg-orange-600 mx-auto rounded-full"/>
              </div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                To empower organizations with strategic frameworks and technical infrastructure 
                needed to thrive in digital-first markets through innovative consulting solutions.
              </p>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="space-y-8 max-w-4xl mx-auto text-center">
              <div className="space-y-4">
                <h3 className="text-4xl font-semibold text-gray-900">Our Vision</h3>
                <div className="h-1 w-24 bg-orange-600 mx-auto rounded-full"/>
              </div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                To redefine enterprise success by creating synergies between human expertise, 
                strategic innovation, and technological advancement on a global scale.
              </p>
            </motion.section>
          </div>

          {/* Leadership Team - Gray Background */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 space-y-16">
              <div className="text-center space-y-4">
                <h3 className="text-4xl font-bold text-gray-900">Executive Leadership</h3>
                <div className="h-1 w-24 bg-orange-600 mx-auto rounded-full"/>
                <p className="text-gray-600 text-lg max-w-xl mx-auto">
                  The strategic minds driving global transformation
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { 
                    name: "Omer Seid", 
                    role: "Chairman & Founder",
                    bio: "Proven expertise from working in various US based fortune 500 companies. Leads innovation, strategy, and visionary growth initiatives."
                  },
                  { 
                    name: "Fatuma Ahmed", 
                    role: "Head of Marketing & Brand Strategy",
                    bio: "Shapes brand identity, marketing, growth, and strategic positioning."
                  },
                  { 
                    name: "Momina Ibrahim", 
                    role: "Head of Operations",
                    bio: "Drives operational excellence, scalability, and strategic execution."
                  },
                  { 
                    name: "Mina Seid", 
                    role: "Head of Data Science",
                    bio: "Oversees developments in AI, Machine Learning and data-driven innovation."
                  },
                  { 
                    name: "Aden Darge", 
                    role: "Head of Engineering",
                    bio: "Drives innovation, technical excellence, and scalable solutions."
                  },
                  { 
                    name: "John Doe", 
                    role: "Software Engineer",
                    bio: "Builds scalable, high-performance software solutions."
                  },
                  { 
                    name: "Jane Doe", 
                    role: "Software Engineer",
                    bio: "Builds scalable, high-performance software solutions."
                  },
                  { 
                    name: "James Doe", 
                    role: "Accountant",
                    bio: "Manages finances, ensures compliance, and optimizes profitability."
                  },
                  { 
                    name: "June Doe", 
                    role: "Paralegal & Legal Coordinator",
                    bio: "Manages contracts, compliance, and legal documentation."
                  }
                ].map((member, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="group p-8 bg-white rounded-xl shadow-lg border-2 border-transparent hover:border-orange-500 transition-all">
                    <div className="space-y-4">
                      <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-orange-600 font-bold text-xl">{member.name.charAt(0)}</span>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900">{member.name}</h4>
                      <p className="text-orange-600 font-medium mb-2">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

                {/* Add this after Leadership Team section */}
        <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="space-y-8">
            <div className="space-y-4">
            <h3 className="text-3xl font-bold text-gray-900">
                Ready to Transform Your Business?
            </h3>
            <div className="h-1 w-24 bg-orange-600 mx-auto rounded-full"/>
            </div>
      
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = "/services"}
                className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-lg transition-all"
            >
                Explore Our Services
            <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"/>
        </motion.button>

        <p className="text-gray-600 mt-4">
            Discover how our strategic solutions can drive your growth
      </p>
    </div>
    </div>
    </motion.section>
        </div>
      </div>
    </>
  );
}