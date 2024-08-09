import ImageOverlaysCenter from "@/components/ImageOverlaysCenter";
import React from "react";
import Image from "next/image";

const page = ({ parmas }) => {
  return (
    <div>
      <ImageOverlaysCenter
        title="Product"
        des="Rital Pressure Cooker"
        imgURL="/product.png"
      />
      <div className="max-w-screen-xl my-4 lg:my-10 mx-auto flex flex-col lg:flex-row items-center justify-center">
        <Image
          src="/b2.jpg"
          width={300}
          height={300}
          alt="about"
          className="rounded-xl mb-4 lg:mb-0"
        />
        <div className="mx-4 lg:mx-10 w-full">
          <div className="mb-5 w-full">
            <p className="text-base lg:text-xl text-center mb-3 lg:mb-5 bg-secand text-white p-2">
              Power: 1000W
            </p>
            <p className="text-base lg:text-xl text-center mb-3 lg:mb-5 bg-secand text-white p-2">
              Capacity: 6L
            </p>
            <p className="text-base lg:text-xl text-center mb-3 lg:mb-5 bg-secand text-white p-2">
              Caliber 22cm
            </p>
            <p className="text-base lg:text-xl text-center mb-3 lg:mb-5 bg-secand text-white p-2">
              Working Pressure: 0 – 70 kPa
            </p>
            <p className="text-base lg:text-xl text-center mb-3 lg:mb-5 bg-secand text-white p-2">
              Limit Pressure: 90 kPa
            </p>
            <p className="text-base lg:text-xl text-center mb-3 lg:mb-5 bg-secand text-white p-2">
              Holding Temperature: 60 – 80 Degrees
            </p>
          </div>
        </div>
      </div>
      <p className="max-w-screen-xl m-auto my-3 text-justify p-4 lg:p-0">
        Rital Electrics prides itself on delivering superior products crafted
        with Italian precision and excellence. Since our establishment in 2021,
        we have been dedicated to enhancing the comfort, convenience, and
        efficiency of your daily life through our innovative range of electronic
        devices. At Rital Electrics, we understand that the heart of every home
        lies within the kitchen. That is why we have meticulously designed and
        manufactured a wide array of kitchen appliances to cater to your diverse
        culinary needs. From state-of-the-art air fryers to sleek coffee
        machines and blenders, our products combine cutting-edge technology with
        Italian craftsmanship to elevate your cooking experience. We believe in
        the power of innovation and continuously strive to introduce new and
        advanced features in our products. Our team of skilled engineers and
        designers work tirelessly to bring you the latest advancements in
        electronic technology, ensuring that our appliances are not only
        functional Rital Electrics prides itself on delivering superior products
        crafted with Italian precision and excellence. Since our establishment
        in 2021, we have been dedicated to enhancing the comfort, convenience,
        and efficiency of your daily life through our innovative range of
        electronic devices. At Rital Electrics, we understand that the heart of
        every home lies within the kitchen. That is why we have meticulously
        designed and manufactured a wide array of kitchen appliances to cater to
        your diverse culinary needs. From state-of-the-art air fryers to sleek
        coffee machines and blenders, our products combine cutting-edge
        technology with Italian craftsmanship to elevate your cooking
        experience.
      </p>
    </div>
  );
};

export default page;
