import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import RideSoon from '../RideSoon/RideSoon';
import RideLater from '../RideLater/RideLater';
import RideThisWeek from '../RideThisWeek/RideThisWeek';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import './RideViews.css';

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
        return (
					<div className='ride-views'>
						<p>{props.address}</p>
						<Route
							path='/' exact
							render={() => {
								return <CurrentWeather current={forecast.current} />;
							}}
						/>
						<Route
							path='/ridesoon'
							render={() => {
								return <RideSoon hourlyForecast={forecast.hourly} />;
							}}
						/>
						<Route
							path='/ridelater'
							render={() => {
								return <RideLater hourlyForecast={forecast.hourly} />;
							}}
						/>
						<Route
							path='/ridethisweek'
							render={() => {
								return <RideThisWeek dailyForecast={forecast.daily} />;
							}}
						/>
					</div>
				);
    }

}

export default RideViews;