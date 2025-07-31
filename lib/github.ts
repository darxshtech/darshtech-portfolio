import { Octokit } from "@octokit/rest";

if (!process.env.GITHUB_TOKEN) {
  console.warn('GITHUB_TOKEN is not set. GitHub API requests will be rate-limited.');
}

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN || undefined,
});

export interface GitHubProject {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null; // GitHub API can return null for homepage
  topics: string[];
  created_at: string;
  updated_at: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  private: boolean;
}

export async function fetchRepositories(): Promise<GitHubProject[]> {
  try {
    const { data } = await octokit.repos.listForUser({
      username: 'darxshtech',
      sort: 'updated',
      per_page: 100, // Max allowed by GitHub API
    });

    // Filter out forked repositories and sort by stars
    return data
      .filter(repo => !repo.fork && !repo.private)
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage || null,
        topics: repo.topics || [],
        created_at: repo.created_at || new Date().toISOString(),
        updated_at: repo.updated_at || new Date().toISOString(),
        language: repo.language || null,
        stargazers_count: repo.stargazers_count || 0,
        forks_count: repo.forks_count || 0,
        fork: repo.fork || false,
        private: repo.private || false,
      }));
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    if (!process.env.GITHUB_TOKEN) {
      console.error('Note: GITHUB_TOKEN is not set. Please add it to your .env file for better rate limits.');
    }
    // Return some sample data if the API fails
    return [];
  }
}
