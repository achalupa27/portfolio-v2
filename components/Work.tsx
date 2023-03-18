import WorkCard from "./WorkCard";
import { Experience } from "../types";

type Props = {
  experiences: Experience[];
};

function Work({ experiences }: Props) {
  return (
    <div className="overflow-hodden relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly px-10 text-left md:flex-row">
      <h3 className="dark:gradient-gold absolute top-24 text-2xl font-light uppercase tracking-[20px] text-teal-500">
        Work
      </h3>
      <div className="mt-12 flex w-full snap-x snap-mandatory items-center justify-center overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0084ff]/80">
        {experiences?.map((experience) => (
          <WorkCard key={experience._id} experience={experience} />
        ))}
      </div>
    </div>
  );
}

export default Work;
