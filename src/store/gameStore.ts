import { create } from "zustand";
import { getWinner } from "../utils/getWinner";

type Player = "X" | "O";
export type Square = Player | null;

type GameState = {
  squares: Square[];
  isXTurn: boolean;

  makeMove: (index: number) => void;
  resetGame: () => void;
};

export const useGameStore = create<GameState>((set, get) => ({
  squares: Array(9).fill(null),
  isXTurn: true,

  makeMove: (index) => {
    const { squares, isXTurn } = get();

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
    });
  },
  resetGame: () => {
    set({
      squares: Array(9).fill(null),
      isXTurn: true,
    });
  },
}));
