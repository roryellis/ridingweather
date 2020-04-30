import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './AppHeader.css';

function AppHeader(props) {
    return (
			<section className='app-header'>
				<Logo />
				<Navigation />
			</section>
		);
}

export default AppHeader;