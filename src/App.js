import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import RideViews from './RideViews/RideViews';
import AppHeader from './AppHeader/AppHeader';
import Location from './Location/Location';
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

	return <div className='App'>
		<AppHeader />
		<Location getLocation={getLocation} userLat={userLat} userLon={userLon}/>
		{userLat && userLon && <RideViews userLat={userLat} userLon={userLon} />}
	</div>
}

export default App;
