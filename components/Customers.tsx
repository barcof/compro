import React from 'react';
import Section from './Section';

const customers = [
  'Company A', 'Company B', 'Company C', 'Company D', 'Company E', 'Company F'
];

const Customers = () => {
  return (
    <Section id="customers" background="gray">
      <div className="mb-12 text-center">
        <h2 className="text-2xl font-bold text-primary opacity-80 uppercase tracking-widest">Trusted by Industry Leaders</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
        {customers.map((customer, index) => (
          <div key={index} className="flex items-center justify-center p-8 bg-background rounded-xl shadow-sm grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
            <span className="text-xl font-black text-primary/40">{customer}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Customers;
