import { create } from "zustand";
import { getWinner } from "../utils/getWinner";

type Player = "X" | "O";
export type Square = Player | null;
type GameSnapShot = {
  squares: Square[];
  isXTurn: boolean;
};

type GameState = {
  squares: Square[];
  isXTurn: boolean;
  previousSpanShots: GameSnapShot[];

  makeMove: (index: number) => void;
  resetGame: () => void;
  undo: () => void;
};

export const useGameStore = create<GameState>((set, get) => ({
  squares: Array(9).fill(null),
  isXTurn: true,
  previousSpanShots: [],

  makeMove: (index) => {
    const { squares, isXTurn, previousSpanShots } = get();

    if (squares[index] !== null) {
      return;
    }
    if (getWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[index] = isXTurn ? "X" : "O";

    set({
      squares: nextSquares,
      isXTurn: !isXTurn,
      previousSpanShots: [...previousSpanShots, { squares, isXTurn }],
    });
  },
  resetGame: () => {
    set({
      squares: Array(9).fill(null),
      isXTurn: true,
    });
  },
  undo: () => {
    const { previousSpanShots } = get();
    if (previousSpanShots.length === 0) {
      return;
    }

    const lastSnapShot = previousSpanShots[previousSpanShots.length - 1];
    const updatedPreviousSpanShots = previousSpanShots.slice(0, -1);

    set({
      previousSpanShots: updatedPreviousSpanShots,
      isXTurn: lastSnapShot.isXTurn,
      squares: lastSnapShot.squares,
    });
  },
}));
