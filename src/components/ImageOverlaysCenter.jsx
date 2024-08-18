import Image from "next/image";

const ImageOverlaysCenter = ({ title, imgURL, des }) => {
  return (
    <div className="relative w-screen h-screen">
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
          <h1 className=" text-center font-bold text-5xl md:text-6xl lg:text-7xl ">
            {title}
          </h1>
          <p className="text-center max-w-screen-lg my-2 lg:my-6 text-xl md:text-2xl lg:text-3xl">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlaysCenter;
