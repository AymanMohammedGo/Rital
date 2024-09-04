"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const products = [
  {
    id: 1,
    title: "RT - 1000 Food Chopper",
    imageUrl: "/products/new/RT - 1000 Food Chopper.jpg",
  },
  {
    id: 2,
    title: "RT - 1002 Food Chopper",
    imageUrl: "/products/new/RT - 1002 Food Chopper.jpg",
  },
  {
    id: 3,
    title: "RT - 1004 Multifunction Blender Robots",
    imageUrl: "/products/new/RT - 1004 Multifunction Blender Robots.jpg",
  },
  {
    id: 4,
    title: "RT - 1006 Commercial Blender",
    imageUrl: "/products/new/RT - 1006 Commercial Blender.jpg",
  },
  {
    id: 5,
    title: "RT - 1016 Food Chopper",
    imageUrl: "/products/new/RT - 1016 Food Chopper.jpg",
  },
  {
    id: 6,
    title: "RT - 1021 Electric Kettle",
    imageUrl: "/products/new/RT - 1021 Electric Kettle.jpg",
  },
  {
    id: 7,
    title: "RT - 1022 Electric Kettle",
    imageUrl: "/products/new/RT - 1022 Electric Kettle.jpg",
  },
  {
    id: 8,
    title: "RT - 1023 Multifunctional grinding machine",
    imageUrl: "/products/new/RT - 1023 Multifunctional grinding machine.jpg",
  },
  {
    id: 9,
    title: "RT - 1024 Electric Kettle",
    imageUrl: "/products/new/RT - 1024 Electric Kettle.jpg",
  },
  {
    id: 10,
    title: "RT - 1025 Electric Kettle",
    imageUrl: "/products/new/RT - 1025 Electric Kettle.jpg",
  },
  {
    id: 11,
    title: "RT - 1026 Electric Kettle",
    imageUrl: "/products/new/RT - 1026 Electric Kettle.jpg",
  },
  {
    id: 12,
    title: "RT - 1028 Electrical Coffee Pot",
    imageUrl: "/products/new/RT - 1028 Electrical Coffee Pot.jpg",
  },
  {
    id: 13,
    title: "RT - 1029 Features",
    imageUrl: "/products/new/RT - 1029 Features.jpg",
  },
  {
    id: 14,
    title: "RT - 1030 Features",
    imageUrl: "/products/new/RT - 1030 Features.jpg",
  },
  {
    id: 15,
    title: "RT - 1032 Hand Mixer",
    imageUrl: "/products/new/RT - 1032 Hand Mixer.jpg",
  },
  {
    id: 16,
    title: "RT - 1034 Electric Kettle",
    imageUrl: "/products/new/RT - 1034 Electric Kettle.jpg",
  },
  {
    id: 17,
    title: "RT - 1036 Copper Motor",
    imageUrl: "/products/new/RT - 1036 Copper Motor.jpg",
  },
  {
    id: 18,
    title: "RTB - 815",
    imageUrl: "/products/new/RTB-815.jpg",
  },
  {
    id: 19,
    title: "RTB - 813",
    imageUrl: "/products/new/RTB-813.jpg",
  },
  {
    id: 20,
    title: "RTJ - 577",
    imageUrl: "/products/new/RTJ-577.jpg",
  },
  {
    id: 21,
    title: "RTJ - 571",
    imageUrl: "/products/new/RTJ-571.jpg",
  },
  {
    id: 22,
    title: "RTG - 921",
    imageUrl: "/products/new/RTG-921.jpg",
  },
];
const Products = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-screen-xl px-4 m-auto grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4  gap-3 lg:gap-5  ">
      {products.map((item, index) => (
        <Link key={index} href={`/products/${item.id}`}>
          <div className="relative overflow-hidden rounded-xl  transition-all duration-300   hover:scale-90 ">
            <div className=" text-center w-full h-[125px] lg:h-[90px]  ">
              <h1 className="px-2 h-full flex items-center justify-center text-lg lg:text-xl py-4 bg-secand text-white">
                {t(`${item.title}`)}
              </h1>
            </div>
            <div className="h-[220px] sm:h-[400px] lg:h-[300px]">
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
