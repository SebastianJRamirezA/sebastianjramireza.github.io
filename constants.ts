
import { NavLink, ProfileData, Skill, Project, SocialLinks } from './types';

export const NAV_LINKS: NavLink[] = [
  { href: '#about', label: 'About Me' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const PROFILE_DATA: ProfileData = {
  name: 'Sebastian Ramirez',
  title: 'Software Developer & AI Enthusiast',
  about: [
    "A Computer Science student with a complementary background in Systems Engineering, passionate about leveraging technology to solve complex problems.",
    "My primary focus lies in developing innovative solutions within the fields of Machine Learning (ML) and Artificial Intelligence, where I'm driven by the potential to create impactful applications.",
    "When I first learned to program, the thrill of seeing code come to life ignited my passion for Computer Science. Now, I'm particularly fascinated by the potential of ML/AI to solve real-world problems.",
    "My Systems Engineering background provides me with a holistic perspective on complex systems and enables me to approach challenges with a multidisciplinary mindset."
  ],
  imageUrl: 'https://picsum.photos/seed/sebramirez/400/400', // Placeholder, replace with actual image
  email: 'sebastian.ramirez.dev@example.com' // Replace with actual email
};

export const SKILLS_DATA: Skill[] = [
  { name: 'Python', iconClass: 'fab fa-python text-blue-500' },
  { name: 'JavaScript', iconClass: 'fab fa-js-square text-yellow-500' },
  { name: 'C/C++', iconClass: 'fas fa-file-code text-purple-500' }, // Using a different icon for C/C++
  { name: 'TensorFlow', iconClass: 'fas fa-brain text-orange-500' },
  { name: 'Scikit-learn', iconClass: 'fas fa-chart-line text-teal-500' },
  { name: 'Django', iconClass: 'fab fa-django text-green-600' }, // Using official Django icon if FontAwesome has it, else generic
  { name: 'Express.js', iconClass: 'fas fa-server text-gray-700 dark:text-gray-300' }, // Generic server icon
  { name: 'React', iconClass: 'fab fa-react text-sky-500' },
  { name: 'Tailwind CSS', iconClass: 'fas fa-wind text-cyan-500' } // Example for Tailwind
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Pitch Prediction using Deep Learning',
    description: [
      "Applying AI to the sport of baseball. This project implements an ensemble of neural networks (LSTMs, GRUs, Attention-based LSTMs) to predict pitch type and location.",
      "Leveraging the Statcast dataset, the system processes sequential pitch data to forecast key characteristics of the next pitch, including its type (e.g., fastball, curveball) and location within the strike zone.",
      "The core innovation lies in its comprehensive approach to pitch prediction. By employing a multi-task learning framework, the model is trained to optimize for both pitch type and location, enhancing its predictive accuracy and utility for coaches, players, and analysts."
    ],
    imageUrl: 'https://picsum.photos/seed/pitchproject/600/400', // Placeholder
    githubUrl: 'https://github.com/SebastianJRamirezA/pitch_prediction_using_ML',
  },
  {
    title: 'Route Master Simulation Game',
    description: [
      "Route Master is a simulation game where you manage a bus company. Players aim to grow their earnings by testing different routes, upgrading their fleet, or taking risks by signing contracts.",
      "The goal is to become a tycoon in the urban transport sector!",
      "In this project, our team focused on creating an engaging experience. I contributed to developing the core simulation engine, building a realistic game world using probabilities, and worked on the UI and Achievements page. This collaborative effort resulted in a strategic and immersive simulation."
    ],
    imageUrl: 'https://picsum.photos/seed/routemaster/600/400', // Placeholder
    githubUrl: 'https://github.com/3nity-studios/route-master',
  },
];

export const SOCIAL_LINKS: SocialLinks = {
  github: 'https://github.com/SebastianJRamirezA',
  linkedIn: 'https://www.linkedin.com/in/sebastianramirezdev/',
};
