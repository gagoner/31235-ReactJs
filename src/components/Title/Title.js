import React from "react";

const Title = ({ greeting }) => {
	return  <h1 className='text-center pt-2'>
				<p>{greeting}</p>
			</h1>
};

export default Title;