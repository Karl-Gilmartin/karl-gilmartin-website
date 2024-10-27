import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export const getStaticPaths = async () => {
  const projectsDirectory = path.join(process.cwd(), 'src/projects');
  const filenames = fs.readdirSync(projectsDirectory);
  console.log("Project directory: ", projectsDirectory);
  console.log("sssssssh: ", filenames);
  const paths = filenames.map((filename) => ({
    params: {
      slug: filename.replace(/\.md$/, ''),
    },
  }));

  return {
    paths,
    fallback: false, // If false, any paths not returned will show a 404
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const projectsDirectory = path.join(process.cwd(), 'src/projects');
  const filePath = path.join(projectsDirectory, `${slug}.md`);
  
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    props: {
      title: data.title,
      description: data.description,
      content,
      slug,
    },
  };
};

interface ProjectProps {
  title: string;
  description: string;
  content: string;
  slug: string;
}

export default function Project({ title, description, content, slug }: ProjectProps) {
  return (
    <div>
      <Navbar />
      <div className="p-12 bg-navy min-h-screen">
        <div className="bg-slate-500 rounded-lg shadow-md p-6 text-white">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="mb-6 text-lg text-gray-300">{description}</p>

          {/* Render Markdown content */}
          <div className="prose text-white">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>

          {/* Back button */}
          <Link href="/projects">
            <a className="mt-6 inline-block text-orange-500 hover:text-orange-300">Back to Projects</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
