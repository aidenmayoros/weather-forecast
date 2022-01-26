function Forecast({ day }) {
	const img = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;

	const daysDate = new Date(day.dt * 1000).toString().split(" ");
	const dateList = [daysDate[0], daysDate[1], daysDate[2]];
	const date = dateList.join(" ");

	let weatherDescription = day.weather[0].description
		.split(" ")
		.map((word) => {
			return word[0].toUpperCase() + word.substring(1);
		})
		.join(" ");

	return (
		<li className='forecastDay'>
			<h1 className='date'>{date}</h1>
			<h2> {Math.round(day.temp.day)}°F</h2>
			<p className='weatherDescription'>{weatherDescription}</p>
			<img className='weatherImage' src={img} alt='weather'></img>
		</li>
	);
}

export default Forecast;
