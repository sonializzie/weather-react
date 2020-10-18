import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}˚C`
    );
  }
  let apiKey = "cf23fefe944409418faf6ab205d2379d";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
  ${props.city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div>
      <h1>Hello from Weather</h1>
      <h3>Hello</h3>

      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
}
