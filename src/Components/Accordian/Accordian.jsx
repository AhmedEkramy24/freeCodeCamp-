import React, { useState } from "react";
import data from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multiMode, setMultiMode] = useState(false);
  const [multiples, setMultiples] = useState([]);
  const questions = data;

  function handleMultiSelections(currentId) {
    let cpyMuliples = structuredClone(multiples);
    let findIndexInMultiples = cpyMuliples.indexOf(currentId);

    if (findIndexInMultiples === -1) {
      cpyMuliples.push(currentId);
    } else {
      cpyMuliples.splice(findIndexInMultiples, 1);
    }
    setMultiples(cpyMuliples);
  }
  return (
    <>
      <div className="container">
        <div className="w-full sm:w-[400px] mx-auto p-2">
          <button
            onClick={() => setMultiMode(!multiMode)}
            className={`block w-fit mx-auto rounded-sm my-3 px-3 py-1 ${
              multiMode
                ? "bg-green-400 hover:bg-green-500"
                : "bg-red-300 hover:bg-red-400"
            }`}
          >
            {multiMode ? "Disable" : "Enable"} Muliple Selections
          </button>
          {questions.map((item, index) => (
            <div key={index}>
              <div
                onClick={
                  multiMode
                    ? () => handleMultiSelections(item.id)
                    : () => setSelected(selected === item.id ? null : item.id)
                }
                className="question flex p-2 justify-between bg-gray-300 hover:bg-gray-200 items-center border-b border-gray-600 cursor-pointer"
              >
                <h3>{item.question}</h3>
                <span>
                  <i
                    className={`fa-solid fa-angle-${
                      selected === item.id ? "up" : "down"
                    }`}
                  ></i>
                </span>
              </div>
              <div className="answer">
                {multiMode
                  ? multiples.includes(item.id) && item.answer
                  : selected === item.id && item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
