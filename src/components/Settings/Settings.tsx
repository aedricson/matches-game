import React, { useState } from "react";
import cn from 'classnames';
import { UserType } from "../../types/userType";

type Props = {
  matchesCount: number,
  totalMatches: number,
  currentPlayer: UserType,
  isSettingsOpened: boolean,
  onCurrentPlayerChange: (player: UserType) => void,
  onTotalMatchesChange: (total: number) => void,
  onMatchesCountChange: (count: number) => void,
  onSettingsOpened: (value: boolean) => void,
  onReset: (
    total: number,
    player: UserType,
    count: number
  ) => void
}

export const Settings: React.FC<Props> = ({
  matchesCount,
  totalMatches,
  currentPlayer,
  isSettingsOpened,
  onCurrentPlayerChange,
  onTotalMatchesChange,
  onMatchesCountChange,
  onSettingsOpened,
  onReset
}) => {
  const [updatedMatchesCount, setUpdatedMatchesCount] = useState<number>(matchesCount);
  const [updatedTotalMatches, setUpdatedTotalMatches] = useState<number>(totalMatches);
  const [updatedCurrentPlayer, setUpdatedCurrentPlayer] = useState<UserType>(currentPlayer);

  const handleCountUpdate = (count: number) => {
    setUpdatedMatchesCount(count);
  }

  const handleTotalUpdate = (total: number) => {
    let oddTotal = total;

    if (total % 2 === 0) {
      oddTotal = total < updatedTotalMatches ? total - 1 : total + 1;
    }

    setUpdatedTotalMatches(oddTotal);
  }

  const handleCurrentPlayerUpdate = (player: UserType) => {
    setUpdatedCurrentPlayer(player);
  }

  const handleSettingsApply = () => {
    onCurrentPlayerChange(updatedCurrentPlayer);
    onTotalMatchesChange(updatedTotalMatches);
    onMatchesCountChange(updatedMatchesCount);
    onReset(updatedTotalMatches, updatedCurrentPlayer, updatedMatchesCount);
    onSettingsOpened(false);
  }

  return (
    <div className={cn('modal', { 'is-active': isSettingsOpened })}>
      <div className="modal-background"></div>

      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Settings</p>
          <button
            className="delete"
            aria-label="close"
            onClick={() => onSettingsOpened(false)}
          >
          </button>
        </header>
        <section className="modal-card-body">
          

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">First move</label>
            </div>

            <div className="field-body">
              <div className="field">
                <p className="control">
                <div className="select">
                  <select onChange={event => handleCurrentPlayerUpdate(event.target.value)}>
                    <option value={UserType.Player}>{UserType.Player}</option>
                    <option value={UserType.Computer}>{UserType.Computer}</option>
                  </select>
                </div>
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label">
              <label className="label">Total matches(odd)</label>
            </div>

            <div className="field-body">
              <div className="field is-narrow">
                <p className="control">
                  <input
                    className="input"
                    type="number"
                    value={updatedTotalMatches}
                    min={9}
                    onChange={event => handleTotalUpdate(+event.target.value)}
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label">
              <label className="label">Max matches can be taken</label>
            </div>

            <div className="field-body">
              <div className="field is-narrow">
                <p className="control">
                  <input
                    className="input"
                    type="number"
                    value={updatedMatchesCount}
                    onChange={event => handleCountUpdate(+event.target.value)}
                  />
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="modal-card-foot">
          <div className="buttons">
            <button
              className="button is-success"
              onClick={handleSettingsApply}
            >
              Save
            </button>

            <button
              className="button"
              onClick={() => onSettingsOpened(false)}
            >
              Cancel
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}