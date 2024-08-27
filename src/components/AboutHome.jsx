"use client";
import Image from "next/image";
import React from "react";
import TitleSction from "./TitleSction";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const AboutHome = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-screen-xl my-10 mx-auto flex items-center justify-between">
      <Image
        src="/rital.png"
        width={400}
        height={300}
        alt="about"
        className="rounded-xl hidden lg:flex"
      />
      <div className="mx-4 lg:mx-10 text-center flex-1">
        <div className=" text-center relative">
          <div className="my-10 lg:mb-10 text-center relative">
            <span
              className={`text-primary  w-full font-bold  text-4xl lg:text-5xl`}
            >
              {t("ABOUT US")}
            </span>
          </div>
        </div>

        <h1 className=" text-center font-bold  text-2xl md:text-3xl lg:text-4xl ">
          {t("QUALITY IS OUR CORNERSTONE")}
        </h1>
        <p className="  my-5 text-lg  lg:text-xl text-justify">
          {t(
            `Each product undergoes rigorous testing and adheres to the highest Italian quality standards. We source the finest materials and components to ensure durability and long-lasting performance, allowing you to enjoy the benefits of our appliances for years to come.`
          )}
        </p>
        <Link
          href="/about"
          className="bg-secand hover:bg-primary hover:border-none text-white border-white rounded-lg border-2 px-5 py-2 my-4 flex justify-center items-center w-fit mx-auto transition-all"
        >
          {t("Read More")}
        </Link>
      </div>
    </div>
  );
};

export default AboutHome;
