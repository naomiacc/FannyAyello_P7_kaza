import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

import HomeImage from '../Components/HomeImage';
import backgroundHome from '../Assets/background-home.png';

const maskGroup = {
	img: backgroundHome,
	title: 'Chez vous, partout et ailleurs',
};

const Home = () => {
	return (
		<div className='page'>
			<Header />
			<div className='home container'>
				<HomeImage {...maskGroup} />
			</div>
			<Footer />
		</div>
	);
};

export default Home;