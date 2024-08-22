import Image from "next/image";
import Link from "next/link";
import React from "react";
// const products = [
//   {
//     id: 1,
//     title: "Rital Chopper 1001",
//     imageUrl: "/products/chooper3l.png",
//   },
//   {
//     id: 2,
//     title: "Rital Chopper 1002",
//     imageUrl: "/products/chooper6l.png",
//   },
//   {
//     id: 3,
//     title: "Rital Pressure Cooker",
//     imageUrl: "/products/cooker2.png",
//   },
//   {
//     id: 4,
//     title: "Rital Blender",
//     imageUrl: "/products/Blender2.png",
//   },
//   {
//     id: 5,
//     title: "Rital Air Fryer",
//     imageUrl: "/products/Airfryer1.png",
//   },
//   {
//     id: 6,
//     title: "Rital Turkish Tea Maker",
//     imageUrl: "/products/Teamaker2.png",
//   },
//   {
//     id: 7,
//     title: "Rital Vacuum Cleaner",
//     imageUrl: "/products/Vacuum1.png",
//   },
//   {
//     id: 8,
//     title: "Rital Heater",
//     imageUrl: "/products/heater.png",
//   },
//   {
//     id: 9,
//     title: "Rital Hand Mixer",
//     imageUrl: "/products/Prmixer.png",
//   },
//   {
//     id: 10,
//     title: "Rital Water Boiler",
//     imageUrl: "/products/Prboiler.png",
//   },
// ];
const products = [
  {
    id: 1,
    title: "Hand mixer",
    imageUrl: "/products/new/1.jpg",
  },
  {
    id: 2,
    title: "Electric pyrex stove",
    imageUrl: "/products/new/2.jpg",
  },
  {
    id: 3,
    title: "Hand mixer set",
    imageUrl: "/products/new/3.jpg",
  },
  {
    id: 4,
    title: "Food Processor 3L",
    imageUrl: "/products/new/4.jpg",
  },
  {
    id: 5,
    title: "Food processor 4L",
    imageUrl: "/products/new/5.jpg",
  },
  {
    id: 6,
    title: "Food Processor 4L",
    imageUrl: "/products/new/6.jpg",
  },
  {
    id: 7,
    title: "Hand grinder",
    imageUrl: "/products/new/7.jpg",
  },
  {
    id: 8,
    title: "industrial mixer",
    imageUrl: "/products/new/8.jpg",
  },
  {
    id: 9,
    title: "Milk jug",
    imageUrl: "/products/new/9.jpg",
  },
  {
    id: 10,
    title: "Industrial blender",
    imageUrl: "/products/new/10.jpg",
  },
  {
    id: 11,
    title: "Electric cutter 2L",
    imageUrl: "/products/new/11.jpg",
  },
  {
    id: 12,
    title: "Heater cooker",
    imageUrl: "/products/new/12.jpg",
  },
  {
    id: 13,
    title: "Electric cutter 1.8L",
    imageUrl: "/products/new/13.jpg",
  },
  {
    id: 14,
    title: "industrial mill",
    imageUrl: "/products/new/14.jpg",
  },
  {
    id: 15,
    title: "Electric1 cutter 2L",
    imageUrl: "/products/new/15.jpg",
  },
  {
    id: 16,
    title: "Electric cutter 2L",
    imageUrl: "/products/new/16.jpg",
  },
  {
    id: 17,
    title: "Food Processor 4L",
    imageUrl: "/products/new/17.jpg",
  },
];
const Products = () => {
  return (
    <div className="max-w-screen-xl px-4 m-auto grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4  gap-3 lg:gap-5  ">
      {products.map((item, index) => (
        <Link key={index} href={`/products/${item.id}`}>
          <div className="relative overflow-hidden rounded-xl  transition-all duration-300   hover:scale-90 ">
            <div className=" text-center w-full h-[70px]  lg:h-full">
              <h1 className="px-2 h-full flex items-center justify-center text-lg lg:text-xl py-4 bg-secand text-white">
                {item.title}
              </h1>
            </div>
            <div className="h-[250px] sm:h-[400px] lg:h-[300px]">
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
