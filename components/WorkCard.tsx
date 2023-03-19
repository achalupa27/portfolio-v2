import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Experience } from "../types";

type Props = {
  experience: Experience;
};

function WorkCard({ experience }: Props) {
  return (
    <article className="flex h-[400px] w-[500px] cursor-pointer flex-col items-center justify-center space-y-7 rounded-3xl border border-blue-500 shadow-xl transition duration-500 hover:shadow-gray-900/20 dark:rounded-none dark:border-amber-600 dark:bg-gray-900 dark:hover:bg-[#101624] dark:hover:shadow-amber-700/20 md:w-[700px] xl:h-[550px] xl:w-[1000px]">
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="h-[130px] w-[150px] object-cover object-center xl:h-[200px] xl:w-[240px]"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="flex flex-col items-center px-0 md:px-10">
        <h4 className="font-line text-center text-xl font-extralight tracking-[4px] text-blue-500 dark:uppercase dark:text-amber-600 md:text-3xl">
          {experience?.jobTitle}
        </h4>
        <p className="py-2 text-sm font-light text-blue-500 dark:uppercase dark:text-amber-600 md:text-base">
          Dec 2022 -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <div className="my-2 flex space-x-2">
          {experience.technologies.map((technology) => (
            <div
              key={technology._id}
              className="rounded-lg border border-blue-400 p-2 dark:rounded-none dark:border-amber-500"
            >
              <img
                className="h-7 w-7 lg:h-10 lg:w-10"
                src={urlFor(technology.image).url()}
              />
            </div>
          ))}
        </div>
        {/* <ul className='space-y-4 ml-5 text-lg text-gray-800 dark:text-gray-200 h-80 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0084ff]/80'>
                    {experience.points.map((point, i) => (
                        <li className='text-center' key={i}>
                            {point}
                        </li>
                    ))}
                </ul> */}
      </div>
    </article>
  );
}

export default WorkCard;
