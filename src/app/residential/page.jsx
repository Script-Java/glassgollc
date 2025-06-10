import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ResSlider from "../components/resSlider";
import ResCard from "../components/resCards";
import Areas from "../components/areas";
import Satisfaction from "../components/satisfaction";

export default function ResidentialPage() {
  return (
    <div className="">
      <Navbar></Navbar>
        <ResSlider></ResSlider>
        <ResCard></ResCard>
        <Satisfaction></Satisfaction>
              <div className="flex items-center -mb-10 justify-center">
        <div className="max-w-4xl w-full mt-8 bg-primary h-1"></div>
      </div>
      <Footer></Footer>
    </div>
  );
}
