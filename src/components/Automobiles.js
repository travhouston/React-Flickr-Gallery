import React from 'react';

import apiKey from '../config.js';
import Container from './Container';

const Automobiles = () => {

	return (
		<div className="container">
			<Container api={ apiKey } query={ "automobiles" } />
		</div>
	);
}
export default Automobiles;