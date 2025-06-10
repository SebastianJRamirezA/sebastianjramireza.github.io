
import React from 'react';
import SectionContainer from '../SectionContainer';

interface ContactSectionProps {
  id: string;
  email: string;
  linkedInUrl: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id, email, linkedInUrl }) => {
  return (
    <SectionContainer id={id} title="Get In Touch">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg text-light-text dark:text-dark-text mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg shadow-md text-white bg-primary-DEFAULT hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-DEFAULT transition-transform transform hover:scale-105"
          >
            <i className="fas fa-envelope mr-2"></i>
            Send Email
          </a>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-primary-DEFAULT text-base font-medium rounded-lg shadow-md text-primary-DEFAULT dark:text-primary-DEFAULT dark:hover:text-white hover:text-white hover:bg-primary-DEFAULT dark:hover:bg-primary-DEFAULT focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-DEFAULT transition-all transform hover:scale-105"
          >
            <i className="fab fa-linkedin mr-2"></i>
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
