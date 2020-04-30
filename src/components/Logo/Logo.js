import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

function Logo() {
	return (
		<div className='app-logo-container'>
			<Link to='/'>
				<img
					src='/logo-full.png'
					alt='Riding Weather Logo'
					className='app-logo'
				/>
			</Link>
		</div>
	);
}

export default Logo;
