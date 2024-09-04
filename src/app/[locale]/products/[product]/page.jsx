"use client";
import ImageOverlaysCenter from "@/components/ImageOverlaysCenter";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Page = ({ params }) => {
  const { t } = useTranslation();

  const products = [
    {
      id: "1",
      title: "RT - 1000 Food Chopper",
      imageUrl: "/products/new/RT - 1000 Food Chopper.jpg",
      detail: [
        "Rated Power: 220V-240V 50HZ-60Hz 300W",
        "CAPACITY: 3.0L",
        "Detachable parts for easy cleaning",
        "Double cover design, fresh stirring and cover immediately",
        "Machine cup separation, use more convenient",
        "3 speeds control",
        "New S blade chopping system",
        "Non-slip rubber base",
        "High quality borosilicate glass",
      ],
    },
    {
      id: "2",
      title: "RT - 1002 Food Chopper",
      imageUrl: "/products/new/RT - 1002 Food Chopper.jpg",
      detail: [
        "Rated Power: 220V-240V 50HZ-60Hz 300W",
        "CAPACITY: 3.0L",
        "Detachable parts for easy cleaning",
        "Double cover design, fresh stirring and cover immediately",
        "Machine cup separation, use more convenient",
        "3 speeds control",
        "New S blade chopping system",
        "Non-slip rubber base",
        "High quality borosilicate glass",
      ],
    },
    {
      id: "3",
      title: "RT - 1004 Multifunction Blender Robots",
      imageUrl: "/products/new/RT - 1004 Multifunction Blender Robots.jpg",
      detail: [
        `FRUIT JUICE: A smoothie is a great way to start your day. You can get half of your daily recommended fruits and vegetables in one tall glass.Raw Pro series make the best smoothies in 30 sec or less.`,
        `ICE CREAM: With a Raw Pro Series, you get an ice creamconsistently. Crush ice and water mixtureeffectively and without in cidert.Make daiquiris, granitas and more.`,
        `SOYMILK: Grind soy beans and other grains nelyto make beautiful smooth drinks without losing any of the nutrition`,
        `SOUP: With a Raw Pro Series you pulverizethe taw vegeta bles instead of cooking them down so you retainall the vitamins and nutrients.`,
      ],
    },
    {
      id: "4",
      title: "RT - 1006 Commercial Blender",
      imageUrl: "/products/new/RT - 1006 Commercial Blender.jpg",
      detail: [
        "Electric Rating: 220V 50Hz",
        "Unbreakable 2L large capacity jar",
        "High speed 100% copper motors",
        "US 304 Food grade 6 blades",
        "Wet and Dry grinds",
        "PTC Thermostat protect system",
      ],
    },
    {
      id: "5",
      title: "RT - 1016 Food Chopper",
      imageUrl: "/products/new/RT - 1016 Food Chopper.jpg",
      detail: [
        "Capacity:3L",
        "Electric Rating:220V 50/60Hz 400W",
        "Cover material: stainless",
        "Bowl material: stainless steel",
        "Button:3",
        "%100 powerful pure copper motor",
        "Detachable Blade:4-S blades+2-S blades",
        "Bottom pad: non-slip",
        "Package: no foam",
      ],
    },
    {
      id: "6",
      title: "RT - 1021 Electric Kettle",
      imageUrl: "/products/new/RT - 1021 Electric Kettle.jpg",
      detail: [
        "2.0 L capacity",
        "indicator lamp",
        "Automatic switch off",
        "Water level indicator",
        "Removable and washable filter",
        "360°cordless power base",
      ],
    },
    {
      id: "7",
      title: "RT - 1022 Electric Kettle",
      imageUrl: "/products/new/RT - 1022 Electric Kettle.jpg",
      detail: [
        "2.0 L capacity",
        "indicator lamp",
        "Automatic switch off",
        "Water level indicator",
        "Removable and washable filter",
        "360°cordless power base",
      ],
    },
    {
      id: "8",
      title: "RT - 1023 Multifunctional grinding machine",
      imageUrl: "/products/new/RT - 1023 Multifunctional grinding machine.jpg",
      detail: ["Rated power supply: 220-240V 50/50Hz", "Motor power:300W"],
    },
    {
      id: "9",
      title: "RT - 1024 Electric Kettle",
      imageUrl: "/products/new/RT - 1024 Electric Kettle.jpg",
      detail: [
        "1.8 L capacity",
        "indicator lamp",
        "Automatic switch off",
        "Water level indicator",
        "Removable and washable filter",
        "360°cordless power base",
      ],
    },
    {
      id: "10",
      title: "RT - 1025 Electric Kettle",
      imageUrl: "/products/new/RT - 1025 Electric Kettle.jpg",
      detail: [
        "1.8 L capacity",
        "indicator lamp",
        "Automatic switch off",
        "Water level indicator",
        "Removable and washable filter",
        "360°cordless power base",
      ],
    },
    {
      id: "11",
      title: "RT - 1026 Electric Kettle",
      imageUrl: "/products/new/RT - 1026 Electric Kettle.jpg",
      detail: [
        "2.3 L capacity",
        "indicator lamp",
        "Automatic switch off",
        "Water level indicator",
        "Removable and washable filter",
        "360°cordless power base",
      ],
    },
    {
      id: "12",
      title: "RT - 1028 Electrical Coffee Pot",
      imageUrl: "/products/new/RT - 1028 Electrical Coffee Pot.jpg",
      detail: [
        "Ideal for the Turkish coffee",
        "0.5lt chamber capacity",
        "ON/Off knob with light",
        "Dual safety system for overheat protection",
        "220V-240V,50HZ,600W",
      ],
    },
    {
      id: "13",
      title: "RT - 1029 Features",
      imageUrl: "/products/new/RT - 1029 Features.jpg",
      detail: [
        "Two cooking plate",
        "Anti-heat product easy to clean ",
        "High quality",
        "Two operating on/off indicator light",
        "Various heat operations",
        "Two auto-thermostat",
        "Overheat protection",
        "Non-stick coating",
        "Power:2000W",
      ],
    },
    {
      id: "14",
      title: "RT - 1030 Features",
      imageUrl: "/products/new/RT - 1030 Features.jpg",
      detail: [
        "Two cooking plate",
        "Anti-heat product easy to clean ",
        "High quality",
        "Two operating on/off indicator light",
        "Various heat operations",
        "Two auto-thermostat",
        "Overheat protection",
        "Non-stick coating",
        "Power:2000W",
      ],
    },
    {
      id: "15",
      title: "RT - 1032 Hand Mixer",
      imageUrl: "/products/new/RT - 1032 Hand Mixer.jpg",
      detail: [
        "5 speeds",
        "Turbo function with safety device: turbo function only works when the appliance is functioning",
        "Eject button with safety device: blocked while the appliance is operating ",
        "Chrome dough hooks and beaters included Body with brushed stainless steel",
        "220-240V~50/60Hz, 200W",
      ],
    },
    {
      id: "16",
      title: "RT - 1034 Electric Kettle",
      imageUrl: "/products/new/RT - 1034 Electric Kettle.jpg",
      detail: [
        "2.0 L capacity",
        "indicator lamp",
        "Automatic switch off",
        "Water level indicator",
        "Removable and washable filter",
        "360°cordless power base",
      ],
    },
    {
      id: "17",
      title: "RT - 1036 Copper Motor",
      imageUrl: "/products/new/RT - 1036 Copper Motor.jpg",
      detail: [
        "COFFEE MAKER",
        "Power 220V-240V60-50HZ,600W",
        "Capacity 4-1 cups 280-70ML",
        "Anti-overflow smart cooking sensor",
        "safety system preventing waterless operation audio warning",
        "4-1 fin can capacity 280-70ML",
      ],
    },
    {
      id: "18",
      title: "RTB - 815",
      imageUrl: "/products/new/RTB-815.jpg",
      detail: [
        "1200W 220-240V~",
        "24 Speeds",
        "Stainless steel body",
        "Titanium 6 blades",
        "Over heating protection",
        "1.8L glass jar",
        "LCD Display",
        "Non-slip rubber feet",
        "Stepless speed turn knob",
        "Grinder cup",
      ],
    },
    {
      id: "19",
      title: "RTB - 813",
      imageUrl: "/products/new/RTB-813.jpg",
      detail: [
        "1200W 220-240V~",
        "functions:clean.grind.ice and smoothie",
        "Stainless steel body",
        "Titanium 6 blades",
        "Stepless speed turn knob",
        "1.5L glass jar",
        "Vertical switch control wit",
        "RMD i-touch panel",
        "Colorful manual option",
        "Non-slip rubber feet",
      ],
    },
    {
      id: "20",
      title: "RTJ - 577",
      imageUrl: "/products/new/RTJ-577.jpg",
      detail: [
        "1000W 220-240V~",
        "Full stainless steel housing",
        "Stainless steel blade assembly",
        "Stainless steel middle container",
        "85mm diameter of feeding tube",
        "1.OL juice cup",
        "Die-casting handle with safety lock",
        "Non-slip rbber feet",
        "2.4L pulp container",
        "5 speeds with I-touch",
      ],
    },
    {
      id: "21",
      title: "RTJ - 571",
      imageUrl: "/products/new/RTJ-571.jpg",
      detail: [
        "1000W 220-240V~",
        "Full stainless steel housing",
        "Stainless steel blade assembly",
        "Stainless steel middle container",
        "85mm diameter of feeding tube",
        "1.OL juice cup",
        "Stainless steel handle with safety lock",
        "Non-slip rbber feet",
        "2.4L pulp container",
        "5 speeds with I-touch",
      ],
    },
    {
      id: "22",
      title: "RTG - 921",
      imageUrl: "/products/new/RTG-921.jpg",
      detail: [
        "Related power:60OW",
        "Locked power:1600W 220-240V~",
        "On-off & reverse switch and Power indicator with LED light",
        "Die-cast aluminum NO.5 grinder head with stainless steel tray",
        "touch 7 speeds control panel",
        "3 cutting plates:fine, normal and coarse",
        "Sausage & kubbe attachment + food pusher",
      ],
    },
  ];
  const product = products.filter((item) => item.id === params.product);
  return (
    <div>
      <ImageOverlaysCenter
        title="Product"
        des={product[0].title}
        imgURL={product[0].imageUrl}
      />
      <div className="max-w-screen-xl my-4 lg:my-10 mx-auto flex flex-col lg:flex-row items-center justify-center">
        <div className="mx-4 px-4 mb-3 w-full">
          <Image
            src={product[0].imageUrl}
            width={600}
            height={600}
            alt="detail"
            className="rounded-xl  w-full h-full mb-4 lg:mb-0 shadow-lg"
          />
        </div>
        <div className="mx-4 lg:mx-10 w-full">
          <div className="mb-5 w-full">
            {product[0].detail.map((item, index) => (
              <p
                key={index}
                className="text-base lg:text-xl mx-3 text-center mb-3 rounded-lg lg:mb-5 bg-secand text-white p-2"
              >
                {t(`${item}`)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
