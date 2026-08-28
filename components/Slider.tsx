"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Marker, MarkerContent } from "@/components/ui/marker";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type ProductItem = { title: string; image: string; category: string };

export default function Slider({ products }: { products?: ProductItem[] }) {
  const defaultProducts: ProductItem[] = [
    {
      title: "Rubber Bellows Seal",
      image: "rubber-bellows-seal.jpg",
      category: "products",
    },
    {
      title: "Disk Coupling",
      image: "disk-coupling.jpg",
      category: "products",
    },
    {
      title: "Roundbar Material",
      image: "roundbar-material.jpg",
      category: "products",
    },
  ];

  const items = products && products.length ? products : defaultProducts;

  const imageStyle = {
    borderRadius: "5%",
    width: "400px",
    height: "350px",
  };

  return (
    <div className="container mx-auto">
      <Swiper
        // navigation={true}
        loop={true}
        spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="text-center rounded-2xl cursor-grab active:cursor-grabbing active:select-none"
      >
        {items.map((product, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col justify-items-center p-5"
          >
            <Image
              src={`/uploads/${product.category}/${product.image}`}
              alt={product.title}
              width={1024}
              height={1024}
              loading="eager"
              style={imageStyle}
            />
            <Marker variant="separator">
              <MarkerContent className="text-lg font-bold p-5 text-muted-foreground">
                {product.title}
              </MarkerContent>
            </Marker>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
