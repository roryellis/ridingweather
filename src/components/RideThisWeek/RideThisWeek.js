import React from 'react';
import moment from 'moment';
import DailyForecast from '../DailyForecast/DailyForecast';

function RideThisWeek(props) {
	const oneWeekDailyForecast = [];
	
	const shortForecast = props.dailyForecast.map((fullRecord) => {
		const shortRecord = {
			key: fullRecord.dt,
			dt: moment.unix(fullRecord.dt).format('dddd'),
			feels_like: fullRecord.feels_like,
			temp: fullRecord.temp,
			weather: fullRecord.weather,
		};
		return shortRecord;
	});

	shortForecast.forEach((record) => oneWeekDailyForecast.push(record));

	return (
		<section className='ride-this-week'>
			<h2>Ride This Week</h2>
			<DailyForecast dailyForecast={oneWeekDailyForecast} />
		</section>
	);
}

export default RideThisWeek;
