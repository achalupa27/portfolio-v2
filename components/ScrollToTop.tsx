import Link from "next/link";
import { useEffect, useState } from "react";

function ScrollToTop() {
  const [show, handleShow] = useState(true);

  const transitionNavBar = () => {
    console.log(window.scrollY);
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      console.log("true");
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return show ? (
    <Link href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <div className="flex h-8 w-14 cursor-pointer items-center justify-center border border-blue-500 bg-gray-900 opacity-50 filter transition duration-200 ease-in-out hover:opacity-100 dark:border-amber-600">
            <div className="h-[1px] w-8 border dark:border-amber-600"></div>
          </div>
        </div>
      </footer>
    </Link>
  ) : (
    <></>
  );
}

export default ScrollToTop;
