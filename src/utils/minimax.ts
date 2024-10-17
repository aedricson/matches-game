const minimax = (
  matchesCount: number,
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

  const possibleMoves = [...Array(matchesCount)].map((_, index) => index + 1).filter(move => move <= totalMatches);

  console.log(possibleMoves);

  let bestScore = isComputerTurn ? -Infinity : Infinity;

  for (const move of possibleMoves) {
    if (isComputerTurn) {
      const score = minimax(matchesCount, false, totalMatches - move, computerMatches + move, playerMatches, depth - 1);
      bestScore = Math.max(bestScore, score);
    } else {
      const score = minimax(matchesCount, true, totalMatches - move, computerMatches, playerMatches + move, depth - 1);
      bestScore = Math.min(bestScore, score);
    }
  }

  return bestScore;
};

export const computerMove = (
  matchesCount: number,
  totalMatches: number,
  computerMatches: number,
  playerMatches: number
): number => {
  let bestMove = -1;
  let bestScore = -Infinity;

  const possibleMoves = [...Array(matchesCount)].map((_, index) => index + 1).filter(move => move <= totalMatches);
  
  console.log(possibleMoves);
  
  for (const move of possibleMoves) {
    const score = minimax(matchesCount, false, totalMatches - move, computerMatches + move, playerMatches, 5);
    if (score > bestScore) {
      bestScore = score;
      bestMove = move;
    }
  }

  return bestMove;
};