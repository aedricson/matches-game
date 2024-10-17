import React, { useState } from "react";
import cn from 'classnames';

type Props = {
  onUserTypeChange: () => void,
  onTotalMatchesChange: () => void,
  onMatchesCountChange: () => void,
}

export const Settings: React.FC<Props> = ({
  onMatchesCountChange,
  onTotalMatchesChange,
  onUserTypeChange
}) => {
  const [isSettingsOpened, setIsSettingsOpened] = useState<boolean>(false);

  return (
    <div className={cn('modal', { 'is-active': isSettingsOpened })}>
      <div className="modal-background"></div>

      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Settings</p>
          <button className="delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">
          

          <div className="field is-horizontal mb-5">
            <div className="field-label is-normal">
              <label className="label">First move</label>
            </div>

            <div className="field-body">
              <div className="field">
                <p className="control">
                <div className="select">
                  <select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </select>
                </div>
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label">
              <label className="label">Total matches</label>
            </div>

            <div className="field-body">
              <div className="field is-narrow">
                <p className="control">
                  <input className="input" type="text" placeholder="" />
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
                  <input className="input" type="text" placeholder="" />
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="modal-card-foot">
          <div className="buttons">
            <button className="button is-success">Save</button>
            <button className="button">Cancel</button>
          </div>
        </footer>
      </div>
    </div>
  );
}