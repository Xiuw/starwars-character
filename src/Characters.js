import React from 'react';
import Profile from './Profile';

const Characters = ({people})=>{
	return(
		<div>
			{
				people.map( (person, i)=>{
					return(
						<Profile
							key={i}
							id={[i]}
							name ={people[i].name}
							gender={people[i].gender}
							height={people[i].height}
							hairColor={people[i].hair_color}	
						/>	
					)
				})
			}
		</div>
	)
}

export default Characters;