"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";

const CallToAction = () => {
  const router = useRouter();

  return (
    <section id="final-cta" className="py-20 bg-white dark:bg-gray-900 snap-start">
      <div className="max-w-6xl px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden border border-orange-100 shadow-xl bg-gradient-to-r from-orange-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl dark:border-gray-700"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 text-orange-500/10 dark:text-orange-400/10">
            <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M150 0C232.843 0 300 67.1573 300 150C300 232.843 232.843 300 150 300C67.1573 300 0 232.843 0 150C0 67.1573 67.1573 0 150 0ZM150 50C205.228 50 250 94.7715 250 150C250 205.228 205.228 250 150 250C94.7715 250 50 205.228 50 150C50 94.7715 94.7715 50 150 50Z" fill="currentColor"/>
            </svg>
          </div>
          
          <div className="absolute bottom-0 left-0 text-orange-500/10 dark:text-orange-400/10">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M196 4L4 196" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
              <path d="M196 54L54 196" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
              <path d="M196 104L104 196" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
            </svg>
          </div>
          
          <div className="relative z-10 px-8 py-16 text-center md:py-20 md:px-20">
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.h3 
                  className="text-3xl font-bold text-black dark:text-white md:text-4xl"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Ready to Transform Your Business?
                </motion.h3>
                <motion.div 
                  className="w-24 h-1 mx-auto bg-orange-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }} // 24 * 4 = 96px
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                <motion.p
                  className="max-w-2xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Take the first step towards sustainable growth and digital excellence with our expert team.
                </motion.p>
              </div>
              
              <motion.div
                className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(234, 88, 12, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push("/services")}
                  className="inline-flex items-center justify-center w-full px-8 py-4 font-semibold text-white transition-all bg-orange-600 rounded-full shadow-lg sm:w-auto group hover:bg-orange-700"
                >
                  Explore Our Services
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </motion.span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push("/contact")}
                  className="inline-flex items-center justify-center w-full px-8 py-4 font-semibold text-orange-600 transition-all bg-white border-2 border-orange-600 rounded-full shadow-md dark:bg-gray-800 sm:w-auto group hover:bg-orange-50 dark:hover:bg-gray-700"
                >
                  Schedule a Consultation
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.span>
                </motion.button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Join the hundreds of businesses that have accelerated their growth with our solutions
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
