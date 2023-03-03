import { motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';
import { urlFor } from '../sanity';
import { Skill } from '../types';

type Props = {
    skill: Skill;
    setShow: any;
    setShowSkill: any;
};

function Skill({ skill, setShow, setShowSkill }: Props) {
    return (
        <div
            className='group relative flex cursor-pointer'
            onClick={() => {
                setShow(true);
                setShowSkill(skill);
            }}
        >
            <motion.div initial={{ opacity: 0 }} transition={{ duration: 1 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className='p-2 h-16 w-16 md:h-20 md:w-20 xl:h-28 xl:w-28 rounded-md border border-gray-500'>
                <motion.img className='object-cover filter' src={urlFor(skill.image).url()} alt='' />
            </motion.div>
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:h-20 md:w-20 xl:h-28 xl:w-28 rounded-md z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-2xl lg:text-3xl font-bold text-black opacity-100'>{skill.progress}%</p>
                </div>
            </div>
        </div>
    );
}

export default Skill;
