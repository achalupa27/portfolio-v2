import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { urlFor } from "../sanity";
import { GlobeAltIcon } from "@heroicons/react/24/solid";

type Props = {
  project: any;
};

const GitHubCard = ({ project }: Props) => {
  return (
    <div className="flex items-center justify-center p-12 py-20 md:p-44">
      <div className="flex h-[420px] w-[300px] cursor-pointer flex-col items-center justify-center rounded-3xl border border-blue-400 shadow-xl transition duration-500 hover:shadow-gray-900/20 dark:rounded-none dark:border-amber-600 dark:bg-gray-900 dark:hover:bg-[#111827] dark:hover:shadow-amber-700/20 sm:w-[420px] md:w-[700px] xl:h-[550px] xl:w-[1000px]">
        <h4 className="pb-8 text-center text-2xl font-extralight tracking-[8px] text-blue-400 dark:uppercase dark:text-amber-600 sm:text-3xl md:text-4xl">
          {project?.title}
        </h4>

        <div className="p-5">
          <img
            className="h-24 w-24 md:h-36 md:w-36"
            src={urlFor(project?.image).url()}
            alt={`${project?.title} logo`}
          />
        </div>

        <div className="flex items-center justify-center space-x-2 pt-8">
          {project?.technologies.map((technology: any) => (
            <div
              key={technology._id}
              className="rounded-lg border border-blue-400 p-1 dark:border-amber-500 sm:p-2"
            >
              <img
                className="h-6 w-6 lg:h-10 lg:w-10"
                src={urlFor(technology.image).url()}
              />
            </div>
          ))}
        </div>
        {/* <div className="flex items-center justify-center space-x-6">
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
          </div> */}
      </div>
    </div>
  );
};

export default GitHubCard;
