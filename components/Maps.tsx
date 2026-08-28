import React from "react";
import Section from "./Section";
import { MapPin, Phone, Mail } from "lucide-react";
import Location from "./Location";

const Maps = () => {
  return (
    <Section id="contact">
      <div className="grid grid-cols-1 gap-12">
        <div className="flex flex-col space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-primary md:text-4xl">
              Lokasi Kami
            </h2>
            <div className="mt-4 h-1 w-20 bg-accent rounded-full"></div>
            <p className="mt-6 text-lg text-muted-foreground w-full text-justify">
              Kami berlokasi di pusat kawasan bisnis. Silakan datang atau
              hubungi kami melalui salah satu alamat di bawah ini.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/5 p-3 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="flex flex-col gap-4 sm:gap-2">
                <div className="font-bold text-primary">
                  Alamat Office & Workshop
                </div>
                <p className="text-muted-foreground text-justify">
                  • Jababeka Innovation Center Blok A10, Kawasan Industri
                  Jababeka, Cikarang – Bekasi – Jawa Barat{" "}
                  <span className="font-bold">( Office )</span>
                </p>
                <p className="text-muted-foreground text-justify">
                  • Ruko Bumi Rakata Asri, Blok EE2 No. 18, Ciwedus, Cilegon –
                  Banten 42418.{" "}
                  <span className="font-bold">
                    ( Representative Service Center )
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full overflow-hidden">
          <Location />
        </div>
      </div>
    </Section>
  );
};

export default Maps;
