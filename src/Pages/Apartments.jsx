import React from 'react';
import Footer from "../Components/Footer"

import data from '../Assets/logements.json';

import Error from '../Pages/Error';

const Apartments = (props) => {
	let pageId = new URLSearchParams(window.location.search).get('id');
	const found = data.find((element) => element.id === pageId);

	return (
		<div className='page'>
			{found ? (
				<div className='lodging container prim-on-sec'>
					{/* {found.pictures ? <Carroussel {...found} /> : <h2>pas de photos</h2>}
					<Description {...found} /> */}
				</div>
			) : (
				<Error />
			)}

			<Footer />
		</div>
	);
};

export default Apartments;