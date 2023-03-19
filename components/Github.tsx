import GitHubCard from "./GitHubCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Project } from "../types";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

type Props = {
  projects: Project[];
};

function Github({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly text-left md:flex-row"
    >
      <h3 className="dark:gradient-gold absolute top-24 z-50 text-2xl font-light tracking-[20px] text-blue-500 dark:uppercase">
        <a
          href="https:www.github.com/achalupa27"
          className="flex items-center justify-center"
          target="_blank"
        >
          Github
          <ArrowTopRightOnSquareIcon className="h-5 w-5" />
        </a>
      </h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {projects?.map((project) =>
          project.isShowcase ? null : (
            <SwiperSlide key={project?._id}>
              <GitHubCard project={project} />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </motion.div>
  );
}

export default Github;
