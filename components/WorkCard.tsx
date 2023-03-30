import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Experience } from "../types";

type Props = {
  experience: Experience;
};

function WorkCard({ experience }: Props) {
  return (
    <div className="flex items-center justify-center p-12 py-20 md:p-44">
      <article className="flex h-[420px] w-[300px] cursor-pointer flex-col items-center justify-center rounded-3xl border border-blue-400 shadow-xl transition duration-500 hover:shadow-gray-900/20 dark:rounded-none dark:border-amber-600 dark:bg-gray-900 dark:hover:bg-[#111827] dark:hover:shadow-amber-700/20 sm:w-[420px] md:w-[700px] xl:h-[550px] xl:w-[1000px]">
        <h4 className="pb-8 text-center text-2xl font-extralight tracking-[8px] text-blue-400 dark:uppercase dark:text-amber-600 sm:text-3xl md:text-4xl">
          {experience?.jobTitle}
        </h4>

        <div className="p-5">
          <img
            className="h-24 w-auto md:h-36"
            src={urlFor(experience?.companyImage).url()}
            alt={`${experience?.jobTitle} logo`}
          />
        </div>

        <div className="flex items-center justify-center space-x-2 pt-8">
          {experience.technologies.map((technology) => (
            <div
              key={technology._id}
              className="rounded-lg border border-blue-400 p-1 dark:rounded-none dark:border-amber-500 sm:p-2"
            >
              <img
                className="h-6 w-6 lg:h-10 lg:w-10"
                src={urlFor(technology.image).url()}
              />
            </div>
          ))}
        </div>

        <div>
          {/* <p className="py-2 text-sm font-light text-blue-500 dark:uppercase dark:text-amber-600 md:text-base">
          Dec 2022 -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p> */}
          {/* <ul className='space-y-4 ml-5 text-lg text-gray-800 dark:text-gray-200 h-80 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0084ff]/80'>
                    {experience.points.map((point, i) => (
                        <li className='text-center' key={i}>
                            {point}
                        </li>
                    ))}
                </ul> */}
        </div>
      </article>
    </div>
  );
}

export default WorkCard;
