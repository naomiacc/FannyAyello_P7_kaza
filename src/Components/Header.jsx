import React from 'react';
import { NavLink , Outlet } from 'react-router-dom';
import Logo from '../assets/logo-home.png';

function Header(props) {
	return (
		<>
		<header className='header'>
			<h1 className='header__logo'>
				<img src={Logo} alt='kaza header logo' className='prim-on-sec' />
			</h1>
			<nav className='header__nav'>
				<ul className='header__nav__ul'>
					<li className='header__nav__ul__li'>
						<NavLink to='/'>Accueil</NavLink>
					</li>
					<li className='header__nav__ul__li'>
						<NavLink to='/about'>A Propos</NavLink>
					</li>
				</ul>
			</nav>
		</header>
		<Outlet/>
		</>

	);
}

export default Header;