import React from 'react';

function Location(props) {
	return <section className='location'>
		<button className='get-location-button' onClick={props.getLocation}>{props.userLat && props.userLon ? 'Refresh Location' : 'Get Location'}</button>
	</section>;
}

export default Location;
