
import React from 'react';

interface SectionContainerProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ id, title, children, className = '', titleClassName = '' }) => {
  return (
    <section id={id} className={`py-12 md:py-20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className={`text-3xl md:text-4xl font-heading font-bold text-center mb-10 md:mb-16 text-primary-DEFAULT dark:text-primary-DEFAULT ${titleClassName}`}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
