import ImageOverlaysCenter from "@/components/ImageOverlaysCenter";
import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <ImageOverlaysCenter
        title="About Us"
        des="EMPOWER YOUR HOME WITH RITAL ELECTRICS"
        imgURL="/creative.jpg"
      />
      <div className="max-w-screen-xl p-2 my-4 lg:my-10 mx-auto flex flex-col lg:flex-row items-center justify-center">
        <div className="border-2 border-gray-200 shadow-lg rounded-xl p-4 lg:p-8">
          <h1 className="bg-primary mb-10 text-lg lg:text-2xl rounded-xl text-white p-4 text-center">
            Your trusted destination for high-quality kitchen and home
            appliances
          </h1>
          <div className="my-4">
            <p className="text-base my-2 lg:text-xl text-justify">
              Rital Electrics prides itself on delivering superior products
              crafted with Italian precision and excellence. Since our
              establishment in 2021, we have been dedicated to enhancing the
              comfort, convenience, and efficiency of your daily life through
              our innovative range of electronic devices.
            </p>
            <p className="text-base my-2 lg:text-xl text-justify">
              At Rital Electrics, we understand that the heart of every home
              lies within the kitchen. That is why we have meticulously designed
              and manufactured a wide array of kitchen appliances to cater to
              your diverse culinary needs. From state-of-the-art air fryers to
              sleek coffee machines and blenders, our products combine
              cutting-edge technology with Italian craftsmanship to elevate your
              cooking experience.
            </p>
            <p className="text-base  my-2 lg:text-xl text-justify">
              We believe in the power of innovation and continuously strive to
              introduce new and advanced features in our products. Our team of
              skilled engineers and designers work tirelessly to bring you the
              latest advancements in electronic technology, ensuring that our
              appliances are not only functional but also aesthetically pleasing
              additions to your home.
            </p>
            <p className="text-base my-2 lg:text-xl text-justify">
              Quality is the cornerstone of Rital Electronics. Each product
              undergoes rigorous testing and adheres to the highest Italian
              quality standards. We source the finest materials and components
              to ensure durability and long-lasting performance, allowing you to
              enjoy the benefits of our appliances for years to come. With our
              commitment to excellence, we aim to exceed your expectations and
              deliver products that enhance your daily life.
            </p>
            <p className="text-base my-2 lg:text-xl text-justify">
              We value your satisfaction and strive to provide impeccable
              customer service. Our dedicated support team is ready to assist
              you with any inquiries or concerns you may have, ensuring a
              seamless experience from purchase to post-sales support.
            </p>
            <p className="text-base  my-2 lg:text-xl text-justify">
              We invite you to explore our extensive range of kitchen and home
              appliances, thoughtfully designed to simplify your life and bring
              elegance to your living space. Join the Rital Electrics family and
              experience the perfect blend of Italian quality, innovation, and
              style in every product we offer.
            </p>
          </div>
          {/* <Image
            className="m-auto mt-10 lg:mt-20"
            src="/rital-logo.png"
            width="200"
            height="200"
            alt="rital"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default page;
