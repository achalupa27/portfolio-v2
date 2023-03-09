import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '../types';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import DarkModeButton from './DarkModeButton';
import { AiFillGithub } from 'react-icons/ai';

type Props = {
    socials: Social[];
};

function Header({ socials }: Props) {
    return (
        <header className='sticky top-0 p-4 flex justify-between items-center px-4 max-w-7xl mx-auto z-50'>
            <motion.div initial={{ x: -500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='flex items-center cursor-pointer ml-6'>
                <Link href='https://github.com/achalupa27' target='_blank'>
                    <AiFillGithub className='w-7 h-7 text-teal-500/50 hover:text-teal-500 dark:text-amber-600/50 dark:hover:text-amber-600 transition duration-300 ease-in-out' />
                </Link>
            </motion.div>
            <motion.div initial={{ y: -500, opacity: 0, scale: 0.5 }} animate={{ y: 0, opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='flex items-center'>
                <DarkModeButton />
            </motion.div>
            <Link href='#contact'>
                <motion.div initial={{ x: 500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='flex items-center cursor-pointer mr-6'>
                    <EnvelopeIcon className='text-teal-500/50 hover:text-teal-500 dark:text-amber-600/50 dark:hover:text-amber-600 h-7 w-7 hover:underline underline-offset-8 transition duration-300 ease-in-out' />
                </motion.div>
            </Link>
        </header>
    );
}

export default Header;
