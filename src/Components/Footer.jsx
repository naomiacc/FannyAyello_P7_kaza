import React from 'react';

import Logo from '../assets/logo-footer.png';
import '../styles/sass/layout/_footer.scss';


function Footer (props) {
	return (
		<footer className='footer white-on-black'>
			<img src={Logo} alt='kaza footer__logo' className='footer__logo' />			
			<p className='footer__text'>&copy; 2020 Kaza. All rights reserved</p>
		</footer>
	)
}

export default Footer;


