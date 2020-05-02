import React from 'react';

function HourlyForecast(props) {
	const forecastTableContent = props.hourlyForecast.map((shortRecord) => {
		return (
			<tr
				key={shortRecord.key}
				className={
					shortRecord.feels_like >= 60 && shortRecord.weather[0].id >= 800
						? 'green'
						: ''
				}>
				<td>{shortRecord.dt}</td>
				<td>{shortRecord.feels_like}&deg;F</td>
				<td>{shortRecord.weather[0].description}</td>
			</tr>
		);
	});
	return (
		<section className=''>
			<table>
				<thead>
					<tr>
						<td>Hour</td>
						<td>Feels Like</td>
						<td>Description</td>
					</tr>
				</thead>
				<tbody>{forecastTableContent}</tbody>
			</table>
		</section>
	);
}

export default HourlyForecast;
