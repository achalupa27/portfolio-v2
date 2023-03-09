import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { PageInfo } from "../types";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: ["Full Stack Developer.", "UX Designer.", "Andrew Chalupa"],
    delaySpeed: 1000,
  });

  return (
    <div className="relative flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <div className="z-20 pt-5 md:pt-0">
        <h2 className="font-sans text-xs font-light uppercase tracking-[15px] text-teal-500 dark:text-amber-600 md:text-sm">
          {pageInfo.role}
        </h2>
        <h1 className="px-10 pt-2 text-4xl font-thin uppercase tracking-[7px] text-teal-500 dark:text-amber-600 md:pt-5 md:text-5xl">
          <span>{text}</span>
        </h1>
      </div>
      <div className="absolute bottom-36 pt-5">
        <Link href="#experience">
          <button className="hero-button">Work</button>
        </Link>
        <Link href="#webProjects">
          <button className="hero-button">Websites</button>
        </Link>
        <Link href="#skills">
          <button className="hero-button">Wisdom</button>
        </Link>
        {/* <Link href='#mobileProjects'>
                    <button className='hero-button'>Mobile</button>
                </Link> */}
      </div>
    </div>
  );
}
export default Hero;
