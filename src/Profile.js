import React from 'react';

const Profile =({name,height,gender,id}) => {
	return(
		<div className=' ma3 dib br3 grow bg-light-blue white'>
			<h4 className='class="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3'>{name}</h4>
			<p>Gender: {gender}</p>
			<p>Height: {height}</p>
			<img alt='starwar' height='150' width='200' src={`https://robohash.org/${name}?set=set2`}/>
		</div>
	)


}

export default Profile;