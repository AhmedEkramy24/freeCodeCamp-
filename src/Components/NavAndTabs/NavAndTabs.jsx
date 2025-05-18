import axios from "axios";
import { useEffect, useState } from "react";

export default function NavAndTabs() {
  const [tabs, setTabs] = useState([]);
  const [show, setShow] = useState("tab1");

  async function fetchTabs() {
    try {
      let { data } = await axios.get(
        "https://api.myjson.online/v1/records/919d6362-2d02-4173-b62f-4f1c1e567bc5"
      );
      setTabs(data.data.tabs);
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    fetchTabs();
  }, []);
  return (
    <>
      <div className="container p-2">
        <h1 className="text-2xl text-center">Nav And Tabs</h1>
        <ul className="flex gap-3 flex-wrap justify-center my-4">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`${
                show === tab.id ? "bg-blue-500 text-white" : "bg-gray-200"
              } p-2 rounded-md cursor-pointer`}
              onClick={() => setShow(tab.id)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
        {tabs
          .filter((tab) => tab.id === show)
          .map((tab, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-md shadow-md my-4"
            >
              <h2 className="text-xl font-bold">{tab.label}</h2>
              <p>{tab.content}</p>
            </div>
          ))}
      </div>
    </>
  );
}
