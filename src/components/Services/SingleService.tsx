import { Service } from "@/types/service";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SingleService = ({ service }: { service: Service }) => {
  const { icon, title, paragraph, link } = service;
  return (
    <div className="w-full h-full">
      <motion.div 
        className="flex flex-col h-full p-8 transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 hover:shadow-md dark:bg-dark"
        whileHover={{ boxShadow: "0 10px 25px -5px rgba(234, 88, 12, 0.1)" }}
      >
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-orange-600 bg-opacity-10 text-orange-600 transition-all duration-300 hover:bg-opacity-20">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color flex-grow">
          {paragraph}
        </p>
        {link && (
          <Link 
            href={link} 
            className="inline-flex items-center mt-6 font-medium text-orange-600 hover:text-orange-700 group"
          >
            Learn more
            <motion.span 
              className="ml-2"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowRight size={16} />
            </motion.span>
          </Link>
        )}
      </motion.div>
    </div>
  );
};

export default SingleService;