"use client";
import Link from "next/link";
import { FaPhone, FaLocationArrow } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";
import logo from "../assets/logo-black.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-black px-6 bg-white pt-16 pb-0">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-12">
        {/* Logo & Description */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <Image className="w-60" src={logo} alt="Logo" />
          <p className="text-sm opacity-80 max-w-md leading-relaxed">
            At <strong>GlassGo</strong>, we take pride in delivering expert auto and residential glass services across Dallas and surrounding areas.
          </p>
        </div>

        {/* Quick Links and Contact All in One Row */}
        <div className="flex flex-col justify-center gap-12 w-full">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><Link href="/auto" className="hover:text-primary">Auto</Link></li>
              <li><Link href="/residential" className="hover:text-primary">Residential</Link></li>
              <li><Link href="/quote" className="hover:text-primary">Quote</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="flex flex-wrap justify-center gap-6 text-sm items-center">
              <li className="flex items-center gap-2">
                <FaPhone className="shrink-0" />
                <Link href="tel:9724086233" className="hover:text-primary">972-408-6233</Link>
              </li>
              <li className="flex items-center gap-2">
                <IoIosMail className="shrink-0" />
                <Link href="mailto:info@glassgollc.com" className="hover:text-primary">info@glassgollc.com</Link>
              </li>
              <li className="flex items-center gap-2">
                <FaLocationArrow className="shrink-0" />
                <span>Dallas, Texas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar Full Width */}
      <div className="mt-12 w-full text-black text-center text-sm py-4">
        <p className="w-full">© {currentYear} GlassGo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
