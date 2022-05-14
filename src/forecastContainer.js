import { useState, useEffect } from "react";
import Forecast from "./forecast";
import dataLocations from "./weatherLocations";

function ForecastContainer({ location }) {
	const [weatherData, setWeatherData] = useState({});

	useEffect(() => {
		fetch(
			"https://api.openweathermap.org/data/2.5/onecall?" +
				dataLocations[location].quordinates +
				"&units=imperial&exclude=hourly,minutely,alerts&appid=88b895fa4815bc85c2b6ee08540fbf86"
		)
			.then((response) => response.json())
			.then((data) => setWeatherData(data));
	}, [location]);

	if (!weatherData.daily) {
		return <div>Loading Data</div>;
	}

	return (
		<ul className='weatherForecast'>
			{weatherData.daily
				.filter((_, i) => i < 7)
				.map((data) => {
					return <Forecast day={data} key={data.dt} />;
				})}
		</ul>
	);
}

export default ForecastContainer;
