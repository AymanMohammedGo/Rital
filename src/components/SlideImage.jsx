"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import ImageOverlaysCenter from "./ImageOverlaysCenter";

const SlideImage = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-screen h-screen"
      >
        <SwiperSlide className="w-screen h-screen">
          <ImageOverlaysCenter
            imgURL="/bg_1.jpg"
            title="Choppers"
            des="Impress everyone by taking your recipes to the next level"
          />
        </SwiperSlide>
        <SwiperSlide className="w-screen h-screen">
          <ImageOverlaysCenter
            imgURL="/bg_2.jpg"
            title="Turkish Tea Maker"
            des="Rital electric tea maker meets Traditional Turkish tea with
                  modern technology"
          />
        </SwiperSlide>
        <SwiperSlide className="w-screen h-screen">
          <ImageOverlaysCenter
            imgURL="/bg_1.jpg"
            title="Air Fryer"
            des="make all your favorite foods with less of the oil and none of the
              mess."
          />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default SlideImage;
