import React from 'react';
import Section from './Section';
import { Award, CheckCircle } from 'lucide-react';

const certifications = [
  'ISO 9001:2015 Quality Management',
  'ISO 27001 Information Security',
  'Green Business Certified',
  'Industry Excellence Award 2024'
];

const Certifications = () => {
  return (
    <Section background="navy" id="certifications">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Our Certifications</h2>
          <div className="mt-4 h-1 w-20 bg-accent rounded-full"></div>
          <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
            We maintain the highest standards of quality and security in everything we do.
            Our certifications reflect our commitment to excellence and professional integrity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center gap-4 bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
              <Award className="h-8 w-8 text-accent shrink-0" />
              <span className="font-medium text-white">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Certifications;
