import { memo } from "react";

type SquareProps = {
  winner: string | null;
  value: JSX.Element | string | null;
  onClick: () => void;
};

const Square = ({ value, onClick, winner }: SquareProps) => (
  <button className="square" onClick={onClick} disabled={winner ? true : false}>
    {value}
  </button>
);

export default memo(Square);
