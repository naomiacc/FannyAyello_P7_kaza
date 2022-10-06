import React from 'react';
import Footer from "../Components/Footer"

import HomeImage from '../Components/HomeImage';
import BackgroundHome from '../Assets/background-home.png';

import data from '../Assets/logements.json';
import LodgingCard from '../Components/LodgingCard';


const maskGroup = {
	img: BackgroundHome,
	title: 'Chez vous, partout et ailleurs',
};

const Home = (props) => {
	return (
		<div className='page'>
			<div className='home container'>
				<HomeImage {...maskGroup} />
				<section className='lodgingCards'>
					{data &&
						data.map((elt) => {
							return <LodgingCard {...elt} key={elt.id}/>
						})}
				</section>
			</div>
			<Footer />
		</div>
	);
};

export default Home;