import { useState } from "react";

export default function DarkModeTailwind() {
  const [theme, setTheme] = useState("dark");

  function handleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme === "dark" ? "dark" : "";
  }

  return (
    <>
      <div className="h-screen dark:bg-black">
        <div className="container p-3">
          <h1 className="text-center text-3xl dark:text-white">
            Dark mode Tailwind
          </h1>
          <button
            onClick={handleTheme}
            className="text-lg block mx-auto my-3 rounded-md border border-black px-3 py-1 dark:text-white dark:border-white"
          >
            chang theme
          </button>
        </div>
      </div>
    </>
  );
}
