"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  const router = useRouter();

  // Refs for the additional full-screen sections (if needed)
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create an observer with a threshold of 90% visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
            // Delay navigation slightly to allow scroll snapping to complete
            setTimeout(() => {
              if (entry.target === aboutRef.current) {
                router.push("/about");
              } else if (entry.target === servicesRef.current) {
                router.push("/services");
              } else if (entry.target === contactRef.current) {
                router.push("/contact");
              }
            }, 300);
          }
        });
      },
      { threshold: 0.9 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, [router]);

  const handleLearnMore = () => {
    router.push("/about");
  };

  return (
    <>
      <Head>
        <title>Expert Business Consulting | Elevate Your Business</title>
        <meta
          name="description"
          content="Unlock business growth with expert consulting services. We help companies navigate challenges, implement strategic solutions, and drive success."
        />
      </Head>

      {/* Hero Section with background image from a local path */}
      <div
        className="h-screen w-full overflow-auto pt-16 snap-start"
        style={{
          backgroundImage: "url('/hero3.jpg')", // Change path as needed
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Optionally add a semi-transparent overlay for text readability */}
        <main className="flex flex-col items-center justify-center h-full text-center space-y-6 px-4 bg-white/60">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bold text-black"
          >
            Transform Your Business with{" "}
            <span className="block text-orange-600 mt-4">
              Expert Consulting
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl"
          >
            We help businesses navigate complex challenges and achieve sustainable
            growth through strategic consulting and innovative solutions.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLearnMore}
            className="w-full sm:w-auto h-16 inline-flex items-center justify-center py-4 px-6 rounded-full bg-orange-600 border border-orange-600 shadow font-bold text-white hover:bg-orange-600 focus:ring focus:ring-orange-200 transition duration-200"
          >
            Learn More
          </motion.button>

          

        </main>
      </div>
    </>
  );
}
