import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

	// // Convert timestamp solution found here: https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
	// const convertTimestamp = () => {
	// 	let unix_timestamp = 1588014065;
	// 	// Create a new JavaScript Date object based on the timestamp
	// 	// multiplied by 1000 so that the argument is in milliseconds, not seconds.
	// 	var date = new Date(unix_timestamp * 1000);
	// 	// Hours part from the timestamp
	// 	var hours = date.getHours();
	// 	// Minutes part from the timestamp
	// 	var minutes = '0' + date.getMinutes();
	// 	// Seconds part from the timestamp
	// 	var seconds = '0' + date.getSeconds();

	// 	// Will display time in 10:30:23 format
	// 	var formattedTime =
	// 		hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

	// 	return formattedTime;
	// };

function RideViews(props) {
    const [forecast, setForecast] = useState({});
    const weatherApiOptions = {
			appId: process.env.REACT_APP_OPEN_WEATHER_APP_ID,
			endpoint: 'https://api.openweathermap.org/data/2.5/onecall',
			lat: props.userLat,
			lon: props.userLon,
		};
    const getWeather = () => {
			const url = `${weatherApiOptions.endpoint}?lat=${weatherApiOptions.lat}&lon=${weatherApiOptions.lon}&appid=${weatherApiOptions.appId}&units=imperial`;
			fetch(url)
				.then((response) => response.json())
				.then((response) => {
					setForecast(response);
					// console.log(forecast)
				})
				.catch(console.error);
        };

        useEffect(() => {
			getWeather();
			//eslint-disable-next-line
        }, [])
    if (forecast.current === undefined) {
        return (
            <div className='ride-views-error'>Sorry, no weather information available</div>
        )
    } else {
        return(
            <div className='ride-views'>Ride Views: current temp {forecast.current.temp}</div>
        )
    }

}

export default RideViews;