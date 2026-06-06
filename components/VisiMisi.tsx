import React from 'react';
import Section from './Section';
import { Target, Eye } from 'lucide-react';

const VisiMisi = () => {
  return (
    <Section background="gray" id="visi-misi">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex flex-col items-center p-8 bg-background rounded-2xl shadow-sm text-center">
          <div className="mb-6 rounded-full bg-primary/10 p-4">
            <Eye className="h-10 w-10 text-primary" />
          </div>
          <h3 className="mb-4 text-2xl font-bold text-primary">Our Vision</h3>
          <p className="text-muted-foreground">
            To be the global leader in providing innovative and sustainable solutions that 
            empower businesses and enrich lives through technology and excellence.
          </p>
        </div>

        <div className="flex flex-col items-center p-8 bg-background rounded-2xl shadow-sm text-center">
          <div className="mb-6 rounded-full bg-accent/10 p-4">
            <Target className="h-10 w-10 text-accent" />
          </div>
          <h3 className="mb-4 text-2xl font-bold text-primary">Our Mission</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li>Delivering high-quality products that exceed expectations.</li>
            <li>Fostering a culture of innovation and continuous improvement.</li>
            <li>Building long-term relationships based on trust and integrity.</li>
            <li>Commitment to environmental sustainability and social responsibility.</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default VisiMisi;
