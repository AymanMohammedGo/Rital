import React from "react";

const TitleSction = ({ title, color }) => {
  return (
    <div className="my-10 lg:my-16 text-center relative">
      <span className={`${color}  w-full font-bold  text-4xl lg:text-5xl`}>
        {title}
      </span>
    </div>
  );
};

export default TitleSction;
