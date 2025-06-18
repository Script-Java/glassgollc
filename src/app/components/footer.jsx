"use client";
import Link from "next/link";
import { FaPhone, FaLocationArrow } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";
import logo from "../assets/logo-black.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-black bg-white pt-16 pb-0">
      <div className="max-w-7xl mx-auto flex items-center text-center gap-12">

        {/* Quick Links and Contact All in One Row */}
        <div className="flex flex-wrap justify-center gap-12 w-full">


          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="flex flex-wrap justify-center gap-6 text-sm items-center">
              <li className="flex items-center gap-2">
                <FaPhone className="shrink-0" />
                <Link href="tel:9724086233" className="hover:text-primary hover:underline">972-408-6233</Link>
              </li>
              <li className="flex items-center gap-2">
                <IoIosMail className="shrink-0" />
                <Link href="mailto:info@glassgollc.com" className="hover:text-primary hover:underline">info@glassgollc.com</Link>
              </li>
              <li className="flex items-center gap-2">
                <FaLocationArrow className="shrink-0" />
                <span>Dallas, Texas</span>
              </li>
            </ul>
          </div>

                    {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <li><Link href="/" className="hover:text-primary hover:underline">Home</Link></li>
              <li><Link href="/auto" className="hover:text-primary hover:underline">Auto Glass</Link></li>
              <li><Link href="/residential" className="hover:text-primary hover:underline">Residential Glass</Link></li>
              <li><Link href="/residential" className="hover:text-primary hover:underline">Tips & Tricks</Link></li>
              <li><Link href="/quote" className="hover:text-primary hover:underline">Online Quote</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar Full Width */}
      <div className="mt-12 w-full bg-black text-white text-center text-sm py-4">
        <p className="w-full">© {currentYear} GlassGo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
