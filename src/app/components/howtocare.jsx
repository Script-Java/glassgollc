import { FaCarSide, FaHome, FaTools, FaCheckCircle } from 'react-icons/fa';
import Link from "next/link";

export default function HowToCare() {
  return (
    <section className="bg-base-100 py-10 px-4 md:px-6">
      <div className="mt-4 flex justify-center">
        <Link
          href="/blog/how-to"
          className="btn bg-blue-900 text-white hover:bg-primary text-center px-4 py-3 w-full max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl"
        >
          HOW TO CARE FOR A NEWLY REPLACED WINDSHIELD AND BACK GLASS
        </Link>
      </div>
    </section>
  );
}
