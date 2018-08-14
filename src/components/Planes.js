import React from 'react';

import apiKey from '../config.js';
import Container from './Container';

const Planes = () => {

	return (
		<div className="container">
			<Container api={ apiKey } query={ "planes" } />
		</div>
	);
}

export default Planes;