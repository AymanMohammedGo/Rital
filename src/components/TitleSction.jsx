"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const TitleSction = ({ title, color }) => {
  const { t } = useTranslation();

  return (
    <div className="my-10 lg:my-16 text-center relative">
      <span className={`${color}  w-full font-bold  text-4xl lg:text-5xl`}>
        {t(`${title}`)}
      </span>
    </div>
  );
};

export default TitleSction;
