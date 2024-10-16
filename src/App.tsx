import React, { useEffect, useState } from "react";

import "./App.css";
import { UserType } from "./types/UserType";
import { Moves } from "./components/Moves";
import { ButtonBar } from "./components/ButtonBar";
import { GameField } from "./components/GameField";

const minimax = (
  isComputerTurn: boolean,
  totalMatches: number,
  computerMatches: number,
  playerMatches: number,
  depth: number
): number => {
  if (totalMatches === 0) {
    if (computerMatches % 2 === 0 && playerMatches % 2 !== 0) {
      return 1;
    } else if (playerMatches % 2 === 0 && computerMatches % 2 !== 0) {
      return -1;
    }
  }

  if (depth === 0) {
    return 0;
  }

  const possibleMoves = [1, 2, 3].filter(move => move <= totalMatches);
  let bestScore = isComputerTurn ? -Infinity : Infinity;

  for (const move of possibleMoves) {
    if (isComputerTurn) {
      const score = minimax(false, totalMatches - move, computerMatches + move, playerMatches, depth - 1);
      bestScore = Math.max(bestScore, score);
    } else {
      const score = minimax(true, totalMatches - move, computerMatches, playerMatches + move, depth - 1);
      bestScore = Math.min(bestScore, score);
    }
  }

  return bestScore;
};

const computerMove = (totalMatches: number, computerMatches: number, playerMatches: number): number => {
  let bestMove = -1;
  let bestScore = -Infinity;

  const possibleMoves = [1, 2, 3].filter(move => move <= totalMatches);

  for (const move of possibleMoves) {
    const score = minimax(false, totalMatches - move, computerMatches + move, playerMatches, 5);
    if (score > bestScore) {
      bestScore = score;
      bestMove = move;
    }
  }

  return bestMove;
};

export const App: React.FC = () => {
  const [totalMatches, setTotalMatches] = useState<number>(25);
  const [playerMatches, setPlayerMatches] = useState<number>(0);
  const [computerMatches, setComputerMatches] = useState<number>(0);
  const [currentPlayer, setCurrentPlayer] = useState<UserType>(UserType.Player);
  const [moves, setMoves] = useState<string[]>([]);

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
    const matchesAmount = computerMove(totalMatches, computerMatches, playerMatches);

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
      return;
    }
    
    if (currentPlayer === UserType.Computer) {
      setTimeout(() => {
        handleComputerMove();
      }, 1000);
    }
  }, [currentPlayer]);

  useEffect(() => {
    if (totalMatches === 0) {
      const user = checkWinner();
      const move = `${user} win!`;

      setMoves(prevMoves => [ ...prevMoves, move ]);
    }
  }, [totalMatches])

  return (
    <div className="content">
      <h1 className="box has-text-centered">Matches game</h1>

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
        matchesCount={3}
      />
    </div>
  );
};
