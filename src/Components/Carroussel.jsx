import React from 'react';
import { useState } from 'react';
import nextIcon from '../Assets/carroussel-next.png';
import prevIcon from '../Assets/carroussel-prev.png';

import '../Styles/sass/composants/_carroussel.scss';

const Carroussel = (apartments) => {
	let max = apartments.pictures.length - 1;
	let [current, setCurrent] = useState(0);

	const next = () => {
		setCurrent(current === max ? 0 : current + 1);
	};
	const prev = () => {
		setCurrent(current < 1 ? max : current - 1);
	};
	return (
		<section className='carroussel'>
			<img
				src={prevIcon}
				alt='Carroussel__prev'
				role='button'
				onClick={prev}
				className='carroussel__button'
				id='prev'></img>

			<div className='carroussel__container'>
				{apartments.pictures.map((picture, index) => {
					return (
						<img
							className={
								index === current
									? 'carroussel__container__picture__active '
									: 'carroussel__container__picture'
							}
							src={picture}
							alt={apartments.title + apartments.pictures.indexOf(picture)}
							key={apartments.title + apartments.pictures.indexOf(picture)}
						/>
					);
				})}
			</div>

			<img
				src={nextIcon}
				alt='Carroussel__next'
				role='button'
				onClick={next}
				className='carroussel__button'
				id='next'></img>
		</section>
	);
};

export default Carroussel;