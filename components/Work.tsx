import WorkCard from "./WorkCard";
import { Experience } from "../types";

type Props = {
  experiences: Experience[];
};

function Work({ experiences }: Props) {
  return (
    <div className="relative mx-auto flex h-screen max-w-7xl flex-row items-center justify-evenly">
      <h3 className="dark:gradient-gold absolute top-24 text-2xl font-light tracking-[20px] text-blue-500 dark:uppercase">
        Work
      </h3>
      {experiences?.map((experience) => (
        <WorkCard key={experience._id} experience={experience} />
      ))}
    </div>
  );
}

export default Work;
