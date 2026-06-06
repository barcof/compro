import React from 'react';
import Section from './Section';
import { Building2, Shield, Zap, Globe } from 'lucide-react';

const facilities = [
  {
    icon: Building2,
    title: 'Modern Office',
    description: 'State-of-the-art workspace designed for collaboration and creativity.'
  },
  {
    icon: Shield,
    title: 'High Security',
    description: 'Advanced surveillance and access control systems for maximum safety.'
  },
  {
    icon: Zap,
    title: 'Fast Connectivity',
    description: 'Dedicated high-speed fiber optic network for seamless operations.'
  },
  {
    icon: Globe,
    title: 'Global Presence',
    description: 'Strategically located facilities across major international hubs.'
  }
];

const Facilities = () => {
  return (
    <Section id="facilities" background="white">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">Our Facilities</h2>
        <div className="mx-auto mt-4 h-1 w-20 bg-accent rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {facilities.map((facility, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-secondary transition-colors">
            <div className="mb-6 rounded-full bg-primary/5 p-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <facility.icon className="h-8 w-8" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-primary">{facility.title}</h3>
            <p className="text-muted-foreground">{facility.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Facilities;
