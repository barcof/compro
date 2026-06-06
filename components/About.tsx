import React from 'react';
import Section from './Section';
import Image from 'next/image';

const About = () => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="aspect-square w-full max-w-md mx-auto rounded-2xl bg-secondary overflow-hidden shadow-xl">
             <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-bold opacity-10 text-4xl">Company Photo</div>
          </div>
          <div className="absolute -bottom-4 -right-4 h-32 w-32 bg-accent rounded-2xl -z-10"></div>
        </div>
        
        <div className="flex flex-col space-y-6 order-1 lg:order-2">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">About Our Company</h2>
          <div className="h-1 w-20 bg-accent rounded-full"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Founded with a vision to revolutionize the industry, BigSpring has been providing
            top-tier solutions for over a decade. We specialize in delivering excellence through
            innovation and dedicated craftsmanship.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our team is composed of industry experts who are passionate about creating value
            for our clients and making a positive impact on the community.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
