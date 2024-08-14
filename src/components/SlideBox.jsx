"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
const sections = [
  {
    id: 1,
    number: "01",
    title: "Choppers",
    description: "Impress everyone by taking your recipes to the next level",
    imageUrl: "/creative.jpg",
  },
  {
    id: 2,
    number: "02",
    title: "Choppers",
    description: "Impress everyone by taking your recipes to the next level",
    imageUrl: "/creative.jpg",
  },
  {
    id: 3,
    number: "03",
    title: "Choppers",
    description: "Impress everyone by taking your recipes to the next level",
    imageUrl: "/creative.jpg",
  },
  {
    id: 4,
    number: "04",
    title: "Choppers",
    description: "Impress everyone by taking your recipes to the next level",
    imageUrl: "/creative.jpg",
  },
];
const SlideBox = () => {
  const [activeSection, setActiveSection] = useState(1);

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? activeSection : id);
  };
  return (
    <div className="w-full max-w-screen-lg mx-auto  flex flex-col lg:flex-row">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`mb-4 mx-2 border-primary border-2  rounded-3xl lg:mb-0 cursor-pointer transition-all duration-300 overflow-hidden ${
            activeSection === section.id ? "flex-grow" : "flex-shrink-0 lg:w-20"
          }`}
          onClick={() => toggleSection(section.id)}
        >
          <div className="flex flex-col items-start h-full">
            <div className="flex  w-full">
              <span className="text-2xl font-bold mx-2 my-4 bg-primary  w-[60px] h-[60px] flex justify-center items-center text-white rounded-full">
                {section.number}
              </span>
              {activeSection !== section.id && (
                <div className="flex-1 h-[90px] lg:hidden">
                  <Image
                    src={section.imageUrl}
                    width={400}
                    height={300}
                    alt={section.title}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                </div>
              )}
            </div>
            {activeSection === section.id && (
              <>
                <div className="flex-1 px-4 mb-4">
                  <h2 className="text-xl lg:text-2xl font-bold">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-base lg:text-lg">
                    {section.description}
                  </p>
                </div>
                <div className="w-full h-full">
                  <Image
                    src={section.imageUrl}
                    width={400}
                    height={300}
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
                  width={400}
                  height={300}
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
