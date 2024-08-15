import React from "react";

const TitleSction = ({ title, color1, color2 }) => {
  return (
    <div className="my-10 lg:my-16 text-center relative">
      <span
        style={{
          background: `linear-gradient(180deg, ${color1},${color2})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className="   w-full font-bold  text-4xl lg:text-5xl"
      >
        {title}
      </span>
    </div>
  );
};

export default TitleSction;
