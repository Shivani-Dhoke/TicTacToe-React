import React, { useState } from "react";
import Square from "../square/Square";
import "./Board.css";

export default function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const handleClick = (index) => {
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "0";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };
  const checkWinner = () => {
    const winnerLogin = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogin) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[b] === state[c]) {
        return state[a];
      }
    }
    return false;
  };
  const isWinner = checkWinner();

  const handleReset = () => {
    setState("");
  };
 

  return (
    <div className="container">
      <div className="board-container">
        <h1>Welcome To Tic-Tac-Toe Game</h1>

        {isWinner ? (
          <h1>
            {isWinner} Won the Game
            <br />
            <img
              src="https://c.tenor.com/aKFaZBrZFYcAAAAC/excited-spin.gif"
              alt=""
            />
            <br />{" "}
            <button className="winBtn" onClick={handleReset}>
              Play Again
            </button>
          </h1>
        ) : (
          <>
            <div className="board-row">
              <Square onClick={() => handleClick(0)} value={state[0]} />
              <Square onClick={() => handleClick(1)} value={state[1]} />
              <Square onClick={() => handleClick(2)} value={state[2]} />
            </div>
            <div className="board-row">
              <Square onClick={() => handleClick(3)} value={state[3]} />
              <Square onClick={() => handleClick(4)} value={state[4]} />
              <Square onClick={() => handleClick(5)} value={state[5]} />
            </div>
            <div className="board-row">
              <Square onClick={() => handleClick(6)} value={state[6]} />
              <Square onClick={() => handleClick(7)} value={state[7]} />
              <Square onClick={() => handleClick(8)} value={state[8]} />
            </div>
            <button className="resetBtn" onClick={handleReset}>Reset</button>
          </>
        )}
      </div>
    </div>
  );
}
