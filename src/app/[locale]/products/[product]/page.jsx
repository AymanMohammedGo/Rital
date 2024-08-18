import ImageOverlaysCenter from "@/components/ImageOverlaysCenter";
import React from "react";
import Image from "next/image";

const page = ({ params }) => {
  const products = [
    {
      id: "1",
      title: "Rital Chopper 1001",
      imageUrl: "/products/chooper3l.png",
      detail: [
        "Power:1000W",
        "Capacity: 3L",
        "3 different Speeds",
        "Glass Container",
        "Stainless Steel Blades",
      ],
    },
    {
      id: "2",
      title: "Rital Chopper 1002",
      imageUrl: "/products/chooper6l.png",
      detail: [
        "Power:1000W",
        "Capacity: 6L",
        "3 different Speeds",
        "Stainless Steel Container",
        "Stainless Steel Blades",
      ],
    },
    {
      id: "3",
      title: "Rital Pressure Cooker",
      imageUrl: "/products/cooker2.png",
      detail: [
        "Power: 1000W",
        "Capacity: 6L",
        "Caliber 22cm",
        "Working Pressure: 0 – 70 kPa",
        "Limit Pressure: 90 kPa",
        "Holding Temperature: 60 – 80 Degrees",
      ],
    },
    {
      id: "4",
      title: "Rital Blender",
      imageUrl: "/products/Blender2.png",
      detail: [
        "Power:5500W",
        "Function: Total crushing",
        "15 different speeds",
        "Stainless steel blades",
      ],
    },
    {
      id: "5",
      title: "Rital Air Fryer",
      imageUrl: "/products/Airfryer1.png",
      detail: [
        "Power: 1700W",
        "Capacity: 5.6 Liters",
        "Temperature: 80 – 200 degrees",
        "Timer: 0 – 60 minutes",
        "Cord: 1.2 m",
      ],
    },
    {
      id: "6",
      title: "Rital Turkish Tea Maker",
      imageUrl: "/products/Teamaker2.png",
      detail: [
        "Power: 1850 – 2200W",
        "Capacity: 1.7L Kettle & 1L Teapot",
        "Borosilicate Glass",
        "Setting Temperature: 40 – 100 Degrees",
        "Stainless Steel",
        "Auto shut-off",
        "Keep warm & Temperature control",
      ],
    },
    {
      id: "7",
      title: "Rital Vacuum Cleaner",
      imageUrl: "/products/Vacuum1.png",
      detail: [
        "Power: 3000W",
        "Capacity: 60L",
        "Airflow: 120L/min",
        "Cord: 5 meters",
        "Hose Length: 1.5m",
      ],
    },
    {
      id: "8",
      title: "Rital Heater",
      imageUrl: "/products/heater.png",
      detail: [
        "Power: 1200W",
        "Flame retardant material",
        "Overheating protection",
        "Silent operation",
        "High quality carbon heating element",
      ],
    },
    {
      id: "9",
      title: "Rital Hand Mixer",
      imageUrl: "/products/Prmixer.png",
      detail: ["Power: 120W", "Stainless Steel Blades", "Weight: 0.75 kg"],
    },
    {
      id: "10",
      title: "Rital Water Boiler",
      imageUrl: "/products/Prboiler.png",
      detail: ["Power: 120W", "Stainless Steel Blades", "Weight: 0.75 kg"],
    },
  ];
  const product = products.filter((item) => item.id === params.product);
  return (
    <div>
      <ImageOverlaysCenter
        title="Product"
        des={product[0].title}
        imgURL="/product.png"
      />
      <div className="max-w-screen-xl my-4 lg:my-10 mx-auto flex flex-col lg:flex-row items-center justify-center">
        <Image
          src={product[0].imageUrl}
          width={300}
          height={300}
          alt="detail"
          className="rounded-xl w-[400px] lg:w-[800px] h-full mb-4 lg:mb-0 shadow-lg"
        />
        <div className="mx-4 lg:mx-10 w-full">
          <div className="mb-5 w-full">
            {product[0].detail.map((item, index) => (
              <p
                key={index}
                className="text-base lg:text-xl mx-3 text-center mb-3 rounded-lg lg:mb-5 bg-secand text-white p-2"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
