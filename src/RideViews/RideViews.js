import React, { useState, useEffect } from 'react';

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
        }, [])
    if (forecast.current === undefined) {
        return (
            <div className='ride-views-error'>Sorry, no weather information available</div>
        )
    } else {
        return(
            <div className='ride-views'>Ride Views: timezone {forecast.current.temp}</div>
        )
    }

}

export default RideViews;