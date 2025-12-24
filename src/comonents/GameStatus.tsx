import { useGameStore } from "../store/gameStore";
import { getWinner } from "../utils/getWinner";

export const GameStatus = () => {
  const squares = useGameStore((state) => state.squares);
  const isXTurn = useGameStore((state) => state.isXTurn);
  const resetGame = useGameStore((state) => state.resetGame);

  const winner = getWinner(squares);

  const label = winner
    ? `Winnder: ${winner}`
    : `Next player: ${isXTurn ? "X" : "O"}`;

  return (
    <>
      <p>{label}</p>
      <button onClick={resetGame}>Reset</button>
    </>
  );
};
