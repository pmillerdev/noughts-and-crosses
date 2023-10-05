import { memo } from "react";
import NoughtIcon from "./NoughtIcon";
import CrossIcon from "./CrossIcon";
import Square from "./Square";

type BoardProps = {
  winner: string | null;
  crossIsPlaying: boolean;
  squares: Array<string | null>;
  handleSetSquare: (i: number) => void;
  handleRestartGame: () => void;
};

const Board = ({
  winner,
  crossIsPlaying,
  handleSetSquare,
  handleRestartGame,
  squares,
}: BoardProps) => {
  const setSquareValue = (i: number): JSX.Element | null => {
    const squareVal: string | null = squares[i];
    switch (squareVal) {
      case "X":
        return <CrossIcon />;
      case "O":
        return <NoughtIcon />;
      default:
        return null;
    }
  };

  const renderSquare = (i: number): JSX.Element => (
    <Square
      value={setSquareValue(i)}
      onClick={() => handleSetSquare(i)}
      winner={winner}
    />
  );

  return (
    <div>
      <div className="board">
        <div className=" w-[300px] md:[w-400px] rounded-lg flex items-center justify-center space-x-10">
          <div>
            {crossIsPlaying ? (
              <div className="text-white bg-gray-700 text-xl px-4 py-1 w-28 rounded-lg font-medium uppercase">
                <span className="text-[#30c4bd] text-2xl font-bold">X</span>{" "}
                Turn
              </div>
            ) : (
              <div className="text-white bg-gray-700 text-xl px-4 py-1 w-28 rounded-lg font-medium  uppercase">
                <span className=" text-[#f3b236] text-2xl  font-bold">O</span>{" "}
                Turn
              </div>
            )}
          </div>
          <button
            onClick={handleRestartGame}
            className="group button px-2 py-1 hover:ring-4 hover:ring-cyan-300 rounded-md bg-[#f3b236] hover:bg-[#30c4bd]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 group-hover:rotate-180 transition duration-300 eas-in  "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>

        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>

        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
};

export default memo(Board);
