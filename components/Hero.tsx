import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { PageInfo } from '../types';
import BackgroundCircles from './BackgroundCircles';

type Props = {
    pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: ['Full Stack Developer.', 'UX Designer.', 'Andrew Chalupa'],
        delaySpeed: 1000,
    });

    return (
        <div className='relative h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <div className='z-20'>
                <h2 className='text-teal-500 dark:text-amber-600 font-sans font-light text-sm uppercase tracking-[15px]'>{pageInfo.role}</h2>
                <h1 className='text-teal-500 dark:text-amber-600 text-5xl lg:6xl font-thin uppercase px-10 pt-5 tracking-[7px]'>
                    <span>{text}</span>
                </h1>
            </div>
            <div className='pt-5 absolute bottom-36'>
                <Link href='#experience'>
                    <button className='hero-button'>Work</button>
                </Link>
                <Link href='#skills'>
                    <button className='hero-button'>Skills</button>
                </Link>
                <Link href='#webProjects'>
                    <button className='hero-button'>Websites</button>
                </Link>
                {/* <Link href='#mobileProjects'>
                    <button className='hero-button'>Mobile</button>
                </Link> */}
            </div>
        </div>
    );
}
export default Hero;
