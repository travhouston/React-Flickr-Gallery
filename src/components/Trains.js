import React from 'react';

import Search from './Search';
import apiKey from '../config.js';

const Trains = () => {

	return (
		<div className="container">
			<Search api={ apiKey } query={ "trains" } />
		</div>
	);
}
export default Trains;