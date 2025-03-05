"use client";

import { motion } from "framer-motion";
import SingleTestimonial from "./SingleTestimonial";
import testimonialsData from "./TestimonialsData";
import Image from "next/image";
import partnersData from "./PartnersData";

const Testimonials = () => {
  return (
    <section className="relative z-10 py-16 overflow-hidden bg-gray-50 dark:bg-gray-900/50 md:py-20 lg:py-28">
      {/* Decorative SVGs */}
      <div className="absolute top-0 right-0 z-[-1] opacity-30">
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="400" r="400" fill="url(#paint0_radial_testimonial)" />
          <defs>
            <radialGradient id="paint0_radial_testimonial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 400) rotate(90) scale(400)">
              <stop stopColor="#EA580C" />
              <stop offset="1" stopColor="#EA580C" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 z-[-1] opacity-30">
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="250" fill="url(#paint0_linear_testimonial)" />
          <defs>
            <linearGradient id="paint0_linear_testimonial" x1="0" y1="500" x2="500" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EA580C" />
              <stop offset="1" stopColor="#EA580C" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]">
              What Our Clients Say
            </h2>
            <div className="h-1 mx-auto mb-6 bg-orange-600 rounded-full w-28"></div>
            <p className="mx-auto mb-10 max-w-[570px] text-base text-body-color dark:text-body-color-dark">
              Discover why leading organizations trust us to deliver exceptional results and drive their digital transformation.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SingleTestimonial testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
        
        {/* Brands Section - Using your existing partners data */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20"
        >
          <div className="mb-10 text-center">
            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
              Trusted By Industry Leaders
            </h3>
            <div className="w-20 h-1 mx-auto bg-orange-600 rounded-full"></div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partnersData.map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  y: -5,
                  scale: 1.05,
                  filter: "grayscale(0)"
                }}
                initial={{ filter: "grayscale(1)" }}
                transition={{ duration: 0.3 }}
                className="relative w-auto h-16 p-2 transition-all border-2 border-transparent rounded-lg dark:opacity-60 dark:hover:opacity-100 hover:border-orange-600/20"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;