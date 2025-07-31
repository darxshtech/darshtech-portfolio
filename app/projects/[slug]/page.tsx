import { notFound } from "next/navigation";
import { Header } from "./header";

// TODO: Replace with your project data source
const projects: Array<{
  slug: string;
  title: string;
  description: string;
  content: string; // Added content field to replace MDX content
  published: boolean;
  // Add other project properties as needed
}> = [];

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export async function generateStaticParams(): Promise<Props["params"][]> {
  return projects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default function ProjectPage({ params }: Props) {
  const slug = params?.slug;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <Header project={project} />
      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <div dangerouslySetInnerHTML={{ __html: project.content }} />
      </article>
    </div>
  );
}
