import React from 'react';


const ScrollBox = (props) => {
	return(
		<div style={box}>
			{props.children}
		</div>

	)
}

const box = {
	overflowY:'scroll',
	
	height:'800px'
}

export default ScrollBox;