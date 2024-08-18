"use client";
import React from "react";
import TitleSction from "./TitleSction";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const testimonials = [
  {
    text: "The quality of the products from this company is outstanding! I bought a blender, and it feels incredibly sturdy and well-made. The performance is top-notch.",
    name: "Nilay Hirpara",
    position: "Owner",
    image: "/Opinions/person_1.jpg",
  },
  {
    text: "I purchased a cookware set, and I am extremely satisfied with the quality. The materials are durable, and the design is both functional and elegant.",
    name: "Aria Johnson",
    position: "Chef",
    image: "/Opinions/person_2.jpg",
  },
  {
    text: "The kitchen appliances are fantastic! The quality is superb, and they have made cooking so much easier. I highly recommend this company.",
    name: "Mason Lee",
    position: "Home Cook",
    image: "/Opinions/person_3.jpg",
  },
  {
    text: "I’ve been using their products for a while now, and I’m impressed by how well they hold up. The durability and performance are unmatched.",
    name: "Emily Davis",
    position: "Food Blogger",
    image: "/Opinions/person_4.jpg",
  },
  {
    text: "Exceptional quality! The knife set I bought is sharp, well-balanced, and made from high-quality materials. These knives have become an essential part of my kitchen.",
    name: "Liam Patel",
    position: "Restaurant Owner",
    image: "/Opinions/person_5.jpg",
  },
  {
    text: "This company delivers on its promise of high-quality products. I bought a coffee maker, and it works perfectly. The build quality is excellent.",
    name: "Olivia Martinez",
    position: "Barista",
    image: "/Opinions/person_6.jpg",
  },
];

const HappyClients = () => {
  return (
    <div className="relative h-[700px] mt-10">
      <Image
        className="object-cover"
        src="/Opinions/bg.jpg"
        fill={true}
        alt="imageOverlays"
        quality={75}
      />
      <div className="bg-black bg-opacity-80 w-full h-full absolute top-0" />
      <div className=" flex items-center justify-center w-full h-full     ">
        <div className="w-full  max-w-screen-xl  text-white p-2">
          <TitleSction
            title="Happy Clients"
            color1={"#FFFFFF"}
            color2={"#FFFFFF"}
          />

          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper  w-full h-full p-4"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className=" flex flex-col justify-between h-[300px] border-[1px] border-white/50 p-6 rounded-xl">
                  <p className="mb-4 text-lg lg:text-xl  ">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center">
                    <div className="w-16 h-16 ">
                      <Image
                        src={testimonial.image}
                        width={80}
                        height={80}
                        alt=""
                        className="object-cover w-full h-full rounded-full"
                      ></Image>
                    </div>

                    <div className="pl-3 flex-1">
                      <p>{testimonial.name}</p>
                      <span className="font-light">{testimonial.position}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HappyClients;
