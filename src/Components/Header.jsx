import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/logo-home.png';

function Header() {
	return (
		<header className='header'>
			<h1 className='header__logo'>
				<img src={logo} alt='kaza header logo' className='prim-on-sec' />
			</h1>
			<nav className='header__nav'>
				<ul className='header__nav__ul'>
					<li className='header__nav__ul__li'>
						<NavLink to='/'>Accueil</NavLink>
					</li>
					<li className='header__nav__ul__li'>
						<NavLink to='/about'>A propos</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;