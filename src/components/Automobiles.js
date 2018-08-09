import React from 'react';

import Search from './Search';
import apiKey from '../config.js';

const Automobiles = () => {

	return (
		<div className="container">
			<Search api={ apiKey } query={ "automobiles" } />
		</div>
	);
}
export default Automobiles;