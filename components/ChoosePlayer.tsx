import { memo } from "react";
import NoughtIcon from "./NoughtIcon";
import CrossIcon from "./CrossIcon";

type ChoosePlayerProps = {
  handleChooseCross: () => void;
  handleChooseNought: () => void;
  handleNewGame: () => void;
};

const ChoosePlayer = ({
  handleChooseCross,
  handleNewGame,
  handleChooseNought,
}: ChoosePlayerProps): JSX.Element => {
  return (
    <div className="mt-20 md:mt-16 md:w-[500px] flex flex-col items-center justofy-center mx-auto">
      <div className="flex flex-col items-center py-8 w-[400px] md:w-[500px] h-64 md:h-72 rounded-2xl bg-[#1f3540] mt-6 space-y-6 md:space-y-8">
        <p className="text-md text-gray-300 uppercase font-semibold  md:text-xl ">
          Please Select
          {"  "}
          <span className="text-[#f3b236] text-xl font-bold">O (noughts)</span>
          {"  "}
          or
          {"  "}
          <span className="text-[#30c4bd] text-xl font-bold ">X (crosses)</span>
        </p>
        <div className="w-3/4 bg-gray-800  flex items-center justify-evenly h-24 rounded-2xl p-6 ">
          <button
            onClick={handleChooseNought}
            className="focus:bg-gray-300 hover:bg-[#ffe1a9] trasnsition duartion-300 ease-in flex items-center justify-center rounded-xl px-6 py-2 "
          >
            <NoughtIcon />
          </button>
          <button
            onClick={handleChooseCross}
            className="focus:bg-gray-300 hover:bg-[#bcfefb] trasnsition duartion-300 ease-in flex items-center justify-center rounded-xl px-6 py-2 "
          >
            <CrossIcon />
          </button>
        </div>
        <p className="text-md text-gray-500 uppercase font-semibold  md:text-xl ">
          {" "}
          Remember: X goes first
        </p>
      </div>
      <button
        onClick={handleNewGame}
        className="button hover:ring-4 hover:ring-cyan-300 rounded-xl mt-8 px-6 py-3 bg-[#f3b236] hover:bg-[#30c4bd]"
      >
        Start Game
      </button>
    </div>
  );
};

export default memo(ChoosePlayer);
