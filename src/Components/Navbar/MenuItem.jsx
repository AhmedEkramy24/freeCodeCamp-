import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ to, title }) => {
  return (
    <div>
      <li>
        <NavLink
          to={to}
          className="text-slate-600 border-e-2 border-slate-500 px-2"
        >
          {title}
        </NavLink>
      </li>
    </div>
  );
};

export default MenuItem;
