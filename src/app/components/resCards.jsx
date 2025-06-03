import Image from "next/image";
import img1 from "../assets/img/res/1.jpg";
import img2 from "../assets/img/res/2.jpg";
import img3 from "../assets/img/res/3.jpg";
import img4 from "../assets/img/res/4.jpg";

const data = [
  {
    img: img1,
    label: "Professional Residential Glass Repair Services Near You",
    text: `Whether you need house window replacement, custom mirrors, or glass shower doors, GlassGo LLC provides expert solutions for all your residential glass replacement needs. Our team of skilled professionals is dedicated to offering reliable, efficient, and affordable glass repair and replacement services for homeowners throughout Dallas and the surrounding areas.

From cracked window repair to energy-efficient window installation, we handle a wide range of residential glass projects, ensuring that your home remains safe, secure, and visually appealing. Our services include the replacement of broken or fogged windows, installation of custom mirrors, and the design and fitting of stylish glass shower doors that will transform your bathroom space.

At GlassGo LLC, we prioritize quality and durability in every job. Our expert team works with only the best materials to ensure your windows and glass installations are long-lasting and resistant to the elements. We understand that each home is unique, and we offer personalized solutions tailored to your specific needs and preferences.

We also specialize in energy-efficient window installation, helping you save on energy bills while improving the overall comfort of your home. Our high-performance windows provide excellent insulation, reducing drafts and minimizing heat loss, making them a smart investment for homeowners looking to enhance their home's energy efficiency.

Whether you’re dealing with a broken window, a shattered glass door, or looking to upgrade your home with new, custom glass features, GlassGo LLC is here to provide top-notch service and craftsmanship. Our goal is to ensure your home’s glass features are not only functional but also aesthetically pleasing, contributing to your home’s overall design and value.`
  },
  {
    img: img2,
    label: "Custom Mirrors & Mirror Replacement",
    text: `Transform any room in your home with our mirror glass replacement services, customized to fit your style and space. At GlassGo LLC, we specialize in delivering high-quality mirror solutions that enhance the beauty and functionality of your interiors. Whether you’re renovating a bathroom, upgrading your bedroom, or adding a touch of elegance to your hallway, our team ensures that every mirror we install is tailored to meet your needs and preferences. We offer custom-cut mirrors that are precision-designed to perfectly fit your space, whether it’s for your bathroom vanity, bedroom wall, or hallway accent. Our mirrors are available in a variety of shapes and sizes, allowing you to create the ideal look that complements your home’s décor and design vision.

In addition to custom-cut options, we also provide wall-mounted decorative mirrors that can elevate your home’s aesthetic. These mirrors are designed to serve as both functional and decorative pieces, adding depth and light to any room. Whether you’re looking for a modern, sleek design or a more vintage-inspired frame, our selection of decorative mirrors can help create a focal point that draws the eye and enhances the overall atmosphere of your home.

Why Choose Our Mobile Auto Glass Repair?
- Windshield Replacement Near Me – We replace car windshields in Dallas quickly and efficiently
- Auto Window Replacement Near Me – Get expert repairs for car window glass replacement with quality materials
- Same-Day Auto Glass Repair – We offer emergency auto glass repair to get you back on the road ASAP
- Car Back Window Replacement – Need truck glass repair or back windshield replacement? We’ve got you covered.`
  },
  {
    img: img3,
    label: "Glass Table Tops – Durable & Stylish Protection",
    text: `Give your furniture a fresh, sophisticated look while adding durability and protection with custom glass table tops. Whether you're looking to update a dining table, restore a coffee table, or create a sleek workspace, GlassGo LLC has the perfect solution. Our glass table tops not only enhance the beauty of your furniture but also safeguard it from daily wear and tear.

For a modern, stylish touch, we offer dining table glass replacements that provide a sleek and contemporary look, making your dining area feel open and airy. Glass desk tops add a polished finish to your workspace, ensuring that your desk remains pristine while providing a professional appearance. If your coffee table needs a new lease on life, we offer glass replacements that restore its elegance, maintaining the table's aesthetic while protecting it from damage.

We also specialize in tempered glass table tops, which offer superior strength, safety, and durability. Ideal for households with children or high-traffic areas, tempered glass provides peace of mind without compromising on style. Our custom glass options are designed to fit perfectly, making your furniture more functional while elevating the overall design of your space.
`
  },
  {
    img: img4,
    label: "Tempered Sliding Glass Doors & Patio Doors",
    text: `Enhance the appeal and functionality of your home with stunning glass patio doors. At GlassGo LLC, we specialize in providing high-quality glass door solutions that combine style, security, and practicality. Whether you’re looking to update your patio, balcony, or any other outdoor space, our glass patio doors are designed to elevate your living environment.

We offer sliding glass door replacements that provide easy access to your outdoor spaces while allowing natural light to flood your home. These doors offer a sleek, modern look that complements any style of home, whether traditional or contemporary. For those seeking added security and durability, we offer tempered glass doors that are both stronger and safer, providing peace of mind for your family and property.

If privacy is a priority, we also provide frosted glass sliding doors that combine elegance with functionality. These doors offer a beautiful design while obscuring the view from outside, allowing you to enjoy your outdoor spaces without compromising your privacy. Our custom glass patio doors are crafted to fit seamlessly into your home, offering a perfect blend of aesthetics and performance.`
  },
];

export default function ResCards() {
  return (
    <section className="bg-white text-black py-16">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Professional Residential Glass Repair Services in Dallas
            </h2>
            <p className=" text-lg">
              Whether it’s new home construction or repairs and replacements for existing glass or windows, GlassGo LLC brings the expertise and dedication needed to exceed your expectations. We specialize in delivering high-quality glass solutions tailored to your needs.
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
