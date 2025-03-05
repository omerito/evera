import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center w-full min-h-screen overflow-hidden bg-white dark:bg-gray-900"
    >
      {/* Abstract tech-inspired background elements */}
      <div className="absolute inset-0 z-0">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90 dark:from-gray-900/90 dark:via-gray-900/80 dark:to-gray-900/90" />
        
        {/* Network nodes and connections - right side */}
        <svg className="absolute top-0 right-0 w-full h-full opacity-20 dark:opacity-30" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="nodes-and-links">
            {/* Animated gradient for the network */}
            <defs>
              <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EA580C" stopOpacity="1">
                  <animate attributeName="stopOpacity" values="1;0.5;1" dur="5s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#EA580C" stopOpacity="0.2">
                  <animate attributeName="stopOpacity" values="0.2;0.7;0.2" dur="5s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
              
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            
            {/* Network connections */}
            <path d="M800,200 Q650,350 700,500 T500,800" stroke="url(#networkGradient)" strokeWidth="1.5" fill="none" />
            <path d="M900,300 Q750,350 800,600 T600,900" stroke="url(#networkGradient)" strokeWidth="1.5" fill="none" />
            <path d="M700,100 Q600,250 500,400 T300,700" stroke="url(#networkGradient)" strokeWidth="1.5" fill="none" />
            <path d="M850,150 Q700,300 600,450 T400,750" stroke="url(#networkGradient)" strokeWidth="1.5" fill="none" />
            <path d="M750,250 Q650,400 550,550 T350,800" stroke="url(#networkGradient)" strokeWidth="1.5" fill="none" />
            
            {/* Network nodes */}
            <circle cx="800" cy="200" r="6" fill="#EA580C" filter="url(#glow)">
              <animate attributeName="r" values="6;8;6" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="700" cy="500" r="8" fill="#EA580C" filter="url(#glow)">
              <animate attributeName="r" values="8;10;8" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="500" cy="800" r="7" fill="#EA580C" filter="url(#glow)">
              <animate attributeName="r" values="7;9;7" dur="3.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="900" cy="300" r="5" fill="#EA580C" filter="url(#glow)">
              <animate attributeName="r" values="5;7;5" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="800" cy="600" r="9" fill="#EA580C" filter="url(#glow)">
              <animate attributeName="r" values="9;11;9" dur="4.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="600" cy="900" r="6" fill="#EA580C" filter="url(#glow)">
              <animate attributeName="r" values="6;8;6" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="700" cy="100" r="7" fill="#EA580C" filter="url(#glow)">
              <animate attributeName="r" values="7;9;7" dur="3.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="500" cy="400" r="8" fill="#EA580C" filter="url(#glow)">
              <animate attributeName="r" values="8;10;8" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="300" cy="700" r="6" fill="#EA580C" filter="url(#glow)">
              <animate attributeName="r" values="6;8;6" dur="3s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>
        
        {/* Data flow visualization - left side */}
        <svg className="absolute bottom-0 left-0 w-full h-full opacity-20 dark:opacity-30" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="dataFlowGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EA580C" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#EA580C" stopOpacity="0.1" />
            </linearGradient>
            
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Abstract data flow paths */}
          <path d="M0,500 C150,450 250,650 350,600 S500,400 600,450 S750,650 900,500" stroke="url(#dataFlowGradient)" strokeWidth="2" fill="none" filter="url(#softGlow)">
            <animate attributeName="d" 
              values="M0,500 C150,450 250,650 350,600 S500,400 600,450 S750,650 900,500;
                     M0,520 C150,470 250,670 350,620 S500,420 600,470 S750,670 900,520;
                     M0,500 C150,450 250,650 350,600 S500,400 600,450 S750,650 900,500" 
              dur="15s" 
              repeatCount="indefinite" />
          </path>
          
          <path d="M100,600 C200,550 300,650 400,600 S550,500 650,550 S800,650 950,600" stroke="url(#dataFlowGradient)" strokeWidth="1.5" fill="none" filter="url(#softGlow)">
            <animate attributeName="d" 
              values="M100,600 C200,550 300,650 400,600 S550,500 650,550 S800,650 950,600;
                     M100,620 C200,570 300,670 400,620 S550,520 650,570 S800,670 950,620;
                     M100,600 C200,550 300,650 400,600 S550,500 650,550 S800,650 950,600" 
              dur="12s" 
              repeatCount="indefinite" />
          </path>
          
          <path d="M50,700 C150,650 250,750 350,700 S500,600 600,650 S750,750 900,700" stroke="url(#dataFlowGradient)" strokeWidth="1" fill="none" filter="url(#softGlow)">
            <animate attributeName="d" 
              values="M50,700 C150,650 250,750 350,700 S500,600 600,650 S750,750 900,700;
                     M50,720 C150,670 250,770 350,720 S500,620 600,670 S750,770 900,720;
                     M50,700 C150,650 250,750 350,700 S500,600 600,650 S750,750 900,700" 
              dur="18s" 
              repeatCount="indefinite" />
          </path>
          
          {/* Data points */}
          <circle cx="150" cy="450" r="4" fill="#EA580C" filter="url(#softGlow)">
            <animate attributeName="cy" values="450;470;450" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle cx="350" cy="600" r="5" fill="#EA580C" filter="url(#softGlow)">
            <animate attributeName="cy" values="600;620;600" dur="10s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="450" r="6" fill="#EA580C" filter="url(#softGlow)">
            <animate attributeName="cy" values="450;470;450" dur="9s" repeatCount="indefinite" />
          </circle>
          <circle cx="900" cy="500" r="4" fill="#EA580C" filter="url(#softGlow)">
            <animate attributeName="cy" values="500;520;500" dur="7s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
              >
                Transform Your Business with{" "}
                <span className="inline-block mt-4 text-orange-600 dark:text-orange-500 md:mt-6">
                  Expert Consulting
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="mb-12 text-base !leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg md:text-xl"
              >
                We help businesses navigate complex challenges and achieve sustainable growth through strategic consulting and innovative solutions.
              </motion.p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Link
                    href="/services"
                    className="relative inline-flex items-center justify-center w-full px-10 py-4 overflow-hidden font-bold text-white transition-all duration-300 rounded-full shadow-lg group bg-gradient-to-r from-orange-600 to-orange-500 hover:shadow-orange-500/30 hover:shadow-xl sm:w-auto"
                  >
                    <span className="absolute inset-0 transition-opacity opacity-0 bg-white/20 group-hover:opacity-100"></span>
                    <span className="relative flex items-center">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4V20M12 4L6 10M12 4L18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Get Started
                    </span>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Link
                    href="#services"
                    className="relative inline-flex items-center justify-center w-full px-10 py-4 overflow-hidden font-bold text-gray-800 transition-all duration-300 bg-transparent border-2 border-gray-800 rounded-full group hover:bg-gray-800 hover:text-white dark:border-gray-200 dark:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900 sm:w-auto"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span className="relative flex items-center">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5L15 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Learn More
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;