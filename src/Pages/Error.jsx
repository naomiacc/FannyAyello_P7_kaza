import React from 'react';
import Footer from "../components/Footer"

import { Link } from 'react-router-dom';
import '../styles/sass/pages/_error.scss';


function Error (props) {
	return (
		<div className='page'>
			<div className='error container'>
				<h1 className='error__h1'>404</h1>
				<p className='error__p'>
					Oups! La page que vous demandez n'éxiste pas
				</p>
				<Link to='/' className='error__link'>
					Retourner sur la page d'accueil
				</Link>
			</div>
			<Footer />
		</div>
	)
}

export default Error;