'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '@/app/components/card';

export interface GitHubProject {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  topics: string[];
}

interface GitHubProjectCardProps {
  project: GitHubProject;
}

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8
    }
  }
};

export const GitHubProjectCard: React.FC<GitHubProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      className="h-full"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
    >
      <Card className="h-full flex flex-col">
        
        <Link
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 relative flex-1 flex flex-col items-center duration-700 group"
        >
          <span
            className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
            aria-hidden="true"
          />
          <div className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
            {project.name.charAt(0).toUpperCase()}
          </div>
          <div className="z-10 flex-1 flex flex-col items-center justify-between text-center gap-4">
            <h3 className="text-lg lg:text-xl xl:text-3xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
              {project.name}
            </h3>
            
            {project.description && (
              <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-200 line-clamp-3">
                {project.description}
              </p>
            )}
            
            {project.language && (
              <span className="inline-block px-2 py-1 mt-3 text-xs rounded-full bg-zinc-800 text-zinc-300 group-hover:bg-zinc-700 transition-colors duration-200">
                {project.language}
              </span>
            )}
            
            {project.homepage && (
              <a
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-4 py-2 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                <span>Live Demo</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            )}
            
            {project.topics.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mt-auto pt-4">
                {project.topics.slice(0, 3).map((topic) => (
                  <span 
                    key={topic} 
                    className="px-2 py-1 text-xs rounded-full bg-zinc-800 text-zinc-300 group-hover:bg-zinc-700 transition-colors duration-200"
                  >
                    {topic}
                  </span>
                ))}
                {project.topics.length > 3 && (
                  <span className="px-2 py-1 text-xs text-zinc-500 self-center">
                    +{project.topics.length - 3} more
                  </span>
                )}
              </div>
            )}
          </div>
        </Link>
      </Card>
    </motion.div>
  );
};

export default GitHubProjectCard;
