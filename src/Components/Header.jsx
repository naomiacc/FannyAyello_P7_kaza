import React from 'react';
import { NavLink , Outlet } from 'react-router-dom';
import Logo from '../Assets/logo-home.png';

function Header(props) {
	return (
		<>
		<header className='header'>
			<a className='header__logo' href='/'>
				<img src={Logo} alt='kaza header logo' className='header__logo__picture prim-on-sec' />
			</a>
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