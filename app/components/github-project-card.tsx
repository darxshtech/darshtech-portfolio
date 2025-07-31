import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

export interface GitHubProjectCardProps {
  project: {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    language: string | null;
    stargazers_count: number;
  };
}

export function GitHubProjectCard({ project }: GitHubProjectCardProps) {
  const formattedName = project.name
    .split('-') // Split by hyphens
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
    .join(' '); // Join with spaces

  return (
    <div className="group relative p-6 bg-zinc-800/50 rounded-lg border border-zinc-700 hover:border-zinc-500 transition-colors duration-300 h-full flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
          {formattedName}
        </h3>
        {project.language && (
          <span className="px-2 py-1 text-xs rounded-full bg-zinc-700 text-zinc-300">
            {project.language}
          </span>
        )}
      </div>
      
      <p className="text-zinc-400 flex-grow mb-6">
        {project.description || 'No description provided.'}
      </p>
      
      <div className="flex justify-between items-center mt-auto">
        <div className="flex items-center text-sm text-zinc-400">
          <span className="flex items-center mr-4">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                clipRule="evenodd"
              />
            </svg>
            {project.stargazers_count}
          </span>
        </div>
        
        <div className="flex space-x-2">
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white bg-zinc-800 rounded-md hover:bg-zinc-700 transition-colors"
              title="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-400 hover:text-white bg-zinc-800 rounded-md hover:bg-zinc-700 transition-colors"
            title="View on GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
