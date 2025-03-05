"use client";

import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name, designation, content, image, star } = testimonial;
  
  return (
    <motion.div 
      className="relative h-full p-8 bg-white border-2 border-transparent rounded-lg shadow-md dark:bg-gray-800/50 dark:border-gray-700"
      whileHover={{ 
        y: -10, 
        borderColor: "#EA580C",
        boxShadow: "0 20px 25px -5px rgba(234, 88, 12, 0.1), 0 10px 10px -5px rgba(234, 88, 12, 0.04)"
      }}
      transition={{ 
        duration: 0.3,
        borderColor: { duration: 0.2 }
      }}
    >
      {/* Quote mark SVG */}
      <motion.div 
        className="absolute -top-4 -left-4"
        whileHover={{ rotate: [0, -5, 5, -5, 0] }}
        transition={{ duration: 0.5 }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="20" fill="#EA580C" fillOpacity="0.1"/>
          <path d="M18 22H13.4C13.2 22 13 21.9 12.9 21.7C12.8 21.5 12.8 21.3 12.9 21.1L16.3 14.9C16.4 14.7 16.6 14.6 16.8 14.6H20.4C20.5 14.6 20.7 14.7 20.8 14.8C20.9 14.9 20.9 15.1 20.9 15.2L18.3 21.4H20.6C20.8 21.4 21 21.5 21.1 21.7C21.2 21.9 21.2 22.1 21.1 22.3L19.1 26.7C19 26.9 18.8 27 18.6 27H15C14.9 27 14.7 26.9 14.6 26.8C14.5 26.7 14.5 26.5 14.5 26.4L18 22Z" fill="#EA580C"/>
          <path d="M28 22H23.4C23.2 22 23 21.9 22.9 21.7C22.8 21.5 22.8 21.3 22.9 21.1L26.3 14.9C26.4 14.7 26.6 14.6 26.8 14.6H30.4C30.5 14.6 30.7 14.7 30.8 14.8C30.9 14.9 30.9 15.1 30.9 15.2L28.3 21.4H30.6C30.8 21.4 31 21.5 31.1 21.7C31.2 21.9 31.2 22.1 31.1 22.3L29.1 26.7C29 26.9 28.8 27 28.6 27H25C24.9 27 24.7 26.9 24.6 26.8C24.5 26.7 24.5 26.5 24.5 26.4L28 22Z" fill="#EA580C"/>
        </svg>
      </motion.div>
      
      <div className="mb-6">
        <motion.div 
          className="flex items-center mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Star 
                  size={18} 
                  className={index < star ? "text-orange-500 fill-orange-500" : "text-gray-300"} 
                />
              </motion.div>
            ))}
        </motion.div>
        <p className="text-base italic text-body-color dark:text-body-color-dark">
          &ldquo;{content}&rdquo;
        </p>
      </div>
      
      <div className="flex items-center mt-auto">
        <motion.div 
          className="relative mr-4 overflow-hidden border-2 border-transparent rounded-full w-14 h-14"
          whileHover={{ 
            scale: 1.05,
            borderColor: "#EA580C" 
          }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </motion.div>
        <div>
          <motion.h3 
            className="text-lg font-semibold text-black dark:text-white"
            whileHover={{ color: "#EA580C" }}
            transition={{ duration: 0.2 }}
          >
            {name}
          </motion.h3>
          <p className="text-sm text-body-color dark:text-body-color-dark">
            {designation}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleTestimonial;