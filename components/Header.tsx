import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../types";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import DarkModeButton from "./DarkModeButton";
import { AiFillGithub } from "react-icons/ai";

type Props = {
  socials: Social[];
};

function Header() {
  return (
    <header className="sticky top-0 z-50 mx-auto flex max-w-7xl items-center justify-between p-4 px-4">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="ml-6 flex cursor-pointer items-center"
      >
        <Link href="#github">
          <AiFillGithub className="h-6 w-6 text-teal-500/50 transition duration-300 ease-in-out hover:text-teal-500 dark:text-amber-600/50 dark:hover:text-amber-600 md:h-7 md:w-7 " />
        </Link>
      </motion.div>
      <motion.div
        initial={{ y: -500, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex items-center"
      >
        <DarkModeButton />
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mr-6 flex cursor-pointer items-center"
        >
          <EnvelopeIcon className="h-6 w-6 text-teal-500/50 underline-offset-8 transition duration-300 ease-in-out hover:text-teal-500 hover:underline dark:text-amber-600/50 dark:hover:text-amber-600 md:h-7 md:w-7" />
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
