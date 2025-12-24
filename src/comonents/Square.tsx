import type { Square as SquareType } from "../store/gameStore";

type SquareProps = {
  value: SquareType;
  onClick: () => void;
  disabled: boolean;
  isWinning: boolean;
};

export const Square = ({
  onClick,
  value,
  disabled,
  isWinning,
}: SquareProps) => {
  return (
    <button
      onClick={onClick}
      className={`square ${isWinning && "square--win"}`}
      disabled={disabled}
    >
      {value}
    </button>
  );
};
