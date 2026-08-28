import React from "react";
import Section from "./Section";
import { Award } from "lucide-react";
import Image from "next/image";

const certifications = [
  {
    cert: "ISO 9001:2015",
    desc: "Quality Management System",
    image: "iso-9001.png",
  },
  {
    cert: "ISO 45001:2018",
    desc: "Occupational Health and Safety Management System",
    image: "iso-45001.png",
  },
  {
    cert: "ISO 14001:2015",
    desc: "Environmental Management System",
    image: "iso-14001.png",
  },
];

const Certifications = () => {
  return (
    <Section background="navy" id="certifications">
      <div className="grid grid-cols-1 items-center gap-12">
        <div>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Sertifikasi Kami
          </h2>
          <div className="mt-4 h-1 w-20 bg-accent rounded-full"></div>
          <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed text-justify">
            Kami senantiasa menjaga standar kualitas dan keamanan tertinggi
            dalam segala hal yang kami lakukan. Sertifikasi yang kami miliki
            mencerminkan komitmen kami terhadap keunggulan dan integritas
            profesional.
          </p>
        </div>

        <div className="flex flex-col gap-12 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center gap-2 bg-white shadow-sm shadow-black/20 hover:-translate-y-2 hover:shadow-lg p-6 rounded-xl transition-all duration-500 text-muted-foreground"
            >
              <div className="flex flex-col font-medium text-center gap-2">
                <div className="flex items-center gap-2 justify-center">
                  <Award className="h-8 w-8 text-accent shrink-0" />
                  <span className="text-xl">{cert.cert}</span>
                </div>
              </div>
              <Image
                src={"/uploads/" + cert.image}
                alt={cert.cert}
                width={100}
                height={100}
                quality={75}
                loading="lazy"
                style={{ width: "100", height: "100" }}
              />
              <span className="text-center h-10 text-xl">{cert.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Certifications;
