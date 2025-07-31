'use client';

import React, { useEffect, useState } from 'react';
import { GitHubProjectCard } from '@/components/github-project-card';
import { Skeleton } from '@/components/ui/skeleton';
import { Header } from '../components/header';
import dynamic from 'next/dynamic';

// Import motion components dynamically with SSR disabled
const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
);

interface GitHubProject {
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
  fork: boolean;
  private: boolean;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const res = await fetch('/api/repos');
        
        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(errorData.error || 'Failed to fetch repositories');
        }
        
        const data = await res.json();
        
        if (!Array.isArray(data)) {
          throw new Error('Invalid data format received from server');
        }
        
        setProjects(data);
      } catch (err) {
        console.error('Error fetching GitHub repositories:', err);
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        setError(`Failed to load projects. ${errorMessage}`);
        
        // Set some sample data for development
        if (process.env.NODE_ENV === 'development') {
          setProjects([{
            id: 1,
            name: 'Sample Project',
            description: 'This is a sample project that appears when the API is not available.',
            html_url: 'https://github.com/username',
            homepage: 'https://yourwebsite.com',
            topics: ['sample', 'nextjs', 'react'],
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            language: 'TypeScript',
            stargazers_count: 0,
            forks_count: 0,
            fork: false,
            private: false
          }]);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);
  
  // Sort projects by stars (most stars first)
  const sortedProjects = [...projects].sort((a, b) => b.stargazers_count - a.stargazers_count);

  if (isLoading) {
    return (
      <div className="relative pb-16">
        <div className="px-6 pt-20 mx-auto max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
          <Header />
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="mt-8 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
              Projects
            </h2>
            <Skeleton className="w-3/4 h-6 mt-4" />
          </div>
          <div className="w-full h-px my-8 bg-zinc-800" />
          <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="p-4 border rounded-lg border-zinc-800">
                <Skeleton className="w-3/4 h-6 mb-2" />
                <Skeleton className="w-1/2 h-4 mb-4" />
                <div className="flex space-x-2">
                  <Skeleton className="w-16 h-4" />
                  <Skeleton className="w-16 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative pb-16">
        <div className="px-6 pt-20 mx-auto max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
          <Header />
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="mt-8 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
              Projects
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Failed to load projects. {error}
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Header />
      <div className="max-w-6xl mx-auto pt-56 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="mt-8 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Projects
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            A selection of my recent work and contributions.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800 my-12" />

        <div className="grid grid-cols-1 gap-6 mx-auto lg:mx-0 md:grid-cols-3">
          {sortedProjects.length > 0 ? (
            sortedProjects.map((project, index) => (
              <MotionDiv
                key={project.id}
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                  delay: index * 0.1
                }}
              >
                <GitHubProjectCard project={project} />
              </MotionDiv>
            ))
          ) : (
            Array.from({ length: 6 }).map((_, i) => (
              <MotionDiv 
                key={i} 
                className="p-4 border rounded-lg border-zinc-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                  delay: i * 0.1
                }}
              >
                <Skeleton className="w-3/4 h-6 mb-2" />
                <Skeleton className="w-1/2 h-4 mb-4" />
                <div className="flex space-x-2">
                  <Skeleton className="w-16 h-4" />
                  <Skeleton className="w-16 h-4" />
                </div>
              </MotionDiv>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
