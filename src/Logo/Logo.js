import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
	return (
		<div className='app-logo'>
			<Link to='/'>
				<img src='/logo-full.png' alt='Riding Weather Logo' />
			</Link>
		</div>
	);
}

export default Logo;
