import { motion } from "framer-motion";
import Link from "next/link";
import { PageInfo } from "../types";
import PersonalCard from "./PersonalCard";
import ScrollToTop from "./ScrollToTop";

function Hero() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <PersonalCard />
      <motion.div
        initial={{ y: 500, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-16 pt-5 md:bottom-24"
      >
        <Link href="#work">
          <button className="hero-button">
            <span className="gradient-gold-small">W</span>ork
          </button>
        </Link>
        <Link href="#websites">
          <button className="hero-button">
            <span className="gradient-gold-small">W</span>ebsites
          </button>
        </Link>
        <Link href="#wisdom">
          <button className="hero-button">
            <span className="gradient-gold-small">W</span>isdom
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
export default Hero;
