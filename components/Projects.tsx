import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { CgScreen } from "react-icons/cg";
import { urlFor } from "../sanity";
import { Project } from "../types";
import { GlobeAltIcon } from "@heroicons/react/24/solid";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  projects.reverse();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-teal-500 dark:text-amber-600">
        Websites
      </h3>
      <h4 className="absolute top-36 text-xs uppercase tracking-[3px] text-teal-500/60 dark:text-amber-600/50 md:text-sm">
        <span className="text-teal-500 dark:text-amber-600">SHIFT</span> +{" "}
        <span className="text-teal-500 dark:text-amber-600">SCROLL</span> to
        view.
      </h4>
      <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-amber-600/80">
        {projects?.map((project, i) => (
          <div
            key={project?._id}
            className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44"
          >
            <div className="flex h-[550px] w-[500px] flex-col items-center justify-center rounded-sm border border-teal-500 shadow-lg dark:border-amber-600 dark:bg-gray-900 md:w-[700px] xl:h-[550px] xl:w-[1000px]">
              <motion.h4
                initial={{ opacity: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="pb-8 text-center text-4xl font-extralight uppercase tracking-[8px] text-teal-500 dark:text-amber-600"
              >
                {project?.title}
              </motion.h4>
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={`h-48 w-48 rounded-md p-5`}
              >
                <img
                  className="h-36 w-36"
                  src={urlFor(project?.image).url()}
                  alt=""
                />
              </motion.div>
              <div className="max-w-6xl space-y-6 px-0 md:px-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{ delay: 1.3, duration: 1 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-8 items-center justify-center space-y-2 space-x-2 pt-8"
                >
                  {project?.technologies.map((technology) => (
                    <img
                      className="h-7 w-7 lg:h-10 lg:w-10"
                      key={technology._id}
                      src={urlFor(technology.image).url()}
                    />
                  ))}
                </motion.div>
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
              <p className="text-center text-lg md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* <motion.div className='w-full absolute top-[30%] bg-amber-500/20 left-0 h-[300px] -skew-y-12' />
            <motion.div className='w-full absolute top-[30%] bg-amber-500/20 left-0 h-[300px] skew-y-12' /> */}
    </motion.div>
  );
}

export default Projects;
