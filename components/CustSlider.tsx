"use client";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

type CustomersItems = { title: string; image: string; category: string };

export default function CustomerSlider({
  customers,
}: {
  customers?: CustomersItems[];
}) {
  const items = customers && customers.length ? customers : null;
  return (
    <div className="container mx-auto">
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        spaceBetween={1}
        freeMode={true}
        modules={[FreeMode, Autoplay]}
        className="text-center rounded-2xl cursor-grab active:cursor-grabbing active:select-none"
      >
        {items &&
          items.map((customers, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col justify-items-center p-2 h-sm"
            >
              <Image
                src={`/uploads/${customers.category}/${customers.image}`}
                alt={customers.title}
                width={1024}
                height={1024}
                loading="eager"
                style={{
                  width: "100%",
                  height: "100px",
                  objectFit: "scale-down",
                }}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
