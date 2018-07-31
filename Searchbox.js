import React from 'react';

const Searchbox = ({ searchfield, searchChange }) => {
	return(
		<div className='pa3'>
			<input className='pa3 ba b--green ' type='search' placeholder='Search your friends' onChange={searchChange} /> 
		</div>
	);
}

export default Searchbox;