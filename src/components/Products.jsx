import Image from "next/image";
import Link from "next/link";
import React from "react";
const products = [
  {
    id: 1,
    title: "Rital Chopper 1001",
    imageUrl: "/products/chooper3l.png",
  },
  {
    id: 2,
    title: "Rital Chopper 1002",
    imageUrl: "/products/chooper6l.png",
  },
  {
    id: 3,
    title: "Rital Pressure Cooker",
    imageUrl: "/products/cooker2.png",
  },
  {
    id: 4,
    title: "Rital Blender",
    imageUrl: "/products/Blender2.png",
  },
  {
    id: 5,
    title: "Rital Air Fryer",
    imageUrl: "/products/Airfryer1.png",
  },
  {
    id: 6,
    title: "Rital Turkish Tea Maker",
    imageUrl: "/products/Teamaker2.png",
  },
  {
    id: 7,
    title: "Rital Vacuum Cleaner",
    imageUrl: "/products/Vacuum1.png",
  },
  {
    id: 8,
    title: "Rital Heater",
    imageUrl: "/products/heater.png",
  },
  {
    id: 9,
    title: "Rital Hand Mixer",
    imageUrl: "/products/Prmixer.png",
  },
  {
    id: 10,
    title: "Rital Water Boiler",
    imageUrl: "/products/Prboiler.png",
  },
];
const Products = () => {
  return (
    <div className="max-w-screen-xl px-4 m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3 lg:gap-5  ">
      {products.map((item, index) => (
        <Link key={index} href={`/products/${item.id}`}>
          <div className="relative overflow-hidden rounded-xl  transition-all duration-300   hover:scale-90 ">
            <div className=" text-center w-full h-[88px] ">
              <h1 className="px-2 h-full flex items-center justify-center text-lg lg:text-xl py-4 bg-secand text-white">
                {item.title}
              </h1>
            </div>
            <div className="h-[300px]">
              <Image
                src={item.imageUrl}
                width={400}
                height={300}
                alt="products"
                className="w-full h-full object-cover rounded-b-xl"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
