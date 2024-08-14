"use client";
import React from "react";
import TitleSction from "./TitleSction";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import "../app/[locale]/globals.css";
const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo corrupti ratione voluptatibus recusandae dolore.",
    name: "Nilay Hirpara",
    position: "Owner",
    image: "/images/person_1.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo corrupti ratione voluptatibus recusandae dolore.",
    name: "Nilay Hirpara",
    position: "Owner",
    image: "/images/person_1.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo corrupti ratione voluptatibus recusandae dolore.",
    name: "Nilay Hirpara",
    position: "Owner",
    image: "/images/person_1.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo corrupti ratione voluptatibus recusandae dolore.",
    name: "Nilay Hirpara",
    position: "Owner",
    image: "/images/person_1.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo corrupti ratione voluptatibus recusandae dolore.",
    name: "Nilay Hirpara",
    position: "Owner",
    image: "/images/person_1.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo corrupti ratione voluptatibus recusandae dolore.",
    name: "Nilay Hirpara",
    position: "Owner",
    image: "/images/person_1.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo corrupti ratione voluptatibus recusandae dolore.",
    name: "Nilay Hirpara",
    position: "Owner",
    image: "/images/person_1.jpg",
  },
];

const HappyClients = () => {
  return (
    <div className="relative h-[700px] mt-10">
      <Image
        className="object-cover"
        src="/bg_1.jpg"
        fill={true}
        alt="imageOverlays"
        quality={75}
      />
      <div className="bg-black bg-opacity-80 w-full h-full absolute top-0" />
      <div className=" flex items-center justify-center w-full h-full     ">
        <div className="w-full  max-w-screen-xl  text-white p-2">
          <TitleSction title="Testimonials" subTitle="Happy Clients" />
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
                <div className=" flex flex-col border-[1px] border-white/50 p-6 rounded-xl">
                  <p className="mb-4 text-xl lg:text-2xl">{testimonial.text}</p>
                  <div className="flex items-center">
                    <div className="w-16 h-w-16 ">
                      <Image
                        src="/person_1.jpg"
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
