import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import About from '../components/About';
import Contact from '../components/Contact';
import WorkExperience from '../components/WorkExperience';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { PageInfo, Skill, Project, Social, Experience } from '../types';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSocials } from '../utils/fetchSocials';
import { fetchExperiences } from '../utils/fetchExperiences';
import { ThemeProvider } from 'next-themes';

type Props = {
    pageInfo: PageInfo;
    experiences: Experience[];
    skills: Skill[];
    projects: Project[];
    socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
    return (
        <ThemeProvider enableSystem={false} attribute='class'>
            <div className='dark:bg-gray-900 bg-gray-200 text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0084ff]/80'>
                <Head>
                    <title>Andrew C - Portfolio</title>
                    <link rel='icon' href='/favicon.ico' />
                </Head>

                <Header socials={socials} />

                <section id='hero' className='snap-start'>
                    <Hero pageInfo={pageInfo} />
                </section>

                <section id='about' className='snap-center'>
                    <About pageInfo={pageInfo} />
                </section>

                <section id='experience' className='snap-center'>
                    <WorkExperience experiences={experiences} />
                </section>

                <section id='skills' className='snap-center'>
                    <Skills skills={skills} />
                </section>

                <section id='projects' className='snap-center'>
                    <Projects projects={projects} />
                </section>

                <section id='contact' className='snap-center'>
                    <Contact pageInfo={pageInfo} />
                </section>

                <Link href='#hero'>
                    <footer className='sticky bottom-5 w-full cursor-pointer'>
                        <div className='flex items-center justify-center'>
                            <img className='h-10 w-10 rouded-full filter grayscale hover:grayscale-0 cursor-pointer transition duration-200 ease-in-out' src='https://i.ibb.co/1RVMKvb/avatar.png' alt='' />
                        </div>
                    </footer>
                </Link>
            </div>
        </ThemeProvider>
    );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();

    return {
        props: {
            pageInfo,
            experiences,
            skills,
            projects,
            socials,
        },
        revalidate: 10,
    };
};
