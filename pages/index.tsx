import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Contact from "../components/Contact";
import Work from "../components/Work";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Websites from "../components/Websites";
import Skills from "../components/Wisdom";
import { PageInfo, Skill, Project, Social, Experience } from "../types";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchExperiences } from "../utils/fetchExperiences";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "../components/ScrollToTop";
import Github from "../components/Github";
import MoreSkills from "../components/MoreSkills";

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
      <div className="dark:gradient-to-br to-teal-gray/60 z-0 h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-gradient-to-br from-gray-100/30 via-gray-50 to-gray-100 text-white overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-blue-400 dark:from-gray-900 dark:to-gray-800 dark:scrollbar-thumb-amber-600/80">
        <Header />

        <section id="hero" className="snap-start">
          <Hero />
        </section>

        <section id="experience" className="snap-center">
          <Work experiences={experiences} />
        </section>

        <section id="websites" className="snap-center">
          <Websites projects={projects} />
        </section>

        <section id="wisdom" className="snap-center">
          <Skills skills={skills} />
        </section>

        <section id="contact" className="snap-center">
          <Contact />
        </section>

        <section id="github" className="snap-center">
          <Github projects={projects} />
        </section>

        <section id="more" className="snap-center">
          <MoreSkills skills={skills} />
        </section>

        {/* <ScrollToTop /> */}
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
