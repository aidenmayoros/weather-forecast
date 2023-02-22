import ReactDOM from 'react-dom';
import './index.css';
import Header from './header';
import ForecastContainer from './forecastContainer';
import InputWithButtonOnRight from './inputRightButton';
import { useState, useEffect } from 'react';
import { handleLocationChange, geoCode } from './handleLocationChange';

function App() {
	const [city, setCity] = useState('Phoenix');
	const [weatherData, setWeatherData] = useState();

	useEffect(() => {
		handleLocationChange(city).then((data) => setWeatherData(data));
	}, []);

	const updateCityData = async (newcity) => {
		let newData = await handleLocationChange(newcity).then((data) => data);
		await geoCode(newcity).then((data) => setCity(data.formattedAddress));
		setWeatherData(newData);
	};

	return (
		<div id='ForecastContainer'>
			<Header location={city} />
			<InputWithButtonOnRight updateCityData={updateCityData} />
			<ForecastContainer weatherData={weatherData} />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
