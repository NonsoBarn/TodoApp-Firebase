import { UilSunset } from "@iconscout/react-unicons";
import { UilMoonset } from "@iconscout/react-unicons";
import { useState, useEffect } from "react";

const ControlBar = () => {
  const [theme, setTheme] = useState("");
  //  Theme Dark x Light
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <nav className="shadow-lg bg-purple-600 border-gray-200 px-4 py-1 rounded-sm  w-80">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <p className="self-center text-lg font-semibold whitespace-nowrap  text-gray-200">
          Todo
        </p>

        <div className="inline-flex items-center p-2 ml-3 text-sm text-white    ">
          {theme === "dark" ? (
            <button onClick={handleThemeSwitch}>
              <UilMoonset size={20} />
            </button>
          ) : (
            <button onClick={handleThemeSwitch}>
              <UilSunset size={20} />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default ControlBar;
