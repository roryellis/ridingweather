import React from 'react';
import './LocationButton.css';

function LocationButton(props) {
	return (
		<button className='get-location-button' onClick={props.getLocation}>{props.userLat && props.userLon ? 'Refresh Location' : 'Get Location'}</button>
	)
}

export default LocationButton;
