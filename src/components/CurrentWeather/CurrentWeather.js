import React from 'react';
import moment from 'moment';
import './CurrentWeather.css';

function CurrentWeather(props) {
    console.log(props.current.dt)

	return (
		<section className='current-weather'>
			<h2>Current Conditions</h2>
			<ul>
				<li>As of: {moment.unix(props.current.dt).format('LT')}</li>
				<li>Feels Like: {props.current.feels_like}&deg;F</li>
				<li>
					{props.current.weather[0].description.charAt(0).toUpperCase() +
						props.current.weather[0].description.slice(1)}
				</li>
			</ul>
            {props.current.feels_like >= 60 && <h1 className='ride-message'>Go Ride!</h1>}
		</section>
	);
}

export default CurrentWeather;
