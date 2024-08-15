import Image from "next/image";
import React from "react";
import TitleSction from "./TitleSction";

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
        <div className="mb-10 lg:mb-16 text-center relative">
          <span
            style={{
              background: `linear-gradient(180deg, #D1223F,#231F20)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="   w-full font-bold  text-4xl lg:text-5xl"
          >
            Ritalel Ectric
          </span>
        </div>

        <div class="grid grid-cols-2   my-5 justify-between lg:items-center flex-wrap">
          <div className="my-5 text-center">
            <p className="font-bold text-primary text-2xl lg:text-3xl mb-2">
              11
            </p>
            <span className="font-bold text-lg">Years of Experience</span>
          </div>
          <div className="my-5 text-center">
            <p className="font-bold text-primary text-2xl lg:text-3xl mb-2">
              100
            </p>
            <span className="font-bold text-lg">Product</span>
          </div>
          <div className="my-5 text-center">
            <p className="font-bold text-primary text-2xl lg:text-3xl mb-2">
              30
            </p>
            <span className="font-bold text-lg">Staffs</span>
          </div>
          <div className="my-5 text-center">
            <p className="font-bold text-primary text-2xl lg:text-3xl mb-2">
              1500
            </p>
            <span className="font-bold text-lg">Happy Customers</span>
          </div>
        </div>
        <p className="text-lg">
          The amount of love gained by you people is just pure and we are keep
          on improving our services and tastes.
        </p>
      </div>
    </div>
  );
};

export default AboutHome;
