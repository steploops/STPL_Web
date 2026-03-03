"use client";
import Head from "next/head"; // Required for SEO
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import HeroSection from "../components/HeroSection";
import WorkingProcess from "../components/WorkingProcess";
import ServicesGrid from "../components/ServicesGrid";
import Review from "../components/Review";
import Digital from "../components/Digital";
import Footer from "../components/Footer";

export default function HomePage() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 20,
    restDelta: 0.001,
  });

  // Enable smooth scrolling globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => (document.documentElement.style.scrollBehavior = "auto");
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* --- SEO SECTION --- */}
      <Head>
        <title>SAP Innovation & Custom Software Development Dehradun| Steploops|</title>
        <meta 
          name="description" 
          content="Transform your digital presence with our expert services in web development, design, and strategy. We help brands grow through innovative digital experiences." 
        />
        {/* Add Keywords (though less powerful than they used to be, they help some crawlers) */}
        <meta name="keywords" content="SAP Innovation, Custom Software, AI Solutions, Web Development,Software Development Dehradun" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:title" content="Your Brand Name | Creative Digital Solutions" />
        <meta property="og:description" content="Expert web development and digital strategy services." />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Your Brand Name" />
        <meta property="twitter:description" content="Expert web development and digital strategy services." />
      </Head>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r 
        from-indigo-500 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="flex flex-col space-y-0">
        {/* Ensure one of these components contains an <h1> tag */}
        <section id="home">
          <Home />
        </section>

        <section id="services">
          <ServicesGrid />
        </section>

        <section id="about">
          <HeroSection />
        </section>

        <section id="digital">
          <Digital />
        </section>

        <section id="reviews">
          <Review />
        </section>

        <section id="process">
          <WorkingProcess />
        </section>
      </main>

      <Footer />
      <BackToTopButton scrollYProgress={scrollYProgress} />
    </div>
  );
}

function BackToTopButton({ scrollYProgress }) {
  const opacity = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
  });

  return (
    <motion.button
      style={{ opacity }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 p-4
        bg-black hover:bg-neutral-800 text-white
        rounded-full shadow-lg
        hover:scale-110 active:scale-95
        transition-all duration-300
        flex items-center justify-center"
      aria-label="Back to Top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l7-7 7 7M12 5v14" />
      </svg>
    </motion.button>
  );
}