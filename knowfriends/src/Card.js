import React from 'react';

const Card = ({name, email,image,id}) => {
	return(
		<div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadows-5'>
		
		
		<div>
		<img src={`image ${id} height="200" width="200"`} alt = 'friends' />
			<h2>{name}</h2>
			<p>{email}</p>
		</div>

		</div>


		);
}

export default Card;