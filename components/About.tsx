import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { PageInfo } from '../types';

type Props = {
    pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-800 dark:text-gray-200 text-2xl'>About</h3>
            <motion.img initial={{ y: -200, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[650px]' src={urlFor(pageInfo?.profilePic).url()} alt='' />

            <div className='space-y-6 px-10 md:px-12 lg:px-20'>
                <h4 className='tracking-[3px] text-gray-800 dark:text-gray-200 text-4xl font-semibold'>Where I'm headed</h4>
                <p className='tracking-[1px] text-gray-800 dark:text-gray-200 text-base'>{pageInfo?.backgroundInformation}</p>
                <p className='tracking-[1px] text-gray-800 dark:text-gray-200 text-base'>{pageInfo?.personalAbout}</p>
                <div></div>
            </div>
        </motion.div>
    );
}

export default About;
