import { motion } from 'framer-motion';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { CgScreen } from 'react-icons/cg';
import { urlFor } from '../sanity';
import { Project } from '../types';
import { GlobeAltIcon } from '@heroicons/react/24/solid';

type Props = {
    projects: Project[];
};

function Projects({ projects }: Props) {
    projects.reverse();
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-teal-500 dark:text-amber-600 text-2xl'>Projects</h3>
            <h4 className='absolute top-36 uppercase tracking-[3px] text-teal-500/60 dark:text-amber-600/50 text-xs md:text-sm'>
                <span className='text-teal-500 dark:text-amber-600'>SHIFT</span> + <span className='text-teal-500 dark:text-amber-600'>SCROLL</span> to view.
            </h4>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-amber-600/80'>
                {projects?.map((project, i) => (
                    <div key={project?._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                        <div className='flex flex-col border w-[500px] h-[550px] md:w-[700px] xl:w-[1000px] xl:h-[550px] rounded-sm border-teal-500 dark:border-amber-600 dark:bg-gray-900 shadow-lg items-center justify-center'>
                            <motion.h4 initial={{ opacity: 0 }} transition={{ delay: 0.8, duration: 1 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className='text-4xl text-center text-teal-500 dark:text-amber-600 font-extralight uppercase tracking-[8px] pb-8'>
                                {project?.title}
                            </motion.h4>
                            <motion.div initial={{ opacity: 0 }} transition={{ duration: 1 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className={`p-5 rounded-md w-48 h-48`}>
                                <img className='h-36 w-36' src={urlFor(project?.image).url()} alt='' />
                            </motion.div>
                            <div className='space-y-6 px-0 md:px-10 max-w-6xl'>
                                <motion.div initial={{ opacity: 0 }} transition={{ delay: 1.3, duration: 1 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className='grid grid-cols-8 items-center space-y-2 space-x-2 justify-center pt-8'>
                                    {project?.technologies.map((technology) => (
                                        <img className='h-7 w-7 lg:h-10 lg:w-10' key={technology._id} src={urlFor(technology.image).url()} />
                                    ))}
                                </motion.div>
                                <div className='flex items-center justify-center space-x-6'>
                                    {project.linkToCode && (
                                        <Link href={project?.linkToCode} target='_blank'>
                                            <AiFillGithub className='w-12 h-12 text-gray-800 dark:text-amber-600/40 hover:text-[#0084ff] dark:hover:text-amber-600 transition duration-300 ease-in-out' />
                                        </Link>
                                    )}
                                    {project.linkToBuild && (
                                        <Link href={project?.linkToBuild} target='_blank'>
                                            <GlobeAltIcon className='w-12 h-12 text-gray-800 dark:text-amber-600/40 hover:text-[#0084ff] dark:hover:text-amber-600 transition duration-300 ease-in-out' />
                                        </Link>
                                    )}
                                </div>
                            </div>
                            <p className='text-lg text-center md:text-left'>{project?.summary}</p>
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
