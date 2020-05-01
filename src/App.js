import React, { useState } from 'react';
import RideViews from './components/RideViews/RideViews';
import AppHeader from './components/AppHeader/AppHeader';
import LocationForm from './components/LocationForm/LocationForm';
import LocationButton from './components/LocationButton/LocationButton';
import ResetLocationButton from './components/ResetLocationButton/ResetLocationButton';
import './App.css';

function App() {
	const [address, setAddress] = useState('');
	const [userLat, setUserLat] = useState();
	const [userLon, setUserLon] = useState();

	const getLocation = (e) => {
		e.preventDefault();
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition((position) => {
				setUserLat(position.coords.latitude.toFixed(2));
				setUserLon(position.coords.longitude.toFixed(2));
			});
		} else {
			console.log('location unavailable');
		}
	};

	return (
		<div className='App'>
			<AppHeader />
			{!userLat && !userLon && (
				<div className='location-options'>
					<h1 className='need-location'>
						Riding Weather needs a location to get local weather
						data.
					</h1>
					<LocationButton
						getLocation={getLocation}
						userLat={userLat}
						userLon={userLon}
					/>
					<p>
						Or <br /> Search for an address below
					</p>
					<LocationForm
						address={address}
						setAddress={setAddress}
						setUserLat={setUserLat}
						setUserLon={setUserLon}
					/>
				</div>
			)}
			{userLat && userLon && <RideViews userLat={userLat} userLon={userLon} address={address} />}
			{userLat && userLon && <ResetLocationButton setAddress={setAddress} setUserLat={setUserLat} setUserLon={setUserLon} />}
		</div>
	);
}

export default App;
