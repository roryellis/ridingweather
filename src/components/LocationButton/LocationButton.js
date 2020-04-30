import React from 'react';
import './LocationButton.css';

function LocationButton(props) {
	return (
		<button className='get-location-button' onClick={props.getLocation}>Get Location</button>
	)
}

export default LocationButton;
