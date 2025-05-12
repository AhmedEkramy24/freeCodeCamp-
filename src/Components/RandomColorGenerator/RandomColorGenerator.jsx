import React, { useEffect, useState } from "react";
import CodeBlock from "./CodeBlock";

export default function RandomColorGenerator() {
  const [color, setColor] = useState("#000");
  const [typeOfColor, setTypeOfColor] = useState("rgb");

  function createRandom(length) {
    return Math.floor(Math.random() * length);
  }

  function handleHexColor() {
    let hex = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[createRandom(hex.length)];
    }
    setColor(color);
  }

  function handleRgbColor() {
    let red = createRandom(256);
    let green = createRandom(256);
    let blue = createRandom(256);

    let color = `rgb(${red}, ${green}, ${blue} )`;
    setColor(color);
  }

  useEffect(() => {
    if (typeOfColor === "hex") {
      handleHexColor();
    } else {
      handleRgbColor();
    }
  }, [typeOfColor]);

  return (
    <>
      <div className="container p-2">
        <div className="btns flex justify-center space-x-2 my-3 p-2">
          <button
            onClick={() => setTypeOfColor("hex")}
            className="text-white bg-gray-700 hover:bg-gray-800 px-3 py-1 rounded-sm text-sm"
          >
            Create HEX Color
          </button>
          <button
            onClick={() => setTypeOfColor("rgb")}
            className="text-white bg-gray-700 hover:bg-gray-800 px-3 py-1 rounded-sm text-sm"
          >
            Create RGB Color
          </button>
          <button
            onClick={
              typeOfColor === "hex"
                ? () => handleHexColor()
                : () => handleRgbColor()
            }
            className="text-white bg-gray-700 hover:bg-gray-800 px-3 py-1 rounded-sm text-sm"
          >
            Generate Random Color
          </button>
        </div>
        <div className="md:w-1/2 w-full mx-auto">
          <CodeBlock code={color} />
        </div>
        <div
          className="md:w-1/2 w-full mx-auto h-80 my-3 rounded-md"
          style={{ backgroundColor: `${color}` }}
        ></div>
      </div>
    </>
  );
}
