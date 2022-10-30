import React from 'react';
import './Gallery.css';

const Gallery = (props) => {
	return (
		<div className='tc bg-white dib br3 pa3 ma2 grow ba bw1 b--black-05 shadow-5'>
			<img alt ='butter' src={`images/${props.location}`} />
			<div className='OneButter'>
				<h2>{props.name}</h2>
				<p className='description'>{props.description}</p>
				<p className='price'>{props.price} Kč</p>
			</div>
		</div>
	);
}

export default Gallery;
