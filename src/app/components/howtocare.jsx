import Link from "next/link";

export default function HowToCare() {
  return (
    <section className="bg-base-100 w-full py-10 md:px-6">
      <div className="mt-4 flex justify-center">
      <Link href="/blog/how-to" className="btn bg-blue-900 p-8 md:p-4 text-white hover:bg-primary">
        HOW TO CARE FOR A NEWLY REPLACED WINDSHIELD AND BACK GLASS
      </Link>
      </div>
    </section>
  );
}
