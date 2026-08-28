import Section from "@/components/Section";
import Slider from "@/components/Slider";
import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import BackgroundFacilities from "@/public/uploads/bg-machine-2.jpeg";

const Facilities = () => {
  const facilities = [
    {
      title: "Mesin Milling",
      image: "mesin-milling.jpg",
      category: "facilities",
    },
    {
      title: "Mesin Bubut semi NC",
      image: "mesin-bubut-semi-nc.jpg",
      category: "facilities",
    },
    {
      title: "Meja Setting & QC",
      image: "meja-setting-qc.jpg",
      category: "facilities",
    },
  ];
  return (
    <Section id="facilities" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={BackgroundFacilities}
          alt="background-products"
          fill
          style={{ objectFit: 'cover' }}
          className="z-0 object-cover object-center"
          aria-hidden="true"
          loading="eager"
        />
      </div>
      <div
        className="absolute inset-0 z-1 bg-white/90 sm:bg-white/90"
        aria-hidden="true"
      ></div>

      <div className="relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            Fasilitas Kami
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-accent rounded-full"></div>
        </div>
        <div className="grid justify-items-stretch grid-cols-1 gap-2 lg:gap-2 place-items-center lg:grid-cols-2">
          <div className="max-h-screen max-w-full justify-self-center lg:max-w-sm">
            <Slider products={facilities} />
          </div>
          <div className="mx-6 pb-14 gap-8 text-justify text-lg text-muted-foreground justify-self-start max-w-full lg:max-w-full lg:m-0">
            <p>
              Kami memiliki fasilitas terbaik untuk memenuhi kebutuhan anda,
              mesin handal yang selalu terkalibrasi, presisi disetiap hasil
              produksi. Dengan fasilitas ini, kami dapat memberikan hasil
              kualitas tinggi kepada Anda.
            </p>
            <Link
              href="/facility-gallery#details"
              className="absolute mt-4 shadow-sm p-2 text-muted-foreground rounded-sm bg-white flex flex-row gap-2 items-center hover:text-white hover:bg-accent hover:shadow-lg transition-all duration-300 justify-self-center lg:text-sm lg:justify-self-end"
            >
              Lihat Fasilitas
              <FaExternalLinkAlt />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Facilities;
