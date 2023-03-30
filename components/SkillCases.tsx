import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { Skill } from "../types";

type Props = {
  skill: Skill;
  show: boolean;
  close: any;
};

function SkillCases({ skill, show, close }: Props) {
  if (!show) {
    return null;
  }
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 bottom-0 z-10 flex items-center justify-center bg-gray-300/70 dark:bg-slate-200/10"
      onClick={close}
    >
      <div className="z-20 h-auto w-[60rem] space-y-7 rounded-2xl border border-blue-500 bg-gray-200 p-12 shadow-2xl dark:rounded-none dark:border-amber-600 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center">
          <div className="uppercase tracking-[3px] text-gray-500">
            {skill.level} - {skill.progress}%
          </div>
          <div className="mt-1 text-center text-2xl uppercase tracking-[12px] text-gray-800 dark:text-gray-200">
            - {skill.title} -
          </div>
        </div>
        {skill?.background && (
          <div className="flex flex-col items-center justify-center">
            <div className="uppercase tracking-[3px] text-gray-500">
              Background
            </div>
            <div className="text-center tracking-[3px] text-gray-800 dark:text-gray-200">
              {skill?.background}
            </div>
          </div>
        )}
        <div className="flex flex-col items-center justify-center">
          <div className="uppercase tracking-[3px] text-gray-500">
            Use Cases
          </div>
          {skill?.usedCases?.map((useCase) => (
            <div className="flex space-x-3 text-center tracking-[3px] text-[rgb(36,36,36)] dark:text-gray-200">
              <p>- {useCase.split("$")[0]}</p>
              {useCase.split("$")[1] && (
                <Link href={useCase.split("$")[1]} target="_blank">
                  <AiFillGithub className="h-6 w-6 text-gray-800 transition duration-300 ease-in-out hover:text-[#0084ff] dark:text-gray-200 dark:hover:text-[#0084ff]" />
                </Link>
              )}
            </div>
          ))}
        </div>
        {skill?.usedProjects !== undefined && (
          <div className="flex flex-col items-center justify-center">
            <div className="uppercase tracking-[3px] text-gray-500">
              Projects
            </div>
            <div className="flex flex-col items-center justify-center text-center tracking-[3px] text-gray-800 dark:text-gray-200">
              {skill?.usedProjects?.map((project) => (
                <span>{project}</span>
              ))}
            </div>
          </div>
        )}
        {skill?.usedWork !== undefined && (
          <div className="flex flex-col items-center justify-center">
            <div className="uppercase tracking-[3px] text-gray-500">Work</div>
            <div className="flex flex-col items-center justify-center text-center tracking-[3px] text-gray-800 dark:text-gray-200">
              {skill?.usedWork?.map((work) => (
                <span>{work}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default SkillCases;
