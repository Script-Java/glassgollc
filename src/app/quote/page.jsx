import Navbar from "../components/navbar";
import Footer from "../components/footer";
import QuoteForm from "../components/quoteForm";
import Image from "next/image";
import img1 from "../assets/img/quote/1.jpg";

export default function QuotePage() {
  return (
    <div className="bg-base-100">
      <Navbar />

      <section className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-extrabold mb-4 text-primary leading-tight">Get Your Free Glass Quote</h1>
            <p className="text-lg text-gray-600">
              Thank you for considering <strong>GlassGo</strong> for your auto and residential glass needs. We're proud to serve Dallas with quick, mobile, and reliable service.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-left text-[17px] space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-3">Why Choose GlassGo?</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Mobile Services:</strong> We come to you, saving time and stress.</li>
                <li><strong>Quality Materials:</strong> Long-lasting and top-tier durability.</li>
                <li><strong>Expert Technicians:</strong> Licensed, trusted professionals.</li>
                <li><strong>Guaranteed Satisfaction:</strong> We get the job done right—every time.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-primary mb-3">Our Services Include</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Auto Glass Repair and Replacement</li>
                <li>Residential Window Repair</li>
                <li>24/7 Emergency Glass Service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-primary mb-3">How It Works</h2>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li><strong>Request a Quote:</strong> Use our simple form below.</li>
                <li><strong>Book Your Service:</strong> We'll call to confirm your time.</li>
                <li><strong>We Handle the Rest:</strong> Our team comes to you and finishes the job fast.</li>
              </ol>
            </div>

            <p className="text-lg font-medium text-gray-800">
              Ready to begin? Complete the form below to receive your no-obligation quote today.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={img1}
            alt="GlassGo responding to clients"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <QuoteForm />
      <Footer />
    </div>
  );
}
