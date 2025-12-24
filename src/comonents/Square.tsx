import type { Square as SquareType } from "../store/gameStore";

type SquareProps = {
  value: SquareType;
  onClick: () => void;
  disabled: boolean;
};

export const Square = ({ onClick, value, disabled }: SquareProps) => {
  return (
    <button onClick={onClick} className="square" disabled={disabled}>
      {value}
    </button>
  );
};
