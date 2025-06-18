"use client";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Slider from "./components/slider";
import Card from "./components/card";
import Services from "./components/services";
import Triple from "./components/triple";
import Satisfaction from "./components/satisfaction";
import Areas from "./components/areas";
import dynamic from "next/dynamic";

const TrustindexWidget = dynamic(() => import("./components/reviews"), {
  ssr: false,
});

const ToolsTrade = dynamic(() => import("./components/toolsTrade"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="bg-base-100 text-white">
      <Navbar />
      <Slider />
      <Card />
      <Services />
      <ToolsTrade></ToolsTrade>
      <Triple></Triple>
      <TrustindexWidget />
      <Satisfaction />
      <Areas></Areas>
      <Footer />
    </div>
  );
}
