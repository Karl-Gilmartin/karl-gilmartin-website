import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import '../src/app/globals.css';
import person from "../src/person.jpg";
import Image from 'next/image';

export default function About() {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-4 bg-navy rounded-md p-12 min-h-screen">
        {/* Column 1 */}
        <div className="bg-blue-400 p-6 rounded-lg shadow-md">
            <div className="flex justify-center items-center">
            <Image
              src={person}
              alt="Picture of Karl, a software engineer student"
              width={400}
              height={400}
              className="rounded-full"
            />
            </div>
            <div>
                <h2 className="text-xl font-bold">Name:</h2>
                {/* Use Tailwind for styling hr */}
                <hr className="border-t-4 border-orange my-2" />
                <h2 className="text-lg font-semibold bg-slate-500 p-2 rounded text-white">Karl Gilmartin</h2>
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
                    <a href="mailto:karl_gilmartin@hotmail.com">
                        karl_gilmartin@hotmail.com
                        </a>

                </h2>
            </div>
                        
        </div>

        {/* Column 2 */}
        <div className="bg-slate-500 rounded-lg shadow-md p-1 text-white">
            <Navbar />
          <h2 className="text-xl font-bold">Column 2</h2>
          <p>Additional content for the second column.</p>
        </div>
      </div>
    </div>
  );
}