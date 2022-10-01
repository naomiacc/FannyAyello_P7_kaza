import React from 'react';
import Logo from './header-logo';
import Nav from './header-nav';

function Header() {
	return (
		// Header
		<header className='header'>
			<Logo />
			<Nav />
		</header>
	);
}

export default Header;