import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import Navbar from "@/components/Navbar";
import '../src/app/globals.css';

export const getStaticProps = async ({ params }) => {
  const slug = params?.slug;
  console.log("twst")
  console.log("Slug", slug);
  const projectsDirectory = path.join(process.cwd(), 'src/projects');
  const filePath = path.join(projectsDirectory, `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents); // Extract frontmatter and content

    return {
      props: {
        title: data.title,
        description: data.description,
        content, // Markdown content
      },
    };
  } catch (error) {
    console.error("Error reading file: ", error);
    return {
      notFound: true, // If file reading fails, return 404
    };
  }
};

interface Project {
  title: string;
  image: string;
  description: string;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-4 bg-navy rounded-md p-12 min-h-screen">
        {/* Column 1 */}
        <div className="bg-blue-400 p-6 rounded-lg shadow-md">
          <div className="flex justify-center items-center">
            <Image
              src="/projects/person.jpg" // Example image from public directory
              alt="Picture of Karl, a software engineer student"
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold">Name:</h2>
            <hr className="border-t-4 border-orange my-2" />
            <h2 className="text-lg font-semibold bg-slate-500 p-2 rounded text-white">
              Karl Gilmartin
            </h2>
          </div>
          <div>
            <h2 className="text-xl font-bold">Location:</h2>
            <hr className="border-t-4 border-orange my-2" />
            <h2 className="text-lg font-semibold bg-slate-500 p-2 rounded text-white">Dublin, Ireland</h2>
          </div>
          <div>
            <h2 className="text-xl font-bold">Email:</h2>
            <hr className="border-t-4 border-orange my-2" />
            <h2 className="text-lg font-semibold bg-slate-500 p-2 rounded text-white">
              <a href="mailto:karl_gilmartin@hotmail.com">karl_gilmartin@hotmail.com</a>
            </h2>
          </div>
        </div>

        {/* Column 2 */}
        <div className="bg-slate-500 rounded-lg shadow-md p-6 text-white">
          <Navbar />
          <h2 className="text-xl font-bold mb-4">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Loop over projects */}
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <h3 className="mt-2 text-lg font-bold">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
