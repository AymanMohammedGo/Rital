import ImageOverlaysCenter from "@/components/ImageOverlaysCenter";
import Products from "@/components/Products";
import React from "react";

const page = () => {
  return (
    <div>
      <ImageOverlaysCenter
        title="Products"
        imgURL="/products/products.png"
        des="QUALITY IS OUR CORNERSTONE"
      />
      <div className="my-10">
        <Products />
      </div>
    </div>
  );
};

export default page;
