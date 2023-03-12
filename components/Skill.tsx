import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Skill } from "../types";

type Props = {
  skill: Skill;
  setShow: any;
  setShowSkill: any;
};

function Skill({ skill, setShow, setShowSkill }: Props) {
  return (
    <div
      className="group relative flex cursor-pointer"
      onClick={() => {
        setShow(true);
        setShowSkill(skill);
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="h-16 w-16 rounded-sm border border-teal-500/60 p-2 shadow-md dark:border-amber-600/60 dark:bg-gray-900 md:h-20 md:w-20 xl:h-28 xl:w-28"
      >
        <motion.img
          className="object-cover filter"
          src={urlFor(skill.image).url()}
          alt=""
        />
      </motion.div>
      <div className="absolute z-0 h-16 w-16 rounded-sm opacity-0  transition duration-300 ease-in-out group-hover:bg-teal-500 group-hover:opacity-80 dark:group-hover:bg-amber-600 md:h-20 md:w-20 xl:h-28 xl:w-28">
        <div className="flex h-full items-center justify-center">
          <p className="text-2xl font-bold text-white opacity-100 dark:text-gray-900 lg:text-3xl">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
