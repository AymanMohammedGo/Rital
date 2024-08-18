import AboutHome from "@/components/AboutHome";
import HappyClients from "@/components/HappyClients";
import ImageOverlaysWithTitle from "@/components/ImageOverlaysWithTitle";
import Products from "@/components/Products";
import SlideBox from "@/components/SlideBox";
import SlideImage from "@/components/SlideImage";
import TitleSction from "@/components/TitleSction";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <SlideImage />
      <TitleSction title="NEW ARRIVALS" color={"text-primary"} />
      <SlideBox />
      <HappyClients />
      <TitleSction title="BEST SELLER" color={"text-primary"} />
      <Products />
      <ImageOverlaysWithTitle
        title="Empower your home with Rital Electrics"
        imgURL="/contact.jpg"
        des="Where Innovation Meets Excellence. Reach out to us for electrifying solutions!"
        button="true"
        titleButton="Contact us"
      />
      <AboutHome />
    </main>
  );
}
