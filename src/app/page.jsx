"use client";

import dynamic from "next/dynamic";
import Navbar from "./components/navbar";
import Slider from "./components/slider";

// Dynamically import all components after Slider
const Card = dynamic(() => import("./components/card"), { ssr: false });
const Services = dynamic(() => import("./components/services"), { ssr: false });
const ToolsTrade = dynamic(() => import("./components/toolsTrade"), { ssr: false });
const Triple = dynamic(() => import("./components/triple"), { ssr: false });
const TrustindexWidget = dynamic(() => import("./components/reviews"), { ssr: false });
const Satisfaction = dynamic(() => import("./components/satisfaction"), { ssr: false });
const Areas = dynamic(() => import("./components/areas"), { ssr: false });
const Footer = dynamic(() => import("./components/footer"), { ssr: false });


export default function Home() {
  return (
    <div className="bg-base-100 text-white">
      <Navbar />
      <Slider />
      <Card />
      <Services />
      <ToolsTrade />
      <Triple />
      <TrustindexWidget />
      <Satisfaction />
      <Areas />
      <Footer />
    </div>
  );
}
