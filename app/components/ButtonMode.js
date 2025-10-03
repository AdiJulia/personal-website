"use client";
import { useEffect, useState } from "react";

export default function ButtonMode() {
  const [theme, setTheme] = useState("root");

  useEffect(() => {
    document.documentElement.classList.add("root");
  }, []);

  const toggleTheme = () => {
    if (theme === "root") {
      document.documentElement.classList.add("light");
      setTheme("light");
    } else {
      document.documentElement.classList.remove("light");
      setTheme("root");
    }
  };

  return (
    <div className="fixed top-6 right-6">
      <button
        onClick={toggleTheme}
        className={`
            p-3 rounded-full shadow-lg flex items-center justify-center opacity-80
            transition-colors duration-300
            ${
              theme === "light"
                ? "bg-gray-300 text-gray-800 hover:bg-gray-400"
                : "bg-gray-800 text-gray-100 hover:bg-gray-700"
            }
          `}
      >
        <i
          className={`fas ${theme === "light" ? "fa-moon" : "fa-moon"} text-xl`}
        ></i>
      </button>
    </div>
  );
}
