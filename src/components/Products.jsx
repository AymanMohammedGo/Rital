import Image from "next/image";
import Link from "next/link";
import React from "react";
const products = [
  {
    imageUrl: "/b1.jpg",
  },
  {
    imageUrl: "/b2.jpg",
  },
  {
    imageUrl: "/b1.jpg",
  },
  {
    imageUrl: "/b2.jpg",
  },
  {
    imageUrl: "/b1.jpg",
  },
  {
    imageUrl: "/b2.jpg",
  },
  {
    imageUrl: "/b1.jpg",
  },
  {
    imageUrl: "/b2.jpg",
  },
  {
    imageUrl: "/b1.jpg",
  },
  {
    imageUrl: "/b2.jpg",
  },
  {
    imageUrl: "/b1.jpg",
  },
  {
    imageUrl: "/b2.jpg",
  },
];
const Products = () => {
  return (
    <div className="max-w-screen-xl p-4 m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5  ">
      {products.map((item, index) => (
        <Link key={index} href="/products/1">
          <div className="relative overflow-hidden rounded-xl  transition-all duration-300  border-[2px] hover:scale-90 hover:border-secand">
            <Image
              src={item.imageUrl}
              width={400}
              height={300}
              alt="products"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute top-0 text-center w-full ">
              <h1 className="px-2 py-4 bg-secand text-white">
                Pressure Cooker
              </h1>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
