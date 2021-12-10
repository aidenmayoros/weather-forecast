function Forecast({ day }) {
  const img = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;

  const daysDate = new Date(day.dt * 1000).toString().split(" ");

  return (
    <li key={day.dt} className="forecastDay">
      <h1>{daysDate[0]}</h1>
      <h2>{Math.round(day.temp.day)}°F</h2>
      <p>{day.weather[0].description}</p>
      <img src={img} alt="weather"></img>
    </li>
  );
}

export default Forecast;
