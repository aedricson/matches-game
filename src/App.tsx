import { GiMatchHead } from "react-icons/gi";

import "./App.css";

function App() {
  return (
    <div className="content">
      <h1 className="box has-text-centered">Matches game</h1>

      <div className="box grid">
        <div className="level cell is-col-span-3 is-flex-direction-column">
          <div className="level-item has-text-centered p-6">
            <div>
              <p className="heading">Computer</p>
              <p className="title">3</p>
            </div>
          </div>

          <div className="level-item has-text-centered p-6">
            <div>
              <p className="heading">Matches</p>
              <p className="title">25</p>
            </div>
          </div>

          <div className="level-item has-text-centered p-6">
            <div>
              <p className="heading">Player</p>
              <p className="title">5</p>
            </div>
          </div>
        </div>

        <div className="message cell">
          <div className="message-header">
            <p>Logs</p>
          </div>

          <div className="message-body">
            <ul className="content">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <strong>Pellentesque risus mi</strong>, tempus.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <strong>Pellentesque risus mi</strong>, tempus.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <strong>Pellentesque risus mi</strong>, tempus.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <strong>Pellentesque risus mi</strong>, tempus.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <strong>Pellentesque risus mi</strong>, tempus.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <strong>Pellentesque risus mi</strong>, tempus.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <strong>Pellentesque risus mi</strong>, tempus.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="box fixed-grid has-5-cols">
        <div className="grid">
          <div className="control cell is-col-start-3 is-loading">
            <h2 className="has-text-centered">
              Take the matches
            </h2>
          </div>

          <button className="button is-dark cell is-col-start-2">
            <GiMatchHead/>
          </button>
          
          <button className="button is-dark cell is-col-start-3">
            <GiMatchHead/>
            <GiMatchHead/>
          </button>
          
          <button className="button is-dark cell is-col-start-4">
            <GiMatchHead/>
            <GiMatchHead/>
            <GiMatchHead/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
