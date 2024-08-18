import Image from "next/image";
import TitleSction from "./TitleSction";
import Link from "next/link";
const ImageOverlaysWithTitle = ({
  title,
  imgURL,
  des,
  button = false,
  titleButton = "Read More",
}) => {
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
        <div className=" text-center lg:text-start  text-white p-4">
          <div className="mb-10 lg:mb-14 text-center relative">
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
          {button && (
            <Link
              href="/contact"
              className="bg-transparent hover:bg-primary hover:border-none border-white rounded-lg border-2 px-5 py-2 my-4 flex justify-center items-center w-fit mx-auto transition-all"
            >
              {titleButton}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageOverlaysWithTitle;
