import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        <div className="flex flex-col space-y-8 text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-primary md:text-6xl">
            Design your future <br /> with <span className="text-accent">BigSpring</span>
          </h1>
          <p className="mx-auto max-w-lg text-lg text-muted-foreground lg:mx-0">
            Professional company profile template built with Next.js and Tailwind CSS. 
            Clean design, powerful features, and easy to customize.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Button size="lg" className="bg-primary text-primary-foreground h-12 px-8">
              Download Now
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary h-12 px-8">
              Learn More
            </Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-2xl lg:ml-auto">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-secondary shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              {/* Placeholder for Hero Image */}
              <div className="text-center">
                <div className="mb-4 text-6xl font-bold opacity-10">Hero Image</div>
                <div className="h-1 bg-accent w-24 mx-auto rounded-full"></div>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 -z-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl"></div>
          <div className="absolute -left-6 -top-6 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
