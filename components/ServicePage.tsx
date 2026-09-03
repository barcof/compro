import Section from "./Section";
import Image from "next/image";
import { copy, type Lang } from "./site-data";

const serviceImages: Record<string,string> = {
  "Cartridge Seal":"catridge-seal.jpg", "Agitator Seal":"agitator-seal.jpg", "Pusher Seal":"pusher-seal.jpg", "Rubber Bellows Seal":"rubber-bellows-seal.jpg", "Bellows Seal":"bellows-seal.jpg", "Single Spring Seal":"single-spring.jpg",
  "Base Plate + Hard Lining Rubber":"base-plate-hard-lining-rubber.jpg", "Metal Spray":"metal-spray.jpg", "Ceramic Coating":"ceramic-coating.jpg", "Buffing":"buffing.jpg", "Repair Rotary Joint":"repair-rotary-joint.jpg", "Rotary Joint Repair":"repair-rotary-joint.jpg",
  "Recondition Non Seal Pumping":"recondition-non-seal-pumping.jpg", "Non-Seal Pump Reconditioning":"recondition-non-seal-pumping.jpg", "Recondition Diaphragm Pump":"recondition-diaphragm-pump.jpg", "Diaphragm Pump Reconditioning":"recondition-diaphragm-pump.jpg", "Recondition Vacuum Pump":"recondition-vacuum-pump.jpg", "Vacuum Pump Reconditioning":"recondition-vacuum-pump.jpg", "Heavy Duty Roller":"heavy-duty-roller.jpg", "Sight Glass":"sight-glass.jpg", "Rubber E/J, O-Ring, Oil Seal, Bearing":"rubber-ej-oring-oil-seal-bearing.jpg", "Roundbar Material":"roundbar-material.jpg", "Pipe / Tubing Material":"pipe-tubing-material.jpg"
};

export default function ServicePage({lang}:{lang:Lang}){
  const c=copy[lang];
  const process=lang==="en"?["Inspection","Disassembly","Repair / Reconditioning","Quality Control","Final Inspection","Delivery"]:["Pemeriksaan","Pembongkaran","Repair / Rekondisi","Quality Control","Pemeriksaan Akhir","Pengiriman"];
  return <>
    <Section id="services" background="gray"><div className="max-w-4xl"><p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-accent">PT Gapura Kencana</p><h1 className="text-4xl font-bold text-primary md:text-6xl">{c.services.title}</h1><div className="mt-5 h-1 w-20 bg-accent rounded-full"/><p className="mt-7 text-xl leading-relaxed text-muted-foreground">{c.services.intro}</p></div></Section>
    <Section><div className="space-y-20">{c.serviceCategories.map((cat,ci)=><div key={cat.title}><h2 className="text-3xl font-bold text-primary md:text-4xl">{cat.title}</h2><div className="mt-4 h-1 w-16 bg-accent rounded-full"/><div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">{cat.items.map(item=><article key={item} className="overflow-hidden rounded-2xl border bg-background shadow-sm"><div className="relative aspect-[4/3] bg-secondary">{serviceImages[item]&&<Image src={`/uploads/products/${serviceImages[item]}`} alt={`${item} - PT Gapura Kencana`} fill className="object-cover" loading={ci===0?"eager":"lazy"}/>}</div><div className="p-5"><h3 className="text-lg font-bold text-primary">{item}</h3></div></article>)}</div></div>)}</div></Section>
    <Section background="gray"><div><h2 className="text-3xl font-bold text-primary md:text-4xl">{c.services.processTitle}</h2><div className="mt-4 h-1 w-16 bg-accent rounded-full"/><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{process.map((step,i)=><div key={step} className="rounded-2xl bg-background p-6 shadow-sm"><span className="text-sm font-bold text-accent">0{i+1}</span><h3 className="mt-2 text-xl font-bold text-primary">{step}</h3></div>)}</div></div></Section>
    <Section><div className="max-w-4xl"><h2 className="text-3xl font-bold text-primary md:text-4xl">{c.services.faqTitle}</h2><div className="mt-4 h-1 w-16 bg-accent rounded-full"/><div className="mt-8 space-y-5">{c.faq.map(([q,a])=><details key={q} className="group rounded-2xl border p-5"><summary className="cursor-pointer text-lg font-bold text-primary">{q}</summary><p className="mt-4 leading-relaxed text-muted-foreground">{a}</p></details>)}</div></div></Section>
  </>;
}

export function ServiceJsonLd({lang}:{lang:Lang}){const c=copy[lang]; return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Service","name":c.services.title,"provider":{"@type":"Organization","name":"PT Gapura Kencana"},"areaServed":{"@type":"Country","name":"Indonesia"},"description":c.services.intro})}}/>}
export function FaqJsonLd({lang}:{lang:Lang}){return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":copy[lang].faq.map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))})}}/>}
