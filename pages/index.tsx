import type { NextPage } from "next";
import Head from "next/head";
import React, { useCallback, useMemo, useState } from "react";
import Board from "../components/Board";
import ChoosePlayer from "../components/ChoosePlayer";
import WinnerModal from "../components/WinnerModal";
import { calculateWinner } from "../utils";

const Home: NextPage = () => {
  const [isCross, setIsCross] = useState<boolean>(true);
  const [newGame, setNewGame] = useState<boolean>(false);
  const [squares, setSquares] = useState<Array<string | null>>(
    Array(9).fill(null)
  );

  const handleChooseCross = (): void => setIsCross(true);

  const handleChooseNaught = (): void => setIsCross(false);

  const handleSetSquare = (i: number): void => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = isCross ? "X" : "O";
    setSquares(squares);
    setIsCross(!isCross);
  };

  const handleRestartGame = (): void => {
    setIsCross(true);
    setSquares(Array(9).fill(null));
  };

  const handleNewGame = (): void => {
    handleRestartGame();
    setNewGame(true);
  };

  const handleQuitGame = (): void => {
    handleRestartGame();
    setNewGame(false);
  };

  let winner = calculateWinner(squares);

  return (
    <div className="flex min-h-screen bg-[#192a32] flex-col items-center  py-2">
      <Head>
        <title>Noughts and Crosses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-4xl md:text-6xl font-extrabold mt-4 text-[#30c4bd] ">
        <span className="text-[#f3b236]">Noughts</span> &amp; Crosses
      </h1>

      {!newGame ? (
        <ChoosePlayer
          handleNewGame={handleNewGame}
          handleChooseCross={handleChooseCross}
          handleChooseNaught={handleChooseNaught}
        />
      ) : (
        <Board
          winner={winner}
          crossIsPlaying={isCross}
          squares={squares}
          handleSetSquare={handleSetSquare}
          handleRestartGame={handleRestartGame}
        />
      )}
      {winner && (
        <WinnerModal
          winner={winner}
          handleQuitGame={handleQuitGame}
          handleNewGame={handleNewGame}
        />
      )}
    </div>
  );
};

export default Home;
