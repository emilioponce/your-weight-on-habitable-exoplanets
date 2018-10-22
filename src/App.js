import React from "react";
import Weight from "./Weight";

import Trappist from "./Exoplanets/Trappist";
import Gliese from "./Exoplanets/Gliese";
import Kepler from "./Exoplanets/Kepler";
import Wolf from "./Exoplanets/Wolf";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Your weight on some potentially habitable exoplanets</h1>
      </header>
      <div className="App-body">
        <Weight>
          {(weight, units) => (
            <div className="App-planets">
              <Trappist weight={weight} units={units} />
              <Gliese weight={weight} units={units} />
              <Kepler weight={weight} units={units} />
              <Wolf weight={weight} units={units} />
            </div>
          )}
        </Weight>
      </div>
      <div className="App-footer">
        Emilio Ponce{" "}
        <a href="https://github.com/emilioponce/your-weight-on-habitable-exoplanets">
          Github
        </a>
      </div>
    </div>
  );
};

export default App;
