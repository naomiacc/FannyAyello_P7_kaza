import React from 'react';

import HomeImage from '../components/HomeImage';
import backgroundHome from '../assets/background-home.png';

const maskGroup = {
	img: backgroundHome,
	title: 'Chez vous, partout et ailleurs',
};

const Home = (props) => {
	return (
		<div className='page'>
			<div className='home container'>
				<HomeImage {...maskGroup} />
			</div>
		</div>
	);
};

export default Home;