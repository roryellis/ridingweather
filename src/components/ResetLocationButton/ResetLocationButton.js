import React from 'react';
import './ResetLocationButton.css';

function ResetLocationButton(props) {
	const resetLocation = (e) => {
		e.preventDefault();
		props.setAddress('');
		props.setUserLat();
		props.setUserLon();
	};

	return (
		<button className='reset-location' onClick={resetLocation}>
			Reset Location
		</button>
	);
}

export default ResetLocationButton;
