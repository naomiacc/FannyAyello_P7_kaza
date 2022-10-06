import React from 'react';
import Footer from "../Components/Footer"

import HomeImage from '../Components/HomeImage';
import BackgroundAbout from '../Assets/background-about.png';

import DropDownData from '../Assets/about.json';
import DropDown from '../Components/DropDown';

const maskGroup = {
	img: BackgroundAbout,
	title: '',
};

function About (props) {
	return (
		<div className='page'>
			<div className='about container'>
				<HomeImage {...maskGroup} />
				{DropDownData.map((object) => (
					<DropDown {...object} key={DropDownData.indexOf(object)} />
				))}
			</div>
			<Footer />
		</div>
	);
}

export default About;