import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
	return <section className='navigation'>
		<Link to='/location'>Location</Link>
		<Link to='/ridesoon'>Ride Soon</Link>
		<Link to='/ridelater'>Ride Later</Link>
		<Link to='/ridethisweek'>Ride This Week</Link>
	</section>;
}

export default Navigation;
