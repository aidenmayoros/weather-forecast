import Forecast from './forecast';

function ForecastContainer({ weatherData }) {
	return weatherData ? (
		<ul className='weatherForecast'>
			{weatherData.daily
				.filter((_, i) => i < 7)
				.map((data) => {
					return <Forecast day={data} key={data.dt} />;
				})}
		</ul>
	) : (
		<div>Loading Data</div>
	);
}

export default ForecastContainer;
