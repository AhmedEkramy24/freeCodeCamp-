import React, { useState } from "react";
import victory from "../../assets/victory.mp3";

function Square({ value, onclick, isWinning }) {
  return (
    <button
      onClick={onclick}
      className={`flex justify-center ${
        isWinning ? "bg-gray-800 text-white" : "hover:bg-slate-300"
      } text-6xl items-center w-1/3 h-1/3 border border-slate-400 m-0 `}
    >
      {value}
    </button>
  );
}

export default function XOGame() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [status, setStatus] = useState("Next player : X");
  const [turn, setTurn] = useState("x");
  const [gameOver, setGameOver] = useState(false);
  const [winnerSquares, setWinnerSquares] = useState([]);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);

  let audio = new Audio(victory);

  function handleClick(index) {
    if (gameOver || squares[index]) return;

    let newSquares = [...squares];

    newSquares[index] = turn.toUpperCase();
    setTurn(turn === "x" ? "o" : "x");
    setStatus(`Next player : ${turn === "x" ? "O" : "X"}`);
    setSquares(newSquares);
    const result = checkWinner(newSquares);
    if (result) {
      const [winner, line] = result;
      setStatus(`Winner is : ${winner}`);
      setGameOver(true);
      setWinnerSquares(line);
      audio.play();
      if (winner === "X") setXScore(xScore + 1);
      else if (winner === "O") setOScore(oScore + 1);
      setTimeout(() => {
        repeatGame();
      }, 2000);
    } else if (!newSquares.includes("")) {
      setStatus("It's a draw!");
      setWinnerSquares([0, 1, 2, 3, 4, 5, 6, 7, 8]);
      setTimeout(() => {
        repeatGame();
      }, 2000);
    }
  }

  function repeatGame() {
    setSquares(Array(9).fill(""));
    setStatus(`Next player : ${turn === "x" ? "O" : "X"}`);
    setGameOver(false);
    setWinnerSquares([]);
  }

  function checkWinner(squares) {
    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return [squares[a], [a, b, c]];
      }
    }
    return null;
  }

  return (
    <>
      <div className="container">
        <h3 className="my-3 text-center ">{status}</h3>
        <table className="text-center border border-slate-400 my-3 mx-auto">
          <thead>
            <tr>
              <td className=" border border-slate-400 px-3 py-1 bg-slate-200">
                Score X
              </td>
              <td className=" border border-slate-400 px-3 py-1 bg-slate-200">
                Score O
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" border border-slate-400 px-3 py-1">{xScore}</td>
              <td className=" border border-slate-400 px-3 py-1">{oScore}</td>
            </tr>
          </tbody>
        </table>
        <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-slate-200 mx-auto flex flex-wrap">
          {squares.map((_, index) => (
            <Square
              key={index}
              value={squares[index]}
              onclick={() => handleClick(index)}
              isWinning={winnerSquares.includes(index)}
            />
          ))}
        </div>
        <button
          onClick={() => repeatGame()}
          className="px-3 py-1 bg-gray-800 text-white rounded-md mx-auto my-3 block"
        >
          Repeat Game <i className="fas fa-rotate-right"></i>
        </button>
      </div>
    </>
  );
}
