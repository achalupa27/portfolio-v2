import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { urlFor } from '../sanity';
import { PageInfo } from '../types';
import BackgroundCircles from './BackgroundCircles';

type Props = {
    pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: ['Full Stack Developer.', 'UX Designer.', 'Andrew Chalupa.'],
        delaySpeed: 1000,
    });

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            {/* <BackgroundCircles /> */}
            <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src={urlFor(pageInfo?.heroImage).url()} alt='' />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 tracking-[15px]'>{pageInfo.role}</h2>
                <h1 className='text-gray-800 dark:text-gray-200 text-5xl lg:6xl font-semibold px-10 pt-5 mr-3'>
                    <span>{text}</span>
                    <Cursor cursorColor='#0084ff' />
                </h1>

                <div className='pt-5 '>
                    <Link href='#about'>
                        <button className='hero-button'>About</button>
                    </Link>
                    <Link href='#experience'>
                        <button className='hero-button'>Experience</button>
                    </Link>
                    <Link href='#skills'>
                        <button className='hero-button'>Skills</button>
                    </Link>
                    <Link href='#projects'>
                        <button className='hero-button'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Hero;
