import SingleService from "./SingleService";
import servicesData from "./ServicesData";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <section id="services" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]">
                Our Services
              </h2>
              <div className="w-20 h-1 mx-auto mb-6 bg-orange-500 rounded-full"></div>
              <p className="mx-auto mb-10 max-w-[570px] text-base text-body-color dark:text-body-color-dark">
                We offer comprehensive solutions tailored to your business needs, helping you achieve digital excellence and sustainable growth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <SingleService service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;