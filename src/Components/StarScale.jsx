import React from 'react';
import startFull from '../Assets/star-red.png';
import starEmpty from '../Assets/star-white.png';

import '../Styles/sass/composants/_description.scss';

const range = [1, 2, 3, 4, 5];

const StarScale = (props) => {
	let rating = props.rating;

	return (
		<div className='description__summary__right__rating'>
			{range.map((rangeElement) =>
				rating >= rangeElement ? (
					<img
						key={'star-Full' + rangeElement.toString()}
						src={startFull}
						alt='Star--full'
						className='description__summary__right__rating__star'
					/>
				) : (
					<img
						key={'star-Empty' + rangeElement.toString()}
						src={starEmpty}
						alt='Star--full'
						className='description__summary__right__rating__star'
					/>
				)
			)}
		</div>
	);
};

export default StarScale;