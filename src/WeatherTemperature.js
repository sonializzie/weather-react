import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("metrics");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <span>
          <h1 id="today-temp">
            {Math.round(fahrenheit())}

            <span className="units">
              <a href="/" onClick={showCelsius}>
                {" "}
                °C
              </a>{" "}
              | °F
            </span>
          </h1>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span>
          <h1 id="today-temp">
            {Math.round(props.celsius)}

            <span className="units">
              °C |
              <a href="/" onClick={showFahrenheit}>
                {" "}
                °F
              </a>
            </span>
          </h1>
        </span>
      </div>
    );
  }
}
