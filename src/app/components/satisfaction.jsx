import Image from "next/image";
import satisfaction from "../assets/img/satisfaction.png";
import Link from "next/link";

export default function Satisfaction() {
  return (
    <div className=" text-black">
<div className="flex items-center mx-auto w-64 justify-center flex-col">
  <Image
    src={satisfaction}
    alt="GlassGo 100% Satisfaction"
    width={256} // Tailwind w-64 = 256px
    height={'auto'} // Let Next.js auto-scale based on aspect ratio
    loading="lazy"
    sizes="(max-width: 768px) 100vw, 256px"
    className="object-contain"
  />
</div>

      <div className="text-center mx-auto max-w-3xl">
        <h3 className="text-3xl font-bold mb-6 text-primary">
          100% Workmanship Guarantee
        </h3>
        <p className="text-lg mb-4">
          At GlassGo, we stand behind our work. If you're not completely
          satisfied with our service, we'll make it right. Your satisfaction is
          our top priority.
        </p>
        <Link
          href="/quote"
          className="btn btn-outline text-white bg-black hover:bg-primary hover:text-white text-lg px-6 py-3 rounded-md shadow-md"
        >
          Schedule an Appointment Now
        </Link>
      </div>
    </div>
  );
}
