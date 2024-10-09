import Navbar from "@/components/navbar";
import Image from "next/image";
import person from "../person.jpg"

export default function Home() {
  return (
    <div
      className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px]"
    >
      <Navbar />
      <div className="flex flex-col justify-center items-center min-h-screen">
        {/* Flex container to align text and image horizontally */}
        <div className="flex items-center justify-center space-x-12">
          <div>
            <h1 className="font-sans text-4xl font-extrabold">
              Hi, <br /> I'm <span className="text-blue-800">Karl</span>, <br /> a software engineering student
            </h1>
          </div>
          <div>
            <Image
              src={person}
              alt="Picture of Karl, a software engineer student"
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}