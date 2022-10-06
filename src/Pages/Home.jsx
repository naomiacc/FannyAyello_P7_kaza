import React from 'react';
import Footer from "../components/Footer"

import HomeImage from '../components/HomeImage';
import BackgroundHome from '../assets/background-home.png';

// import data from '../assets/logements.json';
// import LodgingCard from '../components/LodgingCard';


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
					{/* {data &&
						data.map((elt) => {
							return <LodgingCard {...elt} key={elt.id}/>
						})} */}
				</section>
			</div>
			<Footer />
		</div>
	);
};

export default Home;