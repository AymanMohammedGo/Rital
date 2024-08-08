import React from "react";

const TitleSction = ({ title, subTitle }) => {
  return (
    <div className="my-10 lg:my-16 text-center relative">
      <h1 className="great_Vibes text-primary text-8xl lg:text-9xl">{title}</h1>
      <div className="relative w-full">
        <span className="absolute w-full  -bottom-1 left-1/2 translate -translate-x-1/2 text-4xl lg:text-6xl">
          {subTitle}
        </span>
      </div>
    </div>
  );
};

export default TitleSction;
