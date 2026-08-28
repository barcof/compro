import React from "react";
import Section from "./Section";
import Image from "next/image";
import CompanyPhoto from "@/public/uploads/company-photo.jpeg";

const About = () => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl bg-secondary overflow-hidden shadow-xl">
            <Image
              src={CompanyPhoto}
              alt="Company Photo"
              fill
              style={{objectFit: "cover"}}
              loading="eager"
            />
            {/* <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-bold opacity-10 text-4xl">
              Company Photo
            </div> */}
          </div>
        </div>

        <div className="flex flex-col space-y-6 order-1 lg:order-2">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            Tentang Kami
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full"></div>
          <p className="text-lg text-muted-foreground leading-relaxed text-justify">
            PT GAPURA KENCANA didirikan pada tahun 2010 oleh Bapak Supriyanto
            sebagai pendirinya. Kami bergerak dalam bidang spesialis rekondisi
            Mechanical Seal dengan berbagai merk dan memproduksi produk suku
            cadang lainnya. Kami mengerjakan pekerjaan lain seperti{" "}
            <span className="italic">
              Hard Lining, Rubber Metal Spray, Ceramic Coating, Hard Chrome,
              Stellite, Buffing, dll.{" "}
            </span>
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed text-justify italic">
            Kualitas bukanlah kata tanpa makna, melainkan harmonisasi dari
            kreatifitas, idealisme, kesungguhan, kerja keras, kebersamaan, dan
            do’a.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
