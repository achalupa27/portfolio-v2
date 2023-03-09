import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { Experience } from '../types';

type Props = {
    experience: Experience;
};

function ExperienceCard({ experience }: Props) {
    return (
        <article className='flex flex-col rounded-sm items-center space-y-7 flex-shrink-0 w-[420px] md:w-[600px] xl:w-[1000px] xl:h-[550px] snap-center border border-teal-500 dark:border-amber-600 p-10 xl:py-12 cursor-pointer transition-opacity duration-200 overflow-hidden dark:bg-gray-900 shadow-lg'>
            <motion.img initial={{ y: 100, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className='w-48 h-32 rounded-md xl:w-[240px] xl:h-[200px] object-cover object-center' src={urlFor(experience?.companyImage).url()} alt='' />
            <div className='flex flex-col items-center px-0 md:px-10'>
                <h4 className='text-4xl font-line text-teal-500 dark:text-amber-600 font-extralight uppercase tracking-[4px] text-center'>{experience?.jobTitle}</h4>
                {/* <p className='font-bold text-2xl mt-1 text-gray-800 dark:text-gray-200'>{experience?.company}</p> */}
                <p className='uppercase py-2 text-teal-500 dark:text-amber-600'>Dec 2022 - {experience.isCurrentlyWorkingHere ? 'Present' : new Date(experience.dateEnded).toDateString()}</p>
                <div className='flex space-x-2 my-2'>
                    {experience.technologies.map((technology) => (
                        <img key={technology._id} className='h-10 w-10' src={urlFor(technology.image).url()} alt='' />
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
