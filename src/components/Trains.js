import React from 'react';

import apiKey from '../config.js';
import Container from './Container';

const Trains = () => {

	return (
		<div className="container">
			<Container api={ apiKey } query={ "trains" } />
		</div>
	);
}
export default Trains;