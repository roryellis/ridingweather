import React from 'react';
import moment from 'moment';

function CurrentWeather(props) {

	return (
		<section className='current-weather'>
			<h2>Current Conditions</h2>
			<ul>
				<li>As of: {moment(props.current.dt).calendar()}</li>
				<li>Feels Like: {props.current.feels_like}&deg;F</li>
				<li>With {props.current.weather.description}</li>
			</ul>
		</section>
	);
}

export default CurrentWeather;
