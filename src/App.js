import React from "react";
import Weather from "./Weather";

import "./Weather.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="Dublin, IE" />
      </header>
    </div>
  );
}
