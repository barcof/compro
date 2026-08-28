import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ProductGallery from "@/components/Gallery";

export default function Page() {
  // Pass images array here or fetch server-side as needed.
  const images = [
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
    {
      title: "Mesin Lapping & Bellows Test",
      image: "mesin-lapping-bellows-test.jpg",
      category: "facilities",
    },
    {
      title: "Mesin Optical Flat",
      image: "mesin-optical-flat.jpg",
      category: "facilities",
    },
    {
      title: "Mesin las",
      image: "mesin-las.jpg",
      category: "facilities",
    },
    {
      title: "Alat Ukur 1",
      image: "alat-ukur-1.jpg",
      category: "facilities",
    },
    {
      title: "Alat Ukur 2",
      image: "alat-ukur-2.jpg",
      category: "facilities",
    },
    {
      title: "Alat Ukur 3",
      image: "alat-ukur-3.jpg",
      category: "facilities",
    },
    {
      title: "Alat Ukur 4",
      image: "alat-ukur-4.jpg",
      category: "facilities",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Section id="details">
        <div className="flex flex-col space-y-8 text-center">
          <div className="text-3xl text-muted-foreground md:text-4xl">
            Fasilitas Kami
          </div>
          <ProductGallery images={images} />
        </div>
      </Section>
      <Footer />
    </div>
  );
}
