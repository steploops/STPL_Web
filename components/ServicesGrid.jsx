"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

// Icons - Added aria-hidden since they are decorative for screen readers
const TechIcon = () => <span className="text-4xl" aria-hidden="true">🖥️</span>;
const CloudIcon = () => <span className="text-4xl" aria-hidden="true">☁️</span>;
const SoftwareIcon = () => <span className="text-4xl" aria-hidden="true">⚙️</span>;
const ProcessIcon = () => <span className="text-4xl" aria-hidden="true">💼</span>;
const InfrastructureIcon = () => <span className="text-4xl" aria-hidden="true">🌐</span>;
const SupportIcon = () => <span className="text-4xl" aria-hidden="true">🛠️</span>;

// Animations
const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
  hover: { scale: 1.03 },
};

const overlayVariants = { initial: { opacity: 0 }, hover: { opacity: 1 } };
const imageVariants = { initial: { opacity: 0, scale: 1.1 }, hover: { opacity: 0.5, scale: 1 } };
const textVariants = {
  initial: { color: "#000", y: 0 },
  hover: { color: "#fff", y: -1 },
};
const iconVariants = { initial: { scale: 1 }, hover: { scale: 1.08 } };

// Services Data - Added more descriptive alt text for images
const servicesData = [
  {
    id: "SAP-Services",
    title: "SAP Innovation",
    altText: "Enterprise SAP innovation and business transformation services",
    description: "Transforming enterprises through innovative SAP technologies that unlock efficiency, agility, and sustainable growth.",
    icon: <TechIcon />,
    image: "/assets/service1.jpg",
  },
  {
    id: "Mobile-Development",
    title: "Mobile and Web Development",
    altText: "Professional mobile and web application development services",
    description: "Building robust mobile and web solutions that deliver exceptional performance and seamless scalability.",
    icon: <CloudIcon />,
    image: "/assets/mobile dev.jpg",
  },
  {
    id: "Training-and-Recruitment",
    title: "Training and Recruitment",
    altText: "IT training and recruitment for organizational performance",
    description: "Empower your workforce with targeted IT and business training programs that enhance skills.",
    icon: <SoftwareIcon />,
    image: "/assets/service3.jpg",
  },
  {
    id: "Custom-Software-Development",
    title: "Custom Software Development",
    altText: "Bespoke custom software engineering and development",
    description: "Tailored software that transforms complexity into simplicity. We engineer custom solutions.",
    icon: <ProcessIcon />,
    image: "/assets/service4.jpg",
  },
  {
    id: "Cloud-Technologies",
    title: "Cloud Technologies",
    altText: "Secure cloud infrastructure and automation platforms",
    description: "Deploy robust cloud environments with advanced automation and enterprise-grade security.",
    icon: <InfrastructureIcon />,
    image: "/assets/cloud.jpg",
  },
  {
    id: "AI-&-ML-Solutions",
    title: "AI and ML Solutions",
    altText: "Artificial Intelligence and Machine Learning business solutions",
    description: "Transform operations with AI solutions engineered for real-world business impact.",
    icon: <SupportIcon />,
    image: "/assets/Ai.jpg",
  },
];

// Card Component
const ServiceCard = ({ id, title, altText, description, icon, image, index }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/Testimonials/Testimonial#${id}`);
  };

  return (
    <motion.div
      onClick={handleClick}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()} // Accessibility: Keyboard support
      role="button" // Accessibility: Tells screen readers this is clickable
      tabIndex={0} // Accessibility: Makes the card focusable
      aria-label={`Learn more about our ${title} services`}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      custom={index}
      whileTap="hover"
      className="relative cursor-pointer bg-[#f3f6fb] flex flex-col justify-between h-full p-5 overflow-hidden group outline-none focus:ring-2 focus:ring-indigo-500"
    >
      {/* Hover Image Overlay */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none bg-black"
        variants={overlayVariants}
      >
        <motion.img
          src={image}
          alt={altText} // Use the specific descriptive alt text
          className="absolute inset-0 w-full h-full object-cover"
          variants={imageVariants}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </motion.div>

      {/* Icon */}
      <motion.div className="z-20 mb-4 flex justify-center items-center" variants={iconVariants}>
        <div className="filter drop-shadow-md">
           {icon}
        </div>
      </motion.div>

      {/* Text */}
      <motion.div className="z-20 text-center" variants={textVariants}>
        <motion.h3
          className="text-[15px] font-bold leading-tight mb-1 drop-shadow-lg"
          variants={textVariants}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-[10px] leading-snug font-medium drop-shadow-md"
          variants={textVariants}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

// Services Grid
const ServicesGrid = () => (
  <section 
    className="w-full bg-white border-b border-gray-300"
    aria-labelledby="services-heading"
  >
    {/* Screen Reader only heading if you don't want a visual title */}
    <h2 id="services-heading" className="sr-only">Our Digital Services</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {servicesData.map((service, index) => (
        <ServiceCard key={service.id} {...service} index={index} />
      ))}
    </div>
  </section>
);

export default ServicesGrid;