
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeaderContent from './components/HeaderContent';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';
import { NAV_LINKS, PROFILE_DATA, SKILLS_DATA, PROJECTS_DATA, SOCIAL_LINKS } from './constants';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      return savedMode === 'true' || (!savedMode && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', String(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar 
        navLinks={NAV_LINKS} 
        profileName={PROFILE_DATA.name} 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
      />
      <main className="flex-grow">
        <HeaderContent profileName={PROFILE_DATA.name} title={PROFILE_DATA.title} />
        <AboutSection id="about" content={PROFILE_DATA.about} imageUrl={PROFILE_DATA.imageUrl} />
        <SkillsSection id="skills" skills={SKILLS_DATA} />
        <ProjectsSection id="projects" projects={PROJECTS_DATA} />
        <ContactSection id="contact" email={PROFILE_DATA.email} linkedInUrl={SOCIAL_LINKS.linkedIn} />
      </main>
      <Footer socialLinks={SOCIAL_LINKS} profileName={PROFILE_DATA.name} />
    </div>
  );
};

export default App;
