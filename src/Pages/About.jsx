import React from 'react';
import Footer from "../components/Footer"

import HomeImage from '../components/HomeImage';
import BackgroundAbout from '../assets/background-about.png';

import dropDownData from '../assets/about.json';
import DropDown from '../components/DropDown';

const maskGroup = {
	img: BackgroundAbout,
	title: '',
};

function About (props) {
	return (
		<div className='page'>
			<div className='about container'>
				<HomeImage {...maskGroup} />
				{dropDownData.map((object) => (
					<DropDown {...object} key={dropDownData.indexOf(object)} />
				))}
			</div>
			<Footer />
		</div>
	);
}

export default About;