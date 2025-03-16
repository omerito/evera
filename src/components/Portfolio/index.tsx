"use client";

import { motion } from "framer-motion";
import SinglePortfolio from "./SinglePortfolio";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { portfolioData } from "./PortfolioData";

// Add a type definition for portfolio items
type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
};

const Portfolio = () => {
  // Only show first 3 items on landing page
  const featuredPortfolios = portfolioData.slice(0, 3);

  return (
    <section id="portfolio" className="py-16 overflow-hidden bg-gray-50 dark:bg-gray-900/50 md:py-20 lg:py-28">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]">
              Our Portfolio
            </h2>
            <div className="h-1 mx-auto mb-6 bg-orange-600 rounded-full w-28"></div>
            <p className="mx-auto mb-10 max-w-[570px] text-base text-body-color dark:text-body-color-dark">
              Take a look at some of our recent projects that showcase our expertise and commitment to excellence.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPortfolios.map((portfolio: PortfolioItem, index: number) => (
            <motion.div
              key={portfolio.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <SinglePortfolio portfolio={portfolio} />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center px-8 py-4 text-base font-medium text-white transition-all bg-orange-600 rounded-lg hover:bg-orange-700 dark:hover:bg-orange-500"
          >
            View All Projects
            <ChevronRight size={20} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
