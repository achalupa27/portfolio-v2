import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { urlFor } from "../sanity";
import { GlobeAltIcon } from "@heroicons/react/24/solid";

type Props = {
  project: any;
};

const WebsiteCard = ({ project }: Props) => {
  return (
    <div className="flex items-center justify-center p-20 md:p-44">
      <div className="flex h-[550px] w-[500px] flex-col items-center justify-center border border-blue-400 shadow-lg dark:border-amber-600 dark:bg-gray-900 md:w-[700px] xl:h-[550px] xl:w-[1000px]">
        <h4 className="pb-8 text-center text-4xl font-extralight uppercase tracking-[8px] text-blue-400 dark:text-amber-600">
          {project?.title}
        </h4>

        <div className="p-5">
          <img
            className="h-36 w-36"
            src={urlFor(project?.image).url()}
            alt=""
          />
        </div>

        <div className="max-w-6xl space-y-6 px-0 md:px-10">
          <div className="flex items-center justify-center space-x-2 pt-8">
            {project?.technologies.map((technology: any) => (
              <div key={technology._id} className="border border-amber-500 p-2">
                <img
                  className="h-7 w-7 lg:h-10 lg:w-10"
                  src={urlFor(technology.image).url()}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center space-x-6">
            {project.linkToCode && (
              <Link href={project?.linkToCode} target="_blank">
                <AiFillGithub className="h-12 w-12 text-teal-500/50 transition duration-300 ease-in-out hover:text-teal-500 dark:text-amber-600/40 dark:hover:text-amber-600" />
              </Link>
            )}
            {project.linkToBuild && (
              <Link href={project?.linkToBuild} target="_blank">
                <GlobeAltIcon className="h-12 w-12 text-teal-500/50 transition duration-300 ease-in-out hover:text-teal-500 dark:text-amber-600/40 dark:hover:text-amber-600" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteCard;