"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button>
      {currentTheme === "dark" ? (
        <SunIcon
          className="h-6 w-6 cursor-pointer text-amber-600/50 transition duration-300 ease-in-out hover:text-amber-600 md:h-7 md:w-7"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MoonIcon
          className="md:w-7cursor-pointer flex h-6 w-6 items-center  leading-none text-blue-500/50 transition duration-300 ease-in-out hover:text-blue-500 md:h-7"
          onClick={() => setTheme("dark")}
        />
      )}
    </button>
  );
}

export default DarkModeButton;
