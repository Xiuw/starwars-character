import React from 'react';

const SearchBox = ({handleSearch}) =>{
	return(
		<div className='pa2'>
			<input
			className='pa2 b--purple br3 bg-lightest-blue'
			type='search'
			placeholder='Ex. Boba Fett'
			onChange={handleSearch}
			/>
		</div>
	)
}

export default SearchBox;