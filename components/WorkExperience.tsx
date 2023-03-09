import ExperienceCard from './ExperienceCard';
import { Experience } from '../types';

type Props = {
    experiences: Experience[];
};

function Experience({ experiences }: Props) {
    return (
        <div className='h-screen flex relative overflow-hodden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-teal-500 dark:text-amber-600 font-light text-2xl'>Work</h3>
            <div className='w-full flex space-x-5 mt-12 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0084ff]/80 items-center justify-center'>
                {experiences?.map((experience) => (
                    <ExperienceCard key={experience._id} experience={experience} />
                ))}
            </div>
        </div>
    );
}

export default Experience;
