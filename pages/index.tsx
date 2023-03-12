import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Contact from "../components/Contact";
import WorkExperience from "../components/WorkExperience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Wisdom";
import { PageInfo, Skill, Project, Social, Experience } from "../types";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchExperiences } from "../utils/fetchExperiences";
import { ThemeProvider } from "next-themes";
import Github from "../components/Github";
import ScrollToTop from "../components/ScrollToTop";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <div className="dark:gradient-to-br z-0 h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-gradient-to-br from-teal-100/70 via-teal-50 to-teal-100/60 text-white overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-amber-600/80 dark:from-gray-900 dark:to-gray-800">
        <Head>
          <title>Andrew C - Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <Header socials={socials} />

        <section id="hero" className="snap-start">
          <Hero pageInfo={pageInfo} />
        </section>

        <section id="experience" className="snap-center">
          <WorkExperience experiences={experiences} />
        </section>

        <section id="websites" className="snap-center">
          <Projects projects={projects} />
        </section>

        <section id="wisdom" className="snap-center">
          <Skills skills={skills} />
        </section>

        <section id="contact" className="snap-center">
          <Contact pageInfo={pageInfo} />
        </section>

        {/* <section id="github" className="snap-center">
          <Github />
        </section> */}

        <ScrollToTop />
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
