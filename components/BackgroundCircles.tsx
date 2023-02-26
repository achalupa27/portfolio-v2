import { motion } from 'framer-motion';

type Props = {};

function BackgroundCircles({}: Props) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ scale: [1, 2, 2, 3, 1], opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0], borderRadius: ['20%', '20%', '50%', '80%', '20%'] }} transition={{ duration: 2.5 }} className='relative flex justify-center items-center'>
            <div className='absolute mt-52 border border-[#333] rounded-full h-[200px] w-[200px] animate-ping'></div>
            <div className='absolute mt-52 border border-[#333] rounded-full h-[300px] w-[300px] '></div>
            <div className='absolute mt-52 border border-[#333] rounded-full h-[500px] w-[500px] '></div>
            <div className='absolute mt-52 rounded-full border border-[#0084ff] opacity-20 h-[650px] w-[650px] animate-pulse' />
            <div className='absolute mt-52 border border-[#333] rounded-full h-[800px] w-[800px] '></div>
        </motion.div>
    );
}

export default BackgroundCircles;
