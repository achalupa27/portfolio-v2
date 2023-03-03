import { motion } from 'framer-motion';
import Skill from './Skill';
import { Skill as SkillType } from '../types';
import SkillCases from './SkillCases';
import { useState } from 'react';

type Props = {
    skills: SkillType[];
};

function Skills({ skills }: Props) {
    const [show, setShow] = useState<boolean>(false);
    const [showSkill, setShowSkill] = useState<SkillType>(skills[0]);
    return (
        <>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className='h-screen flex relative flex-col text-center max-w-[2000px] xl:px-10 min-h-screen justify-center mx-auto items-center'>
                <h3 className='absolute top-24 uppercase tracking-[20px] dark:text-gray-200 text-gray-800 text-2xl'>Skills</h3>
                <h4 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-xs md:text-sm'>
                    <span className='text-[#0084ff]'>Hover</span> for proficiency. <span className='text-[#0084ff]'>Click</span> for use cases.
                </h4>
                <h4 className='my-4 uppercase tracking-[3px] text-gray-500 text-xs md:text-sm'>Advanced</h4>
                <div className='grid grid-cols-6 justify-center gap-3 lg:grid-cols-8 lg:gap-5'>{skills.map((skill) => (skill.level === 'Advanced' ? <Skill key={skill._id} skill={skill} setShow={setShow} setShowSkill={setShowSkill} /> : null))}</div>
                <h4 className='my-4 uppercase tracking-[3px] text-gray-500 text-xs md:text-sm'>Intermediate</h4>
                <div className='grid grid-cols-6 gap-3 lg:grid-cols-8 lg:gap-5'>{skills.map((skill) => (skill.level === 'Intermediate' ? <Skill key={skill._id} skill={skill} setShow={setShow} setShowSkill={setShowSkill} /> : null))}</div>
                <h4 className='my-4 uppercase tracking-[3px] text-gray-500 text-xs md:text-sm'>Novice</h4>
                <div className='grid grid-cols-6 gap-3 lg:grid-cols-8 lg:gap-5'>{skills.map((skill) => (skill.level === 'Novice' ? <Skill key={skill._id} skill={skill} setShow={setShow} setShowSkill={setShowSkill} /> : null))}</div>
            </motion.div>
            <SkillCases skill={showSkill} show={show} close={() => setShow(false)} />
        </>
    );
}

export default Skills;
