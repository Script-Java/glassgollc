"use client";
import { useState, useEffect } from "react";
import logo from "../assets/logo-black.svg";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="flex max-w-7xl mx-auto justify-between items-center p-4">
        <div>
          <Link href="/">
            <Image src={logo} alt="Logo" className="w-32" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center text-black gap-4">
          <li className="btn btn-ghost hover:text-white hover:bg-black transition-colors">
            <Link href="/">Home</Link>
          </li>
          <li className="btn btn-ghost hover:text-white hover:bg-black transition-colors">
            <Link href="/auto">Auto</Link>
          </li>
          <li className="btn btn-ghost hover:text-white hover:bg-black transition-colors">
            <Link href="/residential">Residential</Link>
          </li>
          <li className="btn btn-outline hover:text-white hover:bg-black transition-colors">
            <Link href="tel:+19724086233">(972) 408-6233</Link>
          </li>
          <li className="btn btn-primary">
            <Link href="/quote">Free Quote</Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden btn btn-ghost z-50" onClick={toggleMenu}>
          {isOpen ? (
            <MdClose className="text-2xl text-black" />
          ) : (
            <MdOutlineMenu className="text-2xl text-black" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col justify-center items-center px-6 text-black animate-fade-in">
          <ul className="flex flex-col items-center w-full gap-6">
            <li className="btn btn-ghost w-full text-center text-lg">
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="btn btn-ghost w-full text-center text-lg">
              <Link href="/auto" onClick={toggleMenu}>
                Auto
              </Link>
            </li>
            <li className="btn btn-ghost w-full text-center text-lg">
              <Link href="/residential" onClick={toggleMenu}>
                Residential
              </Link>
            </li>
            <li className="btn btn-outline w-full text-center text-lg">
              <Link href="tel:+19724086233" onClick={toggleMenu}>
                (972) 408-6233
              </Link>
            </li>
            <li className="btn btn-primary w-full text-center text-lg">
              <Link href="/quote" onClick={toggleMenu}>
                Free Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;