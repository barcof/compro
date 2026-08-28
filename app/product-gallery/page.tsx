import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ProductGallery from "@/components/Gallery";

export default function Page() {
  // Pass images array here or fetch server-side as needed.
  const images = [
    {
      title: "Catridge Seal",
      image: "catridge-seal.jpg",
      category: "products",
    },
    {
      title: "Agitator Seal",
      image: "agitator-seal.jpg",
      category: "products",
    },
    {
      title: "Pusher Seal",
      image: "pusher-seal.jpg",
      category: "products",
    },
    {
      title: "Rubber Bellows Seal",
      image: "rubber-bellows-seal.jpg",
      category: "products",
    },
    {
      title: "Bellows Seal",
      image: "bellows-seal.jpg",
      category: "products",
    },
    {
      title: "Single Spring",
      image: "single-spring.jpg",
      category: "products",
    },
    {
      title: "Base Plate + hard Lining Rubber",
      image: "base-plate-hard-lining-rubber.jpg",
      category: "products",
    },
    {
      title: "Metal Spray",
      image: "metal-spray.jpg",
      category: "products",
    },
    {
      title: "Buffing",
      image: "buffing.jpg",
      category: "products",
    },
    {
      title: "Ceramic Coating",
      image: "ceramic-coating.jpg",
      category: "products",
    },
    {
      title: "Repair Rotary Joint",
      image: "repair-rotary-joint.jpg",
      category: "products",
    },
    {
      title: "Disk Coupling",
      image: "disk-coupling.jpg",
      category: "products",
    },
    {
      title: "Recondition Non Seal Pumping",
      image: "recondition-non-seal-pumping.jpg",
      category: "products",
    },
    {
      title: "Recondition Diaphragm Pump",
      image: "recondition-diaphragm-pump.jpg",
      category: "products",
    },
    {
      title: "Recondition Vacuum Pump",
      image: "recondition-vacuum-pump.jpg",
      category: "products",
    },
    {
      title: "Heavy Duty Roller",
      image: "heavy-duty-roller.jpg",
      category: "products",
    },
    {
      title: "Sight Glass",
      image: "sight-glass.jpg",
      category: "products",
    },
    {
      title: "Rubber E/J, O-Ring, Oil Seal, Bearing",
      image: "rubber-ej-oring-oil-seal-bearing.jpg",
      category: "products",
    },
    {
      title: "Roundbar Material",
      image: "roundbar-material.jpg",
      category: "products",
    },
    {
      title: "Pipe/Tubing Material",
      image: "pipe-tubing-material.jpg",
      category: "products",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Section id="details">
        <div className="flex flex-col space-y-8 text-center">
          <div className="text-3xl text-muted-foreground md:text-4xl">
            Koleksi Produk
          </div>
          <ProductGallery images={images} />
        </div>
      </Section>
      <Footer />
    </div>
  );
}
