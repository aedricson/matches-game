import React from "react";

type Props = {
  computerMatches: number,
  totalMatches: number,
  playerMatches: number,
}

export const GameField: React.FC<Props> = ({
  computerMatches,
  totalMatches,
  playerMatches
}) => {
  return (
    <div className="level cell is-col-span-3 is-flex-direction-column">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Computer</p>
          <p className="title">{computerMatches}</p>
        </div>
      </div>

      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Total</p>
          <p className="title">{totalMatches}</p>
        </div>
      </div>

      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Player</p>
          <p className="title">{playerMatches}</p>
        </div>
      </div>
    </div>
  );
}