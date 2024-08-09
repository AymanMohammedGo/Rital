import ImageOverlaysCenter from "@/components/ImageOverlaysCenter";
import Products from "@/components/Products";
import React from "react";

const page = () => {
  return (
    <div>
      <ImageOverlaysCenter
        title="Products"
        imgURL="/creative.jpg"
        des="EMPOWER YOUR HOME WITH RITAL ELECTRICS"
      />
      <Products />
    </div>
  );
};

export default page;
