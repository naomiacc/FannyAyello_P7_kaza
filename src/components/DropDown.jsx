import React from 'react';
import { useState } from 'react';

import Arrow from '../assets/dropdown-arrow-desktop.png';
import '../styles/sass/composants/_dropDown.scss';


const DropDown = (props) => {
	function formatData(data) {
		if (typeof data === 'string') {
			return [data];
		} else {
			return data;
		}
	}

	const [display, setDisplay] = useState('none');
	const [isActive, setActive] = useState('false');

	function handleClick() {
		setActive(!isActive);

		if (display === 'none') {
			setDisplay('block');
		} else {
			setDisplay('none');
		}
	}

	return (
		<div className={'dropdown'}>
			<div className='dropdown__title' onClick={handleClick}>
				<div className={'dropdown__title__title'}>{props.title}</div>
				<div
					className={
						isActive ? 'dropdown__title__arrow ' : 'dropdown__title__arrow down'
					}>
					<img src={Arrow} alt='arrow' />
				</div>
			</div>
			<div className='dropdown__pannel' style={{ display: display }}>
				{formatData(props.content).map((line) => {
					return <p key={formatData(props.content).indexOf(line)}>{line}</p>;
				})}
			</div>
		</div>
	);
};

export default DropDown;