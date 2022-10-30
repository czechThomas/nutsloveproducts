import React from 'react';

const Searchbox = ({ searchChange }) => {
	return (
		<div className='pa5'>
			<h1>Nutslove ořechové krémy</h1>
			<input
			className='pa3 b--grey '
			type='search'
			placeholder='Najdi svůj oblíbený krém'
			onChange={searchChange}
			style={{width: '400px', textAlign: 'center'}}
			/>
		</div>
	);
}

export default Searchbox;