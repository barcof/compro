import Section from "./Section";
import Slider from "./Slider";
import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import BacgroundProdcut from "@/public/uploads/bg-product.jpeg";

const Products = () => {
  const products = [
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

  return (
    <Section id="products" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={BacgroundProdcut}
          alt="background-products"
          fill
          style={{ objectFit: 'cover' }}
          className="z-0 object-contain object-center"
          aria-hidden="true"
          loading="eager"
        />
      </div>
      <div
        className="absolute inset-0 z-1 bg-white/90"
        aria-hidden="true"
      ></div>

      <div className="relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            Produk Kami
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-accent rounded-full"></div>
        </div>
        <div className="grid justify-items-stretch grid-cols-1 gap-2 lg:gap-2 place-items-center lg:grid-cols-2">
          <div className="mx-6 pb-14 gap-8 text-justify text-lg text-muted-foreground justify-self-start max-w-full lg:max-w-full lg:m-0 lg:p-0">
            <p>
              Berikut adalah beberapa produk unggulan yang kami tawarkan,
              dirancang untuk memenuhi kebutuhan industri anda dengan kualitas
              terbaik dan inovasi terkini.
            </p>
            <Link
              href="/product-gallery#details"
              className="absolute mt-4 shadow-sm p-2 text-muted-foreground rounded-sm bg-white flex flex-row gap-2 items-center hover:text-white hover:bg-primary hover:shadow-lg transition-all duration-300 justify-self-center lg:text-sm lg:justify-self-start"
            >
              Telusuri Produk
              <FaExternalLinkAlt />
            </Link>
          </div>
          <div className="max-h-screen max-w-full justify-self-center lg:max-w-sm">
            <Slider products={products} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Products;
