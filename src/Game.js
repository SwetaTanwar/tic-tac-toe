import React from "react";
import Board from "./Board";

export default function Game() {
  const [history, setHistory] = React.useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = React.useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    console.log("nextMove: ", nextMove);
    setCurrentMove(nextMove);
  }

  const resetGame = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  };

  console.log(history);

  const moves = history.map((_, move) => {
    const isCurrentMove = move === currentMove;
    const description =
      move === 0
        ? "Go to game start"
        : isCurrentMove
        ? "You are at #" + move
        : "Go to move #" + move;

    return isCurrentMove ? (
      <div className="current-move">{description}</div>
    ) : (
      <li key={move} className="moves-row">
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      {history.length > 1 && (
        <div className="game-info">
          <button className="moves-row" onClick={resetGame}>
            Reset Game
          </button>
          <ul className="no-bullets">{moves}</ul>
        </div>
      )}
    </div>
  );
}
