import Image from "next/image";
import img1 from "../assets/img/c1.jpg";
import img2 from "../assets/img/c2.jpg";
import img3 from "../assets/img/c3.jpg";
import img4 from "../assets/img/c4.jpg";

const data = [
  {
    img: img1,
    label: "Professional Auto Glass Repair Services Near You",
    text: `Need car window repair or windshield replacement near me? GlassGo LLC is your trusted auto glass specialist in Dallas, offering reliable and efficient auto glass solutions. We provide fast windshield repair, auto glass replacement, and mobile auto glass repair services right at your doorstep. Whether you're in need of truck glass repair, car side window replacement, or a complete auto windshield replacement, we are here to ensure the highest-quality craftsmanship and same-day service.

Our expert technicians are trained to handle a wide range of auto glass issues, from minor chips and cracks to full windshield replacements. We use the latest tools and premium materials to restore your vehicle’s glass to its original condition. No matter the make or model of your vehicle, GlassGo LLC is equipped to handle the job with precision and care.`
  },
  {
    img: img2,
    label: "Mobile Auto Glass Repair – Fast & Convenient Windshield Solutions",
    text: `When you need auto glass replacement fast, we come to you! GlassGo offers mobile auto glass repair in Dallas, ensuring that your car window repair is handled wherever you are. Whether it’s a chipped windshield, a cracked car side window, or an auto window replacement, we provide same-day service for quick and hassle-free repairs.

Why Choose Our Mobile Auto Glass Repair?
- Windshield Replacement Near Me – We replace car windshields in Dallas quickly and efficiently
- Auto Window Replacement Near Me – Get expert repairs for car window glass replacement with quality materials
- Same-Day Auto Glass Repair – We offer emergency auto glass repair to get you back on the road ASAP
- Car Back Window Replacement – Need truck glass repair or back windshield replacement? We’ve got you covered.`
  },
  {
    img: img3,
    label: "Emergency Auto Glass Repair – Fast Service When You Need It Most",
    text: `Cracked windshield? Shattered car window? GlassGo provides same-day auto glass repair and emergency auto glass repair to ensure your safety on the road. Our team specializes in fast windshield repair, including back windshield replacement, driver side glass replacement, and passenger side glass replacement.

Why Choose Our Emergency Auto Glass Repair?
- Mobile Service Windshield Replacement – We come to you, saving you time and stress.
- Car Windshield Replacement Dallas – Quick replacements using high-quality glass.
- Fix My Windshield Fast – We provide same-day auto glass services to keep you moving.

Contact GlassGo Today! Get a free auto glass quote or schedule an emergency windshield replacement now!`
  },
  {
    img: img4,
    label: "Rear & Side Auto Glass Replacement – Restore Your Vehicle’s Safety",
    text: `Broken or shattered windows can be a major inconvenience and safety risk. At GlassGo, we provide fast and affordable car window replacement services to get you back on the road safely. Whether you need back windshield replacement, car side window replacement, or truck back glass replacement, we’ve got you covered with high-quality materials and expert installation.

Our Rear & Side Auto Glass Services Include:
- Car Back Window Replacement – Restore visibility and security with a new rear windshield.
- Passenger & Driver Side Window Replacement – Quick repairs for shattered or stuck windows.
- Quarter Glass Replacement – Precision-cut glass for SUVs, trucks, and sedans.
- Truck Back Glass Replacement – Durable glass solutions for work trucks and heavy-duty vehicles.`
  },
];

export default function AutoCard() {
  return (
    <section className="bg-white text-black py-16">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-4">
          Expert Auto Glass Repair and Replacement Services in Dallas
        </h2>
        <p className=" text-lg">
          At GlassGo, our experienced technicians serve the Dallas Metroplex with fast, professional mobile auto glass services.
        </p>
      </div>

      <div className="mt-16 space-y-24 px-6 max-w-6xl mx-auto">
        {data.map(({ img, label, text }, idx) => (
          <div
            key={idx}
            className={`flex flex-col lg:flex-row ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""} gap-10 items-stretch`}
          >
            {/* Text */}
            <div className="lg:w-1/2 text-black  space-y-4 flex flex-col justify-between">
              <h3 className="text-2xl text-primary font-semibold">{label}</h3>
              <p className="text-base leading-relaxed whitespace-pre-line">{text}</p>
            </div>

            {/* Image */}
            <div className="lg:w-1/2 w-full h-auto aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={img}
                alt={label}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
