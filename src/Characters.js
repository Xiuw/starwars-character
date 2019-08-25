import React from 'react';
import Profile from './Profile';

const Characters = ({people,show,loadMore})=>{

	return(
		<div className="flex flex-column">
			<div className="mw8 center">
			{
				people.slice(0,show).map( (person, i)=>{
					return(
						<Profile
							key={i}
							name ={people[i].name}
							gender={people[i].gender}
							height={people[i].height}
							hairColor={people[i].hair_color}
							skinColor ={people[i].skin_color}
							eyeColor ={people[i].eye_color}	
							birthYear={people[i].birth_year}
							speciesInfo={people[i].species}	
						/>

					)
				})
			}
			</div>
			<div className="ma4">
			{show < people.length ?
			<button onClick={loadMore} className=" b pa3 br2 w5 center mb6 bg-navy white">Load More</button>
			:
			<p>End of Page</p>
			}
			</div>
		</div>
	)
}

export default Characters;