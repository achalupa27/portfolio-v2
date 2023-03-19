import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../types";
import SkillCases from "./SkillCases";
import { useState } from "react";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  const [show, setShow] = useState<boolean>(false);
  const [showSkill, setShowSkill] = useState<SkillType>(skills[0]);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative mx-auto flex h-screen min-h-screen max-w-[2000px] flex-col items-center justify-center text-center xl:px-10"
      >
        <h3 className="absolute top-24 text-2xl font-light uppercase tracking-[20px] text-teal-500 dark:text-amber-600">
          Wisdom
        </h3>
        <div className="grid grid-cols-6 gap-3 lg:grid-cols-8 lg:gap-5">
          {skills.map((skill) => (
            <Skill
              key={skill._id}
              skill={skill}
              setShow={setShow}
              setShowSkill={setShowSkill}
            />
          ))}
        </div>
      </motion.div>
      <SkillCases skill={showSkill} show={show} close={() => setShow(false)} />
    </>
  );
}

export default Skills;
