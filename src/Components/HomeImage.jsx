import React from 'react';

export default function HomeImage(props) {
	return (
		<section
			className='homeImage__container'>
			{/* // style={{ backgroundImage: `url(${props.img})` }}> */}
			<div className='homeImage__container__background'></div>
			<h2 className='homeImage__container__title'>{props.title}</h2>
		</section>
	);
}