import React from 'react';
import moment from 'moment';
import HourlyForecast from '../HourlyForecast/HourlyForecast';

function RideLater(props) {
	const fortyEightHourForecast = [];
	for(let i = 0; i <= 47; i++) {
		const shortForecast = props.hourlyForecast.map((fullRecord) => {
			const shortRecord = {
				key: fullRecord.dt,
				dt: moment.unix(fullRecord.dt).calendar(),
				feels_like: fullRecord.feels_like,
				temp: fullRecord.temp,
				weather: fullRecord.weather,
			};
			return shortRecord;
		});

		fortyEightHourForecast.push(shortForecast[i]);
} 

	return (
		<section className='ride-later'>
			<h2>Ride Later</h2>
			<HourlyForecast hourlyForecast={fortyEightHourForecast} />
		</section>
	);
}

export default RideLater;
