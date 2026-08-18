import React from "react";
import Section from "./Section";
import { Target, Eye } from "lucide-react";

const VisiMisi = () => {
  return (
    <Section background="gray" id="visi-misi">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex flex-col items-center p-8 bg-background rounded-2xl shadow-sm text-center">
          <div className="mb-6 rounded-full bg-primary/10 p-4">
            <Eye className="h-10 w-10 text-primary" />
          </div>
          <h3 className="mb-4 text-2xl font-bold text-primary">Visi</h3>
          <p className="text-muted-foreground">
            Menjadikan PT. GAPURA KENCANA sebagai perusahaan di bidang teknik
            yang mampu memberikan kepuasan, kualitas, dan pelayanan terbaik
            kepada konsumen.
          </p>
        </div>

        <div className="flex flex-col items-center p-8 bg-background rounded-2xl shadow-sm text-center">
          <div className="mb-6 rounded-full bg-accent/10 p-4">
            <Target className="h-10 w-10 text-accent" />
          </div>
          <h3 className="mb-4 text-2xl font-bold text-primary">Misi</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li>
              Menghasilkan produk yang berkualitas dan memberikan pelayanan
              terbaik guna memenuhi kepuasan.
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default VisiMisi;
