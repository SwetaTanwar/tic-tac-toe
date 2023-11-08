const calculateWinners = (_squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      _squares[a] &&
      _squares[a] === _squares[b] &&
      _squares[a] === _squares[c]
    ) {
      return _squares[a];
    }
  }
  return null;
};

export default {
  calculateWinners
};
