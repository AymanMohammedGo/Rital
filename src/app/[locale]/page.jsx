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
      <TitleSction title="Products" subTitle="New Arrivals" />
      <SlideBox />
      <ImageOverlaysWithTitle
        title="RITAL ELECTRICS"
        imgURL="/bg_1.jpg"
        des="Where Innovation Meets Excellence.
Reach out to us for electrifying solutions!"
      />
      <TitleSction title="Products" subTitle="New Arrivals" />
      <Products />
    </main>
  );
}
