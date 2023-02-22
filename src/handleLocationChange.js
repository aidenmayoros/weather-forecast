async function geoCode(address) {
	const url =
		'https://api.myptv.com/geocoding/v1/locations/by-text?searchText=' +
		address +
		'&apiKey=N2JiNzA0OWM4MzZiNGVmODgzNWI3ZGEzNGQ5Njk4ZDI6YmFlMTkyODYtOTYwMS00MGNjLWFhODEtNTkzNzVmZGU4MGZl';

	return await fetch(url)
		.then((response) => response.json())
		.then((data) => data.locations[0]);
}

async function getForecast(lat, long) {
	const url =
		'https://api.openweathermap.org/data/2.5/onecall?lat=' +
		lat +
		'&lon=' +
		long +
		'&units=imperial&exclude=hourly,minutely,alerts&appid=88b895fa4815bc85c2b6ee08540fbf86';

	let forecastData = await fetch(url)
		.then((response) => response.json())
		.then((data) => data);
	return forecastData;
}

async function handleLocationChange(inputValue) {
	try {
		let geoData = await geoCode(inputValue);
		let lat = geoData.referencePosition.latitude;
		let long = geoData.referencePosition.longitude;
		const response = await getForecast(lat, long);
		console.log(response);
		return response;
	} catch (error) {
		return console.log(error);
	}
}

export { handleLocationChange, geoCode };
