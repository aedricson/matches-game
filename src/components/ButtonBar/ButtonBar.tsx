import React from "react";
import { UserType } from "../../types/UserType";

import cn from "classnames";
import { GiMatchHead } from "react-icons/gi";

type Props = {
  currentPlayer: UserType,
  onTake: (value: number) => void,
  matchesCount: number
};

const MAX_GRID_COLUMNS = 3;

export const ButtonBar: React.FC<Props> = ({
  currentPlayer,
  onTake,
  matchesCount
}) => {
  return (
    <div className={`box container fixed-grid has-${MAX_GRID_COLUMNS}-cols`}>
      <div className="grid">
        <div
          className={cn("control cell is-col-start-2", {
            "is-loading": currentPlayer === UserType.Computer,
          })}
        >
          <h2 className="has-text-centered">Take the matches</h2>
        </div>

        {[...Array(matchesCount)].map((_, index) => (
          <button
            key={index}
            className={`button is-dark cell is-col-start-${(index % MAX_GRID_COLUMNS) + 1}`}
            onClick={() => onTake(index + 1)}
            disabled={currentPlayer === UserType.Computer}
          >
            {index + 1}
            <GiMatchHead />
          </button>
        ))}
      </div>
    </div>
  );
};
