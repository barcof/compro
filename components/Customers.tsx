// import React from "react";
import Section from "@/components/Section";
import CustSlider from "@/components/CustSlider";

const customers = [
  {
    title: "PT. Air Products Indonesia",
    image: "api.png",
    category: "customers",
  },
  {
    title: "PT. Asahimas Chemical",
    image: "asc.png",
    category: "customers",
  },
  {
    title: "PT. Bakrie Pipe Industries",
    image: "bakrie_pipe_industries.png",
    category: "customers",
  },
  {
    title: "PT. Citra Palu Minerals",
    image: "cpm.png",
    category: "customers",
  },
  {
    title: "PT. Knauf Plasterboard Indonesia",
    image: "knauf.png",
    category: "customers",
  },
  {
    title: "PT. Lotte Chemical Indonesia",
    image: "lotte.png",
    category: "customers",
  },
  {
    title: "PT. Nippon Shokubai Indonesia",
    image: "nippon-shokubai.png",
    category: "customers",
  },
  {
    title: "PT. Pardic Jaya Chemical",
    image: "pardic.png",
    category: "customers",
  },
  {
    title: "PT. Petnesia Resindo",
    image: "pnr.png",
    category: "customers",
  },
  {
    title: "PT. SNF Polymers Indonesia",
    image: "snf.png",
    category: "customers",
  },
  {
    title: "PT. Surrama Tridaya Mandiri",
    image: "stm.png",
    category: "customers",
  },
  {
    title: "PT. Tanjung Power Indonesia",
    image: "tanjung-power.png",
    category: "customers",
  },
  {
    title: "PT. Indonesia Toray Synthetics",
    image: "toray.png",
    category: "customers",
  },
];

const Customers = () => {
  return (
    <Section id="customers" background="gray">
      <div className="mb-12 text-center">
        <h2 className="text-2xl font-bold text-primary opacity-80 uppercase tracking-widest">
          Trusted by Industry Leaders
        </h2>
      </div>

      <div className="max-h-screen max-w-full justify-self-center lg:max-w-full">
        <CustSlider customers={customers} />
      </div>

      {/* <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
        {customers.map((customer, index) => (
          <div key={index} className="flex items-center justify-center p-8 bg-background rounded-xl shadow-sm grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
            <span className="text-xl font-black text-primary/40">{customer}</span>
          </div>
        ))}
      </div> */}
    </Section>
  );
};

export default Customers;
