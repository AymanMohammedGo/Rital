import Image from "next/image";
import React from "react";

const AboutHome = () => {
  return (
    <div className="max-w-screen-xl my-10 mx-auto flex items-center justify-center">
      <Image
        src="/intro_1.jpg"
        width={400}
        height={300}
        alt="about"
        className="rounded-xl hidden lg:flex"
      />
      <div className="mx-4 lg:mx-10">
        <div className="mb-5">
          <h1 className="text-3xl font-bold mb-5 bg-primary text-white p-4">
            About Us
          </h1>
          <h2 className="great_Vibes text-primary text-6xl mt-6 mb-4">
            Ritalel Ectric
          </h2>
          <p className="">
            Each product undergoes rigorous testing and adheres to the highest
            Italian quality standards. We source the finest materials and
            components to ensure durability and long-lasting performance,
            allowing you to enjoy the benefits of our appliances for years to
            come.
          </p>
        </div>
        <div class="flex-col lg:flex-row flex my-5 justify-between items-center flex-wrap">
          <div className="my-5 text-center">
            <p className="font-bold text-primary text-xl mb-2">11</p>
            <span className="font-bold">Years of Experience</span>
          </div>
          <div className="my-5 text-center">
            <p className="font-bold text-primary text-xl mb-2">100</p>
            <span className="font-bold">Product</span>
          </div>
          <div className="my-5 text-center">
            <p className="font-bold text-primary text-xl mb-2">30</p>
            <span className="font-bold">Staffs</span>
          </div>
          <div className="my-5 text-center">
            <p className="font-bold text-primary text-xl mb-2">1500</p>
            <span className="font-bold">Happy Customers</span>
          </div>
        </div>
        {/* <hr className="my-5 border-secand"></hr> */}
        <p>
          The amount of love gained by you people is just pure and we are keep
          on improving our services and tastes.
        </p>
      </div>
    </div>
  );
};

export default AboutHome;
