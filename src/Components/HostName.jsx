import React from 'react';

const HostName = (props) => {
	const HostName = props.host.name;
	const HostNameArray = HostName.split(' ');
	const firstName = HostNameArray[0];
	const familyName = HostNameArray.pop(firstName);

	return (
		<div className='description__summary__right__host__name'>
			<div className='description__summary__right__host__name__first'>
				{firstName}
			</div>
			<div className='description__summary__right__host__name__family'>
				{familyName}
			</div>
		</div>
	);
};

export default HostName;