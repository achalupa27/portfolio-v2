import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

type Props = {};

function PersonalCard({}: Props) {
  const variants = {
    hidden: {
      pathLength: 0,
      pathOffset: 1,
    },
    visible: {
      pathLength: 1,
      pathOffset: 0,
      transition: {
        duration: 1.4,
      },
    },
  };

  const [text, count] = useTypewriter({
    words: ["Full Stack Developer.", "UX Designer.", "Andrew Chalupa"],
    delaySpeed: 1000,
  });

  return (
    <div className="relative cursor-pointer shadow-xl transition duration-500 hover:shadow-gray-900/20 dark:hover:shadow-amber-700/20">
      <motion.svg
        viewBox="0 0 670 334"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[350px] sm:w-[450px] md:h-[333px] md:w-[670px]"
      >
        <defs>
          <linearGradient
            id="border-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>
        <motion.rect
          className="personalCardInit"
          x="0.5"
          y="0.5"
          // rx="24"
          // ry="24"
          width="669"
          height="333"
          stroke="#60a5fa"
          strokeWidth="1"
          shapeRendering="crispEdges"
          vectorEffect="non-scaling-stroke"
          fill="none"
          variants={variants}
          initial="hidden"
          animate="visible"
        />
        <motion.rect
          className="personalCard"
          x="0.5"
          y="0.5"
          // rx="24"
          // ry="24"
          width="669"
          height="333"
          stroke="#60a5fa"
          // stroke="url(#border-gradient)"
          strokeWidth="1"
          fill="white"
          shapeRendering="crispEdges"
          vectorEffect="non-scaling-stroke"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        />
      </motion.svg>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute top-16 z-20 mx-auto w-full sm:top-[88px] md:top-32 md:pb-5"
      >
        <h1 className="sm:font-extrathin cursor-pointer select-none px-10 text-xl font-extralight tracking-[7px] text-blue-500 dark:uppercase dark:text-amber-600 sm:text-3xl md:text-5xl md:font-thin">
          <span className="dark:gradient-gold">Andrew Chalupa</span>
        </h1>
        <h2 className="cursor-pointer select-none pt-1 font-sans text-xs font-light tracking-[9px] text-blue-500 dark:uppercase dark:text-amber-600 sm:text-sm sm:tracking-[15px] md:pt-4">
          <span className="dark:gradient-gold">Software Engineer</span>
        </h2>
      </motion.div>
    </div>
  );
}

export default PersonalCard;
