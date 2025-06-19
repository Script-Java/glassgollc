"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";
import img3 from "../assets/img/3.png";
import img4 from "../assets/img/4.jpg";
import img5 from "../assets/img/14.jpg";

const slides = [
  {
    image: img1,
    heading: "Trusted Auto Glass Repair in Dallas",
    description:
      "Professional, fast, and affordable glass solutions at your doorstep. Our expert technicians use top-grade materials to restore your vehicle’s integrity and keep you safe on the road, no matter the damage.",
  },
  {
    image: img5,
    heading: "Expert Auto Glass Replacement You Can Rely On",
    description:
      "At GlassGo, we specialize in precision auto glass replacement using premium materials and advanced tools. Whether it’s a cracked windshield or shattered side window, our mobile team delivers quick, clean, and reliable service across Dallas.",
  },
  {
    image: img2,
    heading: "Mobile Service – We Come to You",
    description:
      "Convenient repairs and replacements wherever you are. Whether you're at home, work, or stuck roadside, our fully equipped mobile units deliver expert service without disrupting your day.",
  },
  {
    image: img3,
    heading: "Residential Window Glass Replacement",
    description:
      "Secure and stylish glass replacements for your home. From cracked panes to outdated windows, we upgrade your space with energy-efficient, modern glass that improves comfort and value.",
  },
  {
    image: img4,
    heading: "Fast, Affordable, and Reliable Service",
    description:
      "Experience quality service trusted by thousands across Dallas and surrounding area. At GlassGo, we pride ourselves on quick turnaround times, honest pricing, and customer satisfaction that keeps homeowners and drivers coming back.",
  },
];

const Slider = () => {
  const [mounted, setMounted] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div>
      {/* Slider Container */}
      <div className="relative w-full overflow-hidden h-[600px]">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="min-w-full h-[600px] relative">
              <Image
                src={slide.image}
                alt={`Slide ${i + 1}`}
                fill
                loading={i === 0 ? "eager" : "lazy"}
                priority={i === 0}
                fetchPriority={i === 0 ? "high" : undefined}
                decoding="async"
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
                <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">
                  {slide.heading}
                </h2>
                <p className="text-white text-lg md:text-xl mb-6 max-w-2xl">
                  {slide.description}
                </p>
                <Link
                  href="/quote"
                  className="btn btn-primary text-white text-lg px-6 py-3 my-10 hover:bg-black hover:text-primary rounded-md shadow-md"
                >
                  Schedule an Appointment Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Bar */}
      <div className="flex text-center md:text-start items-center bg-gray-700 p-4 justify-center">
        <p>
          Glass Go is ready to take care of your greater Dallas Glass Repair and
          Replacement Needs!
        </p>
      </div>
    </div>
  );
};

export default Slider;
