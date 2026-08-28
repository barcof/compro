import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'navy';
  style?: React.CSSProperties;
}

const Section = ({ children, className, id, background = 'white', style }: SectionProps) => {
  const bgStyles = {
    white: 'bg-background text-foreground',
    gray: 'bg-secondary text-foreground',
    navy: 'bg-primary text-primary-foreground',
  };

  return (
    <section 
      id={id}
      style={style}
      className={cn(
        'py-10 px-4 lg:py-36',
        bgStyles[background],
        className
      )}
    >
      <div className="container mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
};

export default Section;
