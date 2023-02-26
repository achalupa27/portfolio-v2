import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '../types';

type Props = {
    socials: Social[];
};

function Header({ socials }: Props) {
    return (
        <header className='sticky top-0 p-4 flex justify-between items-center px-4 max-w-7xl mx-auto z-50'>
            <motion.div initial={{ x: -500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                {socials.map((social) => (
                    <SocialIcon key={social._id} url={social.url} target='_blank' fgColor='gray' bgColor='transparent' />
                ))}
            </motion.div>
            <Link href='#contact'>
                <motion.div initial={{ x: 500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='flex items-center cursor-pointer'>
                    {/* <SocialIcon network='email' fgColor='gray' bgColor='transparent' /> */}
                    <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Contact Me</p>
                </motion.div>
            </Link>
        </header>
    );
}

export default Header;
