import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Experience } from "../types";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex h-[550px] w-[500px] cursor-pointer snap-center flex-col items-center justify-center space-y-7 overflow-hidden rounded-sm border border-teal-500 shadow-lg transition-opacity duration-200 dark:border-amber-600 dark:bg-gray-900 md:w-[700px] xl:h-[550px] xl:w-[1000px]">
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="h-[150px] w-[180px] object-cover object-center xl:h-[200px] xl:w-[240px]"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="flex flex-col items-center px-0 md:px-10">
        <h4 className="font-line text-center text-3xl font-extralight uppercase tracking-[4px] text-teal-500 dark:text-amber-600 md:text-4xl">
          {experience?.jobTitle}
        </h4>
        {/* <p className='font-bold text-2xl mt-1 text-gray-800 dark:text-gray-200'>{experience?.company}</p> */}
        <p className="py-2 uppercase text-teal-500 dark:text-amber-600">
          Dec 2022 -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <div className="my-2 flex space-x-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10"
              src={urlFor(technology.image).url()}
              alt=""
            />
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

export default ExperienceCard;
