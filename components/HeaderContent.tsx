
import React from 'react';

interface HeaderContentProps {
  profileName: string;
  title: string;
}

const HeaderContent: React.FC<HeaderContentProps> = ({ profileName, title }) => {
  return (
    <header 
      id="home" 
      className="py-16 md:py-24 bg-gradient-to-r from-primary-dark via-primary-DEFAULT to-primary-dark text-white text-center"
    >
      <div className="container mx-auto px-4">
        <img 
          src="https://picsum.photos/seed/logo/150/150" 
          alt="Profile Logo" 
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
        />
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-3">
          {profileName}
        </h1>
        <p className="text-xl md:text-2xl font-sans text-gray-200">
          {title}
        </p>
      </div>
    </header>
  );
};

export default HeaderContent;
