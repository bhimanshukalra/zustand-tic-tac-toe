import { useGameStore } from "../store/gameStore";
import { getWinner } from "../utils/getWinner";

export const GameStatus = () => {
  const squares = useGameStore((state) => state.squares);
  const isXTurn = useGameStore((state) => state.isXTurn);
  const resetGame = useGameStore((state) => state.resetGame);
  const undoMove = useGameStore((state) => state.undo);

  const winner = getWinner(squares);

  const getLabel = () => {
    const isEverySqareTaken = squares.every((val) => val !== null);
    if (winner) {
      return `Winner: ${winner.player}`;
    } else if (isEverySqareTaken) {
      return "Draw";
    } else {
      return `Next player: ${isXTurn ? "X" : "O"}`;
    }
  };

  return (
    <div>
      <p>{getLabel()}</p>
      <button onClick={resetGame}>Reset</button>
      <button onClick={undoMove} className="undo-button">
        Undo
      </button>
    </div>
  );
};
