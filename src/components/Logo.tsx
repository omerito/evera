"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <div className="flex items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/logo-evera.png" // Place your custom logo image in the public folder
          alt="Evera Global"
          width={160}
          height={160}
          className="object-contain bg-transparent"
        />
      </motion.div>
      {/* <span className="ml-2 text-2xl font-bold text-black">Evera Global</span> */}
    </div>
  );
}
