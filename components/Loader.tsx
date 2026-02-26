"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const Loader = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  // Match your site's professional route names
  const routes = {
    "/": "Innovation",
    "/about": "Expertise",
    "/services": "Services",
    "/who-we-are": "Our Vision",
    "/contact": "Connect",
  };

  useEffect(() => {
    setIsMounted(true);
    // Lock scroll while loading
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const currentRouteName = routes[router.pathname] || "Steploops";

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ delay: 2.2, duration: 1, ease: [0.87, 0, 0.13, 1] }}
      >
        {/* Subtle Background Pattern (Matching your innovative theme) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#7A6CF6 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
        </div>

        <div className="relative overflow-hidden flex flex-col items-center">
          {/* Main Logo/Brand Text */}
          <motion.div
            className="flex items-center space-x-3 mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-white text-3xl md:text-5xl font-bold tracking-tighter uppercase">
              Step<span className="text-[#7A6CF6]">loops</span>
            </span>
          </motion.div>

          {/* Animated Progress Line */}
          <motion.div 
            className="w-48 h-[2px] bg-gray-800 relative overflow-hidden mb-6"
          >
            <motion.div 
              className="absolute inset-0 bg-[#7A6CF6]"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Staggered Text Reveal */}
          <div className="h-10 overflow-hidden relative w-full flex justify-center">
            <motion.p
              className="text-gray-400 text-sm md:text-base font-medium uppercase tracking-[0.3em]"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
            >
              {currentRouteName}
            </motion.p>
          </div>
        </div>

        {/* Professional "Slide-up" Curtain Layers */}
        <motion.div
          className="absolute inset-0 bg-[#7A6CF6] z-[-1]"
          initial={{ y: "100%" }}
          animate={{ y: "-100%" }}
          transition={{ delay: 2.1, duration: 0.8, ease: [0.87, 0, 0.25, 1] }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;