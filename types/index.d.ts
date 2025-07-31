import { ButtonHTMLAttributes } from 'react';

declare global {
  // Button component props
  interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost';
    size?: 'default' | 'sm' | 'lg';
    isLoading?: boolean;
  }

  // Social link type
  interface SocialLink {
    name: string;
    icon: React.ReactNode;
    url: string;
  }

  // Skill type
  interface Skill {
    name: string;
    icon: React.ReactNode;
    level: number;
  }

  // Project type
  interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    image?: string;
  }

  // Experience type
  interface Experience {
    id: string;
    role: string;
    company: string;
    duration: string;
    description: string[];
    skills: string[];
  }

  // Education type
  interface Education {
    id: string;
    degree: string;
    institution: string;
    duration: string;
    description?: string;
  }

  // Social media links
  interface SocialMedia {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  }
}
