"use client";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Slider from "./components/slider";
import Card from "./components/card";
import Services from "./components/services";
import Image from "next/image";
import bgImage from "./assets/img/12.jpg";
import Link from "next/link";
import Triple from "./components/triple";
import Satisfaction from "./components/satisfaction";
import Areas from "./components/areas";

import dynamic from "next/dynamic";
const TrustindexWidget = dynamic(() => import("./components/reviews"), { ssr: false });

export default function Home() {
  return (
    <div className="bg-base-100 text-white">
      <Navbar />
      <Slider />
      <Card />
      <Services />

      {/* Tools of the Trade Hero Section */}
      <section className="relative w-full h-[500px] my-8">
        <Image
          src={bgImage}
          alt="Tools Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <h3 className="text-4xl md:text-4xl font-bold mb-6 leading-tight">
            Tools of the Trade: Excellence in Glass Repair and Replacement
          </h3>
          <p className="max-w-3xl text-lg md:text-xl mb-4">
            GlassGo customers deserve nothing but the best glass services Dallas
            and the surrounding areas have to offer. Our team uses
            state-of-the-art tools and top-grade materials to guarantee lasting
            results and flawless finishes.
          </p>
          <p className="max-w-3xl text-lg md:text-xl mb-6">
At GlassGo, we only utilize top-grade materials, including high-quality glues, urethanes, and primers, to ensure durability and longevity in every repair or replacement. After completing each job, our highly trained technicians take the time to clean thoroughly, using premium glass wipes, towels, and high-grade glass cleaner, leaving your glass spotless and ready to use. Trust GlassGo for exceptional service, advanced tools, and unmatched attention to detail.


          </p>
        </div>
      </section>
    <div className="flex items-center justify-center">
                      <Link
            href="/quote"
            className="btn bg-black text-white hover:bg-primary text-lg px-6 py-3 rounded-md shadow-md"
          >
            Schedule an Appointment Now
          </Link>
    </div>
      <Triple></Triple>

      {/* Trustindex Section */}
      <TrustindexWidget />
      <Satisfaction />
      <Areas></Areas>
      

      <Footer />
    </div>
  );
}