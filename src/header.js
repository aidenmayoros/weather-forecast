function Header({ location }) {
	return (
		<div className='mainHeader'>
			<h1 id='forecast-header'>7-Day Forecast for {location}</h1>
		</div>
	);
}

export default Header;
