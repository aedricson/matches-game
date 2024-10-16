import React from "react";

import './Moves.css';

type Props = {
  moves: string[];
};

export const Moves: React.FC<Props> = ({ moves }) => {
  return (
    <div className="message cell">
      <div className="message-header">
        <p>Moves</p>
      </div>

      <div className="message-body is-scrolled">
        <ul className="content">
          {moves.length !== 0 && moves.map((move: string, index: number) => (
            <li key={move + index}>{move}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
