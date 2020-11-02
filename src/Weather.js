import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import FormattedDay from "./FormattedDay";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setweatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);

    setweatherData({
      ready: true,
      day: new Date(response.data.dt * 1000),
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      city: response.data.name,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      clouds: response.data.clouds.all,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    let apiKey = "cf23fefe944409418faf6ab205d2379d";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
    ${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <script
            src="https://kit.fontawesome.com/71fc1b7f26.js"
            crossOrigin="anonymous"
          ></script>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
            crossOrigin="anonymous"
          />

          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="src/style.css" />

          <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        </head>
        <body>
          <div className="container">
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <div className="card-body">
                    <div className="today-weather-info">
                      <h2 className="date-dayname">
                        <FormattedDay date={weatherData.day} />
                      </h2>
                      <span className="date-day">
                        <FormattedDate date={weatherData.date} />
                      </span>
                      <br />
                      <button className="current-location" id="location-btn">
                        <span className="material-icons">location_on</span>
                      </button>
                      <span className="location" id="city"></span>
                      <span className="country-location" id="country">
                        {weatherData.city} | {weatherData.country}
                      </span>
                      <br />
                      <br />
                      <br />
                      <br />

                      <WeatherIcon code={weatherData.icon} />

                      <br />
                      <br />

                      <WeatherTemperature celsius={weatherData.temperature} />

                      <div className="clear"></div>
                      <h2 className="weather-type" id="description">
                        {weatherData.description}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <form className="form-inline">
                      <div className="form-group mb-2">
                        <label htmlFor="staticLocationl2" className="sr-only">
                          Forecast
                        </label>
                        <input
                          type="text"
                          readOnly
                          className="form-control-plaintext"
                          id="staticForecast2"
                          value=" ☂ Weather Forecast"
                        />
                      </div>
                    </form>

                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="form-group mx-sm-3 mb-2 col-8">
                          <label htmlFor="inputCity2" className="sr-only">
                            City
                          </label>
                          <input
                            type="search"
                            className="form-control"
                            id="city-input"
                            autoFocus="on"
                            onChange={handleCityChange}
                            autoComplete="off"
                            placeholder="Type a city..."
                          />
                        </div>
                        <div className="clear"></div>
                        <button
                          type="submit"
                          value="Search"
                          className="btn btn-primary mx-sm-3 mb-2 col-2 search-btn"
                        >
                          Search
                        </button>
                      </div>
                    </form>
                    <div className="weather-status">
                      <ul className="weather-status-info">
                        <li id="clouds">Clouds : {weatherData.clouds} %</li>
                        <li id="humidity">
                          Humidity : {weatherData.humidity} %
                        </li>
                        <li id="wind">
                          Wind : {Math.round(weatherData.wind)} km/h
                        </li>
                      </ul>
                    </div>
                    <br />
                    <div className="week-container row" id="forecast">
                      <div className="week-list">
                        <div className="row">
                          <div className="col-sm">
                            <h4 className="day-of-week">Mon</h4>
                            <img
                              src="http://openweathermap.org/img/wn/02d@2x.png"
                              alt="cloud with sun"
                            />
                            <span className="day-temp">18°C</span>
                          </div>
                          <div className="col-sm">
                            <h4 className="day-of-week">Tues</h4>
                            <img
                              src="http://openweathermap.org/img/wn/04d@2x.png"
                              alt="cloudy"
                            />
                            <span className="day-temp">18°C</span>
                          </div>
                          <div className="col-sm">
                            <h4 className="day-of-week">Wed</h4>
                            <img
                              src="http://openweathermap.org/img/wn/10d@2x.png"
                              alt="rainy"
                            />
                            <span className="day-temp">18°C</span>
                          </div>
                          <div className="col-sm">
                            <h4 className="day-of-week">Thurs</h4>
                            <img
                              src="http://openweathermap.org/img/wn/03d@2x.png"
                              alt="cloudy"
                            />
                            <span className="day-temp">18°C</span>
                          </div>
                          <div className="col-sm">
                            <h4 className="day-of-week">Fri</h4>
                            <img
                              src="http://openweathermap.org/img/wn/10d@2x.png"
                              alt="rainy"
                            />
                            <span className="day-temp">18°C</span>
                          </div>
                          {/* <h4>Tues</h4>
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" />
                        <h4>Wed</h4>
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" /> */}
                        </div>
                        <div className="clear"></div>
                      </div>
                    </div>
                    <br />
                    <p className="card-text">
                      <small className="text-muted" id="last-updated">
                        Last updated : 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clear"></div>
          <footer className="footer-credits">
            <a
              href="https://github.com/sonializzie/weather-react"
              target="blank"
              className="footer-link"
            >
              Open-source code on GitHub
            </a>
            <span> | Project Coded by Sonia Ndonga</span>
          </footer>
          <script
            type="text/javascript"
            src="src/app.js"
            charSet="utf-8"
          ></script>
        </body>
      </div>
    );
  } else {
    search();
    return <h1>Loading...</h1>;
  }
}
