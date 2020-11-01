import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);

    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      iconUrl: response.data.weather.icon,
      clouds: response.data.clouds.all,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <script
            src="https://kit.fontawesome.com/71fc1b7f26.js"
            crossorigin="anonymous"
          ></script>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
            crossorigin="anonymous"
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
          <div class="container">
            <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <div class="card-body">
                    <div class="today-weather-info">
                      <h2 class="date-dayname">Sunday</h2>
                      <span class="date-day">14:00</span>
                      <span class="date-day"> | 2nd August 2020</span>
                      <br />
                      <br />
                      <button class="current-location" id="location-btn">
                        {/* <i class="fas fa-map-marker-alt"></i> */}
                        <span class="material-icons">location_on</span>
                      </button>
                      <span class="location" id="city"></span>
                      <span class="country-location" id="country">
                        {weatherData.city} | {weatherData.country}
                      </span>
                      <br />
                      <br />
                      <br />
                      <br />

                      <img
                        src="{weatherData.iconUrl}"
                        alt="{weatherData.description}"
                        id="icon"
                      />
                      <br />
                      <br />
                      <span>
                        <h1 id="today-temp">
                          {Math.round(weatherData.temperature)}°C
                        </h1>
                      </span>
                      {/* <span>
                      <h3 class="temperature-units">
                        <a href="#" class="units active" id="celsius-link">
                          °C
                        </a>{" "}
                        |
                        <a href="#" class="units" id="fahrenheit-link">
                          °F
                        </a>
                      </h3>
                    </span> */}
                      <div class="clear"></div>
                      <h2 class="weather-type" id="description">
                        {weatherData.description}
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <form class="form-inline">
                      <div class="form-group mb-2">
                        <label for="staticLocationl2" class="sr-only">
                          Forecast
                        </label>
                        <input
                          type="text"
                          readonly
                          class="form-control-plaintext"
                          id="staticForecast2"
                          value=" ☂ Weather Forecast"
                        />
                      </div>
                    </form>
                    <form id="search-form">
                      <div class="row">
                        <div class="form-group mx-sm-3 mb-2 col-8">
                          <label for="inputCity2" class="sr-only">
                            City
                          </label>
                          <input
                            type="search"
                            class="form-control"
                            id="city-input"
                            autoFocus="on"
                            autoComplete="off"
                            placeholder="Type a city..."
                          />
                        </div>
                        <div class="clear"></div>
                        <button
                          type="submit"
                          value="Search"
                          class="btn btn-primary mx-sm-3 mb-2 col-2 search-btn"
                        >
                          Search
                        </button>
                      </div>
                    </form>
                    <div class="weather-status">
                      <ul class="weather-status-info">
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
                    <div class="week-container row" id="forecast">
                      <div class="week-list">
                        <div class="row">
                          <div class="col-sm">
                            <h4 class="day-of-week">Mon</h4>
                            <img
                              src="http://openweathermap.org/img/wn/02d@2x.png"
                              alt="cloud with sun"
                            />
                            <span class="day-temp">18°C</span>
                          </div>
                          <div class="col-sm">
                            <h4 class="day-of-week">Tues</h4>
                            <img
                              src="http://openweathermap.org/img/wn/04d@2x.png"
                              alt="cloudy"
                            />
                            <span class="day-temp">18°C</span>
                          </div>
                          <div class="col-sm">
                            <h4 class="day-of-week">Wed</h4>
                            <img
                              src="http://openweathermap.org/img/wn/10d@2x.png"
                              alt="rainy"
                            />
                            <span class="day-temp">18°C</span>
                          </div>
                          <div class="col-sm">
                            <h4 class="day-of-week">Thurs</h4>
                            <img
                              src="http://openweathermap.org/img/wn/03d@2x.png"
                              alt="cloudy"
                            />
                            <span class="day-temp">18°C</span>
                          </div>
                          <div class="col-sm">
                            <h4 class="day-of-week">Fri</h4>
                            <img
                              src="http://openweathermap.org/img/wn/10d@2x.png"
                              alt="rainy"
                            />
                            <span class="day-temp">18°C</span>
                          </div>
                          {/* <h4>Tues</h4>
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" />
                        <h4>Wed</h4>
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" /> */}
                        </div>
                        <div class="clear"></div>
                      </div>
                    </div>
                    <br />
                    <p class="card-text">
                      <small class="text-muted" id="last-updated">
                        Last updated : 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="clear"></div>
          <footer class="footer-credits">
            <a
              href="https://github.com/sonializzie/weather-react"
              target="blank"
              class="footer-link"
            >
              Open-source code on GitHub
            </a>
            <span> | Project Coded by Sonia Ndonga</span>
          </footer>
          <script
            type="text/javascript"
            src="src/app.js"
            charset="utf-8"
          ></script>
        </body>
      </div>
    );
  } else {
    let apiKey = "cf23fefe944409418faf6ab205d2379d";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
  ${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return <h1>Loading...</h1>;
  }
}
