import { useState } from "react";

function ScrollToTop() {
  // const [visible, setVisible] = useState(false);

  // const toggleVisible = () => {
  //   const scrolled = document.documentElement.scrollTop;
  //   if (scrolled > 300) {
  //     setVisible(true);
  //   } else if (scrolled <= 300) {
  //     setVisible(false);
  //   }
  // };

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  // window.addEventListener("scroll", toggleVisible);

  return (
    <footer className="sticky bottom-5 w-full cursor-pointer">
      <div className="flex items-center justify-center">
        <div
          className="flex h-8 w-14 cursor-pointer items-center justify-center rounded-sm border border-teal-500 bg-gray-900 opacity-50 filter transition duration-200 ease-in-out hover:opacity-100 dark:border-amber-600"
          // onClick={scrollToTop}
        >
          <div className="h-[1px] w-8 border dark:border-amber-600"></div>
        </div>
      </div>
    </footer>
  );
}

export default ScrollToTop;
