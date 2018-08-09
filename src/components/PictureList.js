import React from 'react';
import Picture from './Picture'
import NoPictures from './NoPictures';

const PictureList = props => { 

	const results = props.photos;
  const query = props.query;
  
	let search;
  
  if (results.length > 0) {

    search = results.map(photo =>

    <Picture url={ `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg` } key={photo.id} alt={props.title} /> );

    } else {

    search = <NoPictures />
 
  }

	return (
		<div className="photo-container">

      <h2>{ query }</h2>

      <ul>{ search }</ul>

		</div>
  );
}

export default PictureList;