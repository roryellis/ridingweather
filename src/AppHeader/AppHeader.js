import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function AppHeader() {
    return(
        <section className='app-header'>
            <Logo />
            <Navigation />
        </section>
    )
}

export default AppHeader;