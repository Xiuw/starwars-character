import React from 'react';


const Profile =({name,height,gender,hairColor,eyeColor,skinColor,birthYear}) => {
	return(
		<div className=' ma3 dib br3 bg-light-blue white w5 fade-in'>
			<h4 className='class="f2 bg-near-white br3 br--top black-60 mv0 pv3'>{name}</h4>
			<p>Gender:{gender}</p>
			<p>Height: {height}</p>
			<p>Hair color: {hairColor}</p>
			<p>Eye color: {eyeColor}</p>
			<p>Skin color: {skinColor}</p>
			<p>Birth year: {birthYear}</p>
			<div className='f5 br3 br--bottom mb3 '>
			<a target="_blank" rel="noopener noreferrer"  href={`http://www.google.com/search?q=${name}`} className=" w-100 dim link no-underline black-60">More Info</a>
	
			</div>
			{/*<img alt='starwar' height='150' width='200' src={`https://robohash.org/${name}?set=set5`}/>*/}
		</div>
	)


}

export default Profile;