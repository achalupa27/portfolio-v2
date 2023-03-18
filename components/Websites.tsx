import { motion } from "framer-motion";
import { Project } from "../types";
import { Carousel } from "react-responsive-carousel";
import WebsiteCard from "./WebsiteCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  projects.reverse();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly text-left md:flex-row"
    >
      <h3 className="dark:gradient-gold absolute top-24 text-2xl font-light uppercase tracking-[20px] text-teal-500">
        Websites
      </h3>
      <Carousel
        autoPlay
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={5000}
      >
        {projects?.map((project) => (
          <WebsiteCard key={project?._id} project={project} />
        ))}
      </Carousel>
    </motion.div>
  );
}

export default Projects;
