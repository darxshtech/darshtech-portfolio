import dbConnect from '@/lib/db';
import Project from '@/models/Project';

async function addProject() {
  await dbConnect();
  
  const project = {
    name: 'Example Project',
    description: 'This is an example project',
    url: 'https://example.com',
    githubUrl: 'https://github.com/username/example',
    tags: ['react', 'nextjs', 'typescript']
  };

  try {
    const savedProject = await Project.create(project);
    console.log('Project created successfully:', savedProject);
    process.exit(0);
  } catch (error) {
    console.error('Error creating project:', error);
    process.exit(1);
  }
}

addProject();
