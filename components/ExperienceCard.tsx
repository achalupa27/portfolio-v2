import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { Experience } from '../types';

type Props = {
    experience: Experience;
};

function ExperienceCard({ experience }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[420px] md:w-[600px] xl:w-[800px] snap-center dark:bg-gray-800 bg-gray-300 p-10 xl:py-12 hover:opacity-100 opacity-100 transition-opacity duration-200 overflow-hidden'>
            <motion.img initial={{ y: 100, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className='w-32 h-32 rounded-md xl:w-[200px] xl:h-[200px] object-cover object-center' src={urlFor(experience?.companyImage).url()} alt='' />
            <div className='flex flex-col items-center px-0 md:px-10'>
                <h4 className='text-4xl font-line text-gray-800 dark:text-gray-200'>{experience?.jobTitle}</h4>
                <p className='font-bold text-2xl mt-1 text-gray-800 dark:text-gray-200'>{experience?.company}</p>
                <p className='uppercase py-2 text-gray-800 dark:text-gray-200'>Dec 2022 - {experience.isCurrentlyWorkingHere ? 'Present' : new Date(experience.dateEnded).toDateString()}</p>
                <div className='flex space-x-2 my-2'>
                    {experience.technologies.map((technology) => (
                        <img key={technology._id} className='h-10 w-10 rounded-full' src={urlFor(technology.image).url()} alt='' />
                    ))}
                </div>
                <ul className='space-y-4 ml-5 text-lg text-gray-800 dark:text-gray-200 h-80 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0084ff]/80'>
                    {experience.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

export default ExperienceCard;
