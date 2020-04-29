import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import LocationButton from '../LocationButton/LocationButton';
import './AppHeader.css';

function AppHeader(props) {
    return (
			<section className='app-header'>
				<Logo />
				<LocationButton
					getLocation={props.getLocation}
					userLat={props.userLat}
					userLon={props.userLon}
				/>
				<Navigation />
			</section>
		);
}

export default AppHeader;