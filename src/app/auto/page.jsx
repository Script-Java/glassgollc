import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AutoSlider from "../components/autoSlider";
import AutoCard from "../components/autoCards";
import Areas from "../components/areas";
import Satisfaction from "../components/satisfaction";

export default function AutoPage() {
  return (
    <div className="">
      <Navbar></Navbar>
      <AutoSlider></AutoSlider>
      <AutoCard></AutoCard>
      <Satisfaction></Satisfaction>
      <div className="flex items-center justify-center">
        <div className="max-w-4xl w-full mt-8 bg-primary h-1"></div>
      </div>
      <Footer></Footer>
    </div>
  );
}
