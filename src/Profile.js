import React from 'react';

const Profile =({name,height,gender,id}) => {
	return(
		<div className='pa4 ma2 dib br3 grow bg-light-blue white'>
			<img alt='starwar' height='150' width='200' src={`https://robohash.org/${id}`}/>
			<div>
				<h4 className='black'>{name}</h4>
				<p>Gender: {gender}</p>
				<p>Height: {height}</p>
			</div>

		</div>
	)


}

export default Profile;