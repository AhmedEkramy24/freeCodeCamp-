import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-800 p-2">
        <div className="container">
          <div className="logo">
            <h1 className="text-white text-2xl text-center">
              freeCodeCamp(<i className="fa-solid fa-fire-flame-curved"></i>)
            </h1>
          </div>
        </div>
      </nav>
      <div className="bg-slate-200 p-2">
        <div className="container">
          <ul className="flex space-x-2">
            <li>
              <NavLink
                to={"accordian"}
                className="text-slate-600 border-e-2 border-slate-500 px-2"
              >
                Accordian
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"randomcolorgenerator"}
                className="text-slate-600 border-e-2 border-slate-500 px-2"
              >
                Random Color Generator
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
