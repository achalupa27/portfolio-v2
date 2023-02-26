import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { Project } from '../types';

type Props = {
    projects: Project[];
};

function Projects({ projects }: Props) {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0084ff]/80'>
                {projects?.map((project, i) => (
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen '>
                        <motion.img initial={{ y: -300, opacity: 0 }} transition={{ duration: 1.2 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className='h-36' src={urlFor(project?.image).url()} alt='' />
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>{project?.title}</h4>
                            <div className='flex items-center space-x-2 justify-center'>
                                {project?.technologies.map((technology) => (
                                    <img className='h-7 w-7 lg:h-10 lg:w-10 rounded-full' key={technology._id} src={urlFor(technology.image).url()} />
                                ))}
                            </div>
                            <p className='text-lg text-center md:text-left'>{project?.summary}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full absolute top-[30%] bg-[#0084ff]/10 left-0 h-[500px] -skew-y-12' />
        </motion.div>
    );
}

export default Projects;
