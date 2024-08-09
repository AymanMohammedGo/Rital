import ImageOverlaysCenter from "@/components/ImageOverlaysCenter";
import React from "react";

const page = () => {
  return (
    <div>
      <ImageOverlaysCenter
        title="About Us"
        des=" Rital electric tea maker meets Traditional Turkish tea with"
        imgURL="/bg_3.jpg"
      />
      <div className="max-w-screen-xl p-2 my-4 lg:my-10 mx-auto flex flex-col lg:flex-row items-center justify-center">
        <div className="border-2 border-secand rounded-xl p-4 lg:p-8">
          <h1 className="bg-secand text-lg rounded-xl text-white p-4 text-center">
            Your trusted destination for high-quality kitchen and home
            appliances
          </h1>
          <div className="my-4">
            <p className="text-justify">
              Rital Electrics prides itself on delivering superior products
              crafted with Italian precision and excellence. Since our
              establishment in 2021, we have been dedicated to enhancing the
              comfort, convenience, and efficiency of your daily life through
              our innovative range of electronic devices.
            </p>
            <p className="text-justify">
              At Rital Electrics, we understand that the heart of every home
              lies within the kitchen. That is why we have meticulously designed
              and manufactured a wide array of kitchen appliances to cater to
              your diverse culinary needs. From state-of-the-art air fryers to
              sleek coffee machines and blenders, our products combine
              cutting-edge technology with Italian craftsmanship to elevate your
              cooking experience.
            </p>
            <p className="text-justify">
              We believe in the power of innovation and continuously strive to
              introduce new and advanced features in our products. Our team of
              skilled engineers and designers work tirelessly to bring you the
              latest advancements in electronic technology, ensuring that our
              appliances are not only functional
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
