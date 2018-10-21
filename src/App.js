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
        <h1>
          Your weight on some distant and potentially habitable exoplanets
        </h1>
      </header>
      <div className="App-body">
        <Weight>
          {weight => (
            <div className="App-planets">
              <Trappist weight={weight} />
              <Gliese weight={weight} />
              <Kepler weight={weight} />
              <Wolf weight={weight} />
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
