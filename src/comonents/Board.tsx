import { useGameStore } from "../store/gameStore";
import { getWinner } from "../utils/getWinner";
import { Square } from "./Square";

export const Board = () => {
  const squares = useGameStore((state) => state.squares);
  const makeMove = useGameStore((state) => state.makeMove);
  const winner = getWinner(squares);

  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => makeMove(index)}
          disabled={winner !== null}
        />
      ))}
    </div>
  );
};
