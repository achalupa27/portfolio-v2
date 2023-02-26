import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { PageInfo } from '../types';

type Props = {
    pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
            <motion.img initial={{ x: -200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1.5 }} className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[650px]' src={urlFor(pageInfo?.profilePic).url()} alt='' />

            <div className='space-y-10 px-10 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a little background</h4>
                <p className='text-base'>{pageInfo?.backgroundInformation}</p>
            </div>
        </motion.div>
    );
}

export default About;