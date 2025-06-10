import Image from "next/image";
import Link from "next/link";
import img1 from "../assets/img/5.jpg";
import img2 from "../assets/img/6.jpg";
import img3 from "../assets/img/7.jpg";
import img4 from "../assets/img/8.jpg";
import img5 from "../assets/img/13.jpg";
import { FaCloudShowersHeavy } from "react-icons/fa";


const Card = () => {
  return (
    <section className="bg-base-100 text-black px-4 md:px-12 max-w-7xl mx-auto">
<div className="px-6 bg-white text-gray-800">
        <h1 className="text-3xl my-10 lg:text-3xl text-center font-bold text-red-700">
        Experience Top-Quality Auto and Residential Glass Replacement in Dallas
      </h1>
  <div className="w-full mx-auto flex flex-col lg:flex-row gap-10">
    {/* Left: Text Content */}
    <div className="flex-1 space-y-6">
      <div className="space-y-4 text-base leading-relaxed">
        <p>
          At GlassGo, we are committed to providing exceptional glass repair and replacement services
          designed to meet your unique needs. Whether you’re dealing with a cracked windshield, a shattered
          car window, or a broken home window, our certified technicians deliver reliable, high-quality
          solutions at an affordable price. We specialize in auto glass repair, including windshield
          replacement in Dallas, mobile auto glass services, and side or back glass repairs, ensuring you
          get back on the road quickly and safely. With over 21 years of experience, we use only the finest
          materials to guarantee your vehicle’s glass is restored to perfection.
        </p>
        <p>
          In addition to auto glass services, we excel in <strong>residential glass repair and replacement.</strong>
          From fixing broken window panes to custom shower door installations and patio glass replacements,
          our team delivers expertise and precision in every project. We also offer specialized solutions
          like frosted glass installation, dual-pane window repair, and glass table top replacements, making
          GlassGo your one-stop shop for all residential glass needs. Our dedication to customer satisfaction
          and prompt service has earned us the trust of homeowners throughout the Dallas area. When you
          choose GlassGo, you can expect skilled professionals, exceptional craftsmanship, and results that
          exceed your expectations.
        </p>
        <p className="font-semibold text-gray-700">
          Ready to Fix Your Glass? Our mobile ready glass repair and replacement techs are ready to dispatch
          to your location. Schedule an appointment TODAY!
        </p>
      </div>
      <div className="w-full">
        <Image src={img1} alt="Glass service showcase" className="w-full h-auto rounded-md object-cover" />
      </div>
    </div>

    {/* Right: Vertical Image */}
    <div className="flex-1 w-full mx-auto lg:mx-0">
      <Image src={img5} alt="Portrait car image" className="w-full h-full rounded-md object-cover" />
    </div>
  </div>
</div>


<section className="px-6 py-10 bg-white text-gray-800">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
    {/* Left: Text and icon */}
    <div className="space-y-6 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="text-primary text-2xl">
            <FaCloudShowersHeavy />
          </div>
          <h2 className="text-3xl font-semibold text-red-700">
            Expert Storm Damage Glass Replacement in Dallas
          </h2>
        </div>

        <div className="space-y-4 text-base leading-relaxed text-gray-700">
          <p>
            At <strong>GlassGo</strong>, we specialize in providing reliable storm damage glass repair for both
            vehicles and homes throughout the <strong>Dallas area</strong>. Our experienced and skilled team is
            fully equipped to address glass damage caused by hail, high winds, or any other storm-related incidents.
            Whether your car’s windshield has been cracked by flying debris or your home’s windows have been
            shattered by a severe storm, we are here to offer quick, affordable, and dependable solutions that
            restore your peace of mind.
          </p>
          <p>
            With over <strong>21 years of industry experience</strong>, <strong>GlassGo</strong> has earned a
            reputation for excellence in glass repair and replacement services. We understand how stressful it can be
            to deal with the aftermath of storm damage, which is why we prioritize a fast and efficient recovery
            process. Our team is committed to delivering top-quality results, ensuring that your glass is restored to
            its original condition as quickly as possible.
          </p>
          <p>
            We offer a wide range of <strong>storm damage repair services</strong>, including windshield replacements
            for vehicles, residential glass repairs for shattered windows, and more. Using the latest tools and
            techniques, our professionals ensure every job is completed correctly the first time. Additionally, we
            work directly with your insurance company to streamline the claims process, making it easier and more
            convenient for you. At <strong>GlassGo</strong>, customer satisfaction is our number one priority, and we
            strive to provide unmatched service with a focus on quality and reliability.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Our Services Include:</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          <li>
            <strong>Windshield Repair & Replacement:</strong> Professional repair and replacement for vehicles
            damaged by hail or high winds.
          </li>
          <li>
            <strong>Residential Glass Repair:</strong> Prompt and efficient repairs for shattered or cracked windows
            caused by storms.
          </li>
          <li>
            <strong>Emergency Storm Glass Repair:</strong> Rapid response and expert repairs during storm
            emergencies.
          </li>
          <li>
            <strong>High-Quality Glass Materials:</strong> Durable and reliable materials to ensure long-lasting
            results.
          </li>
          <li>
            <strong>Expert Installation & Repair:</strong> Certified professionals dedicated to providing
            high-quality installations and repairs.
          </li>
        </ul>
      </div>
    </div>

    {/* Right: Image */}
    <div className="w-full h-full">
      <Image
        src={img4}
        alt="Storm damaged car image"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  </div>
</section>



<section className="px-6 -my-5 md:my-0 bg-white text-gray-800">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
  {/* Right: Image */}
  <div className="w-full h-full flex">
    <Image
      src={img3}
      alt="Storm damaged car image"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>

  {/* Left: Text and icon */}
  <div className="space-y-8 flex flex-col justify-between">
    <div>
      <h2 className="text-3xl font-semibold text-red-700 mb-4">
        Why Choose GlassGo for Your Glass Replacement in Dallas
      </h2>
      <p className="text-gray-700 text-base mb-4">
        Regarding glass repair and replacement in Dallas <strong>GlassGo</strong> stands out as the trusted choice for both auto and residential glass services. Here’s why our customers choose us time and again:
      </p>
      <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
        <li><strong>Convenient Mobile Service:</strong> We offer free mobile service, working around your schedule and providing on-call assistance for emergencies.</li>
        <li><strong>Fast and Reliable Repairs:</strong> Our skilled technicians deliver efficient and prompt service to get your glass issues resolved quickly.</li>
        <li><strong>Expert Workmanship:</strong> With over 21 years of experience, our team is highly trained, licensed, and dedicated to exceptional quality in every project.</li>
        <li><strong>Custom Solutions:</strong> From auto glass repairs to residential installations, we customize services to meet your specific needs—all at reasonable prices.</li>
        <li><strong>High-Quality Materials:</strong> We use only premium-grade glass and materials, ensuring durable, long-lasting results backed by a warranty.</li>
        <li><strong>Customer-Focused Service:</strong> GlassGo is known for providing excellent customer care, offering multiple payment options and ensuring a seamless experience.</li>
        <li><strong>Affordable Options:</strong> If you don’t have insurance or face high deductibles, we work with you to make the process of replacing your glass stress-free and cost-effective.</li>
      </ul>
    </div>

    <div className="pt-8">
      <h2 className="text-3xl font-semibold text-red-700 mb-4">
        Trusted Experts in Auto and Residential Glass Replacement in Dallas
      </h2>
      <p className="text-gray-700 text-base mb-4">
        Living in <strong>Dallas</strong> means you’re no stranger to unpredictable weather, road debris, and the occasional glass damage. But with <strong>GlassGo</strong>, you can rest easy knowing that we’ve got you covered for all your glass repair and replacement needs. As a leader in <strong>Texas</strong> for glass repair and maintenance, we use advanced technology, premium resins, and expert techniques to ensure that every job is done right. Whether you’re dealing with a cracked windshield in your vehicle or a broken window in your home, we are here to provide fast, reliable, and affordable solutions.
      </p>
      <p className="text-gray-700 text-base mb-4">
        For <strong>automotive glass</strong>, we specialize in efficient repairs that often take less than an hour. Our team is dedicated to saving you money by addressing minor windshield damage with effective repairs, whenever possible, to avoid costly replacements. By opting for repairs instead of replacements, we help you preserve your vehicle’s integrity without breaking your budget.
      </p>
      <p className="text-gray-700 text-base">
        At <strong>GlassGo</strong>, we understand that time is of the essence when it comes to glass repairs, especially in emergency situations. A damaged windshield or broken window can make your vehicle unsafe or leave your home vulnerable. Whether you need immediate repairs after a storm or a simple glass replacement, we offer quick and efficient service to get you back on the road or back to the comfort of your home. We pride ourselves on delivering quality craftsmanship without delay, ensuring your glass is restored to its best condition.
      </p>
    </div>
  </div>
</div>

</section>

    <section className="px-6 py-10 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* Left: Text */}
        <div className="space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-red-700">
              Our Commitment to Excellence in Glass Repair & Glass Replacement in Dallas
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              At GlassGo, we don’t just fix glass—we provide <strong>high-quality, long-lasting solutions</strong> for
              <strong> auto and residential glass repair in Dallas</strong>. Our dedication to <strong>precision, durability, and
              customer satisfaction</strong> makes us the preferred choice for <strong>windshield replacement, car
              window repair</strong>, and <strong>home glass replacement</strong> services. From start to finish, we ensure a
              seamless experience backed by <strong>expert craftsmanship and premium materials</strong>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              What You Can Expect from GlassGo:
            </h3>
            <ul className="list-disc list-inside text-sm space-y-2 text-gray-700">
              <li>
                <strong>Advanced Repair Techniques –</strong> We use the latest <em>auto glass repair technology</em> to
                provide <em>windshield replacement, car window replacement</em>, and <em>auto window repair</em> with flawless results.
              </li>
              <li>
                <strong>Eco-Friendly Windshield Repairs –</strong> Whenever possible, we focus on <em>repairing chipped
                windshields</em> instead of full replacements, reducing costs and waste.
              </li>
              <li>
                <strong>Insurance Assistance –</strong> We work with <em>all major insurance providers</em> to simplify claims
                for <em>windshield replacement cost</em> and <em>auto glass replacement</em>.
              </li>
              <li>
                <strong>Affordable & Transparent Pricing –</strong> Get a <em>free auto glass quote</em> with no hidden fees for
                <em> auto windshield replacement, home glass replacement</em>, or <em>window glass repair</em>.
              </li>
              <li>
                <strong>Reliable and Efficient Service –</strong> Whether you need a <em>mobile auto glass repair in Dallas,
                residential glass repair</em>, or <em>car windshield replacement</em>, we provide <em>same-day auto glass repair</em>
                and quick installations.
              </li>
              <li>
                <strong>Guaranteed Customer Satisfaction –</strong> Our <em>expert auto glass specialists</em> ensure that every
                <em> windshield repair service, car side window replacement</em>, or <em>house window replacement</em> meets the
                highest standards.
              </li>
              <li>
                <strong>Expert Installation –</strong> Our skilled technicians ensure precise installation for all types of auto
                and residential glass, ensuring optimal performance and longevity.
              </li>
              <li>
                <strong>Comprehensive Glass Services –</strong> From <em>windshield repairs</em> to <em>custom residential glass
                installations</em>, we offer a full range of services for your vehicle and home, all delivered with the
                highest level of craftsmanship.
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full h-full">
          <Image
            src={img2}
            alt="Cozy residential window"
            className="w-full h-full max-h-[820px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>

    </section>
  );
};

export default Card;
