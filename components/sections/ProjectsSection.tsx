
import React from 'react';
import { Project } from '../../types';
import SectionContainer from '../SectionContainer';
import ProjectCard from '../ProjectCard';

interface ProjectsSectionProps {
  id: string;
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ id, projects }) => {
  return (
    <SectionContainer id={id} title="Projects" className="bg-light-card dark:bg-dark-card transition-colors duration-300">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;
