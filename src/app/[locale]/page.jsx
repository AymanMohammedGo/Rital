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
      <TitleSction title="New Arrivals" color1={"#D1223F"} color2={"#231F20"} />
      <SlideBox />
      <HappyClients />
      <TitleSction title="Best Seller" color1={"#D1223F"} color2={"#231F20"} />
      <Products />
      <ImageOverlaysWithTitle
        title="RITAL ELECTRICS"
        imgURL="/bg_1.jpg"
        des="Where Innovation Meets Excellence.
Reach out to us for electrifying solutions!"
      />
      <AboutHome />
    </main>
  );
}
