
import React from 'react';
import SectionContainer from '../SectionContainer';

interface AboutSectionProps {
  id: string;
  content: string[];
  imageUrl: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id, content, imageUrl }) => {
  return (
    <SectionContainer id={id} title="About Me" className="bg-light-card dark:bg-dark-card transition-colors duration-300">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        <div className="md:w-1/3 flex-shrink-0">
          <img 
            src={imageUrl} 
            alt="Sebastian Ramirez" 
            className="rounded-lg shadow-xl w-full max-w-xs mx-auto md:max-w-sm h-auto object-cover aspect-square" 
          />
        </div>
        <div className="md:w-2/3 text-light-text dark:text-dark-text">
          {content.map((paragraph, index) => (
            <p key={index} className="mb-4 text-base md:text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
