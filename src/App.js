import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [location, setLocation] = useState({lat: '32.77', long: '-96.79'});
	const [forecast, setForecast] = useState({});
	const weatherApiOptions = {
		appId: process.env.REACT_APP_OPEN_WEATHER_APP_ID,
		endpoint: 'https://api.openweathermap.org/data/2.5/onecall',
		lat: location.lat,
		long: location.long,
	};

	const getLocation = () => {
		if ('geolocation' in navigator) {
			console.log('geolocation available')
			navigator.geolocation.getCurrentPosition((position) => {
				setLocation({lat: position.coords.latitude, 
					lon: position.coords.longitude})
			})
		} else {
			console.log('geolocation not available')
		}
	}
//getLocation();

	const getWeather = () => {
		const url = `${weatherApiOptions.endpoint}?lat=${weatherApiOptions.lat}&lon=${weatherApiOptions.long}&appid=${weatherApiOptions.appId}&units=imperial`;
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setForecast(response)
			})
			.catch(console.error)
	};

	// Convert timestamp solution found here: https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
	const convertTimestamp = () => {
		let unix_timestamp = 1588014065;
		// Create a new JavaScript Date object based on the timestamp
		// multiplied by 1000 so that the argument is in milliseconds, not seconds.
		var date = new Date(unix_timestamp * 1000);
		// Hours part from the timestamp
		var hours = date.getHours();
		// Minutes part from the timestamp
		var minutes = '0' + date.getMinutes();
		// Seconds part from the timestamp
		var seconds = '0' + date.getSeconds();

		// Will display time in 10:30:23 format
		var formattedTime =
			hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

		return formattedTime;
	};

	useEffect(() => {
		getWeather();
		//eslint-disable-next-line
	},[]);


return <div className='App'>
	{forecast.timezone}
	</div>;
}

export default App;
