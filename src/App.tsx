import React, { useEffect, useState } from "react";

import "./App.css";
import { UserType } from "./types/UserType";
import { Moves } from "./components/Moves";
import { ButtonBar } from "./components/ButtonBar";
import { GameField } from "./components/GameField";
import { computerMove } from "./utils/minimax";
import { Settings } from "./components/Settings";

export const App: React.FC = () => {
  const [totalMatches, setTotalMatches] = useState<number>(25);
  const [playerMatches, setPlayerMatches] = useState<number>(0);
  const [computerMatches, setComputerMatches] = useState<number>(0);
  const [currentPlayer, setCurrentPlayer] = useState<UserType>(UserType.Player);
  const [moves, setMoves] = useState<string[]>([]);
  const [matchesCount, setMatchesCount] = useState<number>(3);

  const handleAddMove = (matchesAmount: number) => {
    const move = `The ${currentPlayer} takes ${matchesAmount} matches.`;

    setMoves((prevMoves) => [...prevMoves, move]);
  };

  const handleTakeMatch = (matchesAmount: number) => {
    if (totalMatches - matchesAmount >= 0) {
      setPlayerMatches((prevPlayerMatches) => prevPlayerMatches + matchesAmount);
      setTotalMatches((matches) => matches - matchesAmount);
      handleAddMove(matchesAmount);

      if (totalMatches - matchesAmount > 0) {
        setCurrentPlayer(UserType.Computer);
      }
    }
  };

  const handleComputerMove = () => {
    const matchesAmount = computerMove(matchesCount, totalMatches, computerMatches, playerMatches);

    setComputerMatches((prevComputerMatches) => prevComputerMatches + matchesAmount);
    setTotalMatches((matches) => matches - matchesAmount);
    handleAddMove(matchesAmount);
    setCurrentPlayer(UserType.Player);
  };

  const checkWinner = (): UserType => {
    const winner = playerMatches % 2 === 0 ? UserType.Player : UserType.Computer;

    return winner;
  }

  useEffect(() => {
    if (totalMatches === 0) {
      const user = checkWinner();
      const move = `${user} win!`;

      setMoves(prevMoves => [ ...prevMoves, move ]);

      return;
    }
    
    if (currentPlayer === UserType.Computer) {
      setTimeout(() => {
        handleComputerMove();
      }, 1000);
    }
  }, [currentPlayer, totalMatches]);

  return (
    <div className="content">
      <h1 className="box has-text-centered">Matches game</h1>

      <Settings />

      <div className="box grid">
        <GameField
          computerMatches={computerMatches}
          totalMatches={totalMatches}
          playerMatches={playerMatches}
        />

        <Moves moves={moves} />
      </div>

      <ButtonBar
        currentPlayer={currentPlayer}
        onTake={handleTakeMatch}
        matchesCount={matchesCount}
      />
    </div>
  );
};
