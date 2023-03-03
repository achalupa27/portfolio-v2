import { motion } from 'framer-motion';

type Props = {};

function BackgroundCircles({}: Props) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ scale: [1, 2, 2, 3, 1], opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0], borderRadius: ['20%', '20%', '50%', '80%', '20%'] }} transition={{ duration: 2.5 }} className='relative flex justify-center items-center'>
            <div className='absolute mt-80 rounded-md border border-[#0084ff] opacity-20 h-[450px] w-[550px] animate-pulse shadow-lg bg-gray-500/20' />
        </motion.div>
    );
}

export default BackgroundCircles;
