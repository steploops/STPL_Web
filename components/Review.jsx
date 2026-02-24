import React, { useRef, useEffect, useState } from "react";

const brands = [
  { name: "The Dream Kitchens", logo: "/logos/crm-tdk.png", variant: "circle" },
  { name: "Palo Alto", logo: "/logos/OIP.webp" },
  { name: "Hurla Hardware", logo: "/logos/hurla.webp" },
  { name: "Mentor Water Group", logo: "/logos/Mentor-Water-Pvt-Ltd-Logo-.png.webp" },
  { name: "Munish Forge", logo: "/logos/munish.png" },
];

const Partners = () => {
  const trackRef = useRef(null);
  const [duration, setDuration] = useState(25);

  // Responsive speed control
  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth < 640) setDuration(18);
      else if (window.innerWidth < 1024) setDuration(22);
      else setDuration(28);
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  // Drag Support
  useEffect(() => {
    const track = trackRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const start = (e) => {
      isDown = true;
      track.style.animationPlayState = "paused";
      startX = e.pageX || e.touches[0].pageX;
      scrollLeft = track.scrollLeft;
    };

    const move = (e) => {
      if (!isDown) return;
      const x = e.pageX || e.touches[0].pageX;
      const walk = (x - startX) * 1.5;
      track.scrollLeft = scrollLeft - walk;
    };

    const end = () => {
      isDown = false;
      track.style.animationPlayState = "running";
    };

    track.addEventListener("mousedown", start);
    track.addEventListener("touchstart", start);
    track.addEventListener("mousemove", move);
    track.addEventListener("touchmove", move);
    track.addEventListener("mouseleave", end);
    track.addEventListener("mouseup", end);
    track.addEventListener("touchend", end);

    return () => {
      track.removeEventListener("mousedown", start);
      track.removeEventListener("touchstart", start);
      track.removeEventListener("mousemove", move);
      track.removeEventListener("touchmove", move);
      track.removeEventListener("mouseleave", end);
      track.removeEventListener("mouseup", end);
      track.removeEventListener("touchend", end);
    };
  }, []);

  return (
    <section className="bg-white py-20 relative overflow-hidden">

      <style>
        {`
          .marquee-track {
            display: flex;
            width: max-content;
            animation: scroll linear infinite;
            will-change: transform;
          }

          @keyframes scroll {
            from {
              transform: translate3d(0, 0, 0);
            }
            to {
              transform: translate3d(-50%, 0, 0);
            }
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#7A6CF6] uppercase tracking-wide">
            Our Partners
          </h2>
          <div className="w-20 h-1 bg-[#7A6CF6] mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative">

          {/* Fade Left */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />

          {/* Fade Right */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="overflow-hidden cursor-grab active:cursor-grabbing">

            <div
              ref={trackRef}
              className="marquee-track"
              style={{ animationDuration: `${duration}s` }}
            >
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center shrink-0 w-1/4 max-w-[250px] px-6"
                >
                  <div className="w-32 h-32 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#7A6CF6] hover:-translate-y-2 overflow-hidden">
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

                  <span className="mt-4 text-[11px] font-semibold tracking-[0.25em] text-slate-500 uppercase transition-colors duration-300 hover:text-[#7A6CF6] text-center">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Partners;