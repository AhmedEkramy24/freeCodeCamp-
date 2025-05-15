import { useState } from "react";
import MenuList from "./MenuList";

export default function MenuItem({ item }) {
  const [showChildren, setShowChildren] = useState(false);
  return (
    <>
      <li
        className="px-2 cursor-pointer  my-1 "
        onClick={() => setShowChildren(!showChildren)}
      >
        {item.label}
        {item.children && item.children.length && (
          <i
            className={`fas fa-angle-${
              showChildren ? "up" : "down"
            } ms-3 translate-y-[3px]`}
          ></i>
        )}
      </li>
      {showChildren && item.children && item.children.length ? (
        <MenuList list={item.children} />
      ) : null}
    </>
  );
}
