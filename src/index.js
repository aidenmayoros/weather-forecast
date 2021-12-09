import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Header() {
  return (
    <div id="ForecastContainer">
      <h1 id="forecast-header">5-Day Forecast for Phoenix Arizona</h1>
    </div>
  );
}

function ForecastContainer() {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-112.07&units=imperial&exclude=hourly,minutely,alerts&appid=88b895fa4815bc85c2b6ee08540fbf86"
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  }, []);

  if (!weatherData.daily) {
    return <div>Loading Data</div>;
  }

  return (
    <ul>
      {weatherData.daily
        .filter((_, i) => i < 5)
        .map((data) => {
          return <Forecast day={data} />;
        })}
    </ul>
  );
}

function Forecast({ day }) {
  const img = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;

  const daysDate = new Date(day.dt * 1000).toString().split(" ");

  return (
    <li key={day.dt} className="forecastDay">
      <h1>{daysDate[0]}</h1>
      <h2>{Math.round(day.temp.day)}&deg;</h2>
      <p>{day.weather[0].description}</p>
      <img src={img} alt="weather"></img>
    </li>
  );
}

function App() {
  return (
    <div id="ForecastContainer">
      <Header />
      <ForecastContainer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
