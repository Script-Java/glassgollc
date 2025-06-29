import Link from "next/link";

export default function HowToCare() {
  return (
    <section className="bg-base-100 py-10 px-6">
      {/* Bottom CTA Button */}
      <div className="mt-4 flex justify-center">
        <Link
          href="/blog/how-to"
          className="btn bg-blue-900 text-white hover:bg-primary text-lg px-6 py-3 rounded-md shadow-md text-center max-w-full"
        >
          HOW TO CARE FOR A NEWLY REPLACED WINDSHIELD AND BACK GLASS
        </Link>
      </div>
    </section>
  );
}
