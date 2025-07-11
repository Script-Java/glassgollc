"use client";

import { useState, useEffect } from "react";
import logo from "../assets/logo-black.png";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTinyScreen, setIsTinyScreen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const updateScreenSize = () => setIsTinyScreen(window.innerWidth < 600);
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <nav className="bg-white shadow-md top-0 z-50 w-full relative">
      <div className="flex max-w-7xl mx-auto justify-between items-center p-4">
        <div>
          <Link href="/">
<Image
            src={logo}
            alt="GlassGo Logo"
            width={248}
            height={124}
            style={{ color: 'transparent' }}
            priority
          />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ul className="hidden lg:flex items-center text-black gap-4">
            <li className="btn btn-outline hover:text-white hover:bg-black transition-colors">
              <Link href="tel:9724086233">(972) 408-6233</Link>
            </li>
            <li className="btn btn-primary hover:bg-black hover:text-primary transition-colors">
              <Link href="/quote">Online Quote</Link>
            </li>
          </ul>

          <button
            className="btn btn-ghost hover:bg-primary hover:text-black z-20"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <MdClose className="text-3xl text-white" />
            ) : (
              <MdOutlineMenu className="text-3xl text-black" />
            )}
          </button>
        </div>
      </div>

      {isTinyScreen && (
        <div className="flex flex-col items-center gap-4 pb-4 px-4 lg:hidden">
          <Link
            href="tel:+19724086233"
            className="btn btn-outline text-black w-full"
          >
            (972) 408-6233
          </Link>
          <Link href="/quote" className="btn btn-primary w-full">
            Online Quote
          </Link>
        </div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-96 bg-gray-700 shadow-lg transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <button
            className="text-2xl btn btn-ghost text-white hover:bg-primary hover:text-black"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <MdClose />
          </button>
        </div>
        <ul className="flex flex-col p-6 gap-4 text-white">
          {[
            { label: "Home", href: "/" },
            { label: "Auto Glass", href: "/auto" },
            { label: "Residential Glass", href: "/residential" },
            { label: "Blogs", href: "/blog" },
            { label: "Online Quote", href: "/quote" },
          ].map(({ label, href }) => (
            <li
              key={label}
              className="btn btn-ghost text-left hover:bg-primary hover:text-white transition-colors"
            >
              <Link href={href} onClick={toggleMenu}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 opacity-20 bg-black z-30"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
