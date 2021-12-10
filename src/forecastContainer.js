import { useState, useEffect } from "react";
import Forecast from "./forecast";

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

export default ForecastContainer;
