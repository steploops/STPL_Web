import React from "react";

const brands = [
  { name: "The Dream Kitchens", logo: "/logos/crm-tdk.png", variant: "circle" },
  { name: "Palo Alto", logo: "/logos/OIP.webp" },
  { name: "Hurla Hardware", logo: "/logos/hurla.webp" },
  { name: "Mentor Water Group", logo: "/logos/Mentor-Water-Pvt-Ltd-Logo-.png.webp" },
];

const Partners = () => {
  return (
    <section className="bg-white py-20 overflow-hidden relative">

      {/* Marquee Animation Style (Scoped & Clean) */}
      <style>
        {`
          .marquee-container {
            display: flex;
            width: max-content;
            animation: marquee 30s linear infinite;
          }

          .marquee-wrapper:hover .marquee-container {
            animation-play-state: paused;
          }

          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#7A6CF6] uppercase tracking-wide">
            Our Clients
          </h2>
          <div className="w-20 h-1 bg-[#7A6CF6] mx-auto mt-4 rounded-full" />
        </div>

        {/* Marquee */}
        <div className="marquee-wrapper overflow-hidden">
          <div className="marquee-container gap-12 md:gap-20 items-center py-6">

            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-5 shrink-0 group"
              >
                {/* Logo Circle Container */}
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:border-[#7A6CF6] group-hover:-translate-y-2 overflow-hidden">

                  <img
                    src={brand.logo}
                    alt={brand.name}
                    loading="lazy"
                    className={
                      brand.variant === "circle"
                        ? "w-full h-full object-cover rounded-full"
                        : "max-w-[75%] max-h-[75%] object-contain"
                    }
                  />
                </div>

                {/* Brand Name */}
                <span className="text-[11px] font-semibold tracking-[0.25em] text-slate-500 uppercase transition-colors duration-300 group-hover:text-[#7A6CF6]">
                  {brand.name}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Partners;