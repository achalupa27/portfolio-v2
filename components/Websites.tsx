import { motion } from "framer-motion";
import { Project } from "../types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
};

function Websites({ projects }: Props) {
  projects.reverse();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-row items-center justify-evenly"
    >
      <h3 className="dark:gradient-gold absolute top-20 text-2xl font-light tracking-[20px] text-blue-400 dark:uppercase sm:top-24">
        Websites
      </h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {projects?.map((project) =>
          project.isShowcase ? (
            <SwiperSlide key={project?._id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </motion.div>
  );
}

export default Websites;
