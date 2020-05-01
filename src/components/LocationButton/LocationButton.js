import React from 'react';
import './LocationButton.css';

function LocationButton(props) {
	return (
		<button className='get-location-button' onClick={props.getLocation}>Get Your Current Location</button>
	)
}

export default LocationButton;
