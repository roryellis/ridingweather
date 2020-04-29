import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
	return (
		<section className='navigation'>
			<Link to='/ridesoon' className='nav-link'>
				Ride Soon
			</Link>
			<Link to='/ridelater' className='nav-link'>
				Ride Later
			</Link>
			<Link to='/ridethisweek' className='nav-link'>
				Ride This Week
			</Link>
		</section>
	);
}

export default Navigation;
