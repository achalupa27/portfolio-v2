import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { Skill } from '../types';

type Props = {
    skill: Skill;
    directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img initial={{ x: directionLeft ? -200 : 200 }} transition={{ duration: 1 }} whileInView={{ opacity: 1, x: 0 }} className='h-20 w-20 xl:h-28 xl:w-28 rounded-full border border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out' src={urlFor(skill.image).url()} alt='' />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 xl:h-28 xl:w-28 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>{skill.progress}%</p>
                </div>
            </div>
        </div>
    );
}

export default Skill;
