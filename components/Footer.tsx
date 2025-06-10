
import React from 'react';
import { SocialLinks } from '../types';

interface FooterProps {
  socialLinks: SocialLinks;
  profileName: string;
}

const Footer: React.FC<FooterProps> = ({ socialLinks, profileName }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text py-8 text-center transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-2xl hover:text-primary-DEFAULT dark:hover:text-primary-DEFAULT transition-colors"
            >
              <i className="fab fa-github"></i>
            </a>
          )}
          {socialLinks.linkedIn && (
            <a
              href={socialLinks.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-2xl hover:text-primary-DEFAULT dark:hover:text-primary-DEFAULT transition-colors"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          )}
          {/* Add other social links here if needed */}
        </div>
        <p className="text-sm">
          &copy; {currentYear} {profileName}. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
