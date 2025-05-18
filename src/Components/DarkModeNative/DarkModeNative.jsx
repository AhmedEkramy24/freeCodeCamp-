import useLocalStorage from "./useLocalStorage";
import "./theme.css";

export default function DarkModeNative() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <>
      <div data-theme={theme} className="parent">
        <div className="container">
          <h1 data-theme={theme} className="title text-3xl w-fit mx-auto ">
            Hello World !
          </h1>
          <button
            onClick={handleTheme}
            data-theme={theme}
            className="btn px-3 py-1 text-lg block w-fit mx-auto my-3 rounded-md"
          >
            Change Theme
          </button>
        </div>
      </div>
    </>
  );
}
