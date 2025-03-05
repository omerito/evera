"use client";

import { motion } from "framer-motion";
import React from "react";
import { 
  Search, 
  Target, 
  CheckCircle, 
  PlaneTakeoff,
  Globe,
  Users,
  MessageSquare,
  Database,
  Cpu,
  Clock
} from "lucide-react";

const Process = () => {
  return (
    <section id="process" className="relative py-20 overflow-hidden bg-white dark:bg-gray-900">
      {/* Background SVG Pattern - Improved visibility for dark mode */}
      <div className="absolute inset-0 pointer-events-none">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 1440 800" 
          preserveAspectRatio="none" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-[0.08] dark:opacity-[0.25]"
        >
          <path 
            d="M-161 318.5L1599.5 318.5" 
            stroke="#EA580C" 
            strokeWidth="2"
            strokeDasharray="12 12"
            className="dark:stroke-orange-500"
          />
          <circle cx="1300" cy="318" r="50" fill="#EA580C" fillOpacity="0.3" className="dark:fill-orange-500 dark:fill-opacity-[0.15]" />
          <circle cx="800" cy="600" r="100" fill="#EA580C" fillOpacity="0.3" className="dark:fill-orange-500 dark:fill-opacity-[0.15]" />
          <path 
            d="M-100,700 Q400,500 900,700 T1900,300" 
            stroke="#EA580C" 
            strokeOpacity="0.2" 
            strokeWidth="3" 
            fill="none"
            className="dark:stroke-orange-500 dark:stroke-opacity-[0.3]"
          />
        </svg>
      </div>

      <div className="container relative z-10">
        {/* Who We Are Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="p-10 mb-20 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm"
        >
          <div className="flex flex-col items-center mb-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]"
            >
              Who We Are
            </motion.h2>
            <div className="w-24 h-1 mb-6 bg-orange-600 rounded-full"></div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 text-body-color dark:text-body-color-dark"
            >
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 bg-white border-2 border-orange-600 shadow-lg dark:bg-gray-800/80 dark:border-orange-600/70 rounded-xl"
              >
                <h3 className="mb-4 text-2xl font-semibold text-orange-600">Our Mission</h3>
                <p>
                  To empower organizations with strategic frameworks and technical infrastructure needed to thrive in digital-first markets.
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 text-body-color dark:text-body-color-dark"
            >
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 bg-white border-2 border-orange-600 shadow-lg dark:bg-gray-800/80 dark:border-orange-600/70 rounded-xl"
              >
                <h3 className="mb-4 text-2xl font-semibold text-orange-600">Our Vision</h3>
                <p>
                  To redefine enterprise success by creating synergies between human expertise, and technological advancement on a global scale.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Strategic Framework */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-black dark:text-white">Our Strategic Approach</h3>
            <div className="w-32 h-1 mx-auto mb-6 bg-orange-600 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-lg text-body-color dark:text-body-color-dark">
              Combining global perspective with technical depth to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 transition-all bg-white border-2 border-orange-600 shadow-md dark:bg-gray-800 rounded-xl hover:shadow-lg"
            >
              <Target className="w-10 h-10 mb-4 text-orange-600" />
              <h4 className="mb-3 text-xl font-semibold text-orange-600">Precision Consulting</h4>
              <p className="text-body-color dark:text-body-color-dark">
                Data-driven strategies tailored to your market position and growth objectives.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 transition-all bg-white border-2 border-orange-600 shadow-md dark:bg-gray-800 rounded-xl hover:shadow-lg"
            >
              <Globe className="w-10 h-10 mb-4 text-orange-600" />
              <h4 className="mb-3 text-xl font-semibold text-orange-600">Global Talent Network</h4>
              <p className="text-body-color dark:text-body-color-dark">
                Access to vetted international tech professionals trained in modern practices.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 transition-all bg-white border-2 border-orange-600 shadow-md dark:bg-gray-800 rounded-xl hover:shadow-lg"
            >
              <Database className="w-10 h-10 mb-4 text-orange-600" />
              <h4 className="mb-3 text-xl font-semibold text-orange-600">Tech Infrastructure</h4>
              <p className="text-body-color dark:text-body-color-dark">
                Future-proof architecture design with emphasis on scalability and security.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 transition-all bg-white border-2 border-orange-600 shadow-md dark:bg-gray-800 rounded-xl hover:shadow-lg"
            >
              <Cpu className="w-10 h-10 mb-4 text-orange-600" />
              <h4 className="mb-3 text-xl font-semibold text-orange-600">Enterprise Transformation</h4>
              <p className="text-body-color dark:text-body-color-dark">
                Comprehensive modernization through automation and AI integration.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Process Visualization - NO connecting lines */}
        <div className="mb-24">
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-black dark:text-white">Our Process</h3>
            <div className="w-24 h-1 mx-auto mb-4 bg-orange-600 rounded-full"></div>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-body-color dark:text-body-color-dark">
              A streamlined approach focused on delivering value at every stage.
            </p>
          </div>
          
          <div className="grid gap-12 md:grid-cols-4">
            {/* Discovery Phase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center w-20 h-20 mb-6 bg-orange-100 rounded-full shadow-lg dark:bg-orange-900/40">
                <Search className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-black dark:text-white">Discovery</h3>
              <p className="max-w-[220px] text-center text-body-color dark:text-body-color-dark">
                We understand your business goals and challenges.
              </p>
            </motion.div>
            
            {/* Strategy Phase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center w-20 h-20 mb-6 bg-orange-100 rounded-full shadow-lg dark:bg-orange-900/40">
                <Target className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-black dark:text-white">Strategy</h3>
              <p className="max-w-[220px] text-center text-body-color dark:text-body-color-dark">
                We develop a tailored plan for your success.
              </p>
            </motion.div>
            
            {/* Implementation Phase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center w-20 h-20 mb-6 bg-orange-100 rounded-full shadow-lg dark:bg-orange-900/40">
                <PlaneTakeoff className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-black dark:text-white">Implementation</h3>
              <p className="max-w-[220px] text-center text-body-color dark:text-body-color-dark">
                We execute with precision and agility.
              </p>
            </motion.div>
            
            {/* Growth Phase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center w-20 h-20 mb-6 bg-orange-100 rounded-full shadow-lg dark:bg-orange-900/40">
                <MessageSquare className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-black dark:text-white">Growth</h3>
              <p className="max-w-[220px] text-center text-body-color dark:text-body-color-dark">
                We support your continuous evolution.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Quality Assurance Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-10 mb-10 rounded-2xl bg-gradient-to-br from-gray-50 to-orange-50 dark:from-gray-800 dark:to-gray-900"
        >
          <h3 className="mb-8 text-3xl font-bold text-center text-black dark:text-white">Our Commitment to Excellence</h3>
          
          <div className="grid gap-10 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-20 h-20 mb-6 bg-orange-100 rounded-full shadow-md dark:bg-orange-900/40">
                <CheckCircle className="w-10 h-10 text-orange-600" />
              </div>
              <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">Quality Assurance</h4>
              <p className="text-body-color dark:text-body-color-dark">
                Rigorous testing and validation at every stage of development.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-20 h-20 mb-6 bg-orange-100 rounded-full shadow-md dark:bg-orange-900/40">
                <Clock className="w-10 h-10 text-orange-600" />
              </div>
              <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">Timely Delivery</h4>
              <p className="text-body-color dark:text-body-color-dark">
                Clear timelines with regular updates and milestone achievements.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-20 h-20 mb-6 bg-orange-100 rounded-full shadow-md dark:bg-orange-900/40">
                <Users className="w-10 h-10 text-orange-600" />
              </div>
              <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">Client Collaboration</h4>
              <p className="text-body-color dark:text-body-color-dark">
                Transparent communication and regular touchpoints throughout the process.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;