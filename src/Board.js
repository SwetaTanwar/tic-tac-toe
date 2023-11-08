import React from "react";
import Square from "./Square";
import Helpers from "./helpers";

export default function Board({ xIsNext, squares, onPlay }) {
  const handleSquareClick = (index) => {
    if (squares[index] || Helpers.calculateWinners(squares)) {
      return;
    }
    const updatedSquares = squares.slice();
    updatedSquares[index] = xIsNext ? "X" : "O";
    onPlay(updatedSquares);
  };

  const winner = Helpers.calculateWinners(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const renderSquare = (i) => {
    return (
      <Square
        key={i}
        value={squares[i]}
        onSquareClick={() => handleSquareClick(i)}
      />
    );
  };

  return (
    <>
      <div className="status">{status}</div>
      <div>
        {[0, 1, 2].map((row) => (
          <div className="board-row" key={row}>
            {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
          </div>
        ))}
      </div>
    </>
  );
}
