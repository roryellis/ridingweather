import React from 'react';

function DailyForecast(props) {
	const forecastTableContent = props.dailyForecast.map((shortRecord) => {
		return (
			<tr key={shortRecord.key}>
				<td>{shortRecord.dt}</td>
				<td className={shortRecord.feels_like.morn >= 60 ? 'green' : ''}>
					{shortRecord.feels_like.morn}&deg;F
				</td>
				<td className={shortRecord.feels_like.day >= 60 ? 'green' : ''}>
					{shortRecord.feels_like.day}&deg;F
				</td>
				<td className={shortRecord.feels_like.night >= 60 ? 'green' : ''}>
					{shortRecord.feels_like.night}&deg;F
				</td>
				<td>{shortRecord.weather[0].description}</td>
			</tr>
		);
	});
	return (
		<section className=''>
			<table>
				<thead>
					<tr>
						<td></td>
						<td colSpan='3'>Feels Like</td>
						<td></td>
					</tr>
					<tr>
						<td>Day</td>
						<td>Morning</td>
						<td>Midday</td>
						<td>Night</td>
						<td>Description</td>
					</tr>
				</thead>
				<tbody>{forecastTableContent}</tbody>
			</table>
		</section>
	);
}

export default DailyForecast;
