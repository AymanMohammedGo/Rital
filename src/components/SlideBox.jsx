"use client";
import { useTranslation } from "react-i18next";

import React from "react";
import Image from "next/image";
import { useState } from "react";
const sections = [
  {
    id: 1,
    number: "01",
    title: "MULTIFUNCTION BLENDER",
    description:
      "One machine with multiple functions Extract nutritious juices",
    imageUrl: "/Blender1.jpg",
  },
  {
    id: 2,
    number: "02",
    title: "TURKISH TEA MAKER",
    description:
      "Experience the rich and authentic taste of Turkish tea Capture the essence of tradition in every sip",
    imageUrl: "/teamaker.jpg",
  },
  {
    id: 3,
    number: "03",
    title: "SMART PRESSURE COOKER",
    description:
      "Effortlessly cook delicious meals in minutes Bring convenience and flavor to your kitchen",
    imageUrl: "/cooker1.jpg",
  },
  // {
  //   id: 4,
  //   number: "04",
  //   title: "Choppers",
  //   description:
  //     "Effortlessly cook delicious meals in minutes Bring convenience and flavor to your kitchen",
  //   imageUrl: "/creative.jpg",
  // },
];
const SlideBox = () => {
  const [activeSection, setActiveSection] = useState(1);
  const { t } = useTranslation();

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? activeSection : id);
  };
  return (
    <div className="w-full max-w-screen-lg mx-auto  flex flex-col lg:flex-row">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`mb-4 mx-2 border-gray-100 border-[3px] shadow-lg rounded-3xl lg:mb-0 cursor-pointer transition-all duration-300 overflow-hidden ${
            activeSection === section.id ? "flex-grow" : "flex-shrink-0 lg:w-20"
          }`}
          onClick={() => toggleSection(section.id)}
        >
          <div className="flex flex-col items-start h-full">
            <div className="flex  w-full">
              <span className="text-2xl font-bold mx-2 my-4 bg-primary  w-[60px] h-[60px] flex justify-center items-center text-white rounded-full">
                {t(`${section.number}`)}
              </span>
              {activeSection === section.id && (
                <h2 className="flex items-center flex-1 mx-2 text-xl lg:text-2xl font-bold">
                  {t(`${section.title}`)}
                </h2>
              )}
              {activeSection !== section.id && (
                <div className="flex-1 h-[90px] lg:hidden">
                  <Image
                    src={section.imageUrl}
                    width={500}
                    height={500}
                    alt={section.title}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                </div>
              )}
            </div>
            {activeSection === section.id && (
              <>
                <div className="flex-1 px-4 mb-4">
                  {/* <h2 className="text-xl lg:text-2xl font-bold">
                    {section.title}
                  </h2> */}
                  <p className=" text-base h-[72px] md:h-[60px] lg:text-lg">
                    {t(`${section.description}`)}
                  </p>
                </div>
                <div className="w-full max-h-[400px] transition-all">
                  <Image
                    src={section.imageUrl}
                    width={500}
                    height={500}
                    alt={section.title}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                </div>
              </>
            )}

            {activeSection !== section.id && (
              <div className="w-full h-full  lg:block hidden">
                <Image
                  src={section.imageUrl}
                  width={500}
                  height={500}
                  alt={section.title}
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlideBox;
