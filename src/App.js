import React, { useState, useEffect } from 'react';
import RideViews from './RideViews/RideViews';
import AppHeader from './AppHeader/AppHeader';
import './App.css';

function App() {
	const [userLat, setUserLat] = useState();
	const [userLon, setUserLon] = useState();

	const getLocation = () => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition((position) => {
					setUserLat(position.coords.latitude.toFixed(2));
					setUserLon(position.coords.longitude.toFixed(2));
				})
			} else {
			console.log('location unavailable')
		}
	}

	useEffect(() => {
		getLocation()
		//eslint-disable-next-line
	},[]);

	return <div className='App'>
		<AppHeader />
		{userLat && userLon && <RideViews userLat={userLat} userLon={userLon} />}
	</div>
}

export default App;
