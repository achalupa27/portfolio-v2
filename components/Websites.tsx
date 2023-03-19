import { motion } from "framer-motion";
import { Project } from "../types";
import WebsiteCard from "./WebsiteCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

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
      className="relative z-0 mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly text-left md:flex-row"
    >
      <h3 className="dark:gradient-gold absolute top-24 text-center text-2xl font-light uppercase tracking-[20px] text-teal-500">
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
              <WebsiteCard project={project} />
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </motion.div>
  );
}

export default Websites;
