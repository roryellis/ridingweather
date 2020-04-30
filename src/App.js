import React, { useState } from 'react';
import RideViews from './RideViews/RideViews';
import AppHeader from './AppHeader/AppHeader';
import LocationButton from './LocationButton/LocationButton';
import './App.css';

function App() {
	const [userLat, setUserLat] = useState();
	const [userLon, setUserLon] = useState();

	const getLocation = (e) => {
		e.preventDefault();
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition((position) => {
					setUserLat(position.coords.latitude.toFixed(2));
					setUserLon(position.coords.longitude.toFixed(2));
				})
			} else {
			console.log('location unavailable')
		}
	}

	return (
		<div className='App'>
			<AppHeader />
			{!userLat && !userLon && (
				<h1 className='need-location'>
					Riding Weather needs access to your location to get local weather data.
				</h1>
			)}
			{!userLat && !userLon && (
				<LocationButton
					getLocation={getLocation}
					userLat={userLat}
					userLon={userLon}
				/>
			)}
			{userLat && userLon && <RideViews userLat={userLat} userLon={userLon} />}
		</div>
	);
}

export default App;
