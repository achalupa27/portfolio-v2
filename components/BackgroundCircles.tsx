import { motion } from 'framer-motion';

type Props = {};

function BackgroundCircles({}: Props) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ scale: [1, 2, 2, 3, 1], opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0], borderRadius: ['20%', '20%', '50%', '80%', '20%'] }} transition={{ duration: 2.5 }} className='relative flex justify-center items-center'>
            <div className='absolute mt-40 rounded-sm border border-teal-400 dark:border-amber-600 h-[333px] w-[670px] shadow-lg bg-teal-50/20 dark:bg-gray-900' />
        </motion.div>
    );
}

export default BackgroundCircles;
