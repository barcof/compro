import React from 'react';
import Section from './Section';
import { MapPin, Phone, Mail } from 'lucide-react';

const Maps = () => {
  return (
    <Section id="contact">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="flex flex-col space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-primary md:text-4xl">Visit Our Office</h2>
            <div className="mt-4 h-1 w-20 bg-accent rounded-full"></div>
            <p className="mt-6 text-lg text-muted-foreground">
              We are located in the heart of the business district. Feel free to drop by
              or contact us through any of the channels below.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/5 p-3 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-primary">Our Address</h4>
                <p className="text-muted-foreground">123 Business Street, Tech City, 54321</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/5 p-3 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-primary">Phone Number</h4>
                <p className="text-muted-foreground">+1 (234) 567-890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/5 p-3 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-primary">Email Address</h4>
                <p className="text-muted-foreground">hello@bigspring.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-secondary lg:aspect-auto">
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-center opacity-20">
                <MapPin className="h-20 w-20 mx-auto mb-4" />
                <span className="text-2xl font-bold">Interactive Map Placeholder</span>
             </div>
          </div>
          {/* In a real scenario, you'd embed a Google Maps iframe here */}
        </div>
      </div>
    </Section>
  );
};

export default Maps;
