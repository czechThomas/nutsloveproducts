import React from 'react';
import './Searchbox.css';

const Searchbox = ({ searchChange }) => {
	return (
		<div className='pa5'>
			<h1>Nutslove ořechové krémy</h1>
			<input
			className='pa3 b--grey ownStyle'
			type='search'
			placeholder='Najdi svůj oblíbený krém'
			onChange={searchChange}
			/>
		</div>
	);
}

export default Searchbox;