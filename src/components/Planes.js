import React from 'react';

import Search from './Search';
import apiKey from '../config.js';

const Planes = () => {

	return (
		<div className="container">
			<Search api={ apiKey } query={ "planes" } />
		</div>
	);
}

export default Planes;