
export interface NavLink {
  href: string;
  label: string;
}

export interface ProfileData {
  name: string;
  title: string;
  about: string[];
  imageUrl: string;
  email: string;
}

export interface Skill {
  name: string;
  iconClass: string;
  level?: string; // Optional: e.g., "Intermediate", "Advanced" or percentage
}

export interface Project {
  title: string;
  description: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string; // Optional live demo link
}

export interface SocialLinks {
  github: string;
  linkedIn: string;
  twitter?: string; // Optional
}
