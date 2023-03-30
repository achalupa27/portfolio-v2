import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { urlFor } from "../sanity";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type Props = {
  project: any;
};

const ProjectCard = ({ project }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    // SCENE
    <div className="scene flex items-center justify-center p-12 py-20 md:p-44">
      {/* CARD */}
      <div
        className={`card z-40 flex h-[420px] w-[300px] cursor-pointer flex-col items-center justify-center rounded-3xl border border-blue-400 p-4 shadow-xl transition duration-500 hover:shadow-gray-900/20 dark:rounded-none dark:border-amber-600 dark:bg-gray-900 dark:hover:bg-[#111827] dark:hover:shadow-amber-700/20 sm:w-[420px] md:h-[480px] md:w-[700px] md:p-24 lg:h-[500px] xl:h-[550px] xl:w-[1000px] ${
          isFlipped ? "is-flipped" : ""
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* FRONT CARD */}
        <div className={`face ${isFlipped ? "" : ""} `}>
          <h4 className="pb-8 text-center text-2xl font-extralight tracking-[8px] text-blue-400 dark:uppercase dark:text-amber-600 sm:text-3xl md:text-4xl">
            {project?.title}
          </h4>

          <div className="flex justify-center p-5">
            <img
              className="h-24 w-24 md:h-36 md:w-36"
              src={urlFor(project?.image).url()}
              alt={`${project?.title} logo`}
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
            {project?.technologies.map((technology: any) => (
              <div
                key={technology._id}
                className="z-50 rounded-lg border border-blue-400 p-1 transition duration-200 hover:bg-blue-400/20 dark:rounded-none dark:border-amber-500 dark:hover:bg-amber-500/20 sm:p-2"
                onClick={() => console.log("dont flip")}
              >
                <img
                  className="h-6 w-6 lg:h-10 lg:w-10"
                  src={urlFor(technology.image).url()}
                />
              </div>
            ))}
          </div>
        </div>

        {/* BACK CARD */}
        <div className="face back">
          {
            <div className="flex items-center justify-center space-x-6">
              {project.linkToCode && (
                <Link href={project?.linkToCode} target="_blank">
                  <AiFillGithub className="h-12 w-12 text-blue-500/50 transition duration-300 ease-in-out hover:text-blue-500 dark:text-amber-600/40 dark:hover:text-amber-600" />
                </Link>
              )}
              {project.linkToBuild && (
                <Link href={project?.linkToBuild} target="_blank">
                  <GlobeAltIcon className="h-12 w-12 text-blue-500/50 transition duration-300 ease-in-out hover:text-blue-500 dark:text-amber-600/40 dark:hover:text-amber-600" />
                </Link>
              )}
            </div>
          }
          {/* Demo Video*/}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
