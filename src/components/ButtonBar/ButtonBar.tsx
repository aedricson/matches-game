import React from "react";
import { UserType } from "../../types/UserType";

import cn from "classnames";
import { GiMatchHead } from "react-icons/gi";

type Props = {
  currentPlayer: UserType,
  onTake: (value: number) => void
};

// TODO - add matchesCount prop to allow user set max number of matches can be taken.
// Use Array.from and forEach to render buttons.Button may be separate component

export const ButtonBar: React.FC<Props> = ({ currentPlayer, onTake }) => {
  return (
    <div className="box fixed-grid has-5-cols">
      <div className="grid">
        <div
          className={cn("control cell is-col-start-3", {
            "is-loading": currentPlayer === UserType.Computer,
          })}
        >
          <h2 className="has-text-centered">Take the matches</h2>
        </div>

        <button
          className="button is-dark cell is-col-start-2"
          onClick={() => onTake(1)}
          disabled={currentPlayer === UserType.Computer}
        >
          <GiMatchHead />
        </button>

        <button
          className="button is-dark cell is-col-start-3"
          onClick={() => onTake(2)}
          disabled={currentPlayer === UserType.Computer}
        >
          <GiMatchHead />
          <GiMatchHead />
        </button>

        <button
          className="button is-dark cell is-col-start-4"
          onClick={() => onTake(3)}
          disabled={currentPlayer === UserType.Computer}
        >
          <GiMatchHead />
          <GiMatchHead />
          <GiMatchHead />
        </button>
      </div>
    </div>
  );
};
