
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import OurBenefits from "../../components/OurBenefits";
import HeroSection from "../../components/HeroSection";

/* -------------------------------- Animations -------------------------------- */
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

/* ---------------------------- Decorative Divider ---------------------------- */
const SectionDivider = () => (
  <div className="w-full flex justify-center my-12">
    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-full"></div>
  </div>
);

/* --------------------------- Animated Highlight Box -------------------------- */
const HighlightBox = ({ title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="p-6 rounded-2xl shadow-md bg-white border border-indigo-100 hover:shadow-xl transition-all duration-300"
  >
    <h3 className="text-indigo-700 text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </motion.div>
);

/* ----------------------------- About Page ----------------------------- */
export default function About() {
  return (
    <div className="min-h-screen w-full bg-[#f3f6fb] text-black flex flex-col">
      <Navbar />

      <motion.main
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="flex flex-col flex-grow items-center"
      >

        {/* ⭐ UPDATED BANNER */}
<section className="relative w-full bg-[#f3f6fb]">
          
          {/* 1. Video Section */}
          <div className="relativew-full min-h-[24svh] md:min-h-[40svh]
      flex items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
              src="/assets/hero.mp4" 
            />
            <div className="absolute inset-0 bg-black/30 z-0"></div>
          </div>

          {/* 2. Floating CTA Banner (Replaced the navy text box) */}
          <div className="max-w-[1200px] mx-auto px-2 md:px-4 relative">
            <div className="absolute -top-1/2 left-1/2 translate-y-1/2 w-[85%] md:w-[75%] z-15">
              <div className="bg-gradient-to-r from-[#7A6CF6] to-[#4f38ea] px-6 py-5 md:px-10 md:py-8 rounded-xl shadow-2xl flex flex-col md:flex-row items-center justify-between text-white">
                
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                    About Us
                  </h3>
                  <p className="text-white/80 text-sm mt-1">
                    Let's build something innovative together.
                  </p>
                </div>

                
              </div>
            </div>
          </div>

          {/* Spacing to compensate for the absolute banner height */}
          <div className="h-20 md:h-32"></div>
        </section>

        {/* About Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl px-8 py-12 space-y-6 leading-relaxed"
        >
          <h2 className="text-3xl font-bold text-indigo-700 tracking-tight">Who We Are</h2>

          <p>
            We are committed to driving innovation and delivering tailored IT solutions that empower businesses to succeed in the digital age. With a team of seasoned experts in technology and consulting, we partner with companies of all sizes to provide solutions that meet their unique needs.<br/>

            From strategic consulting and system integration to software development and cloud services, our expertise spans a wide range of industries, allowing us to craft scalable and cost-effective solutions that align with your business goals.<br/>

            Our mission is to help businesses embrace the potential of technology to streamline their operations, improve productivity, and achieve sustainable growth.

            We pride ourselves on our customer-centric approach, working closely with you to understand your challenges and opportunities.<br/>

            This collaborative method ensures that we deliver customized solutions that not only solve your current issues but also future-proof your organization against upcoming technological trends.
          </p>
        </motion.div>

        <SectionDivider />

        <div className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl">
          <HighlightBox title="Our Expertise" desc="Our expertise spans ERP platforms, Web and Application Development, and Corporate IT Trainings for modern enterprises." />
          <HighlightBox title="Trusted Technology Partner" desc="Delivering scalable and customer-focused solutions." />
          <HighlightBox title="Future-Driven Vision" desc="We combine innovation with business strategy to create impact." />
        </div>

        <SectionDivider />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-10 justify-center mb-16 px-8 max-w-4xl text-center"
          viewport={{ once: true }}
        >
          {["Mr. Joginder Prasad Gupta - Co-founder", "Mrs. Anjali Gupta - Co-founder"].map(
            (name, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-xl bg-white shadow-md border border-indigo-100 hover:shadow-xl"
              >
                <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
              </motion.div>
            )
          )}
        </motion.div>

        <HeroSection />
        <OurBenefits />
      </motion.main>

      <Footer />
    </div>
  );
}
