import React from 'react';
import Section from './Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const products = [
  {
    title: 'Cloud Analytics',
    description: 'Powerful data processing and visualization tools for modern enterprises.',
    image: 'Product 1'
  },
  {
    title: 'Smart Infrastructure',
    description: 'Efficient and scalable hardware solutions for your growing business needs.',
    image: 'Product 2'
  },
  {
    title: 'Secure Gateway',
    description: 'Enterprise-grade security solutions to protect your valuable assets.',
    image: 'Product 3'
  }
];

const Products = () => {
  return (
    <Section id="products">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">Our Products</h2>
        <div className="mx-auto mt-4 h-1 w-20 bg-accent rounded-full"></div>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Discover our range of cutting-edge products designed to help your business thrive
          in the digital age.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <Card key={index} className="overflow-hidden border-none shadow-lg transition-transform hover:-translate-y-2">
            <div className="aspect-video w-full bg-secondary flex items-center justify-center text-muted-foreground font-bold opacity-20">
              {product.image}
            </div>
            <CardHeader>
              <CardTitle className="text-primary">{product.title}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Products;
