
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-light-card dark:bg-dark-card rounded-xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl">
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-56 object-cover" 
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-heading font-semibold mb-3 text-primary-DEFAULT dark:text-primary-DEFAULT">{project.title}</h3>
        {project.description.map((paragraph, index) => (
          <p key={index} className="text-sm text-light-text dark:text-dark-text mb-2 leading-relaxed">
            {paragraph}
          </p>
        ))}
        <div className="mt-auto pt-4 flex space-x-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
          >
            <i className="fab fa-github mr-2"></i>
            View on GitHub
          </a>
          {project.liveUrl && (
             <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-DEFAULT hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-DEFAULT transition-colors"
            >
              <i className="fas fa-external-link-alt mr-2"></i>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
