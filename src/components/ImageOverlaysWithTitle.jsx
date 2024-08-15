import Image from "next/image";
import TitleSction from "./TitleSction";
const ImageOverlaysWithTitle = ({ title, imgURL, des }) => {
  return (
    <div className="relative w-screen h-[600px] mt-10">
      <Image
        className="object-cover"
        src={imgURL}
        fill={true}
        alt="imageOverlays"
        quality={75}
      />
      <div className="bg-black bg-opacity-80 w-full h-full absolute top-0" />
      <div className="absolute flex items-center justify-center  inset-0 m-auto   ">
        <div className=" text-center lg:text-start  text-white p-2">
          <div className="mb-10 lg:mb-16 text-center relative">
            <span className=" text-white  w-full font-bold  text-4xl lg:text-5xl">
              CALL US
            </span>
          </div>
          <h1 className=" text-center font-bold my-6 text-4xl md:text-5xl lg:text-6xl ">
            {title}
          </h1>
          <p className="text-center mx-auto max-w-screen-lg  lg:my-6 text-lg md:text-xl lg:text-2xl">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlaysWithTitle;
