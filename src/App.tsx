import React, { useEffect, useState } from "react";

import "./App.css";
import { UserType } from "./types/UserType";
import { Moves } from "./components/Moves";
import { ButtonBar } from "./components/ButtonBar";

export const App: React.FC = () => {
  const [totalMatches, setTotalMatches] = useState<number>(25);
  const [playerMatches, setPlayerMatches] = useState<number>(0);
  const [computerMatches, setComputerMatches] = useState<number>(0);
  const [currentPlayer, setCurrentPlayer] = useState<UserType>(UserType.Player);
  const [moves, setMoves] = useState<string[]>([]);

  // TODO - create checkWinner function, add appropriate msg

  const handleAddMove = (matchesAmount: number) => {
    const move = `The ${currentPlayer} takes ${matchesAmount} matches.`;

    setMoves((prevMoves) => [...prevMoves, move]);
  };

  const handleTakeMatch = (matchesAmount: number) => {
    if (totalMatches - matchesAmount >= 0) {
      setPlayerMatches(
        (prevPlayerMatches) => prevPlayerMatches + matchesAmount
      );
      setTotalMatches((matches) => matches - matchesAmount);
      handleAddMove(matchesAmount);
      setCurrentPlayer(UserType.Computer);
    }
  };

  const handleComputerMove = () => {
    // TODO - create algorithm
    const matchesAmount = Math.floor(Math.random() * 2) + 1;

    setComputerMatches(
      (prevComputerMatches) => prevComputerMatches + matchesAmount
    );
    setTotalMatches((matches) => matches - matchesAmount);
    handleAddMove(matchesAmount);
    setCurrentPlayer(UserType.Player);
  };

  useEffect(() => {
    if (playerMatches === 0) {
      return;
    }

    setTimeout(() => {
      handleComputerMove();
    }, 1000);
  }, [playerMatches]);

  return (
    <div className="content">
      <h1 className="box has-text-centered">Matches game</h1>

      {/* TODO - move game board into separate component */}

      <div className="box grid">
        <div className="level cell is-col-span-3 is-flex-direction-column">
          <div className="level-item has-text-centered p-6">
            <div>
              <p className="heading">Computer</p>
              <p className="title">{computerMatches}</p>
            </div>
          </div>

          <div className="level-item has-text-centered p-6">
            <div>
              <p className="heading">Total</p>
              <p className="title">{totalMatches}</p>
            </div>
          </div>

          <div className="level-item has-text-centered p-6">
            <div>
              <p className="heading">Player</p>
              <p className="title">{playerMatches}</p>
            </div>
          </div>
        </div>

        <Moves moves={moves} />
      </div>

      <ButtonBar currentPlayer={currentPlayer} onTake={handleTakeMatch} />
    </div>
  );
};
